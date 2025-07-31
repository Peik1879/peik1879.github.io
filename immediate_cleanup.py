import os

# Direct cleanup without output
files = ["fix_files.py","fix_html.py","fix_projects.py","replace_projects.py","index_backup.html","index_clean.html","index_neu.html","p-projekte-einzeln.html","echte-timeline.md","timeline-vorlage.md","debug.html","gsap-debug.html","test.html","style_new.css"]
for f in files:
    try:
        if os.path.exists(f): os.remove(f)
    except: pass
os.remove("cleanup.py")
