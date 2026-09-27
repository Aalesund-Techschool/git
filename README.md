# Versjonskontroll med Git og GitHub actions

## Introduksjon

Git har blitt det vanligste verktøyet utviklere bruker til kodeversjonering, og har blitt et av de viktigste verktøyene å mestre for å kunne være produktiv som utvikler. Dette er viktig for å både kunne utvikle programvare effektivt, men også for å kunne samhandle med andre effektivt.

I denne workshopen skal vi innom Git i kommandolinjen, der vi går igjennom de grunnleggende mekanismene rundt å versjonere filer. Vi ser på de viktigste kommandoene, og vi ser også på tips for å ro seg i land når ting går galt. Vi skal bruke [GitHub](https://github.com) for å arbeide mot et repository utenfor egen maskin, der vi også ser på bruk av Pull Requests. For å merge endringer og løse konflikter, bruker vi Visual Studio Code, men du kan såklart bruke en annen editor eller IDE om du ønsker det.

### Oppgavesettet

- Oppgave 1 - 5 omhandler bruk av Git og en introduksjon til GitHub.
- Oppgave 6 - 8 omhandler bruk av GitHub Actions for å etablere en continuous integration (CI) pipeline for automatisk sjekk av kodekvalitet / bygg.

### Hva er forskjellen på Git og GitHub?

Git er et versjonskontrollsystem som brukes lokalt på din maskin, mens GitHub er en nettside som tilbyr hosting av Git-repositorier. GitHub gjør det mulig å samarbeide med andre utviklere, dele kode og bruke funksjoner som Pull Requests og Issues.

## Oppsett på egen maskin

### Git

Sørg for at Git er installert på maskinen din og er tilgjengelig fra kommandolinje/terminal.

Om du alt har Git installert, kan du hoppe over dette steget. I Windows, sjekk om du har programmet Git Bash installert. Er du på Mac OS eller Linux, kan du sjekke om Git er tilgjengelig med å skrive `git version` i terminalen din.

:bulb: Har du ikke Git installert, finner du oppskrift for å installere på alle operativsystemer her: <https://git-scm.com/book/en/v2/Getting-Started-Installing-Git>

### Editor / IDE

Du står fritt til å bruke den kode-editoren eller IDEen du selv foretrekker, men vi anbefaler varmt Visual Studio Code eller IntelliJ IDEA.

:exclamation: Merk at vi bruker Visual Studio Code i workshopen.

## Kom igang

- Selv om du har denne filen (`README.md`) på egen maskin om du har klonet ned repoet, er det enklere å lese på GitHub med tanke på formattering. Vi anbefaler derfor at du bruker nettleser til å lese oppgavene.
- Start på oppgave 1, og spør gjerne om det er noe som er uklart eller noe du ønsker å diskutere.

:exclamation: Vi skal ikke bruke en GUI-klient for git-kommandoer i denne workshopen. Alle Git-kommandoer skriver vi i terminal/CLI. Visual Studio Code bruker vi kun til å se på diff og løse merge-konflikter. Det er lurt å unngå klipp-og-lim for å bli vant til å skrive git-kommandoer, selv om det kan oppleves som tungvint i starten. Etterhvert som en får det inn i fingrene blir bruk av CLI-verktøy en veldig effektiv måte å jobbe på.

## Øvelser

Dette repositoriet har et sett med øvelser organisert i kataloger. Hver katalog inneholder en egen `README.md` som beskriver oppgaven.

- [Oppgave 1](oppgave-1/README.md)
- [Oppgave 2](oppgave-2/README.md)
- [Oppgave 3](oppgave-3/README.md)
- [Oppgave 4](oppgave-4/README.md)
- [Oppgave 5](oppgave-5/README.md)
- [Oppgave 6](oppgave-6/README.md)
- [Oppgave 7](oppgave-7/README.md)
- [Oppgave 8](oppgave-8/README.md)
