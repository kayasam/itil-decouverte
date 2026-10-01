#!/usr/bin/env python3
"""Résout les liens Obsidian des pages ITIL copiées dans Quartz."""
import re
import sys
from pathlib import Path

if len(sys.argv) != 2:
    raise SystemExit("Usage: fix-itil-links.py STAGE")
stage = Path(sys.argv[1])
chapters = sorted(d for d in stage.iterdir() if d.is_dir()
                  and re.match(r"^0[1-8]-", d.name))
if len(chapters) != 8:
    raise SystemExit(f"8 chapitres ITIL attendus, {len(chapters)} trouvés")
notes = {"00-INDEX": "/", "00-contexte-fournil-dore": "/00-contexte/"}
for chapter in chapters:
    number = chapter.name[:2]
    notes[f"{number}-cours"] = f"/{chapter.name}/"
    notes[f"{number}-tp"] = f"/{chapter.name}/tp"

files = [stage / "00-contexte" / "index.md"]
for chapter in chapters:
    files.extend(chapter.rglob("*.md"))
for page in files:
    body = page.read_text(encoding="utf-8")
    def link(match):
        name, label = match.group(1), match.group(2)
        if name not in notes:
            raise SystemExit(f"Lien ITIL inconnu : {name} dans {page}")
        return f"[{label or name}]({notes[name]})"
    body = re.sub(r"(?<!!)\[\[([^]|#]+)(?:\|([^]]+))?\]\]", link, body)
    body = re.sub(
        r'href="([0-9]{2}-[^"/]+-interactif\.html)"',
        lambda m: ('href="https://kayasam.github.io/itil-decouverte/'
                   f'cours/{m.group(1)}"'),
        body,
    )
    page.write_text(body, encoding="utf-8")
print(f"Liens ITIL résolus dans {len(files)} pages")
