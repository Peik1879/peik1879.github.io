#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Ersetzt die P-Projekte Suite durch 5 einzelne Projekt-Karten

def main():
    # Neue Projekt-Karten HTML
    new_projects = '''        <div class="project-card">
          <div class="project-image">
            <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=250&fit=crop" alt="P-Labels">
            <div class="project-overlay">
              <span class="project-status">🔧 Entwicklung</span>
              <span class="project-users">Label Management</span>
            </div>
          </div>
          <div class="project-content">
            <h3>P-Labels</h3>
            <p>Intelligentes Label-Management-System zur Organisation und Kategorisierung von Daten. Ermöglicht effiziente Verwaltung von Tags, Kategorien und Metadaten mit automatischer Klassifizierung und Such-Funktionalität.</p>
            <div class="project-metrics">
              <span class="metric">🏷️ Automatische Tag-Erkennung</span>
              <span class="metric">🔍 Erweiterte Suchfunktionen</span>
              <span class="metric">📊 Statistik-Dashboard</span>
            </div>
            <div class="project-tech">
              <span>Python</span>
              <span>Label Management</span>
              <span>Data Organization</span>
              <span>Search Algorithms</span>
              <span>API Integration</span>
            </div>
            <div class="project-links">
              <span class="btn btn-secondary disabled">🔒 In Entwicklung</span>
            </div>
          </div>
        </div>

        <div class="project-card">
          <div class="project-image">
            <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop" alt="P-News">
            <div class="project-overlay">
              <span class="project-status">🔧 Entwicklung</span>
              <span class="project-users">News Aggregator</span>
            </div>
          </div>
          <div class="project-content">
            <h3>P-News</h3>
            <p>Intelligenter News-Aggregator der verschiedene Nachrichtenquellen analysiert und personalisierte Nachrichten-Feeds erstellt. Mit KI-basierter Kategorisierung und Sentiment-Analyse für relevante Inhalte.</p>
            <div class="project-metrics">
              <span class="metric">📰 Multiple News-Quellen</span>
              <span class="metric">🤖 KI-basierte Kategorisierung</span>
              <span class="metric">📈 Sentiment-Analyse</span>
            </div>
            <div class="project-tech">
              <span>Python</span>
              <span>News APIs</span>
              <span>Data Aggregation</span>
              <span>Machine Learning</span>
              <span>Web Scraping</span>
            </div>
            <div class="project-links">
              <span class="btn btn-secondary disabled">🔒 In Entwicklung</span>
            </div>
          </div>
        </div>

        <div class="project-card">
          <div class="project-image">
            <img src="https://images.unsplash.com/photo-1541278107931-e006523892df?w=400&h=250&fit=crop" alt="P-Oker">
            <div class="project-overlay">
              <span class="project-status">🔧 Entwicklung</span>
              <span class="project-users">Poker Application</span>
            </div>
          </div>
          <div class="project-content">
            <h3>P-Oker</h3>
            <p>Digitale Poker-Anwendung mit strategischer KI-Analyse und Wahrscheinlichkeitsberechnungen. Features: Hand-Evaluierung, Gewinnchancen-Berechnung und Spielstatistiken für verbessertes Gameplay.</p>
            <div class="project-metrics">
              <span class="metric">🃏 Hand-Evaluierung</span>
              <span class="metric">📊 Wahrscheinlichkeits-Engine</span>
              <span class="metric">🎯 Strategische Analysen</span>
            </div>
            <div class="project-tech">
              <span>Python</span>
              <span>Game Logic</span>
              <span>Probability Algorithms</span>
              <span>Statistics</span>
              <span>GUI Development</span>
            </div>
            <div class="project-links">
              <span class="btn btn-secondary disabled">🔒 In Entwicklung</span>
            </div>
          </div>
        </div>

        <div class="project-card">
          <div class="project-image">
            <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=250&fit=crop" alt="P-Life">
            <div class="project-overlay">
              <span class="project-status">🔧 Entwicklung</span>
              <span class="project-users">Lifestyle App</span>
            </div>
          </div>
          <div class="project-content">
            <h3>P-Life</h3>
            <p>Umfassende Lifestyle-Management-App zur Optimierung des täglichen Lebens. Integriert Habit-Tracking, Produktivitäts-Tools und persönliche Ziele mit datengetriebenen Insights und Empfehlungen.</p>
            <div class="project-metrics">
              <span class="metric">📱 Habit-Tracking</span>
              <span class="metric">🎯 Goal Management</span>
              <span class="metric">📈 Progress Analytics</span>
            </div>
            <div class="project-tech">
              <span>App Development</span>
              <span>Data Analytics</span>
              <span>User Experience</span>
              <span>Progress Tracking</span>
              <span>Notification Systems</span>
            </div>
            <div class="project-links">
              <span class="btn btn-secondary disabled">🔒 In Entwicklung</span>
            </div>
          </div>
        </div>

        <div class="project-card">
          <div class="project-image">
            <img src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop" alt="Peikthon">
            <div class="project-overlay">
              <span class="project-status">🔧 Entwicklung</span>
              <span class="project-users">Python Tools</span>
            </div>
          </div>
          <div class="project-content">
            <h3>Peikthon</h3>
            <p>Sammlung von spezialisierten Python-Tools und Utilities für verschiedene Entwicklungsaufgaben. Beinhaltet Automatisierungs-Skripte, Datenverarbeitungs-Tools und Custom-Libraries für effiziente Entwicklung.</p>
            <div class="project-metrics">
              <span class="metric">🛠️ Development Utilities</span>
              <span class="metric">⚡ Automation Scripts</span>
              <span class="metric">📚 Custom Libraries</span>
            </div>
            <div class="project-tech">
              <span>Python</span>
              <span>Automation</span>
              <span>Utilities</span>
              <span>Scripts</span>
              <span>Development Tools</span>
            </div>
            <div class="project-links">
              <span class="btn btn-secondary disabled">🔒 In Entwicklung</span>
            </div>
          </div>
        </div>'''

    try:
        # Datei einlesen
        with open('index.html', 'r', encoding='utf-8') as file:
            content = file.read()
        
        # P-Projekte Suite finden und ersetzen (flexibler Ansatz)
        import re
        
        # Pattern für die komplette P-Projekte Suite Karte
        pattern = r'<div class="project-card">\s*<div class="project-image">\s*<img[^>]*alt="P-Projekte Suite"[^>]*>.*?</div>\s*</div>'
        
        # Suche mit DOTALL flag für mehrzeilige Matches
        match = re.search(pattern, content, re.DOTALL)
        
        if match:
            # Ersetze den gefundenen Block
            new_content = content[:match.start()] + new_projects + content[match.end():]
            
            # Datei schreiben
            with open('index.html', 'w', encoding='utf-8') as file:
                file.write(new_content)
            
            print("✅ Erfolgreich! P-Projekte Suite durch 5 einzelne Projekte ersetzt.")
            print("Die folgenden Projekte wurden hinzugefügt:")
            print("- P-Labels (Label-Management)")
            print("- P-News (News-Aggregator)")
            print("- P-Oker (Poker-Anwendung)")
            print("- P-Life (Lifestyle-App)")
            print("- Peikthon (Python-Tools)")
        else:
            print("❌ P-Projekte Suite nicht gefunden. Versuche anderen Ansatz...")
            
            # Alternative: Suche nach dem h3 Tag
            if 'P-Projekte Suite' in content:
                # Finde den Start der Karte vor dem h3
                h3_pos = content.find('<h3>P-Projekte Suite</h3>')
                if h3_pos > 0:
                    # Gehe zurück und finde den Start der project-card
                    search_start = max(0, h3_pos - 1000)  # Suche in den letzten 1000 Zeichen
                    card_start = content.rfind('<div class="project-card">', search_start, h3_pos)
                    
                    if card_start >= 0:
                        # Finde das Ende der Karte nach h3
                        search_end = min(len(content), h3_pos + 2000)  # Suche in den nächsten 2000 Zeichen
                        card_end_pattern = r'</div>\s*</div>\s*(?=\s*<div class="project-card">|$)'
                        end_match = re.search(card_end_pattern, content[h3_pos:search_end])
                        
                        if end_match:
                            card_end = h3_pos + end_match.end()
                            
                            # Ersetze den Block
                            new_content = content[:card_start] + new_projects + content[card_end:]
                            
                            with open('index.html', 'w', encoding='utf-8') as file:
                                file.write(new_content)
                            
                            print("✅ Erfolgreich mit alternativer Methode! P-Projekte Suite ersetzt.")
                        else:
                            print("❌ Ende der Karte nicht gefunden.")
                    else:
                        print("❌ Start der Karte nicht gefunden.")
            else:
                print("❌ P-Projekte Suite Text nicht in Datei gefunden.")

    except Exception as e:
        print(f"❌ Fehler: {e}")

if __name__ == "__main__":
    main()
