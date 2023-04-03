# Datenquellen

Die Daten in Floralink stammen aus verschiednen Quellen. Bisher kann nur die GermanSL als taxonomische Referenzdatenbank dienen. Die Erfassungsdaten stammen aus der [Flora-MV](https://www.flora-mv.de/), abgerufen über die Werbeo-API. Alle Daten werden über [@floralink/databases](https://github.com/floralink/databases) eingebunden und für die Weiterverarbeitung modelliert.

## Taxonomische Referenzdaten

| Name         | Beschreibung                                                         | Quelle | Datenherkunft                                           | Primärquelle          |
| ------------ | -------------------------------------------------------------------- | ------ | ------------------------------------------------------- | --------------------- |
| **germansl** | Taxonreferenz für Pflanzen, Moose, Algen und Flechten in Deutschland | lokal  | [GermanSL](https://germansl.infinitenature.org/) v1.5.1 | Jansen & Dengler 2008 |

## Taxonspezifische Daten

| Name                            | Beschreibung                                                           | Quelle | Datenherkunft                                           | Primärquelle                                               |
| ------------------------------- | ---------------------------------------------------------------------- | ------ | ------------------------------------------------------- | ---------------------------------------------------------- |
| **ellenberg**                   | Ellenbergsche Zeigerwerte                                              | lokal  | [GermanSL](https://germansl.infinitenature.org/) v1.5.1 | Ellenberg 1991, Ellenberg et al. 2010 (Beschreibungstexte) |
| **fukarekhenker**               | N-F-T-Status                                                           | lokal  | [GermanSL](https://germansl.infinitenature.org/) v1.5.1 | Fukarek & Henker 2006                                      |
| **rotelistemv** (experimentell) | Rote-Liste-Klassifizierung der Gefäßpflanzen in Mecklenburg-Vorpommern | lokal  | [GermanSL](https://germansl.infinitenature.org/) v1.5.1 | Voigtländer & Henker 2005                                  |

## Erfassungsdaten

| Name       | Quelle | Datenherkunft                                          |
| ---------- | ------ | ------------------------------------------------------ |
| **werbeo** | API    | [Flora-MV](https://www.flora-mv.de/) (über WerBeo-API) |

## Literaturhinweise

**Ellenberg**, H. (1991): Zeigerwerte von Pflanzen in Mitteleuropa, Scripta geobotanica 18: 9-166. Goltze: Göttingen.

**Ellenberg**, Heinz, Leuschner, Christoph, Dierschke, Hartmut (2010): Vegetation Mitteleuropas mit den Alpen: in ökologischer, dynamischer und historischer Sicht. Stuttgart: Verlag Eugen Ulmer

**Fukarek**, Franz, Henker, Heinz (2006): Flora von Mecklenburg-Vorpommern: Farn- und Blütenpflanzen. Jena: Weissdorn-Verlag Jena

**Jansen**, F. & Dengler, J. (2008): GermanSL - eine universelle taxonomische Referenzliste für Vegetationsdatenbanken. Tuexenia 28: 239–253

**Voigtländer**, Ulrich, Henker, Heinz (2005): Rote Liste der Farn- und Blütenpflanzen Mecklenburg-Vorpommerns.
