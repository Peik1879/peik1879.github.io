import os

# Liste der zu löschenden Dateien
files_to_delete = [
    "fix_files.py",
    "fix_html.py", 
    "fix_projects.py",
    "replace_projects.py",
    "index_backup.html",
    "index_clean.html",
    "index_neu.html",
    "p-projekte-einzeln.html",
    "echte-timeline.md",
    "timeline-vorlage.md",
    "debug.html",
    "gsap-debug.html",
    "test.html",
    "style_new.css"
]

# Lösche jede Datei einzeln
deleted_count = 0
for file in files_to_delete:
    try:
        if os.path.exists(file):
            os.remove(file)
            print(f"Gelöscht: {file}")
            deleted_count += 1
        else:
            print(f"Nicht gefunden: {file}")
    except Exception as e:
        print(f"Fehler beim Löschen von {file}: {e}")

print(f"\nAufräumen abgeschlossen! {deleted_count} Dateien gelöscht.")

# Lösche auch cleanup.py selbst
try:
    os.remove("cleanup.py")
    print("cleanup.py selbst gelöscht.")
except:
    print("Konnte cleanup.py nicht löschen.")
