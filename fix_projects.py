# Öffne die index.html und ersetze die P-Projekte Suite
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Lese die einzelnen Projekte
with open('p-projekte-einzeln.html', 'r', encoding='utf-8') as f:
    new_projects = f.read()

# Einfache String-Ersetzung
old_text = 'P-Projekte Suite'
if old_text in content:
    # Finde die gesamte project-card
    start = content.find('<div class="project-card">\n          <div class="project-image">\n            <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=250&fit=crop" alt="P-Projekte Suite">')
    if start != -1:
        # Finde das Ende der project-card
        end = content.find('        </div>\n        </div>', start) + len('        </div>\n        </div>')
        
        # Ersetze die gesamte project-card
        new_content = content[:start] + new_projects.strip() + content[end:]
        
        with open('index.html', 'w', encoding='utf-8') as f:
            f.write(new_content)
        print('P-Projekte Suite erfolgreich durch einzelne Projekte ersetzt!')
    else:
        print('Start der P-Projekte Suite nicht gefunden')
else:
    print('P-Projekte Suite nicht gefunden')
