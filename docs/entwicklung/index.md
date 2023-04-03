# Entwicklungsziele

## Benutzer\*innenoberfläche

- Unterstützung weiterer Sprachen (Localization)
- IFrame-Anwendung zum Einbinden in andere Portale
- die Fehlerbehandlung ausbauen
- Floralink als Desktopanwendung?
  (mit einem Framework für Desktop-Apps mit JavaScript, z.B. Electron)

## Datenquellen

- Referenzierung unterschiedlicher Taxonkonzepte
  (z. B. mit entsprechenden vorhandenen R packages)
- Unterstützung von Vegetationsaufnahmen
- zusätzliche Plugins
  - Import von lokalen Daten (.csv)
  - für andere Erfassungsportale in WerBeo (z. B. Flora-BB, vegetweb)
  - für kardinale taxonspezifische Daten (aus TRY)
- die Datenstruktur ausbauen und in Klassen/Typen überführen
  - Datentyp-Umwandlungen als Methoden auf den Klassen
  - einheitliche Referenzen für die Daten
    (ID, Datentyp und Metadaten zum Identifier Service)
  - Umstieg auf TypeScript (für zuverlässige Typen beim Programmieren)
  - Erfassungseinheiten (Events, Surveys) als Datentyp implementieren

## Abfrage

- Gebietsabfrage als WKT oder Shapefiles (mit Login bei WerBeo)
- Darstellung und Auswahl des Gebietes in einer Karte
- weitere Abfragekriterien: Validierungsstufe, Einbürgerungsstatus, …

## Auswertungen

- Reaktive Filter für taxonspezifische Statistiken im Bericht
- Vergleichsansicht für zwei ausgewählte Berichte mit zusätzlichen Statistiken (z. B. Beta-Diversität, Quantifikation der Veränderung)
- Auswertungen anhand der intraspezifischen Variabilität
  von kardinalskalierten Pflanzenmerkmalen
- Darstellung der Taxon-Aggregierung in der Gesamtliste
- Weitere Darstellungen
  - Diagramm zur zeitlichen Verteilung der Erfassungen
  - Karten für das Abfragegebiet mit Rasterpunkten
    und Farbaskala für taxonspezifische Daten
- Größerskalige Auswertungen
  - Normalverteilung (relative Häufigkeiten) der taxonspezifischen Daten für die gesamte Erfassungsregion in den Diagrammen hinterlegen
  - Karten für ein ganzes Erfassungsgebiet (z. B. Mecklenburg-Vorpommern)
    mit TK25-Rasterpunkten und Farbskala für taxonspezifische Daten
    (eigenes Programm)

## Export

- alle Tabellen und Diagramme in einem .zip-Archiv herunterladen
- Download des Berichts als PDF / Druckfunktion
- Export als Darwin Core Archive
- Berichte serverseitig unter Benutzer\*innenkonto speichern
  und per Link teilbar machen
