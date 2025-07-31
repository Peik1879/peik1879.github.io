import os
import shutil

# Lösche die alte index.html
if os.path.exists('index.html'):
    os.remove('index.html')
    print("Alte index.html gelöscht")

# Benenne index_neu.html zu index.html um
if os.path.exists('index_neu.html'):
    os.rename('index_neu.html', 'index.html')
    print("index_neu.html wurde zu index.html umbenannt")
    print("Website erfolgreich repariert!")
else:
    print("index_neu.html nicht gefunden")
