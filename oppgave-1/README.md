# Oppgave 1 - Vanlige kommandoer

## :bulb: Mål med Oppgave 1

Etter denne oppgaven skal du kunne å:

- Konfigurere git på egen maskin
- Lære noen av de mest brukte kommandoene i CLIen:
  - `git init` (Initialisere git-repository som spores både lokalt og på Github)
  - `git add` (Legge til filer i staging-området)
  - `git commit` (Commit'e filer til i lokalt repository)
  - `git push` (Push'e filer til remote repository)
  - `git pull` (Hente filer fra remote repository)

## Oppsett av git-config

:bulb: I denne seksjonen skal vi sette opp konfigurasjon som beskriver "hvem du er" i git. Du kan hoppe over denne delen om dette er alt noe du har satt opp. Om `git config --global user.name` og `git config --global user.email` returnerer ditt navn og epost-adresse, har du alt satt dette opp.

:pencil2: Konfigurer navn og epost i git-konfigurasjonen din

```
git config --global user.name "Ditt Navn"
git config --global user.email ditt.navn@epost.no
```

Erstatt `Ditt Navn` og `ditt.navn@epost.no` med ditt eget navn og epostadresse.

:bulb: I enkelte tilfeller trenger du en editor når du bruker Git via CLI, eksempelvis når du skal godta en merge eller skrive om commits. Avhengig av hvilket operativsystem du bruker, kan standardvalget være satt til notepad, vim eller nano. Ønsker du å bruke en annen editor, kan du konfigurere dette.

:pencil2: Konfigurer standard editor (valgfritt)

Om du ikke vil konfigurere standard editor for git (dvs. du er fornøyd med den du alt bruker, f.eks. vim eller nano), kan du hoppe over dette steget.

For å konfigurere Git til å bruke Visual Studio Code som standard editor, kan du føre inn følgende kommando i terminalen din:

```
git config --global core.editor "code --wait"
```

## Opprett git repository

:pencil2: Opprett en ny tom katalog på maskinen din som du kan kalle `git-workshop-files` for å unngå potensiell konflikt med navnet på dette repoet om du har klonet det ned. Sørg for at du står i denne katalogen i terminalen din.

:pencil2: Initialiser et git repository. Dette gjør du med kommandoen `git init`.
Du vil se terminalen svare tilbake:

```
Initialized empty Git repository in /[sti til katalog]/git-workshop-files/.git/
```

## Første git commit

:pencil2: Legg til en fil som heter `README.md`. Legg en passende tekst i filen (f.eks. `"Techschool git workshop"`).

:pencil2: Sjekk inn filen i ditt lokale repository. Dette gjør du i to steg:

1. `git add README.md` legger til filen i repoets "staging-område", der det gjøres klart til å commites.
2. `git commit -m "Initial commit"` commiter filen til ditt lokale repository. `"Initial commit"` er meldingen som er tilknyttet commit'en. Du kan skrive hva du vil her, men `"Intial commit"` er ofte en god melding for å beskrive et repository sin første commit.

:pencil2: Sjekk commit'en i historikken. For å se dette i terminalen kan du skrive

```
git log
```

:bulb: Du har nå opprettet et git-repository og lagt inn første commit via kommandolinjen. Bra jobba! Nå har vi alt arbeid lokalt på egen maskin, men vi ønsker gjerne å sjekke inn koden et sentralt sted.

:pencil2: Opprett et Github-repository. Har du ikke en github-konto, må du opprette dette.

:pencil2: Sett repositoriets `remote origin` til github-repositoriet ditt, og push endringene dine.

:pencil2: For å simulere en endring utenfor egen maskin, trykk på blyant-ikonet på github.com, og endre en fil. I terminalen din, skriv `git pull` for å hente ned siste endringer.
