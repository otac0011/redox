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
    const relevant = D.factors.filter((f) => !hide.has(f.id) && (!exclude.has(f.id) || boost[f.id] > 0) && (goals.some((g) => impactOf(f, g) > 0) || boost[f.id] > 0));
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

  // ---------- read ----------
  async function viewRead(area) {
    const toc = D.areas.map((a) => `<a class="chip ${a.id === area ? "dir-beneficial" : ""}" href="#/read/${a.id}">${esc(a.title)}</a>`).join("");
    if (!area) {
      return `<h1>Read the research notes</h1><p class="lede">Long-form write-ups behind each section, with the reasoning, controversies, and what the evidence does not show.</p>
        <div class="grid">${D.areas.map((a) => `<a class="card fcard" href="#/read/${a.id}"><h3>${esc(a.title)}</h3><p>${esc(a.summary || "")}</p></a>`).join("")}</div>`;
    }
    let md = "";
    try { md = await (await fetch(`research/${encodeURIComponent(area)}.md`, { cache: "no-cache" })).text(); } catch { md = "Could not load this document."; }
    let html = window.marked ? window.marked.parse(md) : `<pre>${esc(md)}</pre>`;
    // [id] / [id1, id2] citations -> author-year links to PubMed
    const idx = (D.ref_index || {})[area] || {};
    html = html.replace(/\[([a-z0-9][\w-]*(?:\s*[,;]\s*[a-z0-9][\w-]*)*)\]/gi, (m, inner) => {
      const ids = inner.split(/\s*[,;]\s*/);
      if (!ids.every((i) => idx[i] && D.references[idx[i]])) return m;
      return "[" + ids.map((i) => {
        const r = D.references[idx[i]];
        const url = r.pmid ? `https://pubmed.ncbi.nlm.nih.gov/${r.pmid}/` : r.doi ? `https://doi.org/${r.doi}` : "";
        const who = `${String(r.authors || "").split(/[ ,]/)[0]} ${r.year || ""}`.trim();
        return url ? `<a href="${esc(url)}" target="_blank" rel="noopener" title="${esc(r.title)}">${esc(who)}</a>` : esc(who);
      }).join(", ") + "]";
    });
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
      case "read": html = await viewRead(arg); break;
      case "about": html = viewAbout(); break;
      default: html = `<h1>Not found</h1><p><a href="#/">Go to overview</a></p>`;
    }
    v.innerHTML = html;
    if (bind) bind();
  }
  let lastPath = "";
  window.addEventListener("hashchange", () => {
    const p = parseHash().parts.join("/");
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
