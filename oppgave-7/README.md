# Oppgave 7 - Oppsett av CI-pipeline

## :bulb: Mål med Oppgave 7

I denne oppgaven skal vi legge til kode for å kjøre bygg og enhetstester når vi lager pull requests. Vi skal bruke regler som sier at pipeline må kjøres uten feil før en pull requests kan merges. 

Dette er i praksis en enkel continuous integration pipeline (CI), der vi kjører automatiske sjekker på om koden er god nok før vi merger den inn i `main` branch.

# 7.1 - Workflow - sjekke at en frontend-applikasjon bygger

Vi starter med å lage en workflow som sjekker at frontend-applikasjonen under `code/app` bygger uten feil når vi oppretter eller oppdaterer en pull request.

### 7.1.1 - Opprett workflow-fil
:pencil2: Opprett filen `.github/workflows/frontend-build.yml` med innholdet under:

```yaml
name: Build frontend app

on:
  pull_request:
    paths:
      - 'code/app/**'
  workflow_dispatch:
jobs:
  build:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: code/app
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
            node-version: '22'
      - name: Install dependencies (ci)
        run: npm ci
      - name: Build application
        run: npm run build
```

Her er det et par nye ting fra workflow i oppgave 6. 

- Når vi legger til `paths` under trigger-type, gjør det at workflowen kun trigges når noe under `code/app/` endres. Slik unngår vi unødvendige kjøringer.
- Når vi legger til `defaults.run.working-directory` gjør at alle `run`-steg kjører i riktig mappe, så vi å oppgi full sti hver gang.
- Steget `actions/checkout` henter koden ned koden og gjør den tilgjengelig i påfølgende steg. 
- Steget `actions/setup-node` installerer riktig Node-versjon og gjør det tilgjengelig i påfølgende steg.
- Steget `npm ci` installerer dependencies definert i `package-lock.json`. Her bruker vi `npm ci` istedet for `npm install` (se https://docs.npmjs.com/cli/v11/commands/npm-ci).
- Steget `npm run build` kjører script fra `package.json` som bygger løsningen.

:pencil2: Commit ny action workflow og merge den inn i `main`. Opprett så en pull-request med en endring i `code/app` (Gjerne der du først får bygget til å feile for å sjekke at PR'en blir "rød", for å så fikse og få den "grønn").

### 7.1.4 - Kjøring av tester

I `app/code` har vi lagt til noen enhetstester (`fizzbuzz.test.ts`). Legg til et steg i workflow'en som kjører testene etter at `npm run build` er gjennomført. 

### 7.1.4 - Auditing av pakker

I de fleste applikasjoner bruker vi gjerne pakker/biblioteker som vi ikke har skrevet selv. For å sjekke at vi ikke tar med sikkerhetshull med oss i bygget fra disse pakkene, finnes det forskjellige verktøy for å analysere hva vi drar med oss av pakker. I NPM har vi et verktøy som heter `npm audit`. 

:pencil2: Legg til et ekstra steg som kjører `npm audit --audit-level=high` for å feile på alvorlige sårbarheter.

