# Kopiere die saubere index.html

import shutil

try:
    shutil.copy2('index_clean.html', 'index.html')
    print("✅ Erfolgreich! index.html wurde repariert.")
    print("Die Website sollte jetzt wieder korrekt funktionieren!")
except Exception as e:
    print(f"❌ Fehler: {e}")
