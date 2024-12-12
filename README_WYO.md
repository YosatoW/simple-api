# PostgreSQL Datenbank
````TypeScript
docker run --name my-postgres -p 5432:5432 -e POSTGRES_PASSWORD=supersecret123 -e POSTGRES_DB=minitwitter -d postgres

// gibt dem Container den Name: my-postgress
--name my-postgress

// Setzt das Passwort für den PostsgreSQL-Admin-Benutzer postgres.
-e POSTGRES_PASSWORD=supersecret123

// Erstellt automatisch eine Datenbank mit dem Namen minitwitter.
-e POSTGRES_DB=minitwitter

// Führt den Container im Hintergrund (detached mode) aus.
-d

//Verwendet das offizielle PostgreSQL-Docker-Image.
postgres
````


# git
### Grundlegende Befehle
````TypeScript
// Erstellt ein neues lokales Git-Repository.
git init
// Klont ein Remote-Repository auf den lokalen Rechner.
git clone <URL>
// Zeigt den Status der Dateien (geändert, hinzugefügt, entfernt).
git status
// Fügt eine Datei zur Staging-Area hinzu.
git add <datei>
// Speichert Änderungen mit einer Nachricht.
git commit -m "Nachricht"
// Überträgt lokale Commits in das Remote-Repository.
git push
// Holt Änderungen vom Remote-Repository und integriert sie.
git pull
````
### Branching und Zusammenarbeit
````TypeScript
// Listet alle Branches auf oder erstellt einen neuen.
git branch
// Wechselt zu einem bestimmten Branch.
git checkout <branch>
// Amlternative zu git checkout für Branchwechsel.
git switch <branch>
// Vereint den angegebenen Branch mit dem aktuellen.
git merge <branch>
// Überträgt einen lokalen Branch ins Remote-Repository.
git push origin <branch>
git push -u origin <branch>
````
### Dateien verwalten
````TypeScript
// Entfernt eine Datei aus dem Repository.
git rm <datei>
// Verschiebt oder benennt eine Datei um.
git mv <alte_datei> <neue_datei>
````
### Änderungen rückgängig machen
````TypeScript
// Entfernt die Datei aus der Staging-Area.
git reset <datei>
// Setzt den Branch auf einen bestimmten Commit zurück (inkl. Dateisystemänderungen).
git reset --hard <commit>
// Setzt den Branch zurück, behält aber Änderungen in der Staging-Area.
git reset --soft <commit>
// Setzt eine Datei auf den letzten Commit zurück.
git checkout -- <datei>
````
### Verlauf anzeigen
````TypeScript
// Zeigt die Commit-Historie an.
git log
// Zeigt die Commit-Historie als kurze Übersicht an.
git log --oneline
// Zeigt Änderungen im Vergleich zur Staging-Area.
git diff
// Zeigt Details eines bestimmten Commits.
git show <commit>
````
### Remote-Verwaltung
````TypeScript
// Zeigt verbundene Remote-Repositories an.
git remote -v
// Verknüpft ein lokales Repository mit einem Remote.
git remote add origin <URL>
// Holt Änderungen vom Remote, ohne sie zu integrieren.
git fetch
````

# docker
````TypeScript
docker compose up -d
docker compose down
````

# drizzle-kit
````TypeScript
bunx drizzle-kit push
bunx drizzle-kit studio
````