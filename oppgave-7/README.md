# Oppgave 7 - Oppsett av CI-pipeline

## :bulb: Mål med Oppgave 7

I denne oppgaven skal vi legge til kode for å kjøre bygg og enhetstester når vi lager pull requests. Til slutt setter vi opp en regel som sier at pipeline må kjøre uten feil før en pull request kan merges. 

Dette er i praksis en enkel continuous integration pipeline (CI), der vi kjører automatiske sjekker på om koden er god nok før vi merger den inn i `main` branch.

## 7.1 - Workflow - sjekke at en frontend-applikasjon bygger

Vi starter med å lage en workflow som sjekker at en liten frontend-applikasjon bygger uten feil når vi oppretter eller oppdaterer en pull request.

### 7.1.1 - Hent ned applikasjonen

:pencil2: Fra workshop-repoet, hent ned katalogen `code/app` inn i ditt eget repository, slik at du får mappen `code/app` i roten av ditt repository (behold mappestrukturen). Det enkleste er å klone ned workshop-repoet og kopiere over mappen. Ikke kopier med `node_modules` om du har kjørt `npm install` lokalt.

:pencil2: Legg til filene, commit til `main` og push.

:bulb: Applikasjonen er et lite Vite/TypeScript-prosjekt. Om du har Node installert, kan du prøve `npm install`, `npm run build` og `npm run test` i `code/app` lokalt for å se hva stegene under gjør.

### 7.1.2 - Opprett workflow-fil
:pencil2: Opprett filen `.github/workflows/frontend-build.yml` med innholdet under:

```yaml
name: Build frontend app

on:
  pull_request:
    paths:
      - 'code/app/**'
      - '.github/workflows/frontend-build.yml'
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

Her er det et par nye ting fra workflowen i oppgave 6. 

- Når vi legger til `paths` under trigger-typen, gjør det at workflowen kun trigges når noe under `code/app/` (eller selve workflow-filen) endres. Slik unngår vi unødvendige kjøringer.
- `defaults.run.working-directory` gjør at alle `run`-steg kjører i riktig mappe, så vi slipper å oppgi full sti hver gang.
- Steget `actions/checkout` henter ned koden og gjør den tilgjengelig i påfølgende steg. 
- Steget `actions/setup-node` installerer riktig Node-versjon og gjør den tilgjengelig i påfølgende steg.
- Steget `npm ci` installerer dependencies definert i `package-lock.json`. Her bruker vi `npm ci` istedet for `npm install` (se https://docs.npmjs.com/cli/v11/commands/npm-ci).
- Steget `npm run build` kjører script fra `package.json` som bygger løsningen.

:pencil2: Commit ny workflow til `main` og push. Opprett så en pull request med en endring i `code/app`. Prøv gjerne å committe en endring der du lager en kompileringsfeil i koden, for å se at workflowen feiler, og deretter fiks opp i det og sjekk at workflowen går igjennom. 

:bulb: Du kan bruke samme PR som du akkurat opprettet resten av workshopen, og committe nye endringer direkte i branchen din for å kjøre workflowen på nytt.

### 7.1.3 - Kjøring av tester

I `code/app` har vi lagt til noen enhetstester (`src/fizzbuzz.test.ts`). 

:pencil2: Legg til et steg i workflowen som kjører testene etter at `npm run build` er gjennomført. Kommandoen for dette er `npm run test`.

:pencil2: Prøv å endre på en test (eller på `fizzbuzz.ts`) slik at den feiler, push, og se at workflowen feiler på test-steget. Fiks deretter opp i det.

### 7.1.4 - Auditing av pakker

I de fleste applikasjoner bruker vi gjerne pakker/biblioteker som vi ikke har skrevet selv. For å sjekke at vi ikke tar med sikkerhetshull med oss i bygget fra disse pakkene, finnes det forskjellige verktøy for å analysere hva vi drar med oss av pakker. I NPM har vi et verktøy som heter `npm audit`. 

:pencil2: Legg til et ekstra steg som kjører `npm audit --audit-level=high` for å feile på alvorlige sårbarheter.

:bulb: Nye sårbarheter blir rapportert hele tiden, så dette steget kan begynne å feile "av seg selv" selv om ingen har endret koden. Det er nettopp poenget med steget. Om det skjer, kjør `npm audit` lokalt i `code/app` for å se hva som er rapportert, og `npm audit fix` for å oppdatere `package-lock.json` til versjoner uten kjente sårbarheter. Commit den oppdaterte `package-lock.json` og push.

## 7.2 - Krev at pipeline er grønn før merge

Foreløpig kjører workflowen, men ingenting hindrer oss i å merge en PR der bygget feiler. Det kan vi styre med et *ruleset* på `main`.

:pencil2: Gå til repoet ditt på Github -> Settings -> Rules -> Rulesets -> New ruleset -> New branch ruleset, og fyll ut:
- Ruleset Name: `main`
- Enforcement status: `Active`
- Target branches: Add target -> Include default branch
- Under Rules, huk av `Require status checks to pass`. Trykk `Add checks` og søk opp `build` (navnet på jobben i workflow-filen vår).
- Trykk `Create` nederst.

:pencil2: I PR-en din, lag en endring som gjør at bygget feiler, og push. Sjekk at merge-knappen nå er blokkert til sjekken er grønn. Fiks feilen, push, og merge PR-en.

:bulb: Rulesets og branch protection er gratis på offentlige repositorier. På private repositorier krever det Github Pro eller Team. Om repoet ditt er privat og du ikke får lagt til regelen, kan du gjøre repoet offentlig under Settings -> General -> Danger Zone -> Change visibility, eller hoppe over dette steget.

---

[:arrow_right: Gå til neste oppgave](../oppgave-8/README.md)
