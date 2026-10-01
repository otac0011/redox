"""Set the site passphrase: python tools/set_passphrase.py <passphrase>

The gate is obscurity only (the data is public in the repo). The passphrase is
lowercased and trimmed before hashing, so it is case-insensitive.
"""
import hashlib
import pathlib
import re
import sys

if len(sys.argv) != 2:
    sys.exit(__doc__)
digest = hashlib.sha256(sys.argv[1].strip().lower().encode("utf-8")).hexdigest()
app = pathlib.Path(__file__).resolve().parent.parent / "app.js"
src = app.read_text(encoding="utf-8")
new, n = re.subn(r'const PASS_HASH = "[0-9a-f]+";', f'const PASS_HASH = "{digest}";', src)
if n != 1:
    sys.exit("PASS_HASH line not found in app.js")
app.write_text(new, encoding="utf-8", newline="\n")
print(f"passphrase set ({digest[:12]}...)")
