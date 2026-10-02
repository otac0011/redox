/* Redox Compass: static single-page app. Data comes from assets/data.json (built by tools/build.py). */
(() => {
  "use strict";

  // Basic obscurity only: the data files are public in the repo. Change with tools/set_passphrase.py.
  const PASS_HASH = "62484e22a6a5ade1ba25cb1b7c55c4b8861de24caddab73c9409742734008b26";
  const PASS_KEY = "redox.pass";

  const SCOPES = [
    { id: "general", label: "Overall oxidative stress", short: "Overall" },
    { id: "sperm", label: "Sperm & DNA fragmentation", short: "Sperm" },
    { id: "egg", label: "Egg (oocyte) quality", short: "Egg" },
  ];
  const KINDS = ["food", "exercise", "lifestyle", "supplement", "environment", "medical"];
  const KIND_LABEL = { food: "Food & drink", exercise: "Exercise", lifestyle: "Lifestyle", supplement: "Supplement", environment: "Environment", medical: "Medical" };
  const EVIDENCE = ["strong", "moderate", "limited", "mechanistic"];
  const EV_LABEL = { strong: "Strong evidence", moderate: "Moderate evidence", limited: "Limited evidence", mechanistic: "Mechanistic only" };
  const EV_WEIGHT = { strong: 1, moderate: 0.8, limited: 0.55, mechanistic: 0.3 };
  const DIR_LABEL = { beneficial: "Helps", harmful: "Harms", mixed: "Mixed", neutral: "No clear effect" };

  let D = null;            // merged data
  let byId = new Map();    // factor id -> factor
  let mechById = new Map();

  const $ = (sel, el = document) => el.querySelector(sel);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* storage blocked */ } },
  };

  // ---------- gate ----------
  async function sha256(text) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
    return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  async function gate() {
    if (store.get(PASS_KEY) === PASS_HASH) return true;
    const g = $("#gate");
    g.hidden = false;
    $("#gate-input").focus();
    return new Promise((resolve) => {
      $("#gate-form").addEventListener("submit", async (e) => {
        e.preventDefault();
        const h = await sha256($("#gate-input").value.trim().toLowerCase());
        if (h === PASS_HASH) {
          store.set(PASS_KEY, h);
          g.hidden = true;
          resolve(true);
        } else {
          $("#gate-error").hidden = false;
          const card = $(".gate-card");
          card.classList.remove("shake"); void card.offsetWidth; card.classList.add("shake");
        }
      });
    });
  }

  // ---------- helpers ----------
  const impactOf = (f, scope) => (f.impact && f.impact[scope]) || 0;
  const bestEntry = (f, scope) => {
    const order = { general: ["foundations", "diet", "lifestyle"], sperm: ["sperm"], egg: ["egg"] }[scope] || [];
    return f.entries.find((e) => order.includes(e.area)) || f.entries[0];
  };
  const dirFor = (f, scope) => (scope && f.direction_by_scope && f.direction_by_scope[scope]) || f.direction;
  const evFor = (f, scope) => (scope && f.evidence_by_scope && f.evidence_by_scope[scope]) || f.evidence || "limited";
  const score = (f, scope) => impactOf(f, scope) * (EV_WEIGHT[evFor(f, scope)] || 0.5);
  function dots(n, dir) {
    let s = `<span class="dots ${esc(dir)}" title="Impact ${n}/5">`;
    for (let i = 1; i <= 5; i++) s += `<i class="${i <= n ? "on" : ""}"></i>`;
    return s + "</span>";
  }
  const dirChip = (d) => `<span class="chip dir-${esc(d)}">${esc(DIR_LABEL[d] || d)}</span>`;
  const evChip = (e) => `<span class="chip ev ev-${esc(e)}" title="${esc(EV_LABEL[e] || e)}">${esc(EV_LABEL[e] || e)}</span>`;
  const kindChip = (k) => `<span class="chip">${esc(KIND_LABEL[k] || k)}</span>`;
  const fLink = (id, label) => {
    const f = byId.get(id);
    return f ? `<a href="#/factor/${encodeURIComponent(id)}">${esc(label || f.name)}</a>` : esc(label || id);
  };
  // turn [factor-id] mentions into links
  const linkify = (text) => esc(text).replace(/\[([a-z0-9-]+)\]/g, (m, id) => (byId.has(id) ? fLink(id) : m));
  function refHTML(key) {
    const r = D.references[key];
    if (!r) return "";
    const url = r.pmid ? `https://pubmed.ncbi.nlm.nih.gov/${r.pmid}/` : r.doi ? `https://doi.org/${r.doi}` : r.url;
    const title = url ? `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(r.title)}</a>` : esc(r.title);
    return `<li><span class="ref-type">${esc(r.type || "")}</span>${esc(r.authors)} (${esc(r.year)}). ${title}. <i>${esc(r.journal || "")}</i>${r.n ? ` · n = ${esc(r.n)}` : ""}${r.finding ? `<span class="finding">${esc(r.finding)}</span>` : ""}</li>`;
  }
  // [refid] / [refid1, refid2] -> author-year links, using the doc's local reference ids
  function citeLinks(html, doc) {
    const idx = (D.ref_index || {})[doc] || {};
    return html.replace(/\[([a-z0-9][\w-]*(?:\s*[,;]\s*[a-z0-9][\w-]*)*)\]/gi, (m, inner) => {
      const ids = inner.split(/\s*[,;]\s*/);
      if (!ids.every((i) => idx[i] && D.references[idx[i]])) return m;
      return "[" + ids.map((i) => {
        const r = D.references[idx[i]];
        const url = r.pmid ? `https://pubmed.ncbi.nlm.nih.gov/${r.pmid}/` : r.doi ? `https://doi.org/${r.doi}` : r.url || "";
        const who = `${String(r.authors || "").split(/[ ,]/)[0]} ${r.year || ""}`.trim();
        return url ? `<a href="${esc(url)}" target="_blank" rel="noopener" title="${esc(r.title)}">${esc(who)}</a>` : esc(who);
      }).join(", ") + "]";
    });
  }
  function setActiveNav(route) {
    document.querySelectorAll("nav a").forEach((a) => a.classList.toggle("active", a.dataset.route === route));
    $("#nav").classList.remove("open");
  }
  function parseHash() {
    const h = location.hash.replace(/^#\/?/, "");
    const [path, query] = h.split("?");
    const parts = path.split("/").filter(Boolean).map(decodeURIComponent);
    return { parts, params: new URLSearchParams(query || "") };
  }

  // ---------- views ----------
  function viewOverview(params) {
    const scope = params.get("scope") || store.get("redox.scope", "general");
    const kind = params.get("kind") || "";
    store.set("redox.scope", scope);
    const pool = D.factors.filter((f) => impactOf(f, scope) > 0 && (!kind || f.kind === kind));
    const helps = pool.filter((f) => dirFor(f, scope) === "beneficial").sort((a, b) => score(b, scope) - score(a, scope)).slice(0, 15);
    const harms = pool.filter((f) => dirFor(f, scope) === "harmful").sort((a, b) => score(b, scope) - score(a, scope)).slice(0, 15);
    const mixed = pool.filter((f) => dirFor(f, scope) === "mixed").sort((a, b) => score(b, scope) - score(a, scope)).slice(0, 8);
    const lever = (f) => {
      const d = dirFor(f, scope), ev = evFor(f, scope);
      return `<a class="lever" href="#/factor/${encodeURIComponent(f.id)}">
        <span class="name" title="${esc(f.name)}">${esc(f.name)}</span>
        <span class="bar ${d}"><span style="width:${(score(f, scope) / 5) * 100}%"></span></span>
        <span class="meta"><span class="chip">${esc(KIND_LABEL[f.kind] || f.kind)}</span><span class="ev-dot ${ev === "strong" || ev === "moderate" ? "filled" : ""}" style="color:var(--ev-${ev})" title="${esc(EV_LABEL[ev])}"></span></span>
      </a>`;
    };
    const tabs = SCOPES.map((s) => `<button class="${s.id === scope ? "active" : ""}" data-scope="${s.id}">${esc(s.label)}</button>`).join("");
    const kinds = [`<button class="chip ${!kind ? "on" : ""}" data-kind="">All kinds</button>`]
      .concat(KINDS.map((k) => `<button class="chip ${kind === k ? "on" : ""}" data-kind="${k}">${esc(KIND_LABEL[k])}</button>`)).join("");
    const nRefs = Object.keys(D.references).length;
    return `
      <section class="hero">
        <h1>What actually moves oxidative stress?</h1>
        <p class="lede">Diet, exercise, and lifestyle levers ranked by the size of their effect in human studies, weighted by how good that evidence is. There's a separate view for sperm DNA fragmentation and egg quality. Click any factor to see how much you need, how it works, and the papers behind it.</p>
        <div class="kpi-row">
          <div class="kpi"><b>${D.factors.length}</b><span>factors graded</span></div>
          <div class="kpi"><b>${nRefs}</b><span>verified papers</span></div>
          <div class="kpi"><b>${D.mechanisms.length}</b><span>mechanisms explained</span></div>
        </div>
        <p><a class="btn" href="#/plan">Build my plan →</a> <a class="btn secondary" href="#/compare">Compare foods</a></p>
      </section>
      <div class="tabs" id="scope-tabs">${tabs}</div>
      <div class="chips" id="kind-chips" style="margin-top:12px">${kinds}</div>
      <div class="legend">
        <span>Bar length = impact (0–5) × evidence weight</span>
        <span><span class="ev-dot filled" style="color:var(--ev-strong);display:inline-block;width:10px;height:10px;border-radius:50%;border:2px solid currentColor;background:currentColor"></span>strong / moderate evidence</span>
        <span><span style="color:var(--ev-limited);display:inline-block;width:10px;height:10px;border-radius:50%;border:2px solid currentColor"></span>limited / mechanistic</span>
      </div>
      <div class="two-col levers">
        <div class="card"><h3><span class="chip dir-beneficial">Do more</span> Biggest helpful levers</h3>${helps.map(lever).join("") || '<p class="muted">Nothing in this filter.</p>'}</div>
        <div class="card"><h3><span class="chip dir-harmful">Reduce</span> Biggest harmful exposures</h3>${harms.map(lever).join("") || '<p class="muted">Nothing in this filter.</p>'}</div>
      </div>
      ${mixed.length ? `<div class="card levers" style="margin-top:20px"><h3><span class="chip dir-mixed">It depends</span> Dose- or context-dependent</h3>${mixed.map(lever).join("")}</div>` : ""}
    `;
  }
  function bindOverview() {
    $("#scope-tabs").addEventListener("click", (e) => {
      const b = e.target.closest("button[data-scope]");
      if (b) { const p = parseHash().params; p.set("scope", b.dataset.scope); location.hash = "#/?" + p; }
    });
    $("#kind-chips").addEventListener("click", (e) => {
      const b = e.target.closest("button[data-kind]");
      if (!b) return;
      const p = parseHash().params;
      p.set("scope", p.get("scope") || store.get("redox.scope", "general"));
      b.dataset.kind ? p.set("kind", b.dataset.kind) : p.delete("kind");
      location.hash = "#/?" + p;
    });
  }

  function viewExplore(params) {
    return `
      <h1>Explore all factors</h1>
      <div class="toolbar">
        <input class="search" id="q" type="search" placeholder="Search foods, habits, supplements, mechanisms…" value="${esc(params.get("q") || "")}">
        <select id="f-scope"><option value="">Any scope</option>${SCOPES.map((s) => `<option value="${s.id}">${esc(s.short)}</option>`).join("")}</select>
        <select id="f-kind"><option value="">Any kind</option>${KINDS.map((k) => `<option value="${k}">${esc(KIND_LABEL[k])}</option>`).join("")}</select>
        <select id="f-dir"><option value="">Any direction</option>${Object.keys(DIR_LABEL).map((d) => `<option value="${d}">${esc(DIR_LABEL[d])}</option>`).join("")}</select>
        <select id="f-ev"><option value="">Any evidence</option>${EVIDENCE.map((e) => `<option value="${e}">${esc(EV_LABEL[e])}</option>`).join("")}</select>
        <select id="f-sort"><option value="impact">Sort: impact</option><option value="name">Sort: A–Z</option><option value="evidence">Sort: evidence</option></select>
      </div>
      <p class="count" id="count"></p>
      <div class="grid" id="results"></div>`;
  }
  function bindExplore(params) {
    const st = store.get("redox.explore", {});
    for (const k of ["scope", "kind", "dir", "ev", "sort"]) {
      const v = params.get(k) ?? st[k];
      if (v) $("#f-" + k).value = v;
    }
    const render = () => {
      const q = $("#q").value.trim().toLowerCase();
      const s = { scope: $("#f-scope").value, kind: $("#f-kind").value, dir: $("#f-dir").value, ev: $("#f-ev").value, sort: $("#f-sort").value };
      store.set("redox.explore", s);
      let list = D.factors.filter((f) =>
        (!s.scope || impactOf(f, s.scope) > 0) && (!s.kind || f.kind === s.kind) &&
        (!s.dir || dirFor(f, s.scope) === s.dir) && (!s.ev || f.evidence === s.ev) &&
        (!q || f.search.includes(q)));
      const maxScore = (f) => s.scope ? score(f, s.scope) : Math.max(...SCOPES.map((x) => score(f, x.id)));
      if (s.sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
      else if (s.sort === "evidence") list.sort((a, b) => EVIDENCE.indexOf(a.evidence) - EVIDENCE.indexOf(b.evidence) || maxScore(b) - maxScore(a));
      else list.sort((a, b) => maxScore(b) - maxScore(a));
      $("#count").textContent = `${list.length} of ${D.factors.length} factors`;
      $("#results").innerHTML = list.map(cardHTML).join("");
    };
    ["#q", "#f-scope", "#f-kind", "#f-dir", "#f-ev", "#f-sort"].forEach((sel) => $(sel).addEventListener("input", render));
    render();
  }
  function cardHTML(f) {
    const e = f.entries[0];
    return `<a class="card fcard" href="#/factor/${encodeURIComponent(f.id)}">
      <div class="row"><h3>${esc(f.name)}</h3>${dirChip(f.direction)}</div>
      <p>${esc(e.headline || "")}</p>
      <div class="row"><div class="chips">${kindChip(f.kind)}${evChip(f.evidence)}</div></div>
      <div class="scope-row">${SCOPES.filter((s) => impactOf(f, s.id) > 0).map((s) => `<span>${esc(s.short)} ${dots(impactOf(f, s.id), dirFor(f, s.id))}</span>`).join("")}</div>
    </a>`;
  }

  // ---------- timing ----------
  const SHAPE_LABEL = { acute: "Fast on, fast off", build: "Builds over weeks", "slow-build": "Keeps growing for months to years", lasting: "Outlasts the exposure", window: "Depends on when", none: "No time pattern" };
  const FREQ_LABEL = { daily: "Daily", "most-days": "Most days", "few-per-week": "A few times a week", weekly: "Weekly", occasional: "Now and then", "one-off": "Once", avoid: "Avoid", "n/a": "Not applicable" };
  const BASIS_LABEL = { measured: "Measured in people", extrapolated: "Extrapolated from biology", unknown: "Not measured" };
  // one unit for both ends of a range, picked by the upper end
  function durRange(days) {
    if (!Array.isArray(days)) return "";
    const [lo, hi] = days;
    const units = [[1, 24, "hour"], [14, 1, "day"], [90, 1 / 7, "week"], [730, 1 / 30.4, "month"], [Infinity, 1 / 365, "year"]];
    const [, k, name] = units.find(([lim]) => hi < lim);
    const r = (x) => { const v = x * k; return v < 0.75 && v > 0 ? "<1" : String(v >= 10 ? Math.round(v) : Math.round(v * 2) / 2); };
    const a = r(lo), b = r(hi);
    if (a === "<1" && lo > 0 && b !== "<1") return `${durRange([lo, lo])} to ${b} ${name}${b === "1" ? "" : "s"}`;
    return a === b ? `${b} ${name}${b === "1" || b === "<1" ? "" : "s"}` : `${a}–${b} ${name}s`;
  }
  const durOne = (d) => durRange([d, d]);
  // log time axis from 1 hour to 10 years, as % across a track
  const T_MIN = 1 / 24, T_MAX = 3650;
  const tx = (d) => Math.max(0, Math.min(100, (Math.log10(Math.max(d, T_MIN)) - Math.log10(T_MIN)) / (Math.log10(T_MAX) - Math.log10(T_MIN)) * 100));
  const T_TICKS = [[1 / 24, "1 h"], [1, "1 d"], [7, "1 wk"], [30.4, "1 mo"], [91, "3 mo"], [365, "1 yr"], [1825, "5 yr"]];
  function tbar(days, cls, title, fade) {
    if (!Array.isArray(days)) return "";
    const a = tx(days[0]), b = tx(days[1]);
    const w = Math.max(b - a, 1.6);
    return `<i class="tbar ${cls}${fade ? " fade" : ""}" style="left:${Math.min(a, 100 - w).toFixed(1)}%;width:${w.toFixed(1)}%" title="${esc(title)}"></i>`;
  }
  function timeStrip(t, harm) {
    const on = (t.onset || {}).days, full = (t.full || {}).days, off = (t.after_stopping || {}).days;
    if (!on && !full && !off) return "";
    const tone = harm ? "harm" : "help";
    return `<div class="tstrip ${tone}">
      <div class="trow"><span class="tlabel">${harm ? "While exposed" : "From starting"}</span><div class="ttrack">${tbar(on, "onset", "First effect: " + durRange(on))}${tbar(full, "full", "Full effect: " + durRange(full), t.shape === "slow-build")}${!on && !full ? '<span class="tnone">not measured</span>' : ""}</div></div>
      <div class="trow"><span class="tlabel">After stopping</span><div class="ttrack">${off ? tbar(off, "after", "Lasts after stopping: " + durRange(off)) : '<span class="tnone">not measured</span>'}</div></div>
      <div class="trow axis"><span class="tlabel"></span><div class="ttrack">${T_TICKS.map(([d, l]) => `<span style="left:${tx(d).toFixed(1)}%">${l}</span>`).join("")}</div></div>
    </div>
    <p class="muted small tlegend"><i class="key onset"></i>first effect <i class="key full"></i>full effect <i class="key after"></i>${harm ? "recovery" : "lasts"} after stopping · time on a log scale</p>`;
  }
  function timingCard(f) {
    const t = f.timing;
    if (!t) return "";
    const harm = f.direction === "harmful";
    const cite = (s) => citeLinks(linkify(s || ""), t.doc);
    const row = (k, part) => part && (part.text || part.days) ? `<dt>${k}</dt><dd>${part.days ? `<b>${durRange(part.days)}.</b> ` : ""}${cite(part.text)}</dd>` : "";
    const fr = t.frequency || {};
    const conc = Object.entries(t.conception || {}).filter(([s]) => s === "sperm" || s === "egg").map(([s, c]) =>
      `<dt>${s === "sperm" ? "For sperm" : "For eggs"}</dt><dd>${c.start_by_days ? `<b>${harm ? "Avoid it for at least" : "Start at least"} ${durOne(c.start_by_days)} before.</b> ` : ""}${cite(c.text)}${c.late_start ? `<br><span class="muted">Starting later: ${cite(c.late_start)}</span>` : ""}</dd>`).join("");
    return `<section class="card entry timing">
      <div class="entry-title"><h2>Timing</h2><span class="chip shape-${esc(t.shape)}">${esc(SHAPE_LABEL[t.shape] || t.shape)}</span>${fr.advice && fr.advice !== "n/a" ? `<span class="chip">${esc(FREQ_LABEL[fr.advice] || fr.advice)}</span>` : ""}<span class="chip basis-${esc(t.basis)}">${esc(BASIS_LABEL[t.basis] || t.basis)}</span></div>
      ${t.summary ? `<p class="headline">${cite(t.summary)}</p>` : ""}
      ${timeStrip(t, harm)}
      <dl class="dose">${row(harm ? "Harm appears" : "First effect", t.onset)}${row(harm ? "Full harm" : "Full effect", t.full)}${row(harm ? "Recovery after stopping" : "After stopping", t.after_stopping)}${fr.text ? `<dt>How often</dt><dd>${cite(fr.text)}</dd>` : ""}${conc}</dl>
      ${t.debate ? `<div class="section-label">Where the timing evidence is contested</div><p class="debate">${cite(t.debate)}</p>` : ""}
      <p class="small"><a href="#/read/${esc(t.doc)}">Timing deep dive →</a> · <a href="#/timeline">Conception timeline →</a></p>
      ${(t.refs || []).length ? `<details><summary class="section-label" style="cursor:pointer">Timing references (${t.refs.length})</summary><ul class="refs">${t.refs.map(refHTML).join("")}</ul></details>` : ""}
    </section>`;
  }

  // The conception countdown: development windows and what is still in time.
  function viewTimeline(params) {
    const scope = params.get("scope") === "egg" ? "egg" : params.get("scope") === "sperm" ? "sperm" : store.get("redox.tscope", "sperm");
    const days = Math.max(0, Math.min(365, parseInt(params.get("days") ?? store.get("redox.tdays", 90), 10) || 0));
    return `<h1>Timeline</h1>
      <p class="lede">What to start when, how fast things work, how long they last, and how often they're needed. Set how far away conception (or egg retrieval) is to see which stage of development the sperm or egg is in now, and which changes can still reach it.</p>
      <div class="card tl-controls">
        <div class="tabs" role="group" aria-label="Sperm or egg">${["sperm", "egg"].map((s) => `<button class="${s === scope ? "active" : ""}" data-tscope="${s}">${s === "sperm" ? "Sperm" : "Egg"}</button>`).join("")}</div>
        <label class="tl-days"><span>Days until ${scope === "egg" ? "ovulation or egg retrieval" : "conception or sample"}</span>
          <input type="range" id="tl-days" min="0" max="365" step="1" value="${days}" aria-label="Days until conception">
          <output id="tl-out"></output></label>
      </div>
      <div id="tl-body"></div>
      <h2>What the timing research found</h2>
      <div class="tl-lessons">
        <div class="card"><h3>A month out beats two weeks</h3><p>Sperm take about 64 days (42–76) to form, then sit in storage. A fever or heat 2–5 weeks before shows up as DNA damage; in the last 1–2 weeks only storage-stage levers remain (short abstinence, removing heat, quitting smoking). An egg's follicle grows for about 85 days; follicular fluid tracks the current cycle, but the egg itself is shaped over ~3 months. <a href="#/read/deep-timing-sperm">Sperm</a> · <a href="#/read/deep-timing-egg">Egg</a></p></div>
        <div class="card"><h3>Pulses fade in days</h3><p>Sulforaphane is gone from blood in hours, but the enzymes it switches on keep working for about 1–3 days and are back to baseline after ~5 days off. Daily doses stack, with no tolerance over 12 weeks: most days is the evidence-based rhythm. Cocoa, berries and nitrate-rich greens act for hours, so they need to be regular. <a href="#/read/deep-timing-food">Foods &amp; Nrf2</a></p></div>
        <div class="card"><h3>Stores tolerate gaps</h3><p>Omega-3 builds in red cells over ~4–6 months, so 1–4 fish meals a week work like daily doses. Vitamin D has a ~2-week half-life; daily, weekly and monthly doses give the same blood level, though big yearly boluses look worse. Folate in red cells takes ~8 months to plateau and needs daily intake. <a href="#/read/deep-timing-nutrients">Nutrients</a></p></div>
        <div class="card"><h3>Fitness builds slowly, fades faster</h3><p>One session improves insulin sensitivity for ~48 h; VO2max rises over 3–12+ weeks; recent gains are lost after ~4 weeks off. Two sessions a week at the same intensity hold it. Fitness held for years tracks 30–44% lower mortality. Sleep and light effects appear and reverse within days. <a href="#/read/deep-timing-body">Exercise, fasting &amp; sleep</a></p></div>
        <div class="card"><h3>Some things last for years</h3><p>BPA clears in hours, PFAS take 3–5 years to halve, cadmium and bone lead decades. Habits can outlast themselves too: daily sunscreen kept skin cancer lower for years after the trial, and blood-sugar control kept paying off 10–24 years later. <a href="#/read/deep-timing-legacy">What lasts</a></p></div>
      </div>
      <div id="tl-rhythm"></div>`;
  }
  function timelineBody(scope, days) {
    const ws = (D.windows || []).filter((w) => w.scope === scope).sort((a, b) => b.start_days - a.start_days);
    const lo = Math.min(0, ...ws.map((w) => w.end_days)), hi = Math.max(days, ...ws.filter((w) => w.start_days <= 400).map((w) => w.start_days), 30);
    const x = (d) => ((hi - Math.max(lo, Math.min(hi, d))) / (hi - lo) * 100).toFixed(1);
    const cur = ws.filter((w) => w.start_days >= days && w.end_days <= days);
    // a window spanning conception that contains another window is an umbrella (the periconception period)
    const umbrella = (w, list) => w.start_days > 0 && w.end_days < 0 && list.some((o) => o !== w && o.start_days <= w.start_days && o.end_days >= w.end_days);
    const now = cur.filter((w) => !umbrella(w, cur));
    const ahead = ws.filter((w) => w.start_days < days && !umbrella(w, ws));
    const cite = (s, w) => citeLinks(linkify(s || ""), w.doc);
    const gantt = ws.length ? `<div class="gantt">
        ${ws.map((w) => {
          const state = w.end_days > days ? "past" : w.start_days < days ? "ahead" : "now";
          const clipped = w.start_days > hi;
          return `<details class="grow ${state}"><summary><span class="gname">${esc(w.name)}</span><span class="gtrack"><i style="left:${x(Math.min(w.start_days, hi))}%;width:${(x(w.end_days) - x(Math.min(w.start_days, hi))).toFixed(1)}%" class="${clipped ? "clipped" : ""}"></i><b class="gmark" style="left:${x(days)}%"></b></span></summary>
            <div class="gdetail"><p class="small muted">${w.start_days > 0 ? durOne(w.start_days) : "after"} → ${w.end_days > 0 ? durOne(w.end_days) + " before" : w.end_days < 0 ? durOne(-w.end_days) + " after" : "the day"}</p><p>${cite(w.what, w)}</p>${w.sensitive_to ? `<p><b>Sensitive to:</b> ${cite(w.sensitive_to, w)}</p>` : ""}${(w.refs || []).length ? `<details><summary class="section-label" style="cursor:pointer">References (${w.refs.length})</summary><ul class="refs">${w.refs.map(refHTML).join("")}</ul></details>` : ""}</div></details>`;
        }).join("")}
        <div class="gaxis"><span class="gname"></span><span class="gtrack"><b class="gmark now" style="left:${x(days)}%"><em>now</em></b>${[hi, Math.round(hi * 2 / 3), Math.round(hi / 3), 0].map((d) => `<span style="left:${x(d)}%">${d ? durOne(d) : scope === "egg" ? "ovulation" : "conception"}</span>`).join("")}${lo < 0 ? `<span style="left:${x(lo)}%">+${durOne(-lo)}</span>` : ""}</span></div>
      </div>
      <p class="tl-now">${now.length ? `Right now, the ${scope === "egg" ? "egg that would be released" : "sperm that would be used"} ${days ? `in ${durOne(days)}` : "today"} ${now.length > 1 ? "is in these stages" : "is in this stage"}: <b>${now.map((w) => esc(w.name)).join("</b>, <b>")}</b>. ${ahead.length ? `Still ahead: ${ahead.map((w) => esc(w.name)).join(", ")}. ` : ""}${scope === "egg" ? "Stages already completed can't be changed for this egg; eggs for later cycles are at earlier stages now." : "Stages already completed can't be changed for this batch of sperm; later batches start fresh."}` : `This is before the stages shown here begin.`}</p>` : `<p class="muted">Development windows will appear once the timing research is merged.</p>`;

    const fs = D.factors.filter((f) => f.timing && f.timing.conception && f.timing.conception[scope]);
    const rank = (a, b) => score(b, scope) - score(a, scope) || a.name.localeCompare(b.name);
    const item = (f) => {
      const c = f.timing.conception[scope], harm = dirFor(f, scope) === "harmful";
      const late = c.start_by_days && days < c.start_by_days;
      return `<li class="tl-item ${harm ? "harm" : "help"}"><div class="tl-head">${dots(impactOf(f, scope), dirFor(f, scope))} ${fLink(f.id)}
        ${c.start_by_days ? `<span class="chip ${late ? "late" : "intime"}">${harm ? "avoid" : "start"} ≥ ${durOne(c.start_by_days)} before</span>` : ""}</div>
        ${late && c.late_start ? `<p class="small">${harm ? "Stopping now" : "Starting now"}: ${citeLinks(linkify(c.late_start), f.timing.doc)}</p>` : `<p class="small muted">${citeLinks(linkify(c.text || f.timing.summary || ""), f.timing.doc)}</p>`}</li>`;
    };
    const graded = fs.filter((f) => impactOf(f, scope) > 0);
    const group = (title, list, note) => list.length ? `<h3>${title} <span class="muted small">(${list.length})</span></h3>${note ? `<p class="muted small">${note}</p>` : ""}<ul class="tl-list">${list.sort(rank).map(item).join("")}</ul>` : "";
    const lead = (f) => f.timing.conception[scope].start_by_days;
    const inTime = graded.filter((f) => lead(f) && days >= lead(f));
    const lateList = graded.filter((f) => lead(f) && days < lead(f));
    const noLead = graded.filter((f) => !lead(f));
    return `${gantt}
      <section class="card entry"><h2>${days ? `With ${durOne(days)} to go` : "On the day"}</h2>
        <p class="muted small">Factors with ${scope === "egg" ? "an egg" : "a sperm"} effect, ranked by impact × evidence. The lead time is how long before conception the research says to start a helpful change, or stop a harmful one, to get its full effect.</p>
        ${group("Still in time for the full effect", inTime)}
        ${group("Too late for the full effect", lateList, "What starting (or stopping) now still achieves.")}
        ${group("No lead time", noLead, "Acts on the day or the cycle itself, or no lead time has been shown to help.")}
        ${!fs.length ? `<p class="muted">No timing records yet.</p>` : ""}
      </section>`;
  }
  function timelineRhythm() {
    const fs = D.factors.filter((f) => f.timing);
    if (!fs.length) return "";
    const best = (f) => Math.max(...SCOPES.map((s) => score(f, s.id)));
    const order = ["daily", "most-days", "few-per-week", "weekly", "occasional", "one-off", "avoid"];
    const by = (pred) => fs.filter(pred).sort((a, b) => best(b) - best(a));
    const chips = (list) => `<div class="related">${list.map((f) => `<a class="chip dir-${dirFor(f)}" href="#/factor/${encodeURIComponent(f.id)}" title="${esc(f.timing.summary || "")}">${esc(f.name)}</a>`).join("")}</div>`;
    const freq = order.map((k) => [k, by((f) => (f.timing.frequency || {}).advice === k)]).filter(([, l]) => l.length);
    const shapes = ["acute", "build", "slow-build", "lasting"].map((k) => [k, by((f) => f.timing.shape === k)]).filter(([, l]) => l.length);
    return `<section class="card entry"><h2>How often?</h2><p class="muted small">What the evidence says about schedule. Effects that fade within a day or two need to be regular; effects built on body stores or tissue turnover tolerate gaps.</p>
        ${freq.map(([k, l]) => `<div class="section-label">${esc(FREQ_LABEL[k])} <span class="muted">(${l.length})</span></div>${chips(l)}`).join("")}</section>
      <section class="card entry"><h2>How fast, and how long?</h2>
        ${shapes.map(([k, l]) => `<div class="section-label">${esc(SHAPE_LABEL[k])} <span class="muted">(${l.length})</span></div>${chips(l)}`).join("")}</section>`;
  }
  function bindTimeline(params) {
    let scope = params.get("scope") === "egg" ? "egg" : params.get("scope") === "sperm" ? "sperm" : store.get("redox.tscope", "sperm");
    const slider = $("#tl-days");
    const draw = () => {
      const days = parseInt(slider.value, 10);
      $("#tl-out").textContent = days === 0 ? "today" : `${days} days · ${durOne(days)}`;
      $("#tl-body").innerHTML = timelineBody(scope, days);
      store.set("redox.tdays", days);
      store.set("redox.tscope", scope);
      history.replaceState(null, "", `#/timeline?scope=${scope}&days=${days}`);
    };
    slider.addEventListener("input", draw);
    document.querySelectorAll("[data-tscope]").forEach((b) => b.addEventListener("click", () => {
      scope = b.dataset.tscope;
      document.querySelectorAll("[data-tscope]").forEach((x) => x.classList.toggle("active", x === b));
      $(".tl-days span").textContent = `Days until ${scope === "egg" ? "ovulation or egg retrieval" : "conception or sample"}`;
      draw();
    }));
    $("#tl-rhythm").innerHTML = timelineRhythm();
    draw();
  }

  const AREA_LABEL = () => Object.fromEntries(D.areas.map((a) => [a.id, a.title]));
  function viewFactor(id) {
    const f = byId.get(id);
    if (!f) return `<h1>Not found</h1><p>No factor called “${esc(id)}”. <a href="#/explore">Browse all factors</a>.</p>`;
    const areaLabel = AREA_LABEL();
    const cmp = store.get("redox.compare", []);
    const inCmp = cmp.includes(f.id);
    const impacts = SCOPES.map((s) => `<span class="muted">${esc(s.short)}</span><span>${impactOf(f, s.id) ? dots(impactOf(f, s.id), dirFor(f, s.id)) + " " + esc(DIR_LABEL[dirFor(f, s.id)] || "") : '<span class="muted">not graded</span>'}</span>`).join("");
    const entries = f.entries.map((e) => {
      const d = e.dose || {};
      const doseRows = [["Effective amount", d.effective], ["Studied range", d.studied_range], ["Too much", d.too_much], ["Time to effect", d.timeframe], ["Notes", d.notes]]
        .filter(([, v]) => v).map(([k, v]) => `<dt>${k}</dt><dd>${linkify(v)}</dd>`).join("");
      const kn = (e.key_numbers || []).length ? `<div class="section-label">Key numbers</div><table class="kn-table">${e.key_numbers.map((k) => `<tr><td>${esc(k.label)}</td><td><b>${esc(k.value)}</b> ${esc(k.unit || "")}</td></tr>`).join("")}</table>` : "";
      const paths = (e.pathways || []).map((p) => mechById.has(p) ? `<a class="chip" href="#/mechanism/${encodeURIComponent(p)}">${esc(mechById.get(p).name)}</a>` : `<span class="chip">${esc(p)}</span>`).join("");
      return `<section class="entry card">
        <div class="entry-title"><h2>${esc(areaLabel[e.area] || e.area)}</h2>${dirChip(e.direction || f.direction)}${evChip(e.evidence || f.evidence)}</div>
        ${e.title && e.title !== f.name ? `<p class="muted small" style="margin-top:-6px">${esc(e.title)}</p>` : ""}
        <p class="headline">${linkify(e.headline || "")}</p>
        ${doseRows ? `<dl class="dose"><div class="title">How much?</div>${doseRows}</dl>` : ""}
        ${e.mechanism ? `<div class="section-label">Mechanism</div><p>${linkify(e.mechanism)}</p>` : ""}
        ${paths ? `<div class="chips">${paths}</div>` : ""}
        ${e.interactions ? `<div class="section-label">Interactions, redundancy &amp; synergy</div><p>${linkify(e.interactions)}</p>` : ""}
        ${e.caveats ? `<div class="section-label">Caveats</div><p class="caveat">${linkify(e.caveats)}</p>` : ""}
        ${e.debate ? `<div class="section-label">Where the evidence is contested</div><p class="debate">${citeLinks(linkify(e.debate), e.area)}</p>` : ""}
        ${kn}
        ${(e.refs || []).length ? `<details><summary class="section-label" style="cursor:pointer">References (${e.refs.length})</summary><ul class="refs">${e.refs.map(refHTML).join("")}</ul></details>` : ""}
      </section>`;
    }).join("");
    // factors sharing pathways (the redundancy question)
    const myPaths = new Set(f.pathways);
    const related = D.factors.filter((g) => g.id !== f.id && g.pathways.some((p) => myPaths.has(p)))
      .sort((a, b) => b.pathways.filter((p) => myPaths.has(p)).length - a.pathways.filter((p) => myPaths.has(p)).length || Math.max(...SCOPES.map((s) => score(b, s.id))) - Math.max(...SCOPES.map((s) => score(a, s.id))))
      .slice(0, 14);
    return `
      <div class="crumbs"><a href="#/explore">Explore</a> / ${esc(KIND_LABEL[f.kind] || f.kind)}</div>
      <div class="factor-head">
        <div>
          <h1>${esc(f.name)}</h1>
          <div class="chips">${kindChip(f.kind)}${dirChip(f.direction)}${evChip(f.evidence)}</div>
        </div>
        <div class="card" style="padding:12px 16px"><div class="impact-table">${impacts}</div>
          <p style="margin:10px 0 0"><button class="btn small ${inCmp ? "secondary" : ""}" id="cmp-btn">${inCmp ? "✓ In compare" : "+ Add to compare"}</button></p></div>
      </div>
      ${timingCard(f)}
      ${entries}
      ${related.length ? `<section class="card entry"><h2>Works through the same pathways</h2><p class="muted small">If you already cover a pathway well, more inputs to the same pathway may add less. See the mechanism pages for what's known about saturation.</p><div class="related">${related.map((g) => `<a class="chip dir-${dirFor(g)}" href="#/factor/${encodeURIComponent(g.id)}">${esc(g.name)}</a>`).join("")}</div></section>` : ""}
    `;
  }
  function bindFactor(id) {
    const b = $("#cmp-btn");
    if (!b) return;
    b.addEventListener("click", () => {
      let cmp = store.get("redox.compare", []);
      cmp = cmp.includes(id) ? cmp.filter((x) => x !== id) : [...cmp, id].slice(-6);
      store.set("redox.compare", cmp);
      const on = cmp.includes(id);
      b.textContent = on ? "✓ In compare" : "+ Add to compare";
      b.classList.toggle("secondary", on);
    });
  }

  // ---------- compare ----------
  function viewCompare(params) {
    let ids = params.get("ids") ? params.get("ids").split(",") : store.get("redox.compare", []);
    ids = ids.filter((i) => byId.has(i));
    if (!ids.length) ids = (D.compare_defaults || []).filter((i) => byId.has(i));
    store.set("redox.compare", ids);
    const fs = ids.map((i) => byId.get(i));
    const presets = (D.compare_presets || []).map((p, i) => `<button class="chip" data-preset="${i}">${esc(p.label)}</button>`).join("");
    let table = "";
    if (fs.length) {
      const row = (label, fn) => `<tr><th>${label}</th>${fs.map((f) => `<td>${fn(f)}</td>`).join("")}</tr>`;
      const e0 = (f) => bestEntry(f, "general");
      const kns = (f) => f.entries.flatMap((e) => e.key_numbers || []);
      const gk = (k) => k.group || k.label;
      // shared metrics (present for 2+ selected factors) get their own row; the rest go in "Other numbers"
      const counts = {};
      fs.forEach((f) => new Set(kns(f).map(gk)).forEach((g) => { counts[g] = (counts[g] || 0) + 1; }));
      const knLabels = Object.keys(counts).filter((g) => counts[g] >= 2);
      const knRow = (f, l) => { const k = kns(f).find((x) => gk(x) === l); return k ? `<b>${esc(k.value)}</b> ${esc(k.unit || "")}${k.group && k.label !== k.group ? `<div class="muted small">${esc(k.label)}</div>` : ""}` : '<span class="muted">—</span>'; };
      const otherKn = (f) => kns(f).filter((k) => !knLabels.includes(gk(k))).map((k) => `<div class="small">${esc(k.label)}: <b>${esc(k.value)}</b> ${esc(k.unit || "")}</div>`).join("") || '<span class="muted">—</span>';
      table = `<div class="cmp-wrap"><table class="cmp">
        <thead><tr><th></th>${fs.map((f) => `<th><a href="#/factor/${encodeURIComponent(f.id)}">${esc(f.name)}</a><button class="x" data-rm="${esc(f.id)}" aria-label="Remove">×</button></th>`).join("")}</tr></thead>
        <tbody>
          ${row("Verdict", (f) => `<div class="chips">${dirChip(f.direction)}${evChip(f.evidence)}</div>`)}
          ${SCOPES.map((s) => row(esc(s.short) + " impact", (f) => impactOf(f, s.id) ? dots(impactOf(f, s.id), dirFor(f, s.id)) : '<span class="muted">—</span>')).join("")}
          ${row("Bottom line", (f) => linkify(e0(f).headline || ""))}
          ${row("How much", (f) => linkify((e0(f).dose || {}).effective || "—"))}
          ${row("Time to effect", (f) => linkify((e0(f).dose || {}).timeframe || "—"))}
          ${row("Pathways", (f) => `<div class="chips">${f.pathways.map((p) => mechById.has(p) ? `<a class="chip" href="#/mechanism/${encodeURIComponent(p)}">${esc(mechById.get(p).name)}</a>` : `<span class="chip">${esc(p)}</span>`).join("")}</div>`)}
          ${row("Mechanism", (f) => `<span class="small">${linkify(e0(f).mechanism || "—")}</span>`)}
          ${knLabels.map((l) => row(esc(l), (f) => knRow(f, l))).join("")}
          ${row("Other numbers", otherKn)}
          ${row("Caveats", (f) => `<span class="small">${linkify(e0(f).caveats || "—")}</span>`)}
          ${fs.some((f) => f.entries.some((e) => e.debate)) ? row("Debate", (f) => { const e = f.entries.find((x) => x.debate); return e ? `<span class="small">${citeLinks(linkify(e.debate), e.area)}</span>` : '<span class="muted">—</span>'; }) : ""}
        </tbody></table></div>`;
      // numeric chart for the key number shared by most of the selection
      const shared = knLabels.map((l) => ({ l, items: fs.map((f) => ({ f, k: kns(f).find((x) => gk(x) === l) })).filter((x) => x.k && typeof x.k.value === "number") }))
        .filter((x) => x.items.length >= 2).sort((a, b) => b.items.length - a.items.length)[0];
      if (shared) {
        const max = Math.max(...shared.items.map((x) => x.k.value));
        table += `<div class="card" style="margin-top:16px"><h3 style="margin-top:0">${esc(shared.l)}</h3>
          ${shared.items.map((x) => `<div class="hbar"><span>${esc(x.f.name)}</span><span class="bar"><span style="width:${(x.k.value / max) * 100}%"></span></span><span>${esc(x.k.value)} ${esc(x.k.unit || "")}</span></div>`).join("")}
          <div class="notice">Content per gram is not benefit per gram. Absorption, metabolism, and mechanism differ hugely between compounds, so a food with fewer milligrams can do more in the body. Use the impact ratings above for decisions.</div></div>`;
      }
    }
    return `
      <h1>Compare</h1>
      <p class="lede">Put foods, habits, or supplements side by side: how much you need, how each works, and how good the evidence is.</p>
      ${presets ? `<div class="chips" id="presets" style="margin-bottom:8px"><span class="muted small" style="margin-right:4px">Try:</span>${presets}</div>` : ""}
      <div class="toolbar">
        <div class="picker"><input class="search" id="pick" placeholder="Add a factor to compare…" autocomplete="off" style="width:100%"><div class="picker-list" id="pick-list" hidden></div></div>
        ${fs.length ? `<button class="btn secondary small" id="cmp-clear">Clear</button>` : ""}
      </div>
      ${table || '<p class="muted">Add two or more factors to compare them.</p>'}`;
  }
  function bindCompare() {
    const setIds = (ids) => { store.set("redox.compare", ids); location.hash = "#/compare?ids=" + ids.map(encodeURIComponent).join(","); };
    const cur = () => store.get("redox.compare", []);
    const input = $("#pick"), list = $("#pick-list");
    const show = () => {
      const q = input.value.trim().toLowerCase();
      const opts = D.factors.filter((f) => !cur().includes(f.id) && (!q || f.search.includes(q))).slice(0, 30);
      list.innerHTML = opts.map((f) => `<button data-id="${esc(f.id)}"><span>${esc(f.name)}</span><span class="muted small">${esc(KIND_LABEL[f.kind] || "")}</span></button>`).join("");
      list.hidden = !opts.length;
    };
    input.addEventListener("focus", show);
    input.addEventListener("input", show);
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") { const b = list.querySelector("button"); if (b) b.click(); } if (e.key === "Escape") list.hidden = true; });
    document.addEventListener("click", (e) => { if (!e.target.closest(".picker")) list.hidden = true; }, { once: false });
    list.addEventListener("click", (e) => { const b = e.target.closest("button[data-id]"); if (b) setIds([...cur(), b.dataset.id].slice(-6)); });
    document.querySelectorAll("[data-rm]").forEach((b) => b.addEventListener("click", () => setIds(cur().filter((x) => x !== b.dataset.rm))));
    const clr = $("#cmp-clear"); if (clr) clr.addEventListener("click", () => { store.set("redox.compare", []); location.hash = "#/compare?ids="; });
    const pr = $("#presets"); if (pr) pr.addEventListener("click", (e) => { const b = e.target.closest("[data-preset]"); if (b) setIds(D.compare_presets[+b.dataset.preset].ids.filter((i) => byId.has(i))); });
  }

  // ---------- mechanisms ----------
  function viewMechanisms() {
    return `<h1>Mechanisms</h1>
      <p class="lede">The pathways that the factors work through. Grouping by pathway is the best way to think about redundancy: two foods that both activate Nrf2 are not two independent wins.</p>
      <div class="grid">${D.mechanisms.map((m) => {
        const n = D.factors.filter((f) => f.pathways.includes(m.id)).length;
        return `<a class="card fcard mech-card" href="#/mechanism/${encodeURIComponent(m.id)}"><h3>${esc(m.name)}</h3><p>${esc((m.description || "").split(/(?<=\.)\s/)[0])}</p><span class="count">${n} factor${n === 1 ? "" : "s"}</span></a>`;
      }).join("")}</div>`;
  }
  function viewMechanism(id) {
    const m = mechById.get(id);
    if (!m) return `<h1>Not found</h1>`;
    const fs = D.factors.filter((f) => f.pathways.includes(id)).sort((a, b) => Math.max(...SCOPES.map((s) => score(b, s.id))) - Math.max(...SCOPES.map((s) => score(a, s.id))));
    const group = (d, title) => {
      const g = fs.filter((f) => f.direction === d);
      return g.length ? `<h2>${title}</h2><div class="grid">${g.map(cardHTML).join("")}</div>` : "";
    };
    const paras = (m.description || "").split(/\n\s*\n/).map((p) => `<p>${linkify(p)}</p>`).join("");
    return `<div class="crumbs"><a href="#/mechanisms">Mechanisms</a></div>
      <h1>${esc(m.name)}</h1>
      <div class="prose">${paras}</div>
      ${(m.refs || []).length ? `<details><summary class="section-label" style="cursor:pointer">References (${m.refs.length})</summary><ul class="refs">${m.refs.map(refHTML).join("")}</ul></details>` : ""}
      ${group("beneficial", "Factors that help via this pathway")}
      ${group("harmful", "Factors that harm via this pathway")}
      ${group("mixed", "Mixed or dose-dependent")}
      ${group("neutral", "No clear effect")}`;
  }

  // ---------- plan ----------
  function viewPlan() {
    const G = D.guide;
    if (!G) return `<h1>My plan</h1><p class="muted">The guided plan isn't ready yet.</p>`;
    const ans = store.get("redox.plan", {});
    const qs = G.questions.filter((q) => !q.show_if || q.show_if.some((c) => [].concat(ans[c.q] || []).includes(c.value)));
    const answered = qs.filter((q) => ans[q.id] != null && [].concat(ans[q.id]).length).length;
    const qHTML = qs.map((q) => {
      const sel = [].concat(ans[q.id] || []);
      return `<div class="q" data-q="${esc(q.id)}" data-multi="${q.multi ? 1 : 0}">
        <div class="q-label">${esc(q.label)}</div>${q.help ? `<div class="q-help">${esc(q.help)}</div>` : ""}
        <div class="opts">${q.options.map((o) => `<button class="${sel.includes(o.value) ? "on" : ""}" data-v="${esc(o.value)}">${esc(o.label)}</button>`).join("")}</div></div>`;
    }).join("");
    return `<h1>My plan</h1>
      <p class="lede">Answer a few questions. The plan ranks what's worth your effort, using impact ratings, evidence quality, and your answers. Nothing leaves your browser.</p>
      <div class="two-col" style="align-items:start">
        <div class="card"><div class="stepper">${qs.map((q, i) => `<i class="${i < answered ? "on" : ""}"></i>`).join("")}</div>${qHTML}
          <button class="btn secondary small" id="plan-reset">Start over</button></div>
        <div id="plan-out">${planOut(ans)}</div>
      </div>`;
  }
  function planOut(ans) {
    const G = D.guide;
    const goals = [].concat(ans.goal || []);
    if (!goals.length) return `<div class="card"><p class="muted">Pick at least one goal to see your plan.</p></div>`;
    const boost = {}, hide = new Set(), notes = [];
    for (const q of G.questions) {
      for (const v of [].concat(ans[q.id] || [])) {
        const o = q.options.find((x) => x.value === v);
        if (!o) continue;
        for (const [id, b] of Object.entries(o.boost || {})) boost[id] = (boost[id] || 0) + b;
        (o.hide || []).forEach((id) => hide.add(id));
        if (o.note) notes.push(o.note);
      }
    }
    const scoreFor = (f) => Math.max(...goals.map((g) => score(f, g))) + (boost[f.id] || 0);
    const exclude = new Set(G.exclude || []);
    const relevant = D.factors.filter((f) => !hide.has(f.id) && (!exclude.has(f.id) || boost[f.id] > 0) && goals.some((g) => impactOf(f, g) > 0));
    const isSkip = (f) => f.kind === "supplement" && (["neutral", "harmful", "mixed"].includes(f.direction) || ["limited", "mechanistic"].includes(f.evidence)) && !boost[f.id];
    const actDir = (f) => dirFor(f, goals.reduce((a, g) => (score(f, g) > score(f, a) ? g : a), goals[0]));
    const actions = relevant.filter((f) => !isSkip(f) && ["beneficial", "harmful"].includes(actDir(f))).sort((a, b) => scoreFor(b) - scoreFor(a)).slice(0, 14);
    // drop the "exposure" half of a pair when the "action" half is already listed (weight-loss vs excess-adiposity)
    for (const [keep, drop] of G.pairs || []) {
      if (actions.some((f) => f.id === keep)) { const i = actions.findIndex((f) => f.id === drop); if (i >= 0) actions.splice(i, 1); }
    }
    const skip = relevant.filter(isSkip).sort((a, b) => scoreFor(b) - scoreFor(a)).slice(0, 8);
    const topGoal = (f) => goals.reduce((a, g) => (score(f, g) > score(f, a) ? g : a), goals[0]);
    const item = (f, i) => {
      const e = bestEntry(f, topGoal(f));
      const d = e.dose || {};
      const harmful = actDir(f) === "harmful";
      const what = harmful ? (d.too_much || d.effective || e.headline) : (d.effective || e.headline);
      return `<div class="plan-item"><span class="num">${i + 1}</span><div>
        <h3>${harmful ? "Reduce: " : ""}${fLink(f.id)}</h3>
        <div>${linkify(what || "")}</div>
        <div class="why">${linkify(e.headline || "")} ${d.timeframe ? `<b>Time to effect:</b> ${linkify(d.timeframe)}` : ""}</div>
        <div class="chips" style="margin-top:6px">${evChip(f.evidence)}${goals.filter((g) => impactOf(f, g)).map((g) => `<span class="chip">${esc(SCOPES.find((s) => s.id === g).short)} ${impactOf(f, g)}/5</span>`).join("")}</div>
      </div></div>`;
    };
    return `<div class="card">
      <h2 style="margin-top:0">Your priorities</h2>
      ${notes.map((n) => `<div class="notice">${linkify(n)}</div>`).join("")}
      ${actions.slice(0, 12).map(item).join("")}
      </div>
      ${skip.length ? `<div class="card" style="margin-top:16px"><h2 style="margin-top:0">Probably skip (or ask a clinician)</h2><p class="muted small">Supplements with weak, null, or mixed human evidence for your goals.</p>${skip.map((f) => `<div class="plan-item"><span class="num" style="background:var(--neutral-soft);color:var(--neutral)">–</span><div><h3>${fLink(f.id)}</h3><div class="why">${linkify(bestEntry(f, topGoal(f)).headline || "")}</div></div></div>`).join("")}</div>` : ""}
      ${G.footer ? `<p class="muted small" style="margin-top:12px">${linkify(G.footer)}</p>` : ""}`;
  }
  function bindPlan() {
    document.querySelectorAll(".q").forEach((qel) => qel.addEventListener("click", (e) => {
      const b = e.target.closest("button[data-v]");
      if (!b) return;
      const ans = store.get("redox.plan", {});
      const id = qel.dataset.q, v = b.dataset.v;
      if (qel.dataset.multi === "1") {
        const cur = [].concat(ans[id] || []);
        ans[id] = cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v];
      } else ans[id] = ans[id] === v ? null : v;
      store.set("redox.plan", ans);
      const y = window.scrollY;
      route();
      window.scrollTo(0, y);
    }));
    const r = $("#plan-reset"); if (r) r.addEventListener("click", () => { store.set("redox.plan", {}); route(); });
  }

  // ---------- tests ----------
  const TEST_CATS = [["", "All"], ["general", "General health"], ["sperm", "Sperm"], ["egg", "Egg & ovarian"], ["genetic", "Genetic"]];
  function viewTests(params) {
    const cat = params.get("cat") || "";
    if (!(D.tests || []).length) return `<h1>What to test</h1><p class="muted">Test guidance is still being researched.</p>`;
    const tests = D.tests.filter((t) => !cat || t.category === cat);
    const chips = TEST_CATS.map(([v, l]) => `<a class="chip ${v === cat ? "dir-beneficial" : ""}" href="#/tests${v ? "?cat=" + v : ""}">${esc(l)}</a>`).join("");
    const cl = (t) => citeLinks(linkify(t), "tests");
    const card = (t) => `<section class="card entry" id="test-${esc(t.id)}">
      <div class="entry-title"><h2>${esc(t.name)}</h2><span class="chip">${esc((TEST_CATS.find((c) => c[0] === t.category) || [0, t.category])[1])}</span>${t.access ? `<span class="chip">${esc(t.access)}</span>` : ""}</div>
      ${t.what ? `<p class="headline">${cl(t.what)}</p>` : ""}
      <dl class="dose">
        ${t.why ? `<dt>Why it matters</dt><dd>${cl(t.why)}</dd>` : ""}
        ${t.who ? `<dt>Who should consider it</dt><dd>${cl(t.who)}</dd>` : ""}
        ${t.interpretation ? `<dt>Reading the result</dt><dd>${cl(t.interpretation)}</dd>` : ""}
      </dl>
      ${t.limits ? `<div class="section-label">Limits</div><p class="caveat">${cl(t.limits)}</p>` : ""}
      ${t.debate ? `<div class="section-label">Where the evidence is contested</div><p>${cl(t.debate)}</p>` : ""}
      ${(t.related_factors || []).length ? `<div class="chips">${t.related_factors.filter((i) => byId.has(i)).map((i) => `<a class="chip" href="#/factor/${encodeURIComponent(i)}">${esc(byId.get(i).name)}</a>`).join("")}</div>` : ""}
      ${(t.refs || []).length ? `<details><summary class="section-label" style="cursor:pointer">References (${t.refs.length})</summary><ul class="refs">${t.refs.map(refHTML).join("")}</ul></details>` : ""}
    </section>`;
    return `<h1>What to test (and what not to)</h1>
      <p class="lede">Lab tests that can actually guide decisions about oxidative stress and fertility, what the numbers mean, and which popular tests aren't worth it. Results need a clinician's interpretation.</p>
      <div class="toc">${chips}</div>
      ${tests.map(card).join("")}`;
  }

  // ---------- stack checker ----------
  const STACK_KEY = "redox.stack";
  function stackPool() {
    const extra = new Set(((D.stack || {}).extra_items) || []);
    return D.factors.filter((f) => f.kind === "supplement" || extra.has(f.id)).sort((a, b) => a.name.localeCompare(b.name));
  }
  function viewStack() {
    const st = store.get(STACK_KEY, { items: [], ctx: [] });
    const CTX = ((D.stack || {}).contexts) || [];
    const opts = stackPool().filter((f) => !st.items.includes(f.id)).map((f) => `<option value="${esc(f.id)}">${esc(f.name)}${f.kind === "medical" ? " (medication)" : f.kind === "food" ? " (diet)" : ""}</option>`).join("");
    return `<h1>Supplement stack checker</h1>
      <p class="lede">List what you take. The checker flags evidence of harm, weak evidence, overlapping mechanisms, and combinations that conflict with training or conception. It doesn't know your medical history and isn't a substitute for a pharmacist or clinician.</p>
      <div class="two-col" style="align-items:start">
        <div class="card">
          <div class="q-label">What do you take?</div>
          <div class="toolbar" style="margin:6px 0"><select id="stack-add" style="flex:1;min-width:0"><option value="">Add a supplement or medication…</option>${opts}</select></div>
          <div class="chips" id="stack-items">${st.items.filter((i) => byId.has(i)).map((i) => `<button class="chip on" data-rm="${esc(i)}">${esc(byId.get(i).name)} ×</button>`).join("") || '<span class="muted small">Nothing added yet.</span>'}</div>
          <div class="q-label" style="margin-top:18px">Context</div>
          <div class="opts" id="stack-ctx">${CTX.map((c) => `<button class="${st.ctx.includes(c.id) ? "on" : ""}" data-ctx="${esc(c.id)}">${esc(c.label)}</button>`).join("")}</div>
          ${st.items.length ? `<p style="margin-top:16px"><button class="btn secondary small" id="stack-clear">Clear</button></p>` : ""}
        </div>
        <div>${stackReport(st)}</div>
      </div>`;
  }
  function stackReport(st) {
    const items = st.items.filter((i) => byId.has(i)).map((i) => byId.get(i));
    if (!items.length) return `<div class="card"><p class="muted">Add items to see flags.</p></div>`;
    const ctx = new Set(st.ctx);
    const goals = ["general", ...(ctx.has("ttc-male") ? ["sperm"] : []), ...(ctx.has("ttc-female") ? ["egg"] : [])];
    const sel = new Set(items.map((f) => f.id));
    const flags = [];
    for (const r of ((D.stack || {}).rules) || []) {
      const hit = (r.ids_any || []).includes("*") ? [...sel] : (r.ids_any || []).filter((i) => sel.has(i));
      if (hit.length < (r.min || 1)) continue;
      if ((r.requires_ids || []).some((i) => !sel.has(i))) continue;
      if ((r.requires || []).some((c) => !ctx.has(c))) continue;
      if ((r.requires_any || []).length && !r.requires_any.some((c) => ctx.has(c))) continue;
      flags.push({ sev: r.severity || "caution", title: r.title, msg: r.message, hit });
    }
    const harmful = items.filter((f) => goals.some((g) => impactOf(f, g) > 0 && dirFor(f, g) === "harmful"));
    if (harmful.length) flags.push({ sev: "harm", title: "Evidence suggests net harm", msg: "Trials or strong observational data link these to harm for the goals you selected. Open each one for the details and doses.", hit: harmful.map((f) => f.id) });
    const nrf2 = items.filter((f) => f.pathways.includes("nrf2"));
    if (nrf2.length >= 2) flags.push({ sev: "info", title: "Overlapping Nrf2 activators", msg: "These work partly through the same pathway, so each adds less than it would alone. Food-dose Nrf2 activation looks additive rather than saturated, but stacking high-dose concentrates has no trial support. See the Nrf2 mechanism page.", hit: nrf2.map((f) => f.id), link: "#/mechanism/nrf2" });
    const order = { harm: 0, caution: 1, info: 2 };
    flags.sort((a, b) => order[a.sev] - order[b.sev]);
    const sevChip = { harm: "dir-harmful", caution: "dir-mixed", info: "dir-neutral" };
    const sevLabel = { harm: "Avoid", caution: "Caution", info: "Note" };
    const flagHTML = flags.map((x) => `<div class="plan-item"><span class="chip ${sevChip[x.sev]}" style="height:fit-content">${sevLabel[x.sev]}</span><div>
      <h3>${x.link ? `<a href="${x.link}">${esc(x.title)}</a>` : esc(x.title)}</h3><div>${linkify(x.msg)}</div>
      <div class="chips" style="margin-top:6px">${x.hit.map((i) => `<a class="chip" href="#/factor/${encodeURIComponent(i)}">${esc(byId.get(i).name)}</a>`).join("")}</div></div></div>`).join("");
    const verdict = (f) => {
      const g = goals.filter((x) => impactOf(f, x) > 0);
      const ds = g.map((x) => dirFor(f, x));
      const e = bestEntry(f, g.find((x) => x !== "general") || "general");
      const d = e.dose || {};
      const worst = ds.includes("harmful") ? "harmful" : ds.includes("mixed") ? "mixed" : ds.includes("beneficial") ? "beneficial" : "neutral";
      return `<div class="plan-item"><span>${dirChip(worst)}</span><div>
        <h3>${fLink(f.id)}</h3><div class="why">${linkify(e.headline || "")}</div>
        ${d.effective ? `<div class="small" style="margin-top:4px"><b>Studied dose:</b> ${linkify(d.effective)}</div>` : ""}
        ${d.too_much ? `<div class="small"><b>Too much:</b> ${linkify(d.too_much)}</div>` : ""}
        <div class="chips" style="margin-top:6px">${g.length ? evChip(evFor(f, g[0])) : ""}${g.map((x) => `<span class="chip">${esc(SCOPES.find((s) => s.id === x).short)}: ${esc(DIR_LABEL[dirFor(f, x)] || "")}</span>`).join("")}</div>
      </div></div>`;
    };
    return `<div class="card"><h2 style="margin-top:0">Flags</h2>${flagHTML || '<p class="muted">No combination flags for this stack.</p>'}</div>
      <div class="card" style="margin-top:16px"><h2 style="margin-top:0">Item by item</h2>${items.map(verdict).join("")}</div>`;
  }
  function bindStack() {
    const get = () => store.get(STACK_KEY, { items: [], ctx: [] });
    const put = (st) => { store.set(STACK_KEY, st); const y = window.scrollY; route(); window.scrollTo(0, y); };
    $("#stack-add").addEventListener("change", (e) => { if (!e.target.value) return; const st = get(); st.items.push(e.target.value); put(st); });
    $("#stack-items").addEventListener("click", (e) => { const b = e.target.closest("[data-rm]"); if (!b) return; const st = get(); st.items = st.items.filter((i) => i !== b.dataset.rm); put(st); });
    $("#stack-ctx").addEventListener("click", (e) => { const b = e.target.closest("[data-ctx]"); if (!b) return; const st = get(); const c = b.dataset.ctx; st.ctx = st.ctx.includes(c) ? st.ctx.filter((x) => x !== c) : [...st.ctx, c]; put(st); });
    const c = $("#stack-clear"); if (c) c.addEventListener("click", () => put({ items: [], ctx: get().ctx }));
  }

  // ---------- read ----------
  async function viewRead(area) {
    const notes = D.notes || [];
    const docs = [...D.areas, ...notes];
    if (!docs.some((a) => a.id === area)) area = "";
    const toc = docs.map((a) => `<a class="chip ${a.id === area ? "dir-beneficial" : ""}" href="#/read/${a.id}">${esc(a.title)}</a>`).join("");
    if (!area) {
      return `<h1>Read the research notes</h1><p class="lede">Long-form write-ups behind each section, with the reasoning, controversies, and what the evidence does not show.</p>
        <div class="grid">${D.areas.map((a) => `<a class="card fcard" href="#/read/${a.id}"><h3>${esc(a.title)}</h3><p>${esc(a.summary || "")}</p></a>`).join("")}</div>
        ${notes.length ? `<h2>Deep dives</h2><div class="grid">${notes.map((n) => `<a class="card fcard" href="#/read/${n.id}"><h3>${esc(n.title)}</h3></a>`).join("")}</div>` : ""}`;
    }
    let md = "";
    try { md = await (await fetch(`research/${encodeURIComponent(area)}.md`, { cache: "no-cache" })).text(); } catch { md = "Could not load this document."; }
    let html = window.marked ? window.marked.parse(md) : `<pre>${esc(md)}</pre>`;
    html = citeLinks(html, area);
    return `<div class="toc">${toc}</div><article class="prose">${html}</article>`;
  }

  function viewAbout() {
    return `<div class="prose">
      <h1>Methods &amp; evidence grades</h1>
      <p>Every factor was researched from primary literature: systematic reviews and meta-analyses (Cochrane where available), randomized trials, large prospective cohorts, clinical guidelines (ASRM, AUA/EAU, ESHRE, EFSA), and mechanistic reviews. Each reference was checked against PubMed or its DOI when the data was compiled. Health websites, supplement vendors, and press coverage were not used as sources.</p>
      <h2>Impact (0–5)</h2>
      <p>An editorial judgment of the real-world effect size in humans for that goal: 5 means a large, reliable effect (e.g., smoking for overall oxidative stress); 1 means small or uncertain. Harmful factors use the same scale for size of harm.</p>
      <h2>Evidence grades</h2>
      <ul>
        <li><b>Strong:</b> multiple RCTs or meta-analyses on clinical outcomes or validated biomarkers.</li>
        <li><b>Moderate:</b> some RCTs, or consistent large cohorts.</li>
        <li><b>Limited:</b> small trials, inconsistent findings.</li>
        <li><b>Mechanistic:</b> cell, animal, or test-tube data only; human outcome data lacking.</li>
      </ul>
      <p>Rankings use impact × evidence weight (strong 1.0, moderate 0.8, limited 0.55, mechanistic 0.3).</p>
      <h2>Why there are no ORAC scores</h2>
      <p>Test-tube “antioxidant capacity” numbers (ORAC, FRAP, TEAC) do not predict what a food does in the body. Most polyphenols are poorly absorbed and heavily metabolized, and their benefits seem to come from signaling (for example, the Nrf2 pathway) rather than mopping up radicals directly. The USDA withdrew its ORAC database in 2012 for this reason. Where polyphenol content is shown, it's context, not a score.</p>
      <h2>Not medical advice</h2>
      <p>This is an educational summary for adults. It doesn't diagnose or treat anything. Check supplements with a clinician, especially during conception attempts, pregnancy, or alongside medications.</p>
      <p class="muted small">Data build: ${esc(D.built || "")}</p>
    </div>`;
  }

  // ---------- router ----------
  async function route() {
    const { parts, params } = parseHash();
    const [r, arg] = parts;
    const v = $("#view");
    setActiveNav(r || "");
    let html, bind;
    switch (r) {
      case undefined: case "": html = viewOverview(params); bind = bindOverview; break;
      case "explore": html = viewExplore(params); bind = () => bindExplore(params); break;
      case "factor": html = viewFactor(arg); bind = () => bindFactor(arg); break;
      case "compare": html = viewCompare(params); bind = bindCompare; break;
      case "mechanisms": html = viewMechanisms(); break;
      case "mechanism": html = viewMechanism(arg); setActiveNav("mechanisms"); break;
      case "plan": html = viewPlan(); bind = bindPlan; break;
      case "timeline": html = viewTimeline(params); bind = () => bindTimeline(params); break;
      case "read": html = await viewRead(arg); break;
      case "tests": html = viewTests(params); break;
      case "stack": html = viewStack(); bind = bindStack; break;
      case "about": html = viewAbout(); break;
      default: html = `<h1>Not found</h1><p><a href="#/">Go to overview</a></p>`;
    }
    v.innerHTML = html;
    if (bind) bind();
  }
  let lastPath = "";
  window.addEventListener("hashchange", () => {
    const p = parseHash().parts.join("/");
    if (!D) return; // data still loading; main() routes when it arrives
    route().then(() => { if (p !== lastPath) window.scrollTo(0, 0); lastPath = p; });
  });

  async function main() {
    await gate();
    $("#app").hidden = false;
    $("#nav-toggle").addEventListener("click", () => {
      const n = $("#nav"); n.classList.toggle("open");
      $("#nav-toggle").setAttribute("aria-expanded", n.classList.contains("open"));
    });
    try {
      D = await (await fetch("assets/data.json", { cache: "no-cache" })).json();
    } catch (e) {
      $("#view").innerHTML = `<h1>Couldn't load data</h1><p class="muted">${esc(e.message)}</p>`;
      return;
    }
    for (const f of D.factors) {
      byId.set(f.id, f);
      f.search = [f.name, f.kind, ...(f.aliases || []), ...f.entries.map((e) => `${e.headline} ${e.mechanism}`), ...f.pathways].join(" ").toLowerCase();
    }
    for (const m of D.mechanisms) mechById.set(m.id, m);
    $("#build-info").textContent = `${D.factors.length} factors · ${Object.keys(D.references).length} references`;
    lastPath = parseHash().parts.join("/");
    route();
  }
  main();
})();
