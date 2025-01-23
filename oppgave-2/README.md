# Oppgave 2 - Brancher og konflikter

## :bulb: Mål med Oppgave 2

Etter denne oppgaven skal du kunne å:

- Opprette brancher
- Merge brancher
- Håndtere konflikter

## 2.1 - Første branch

Når en arbeider sammen, er det svært vanlig å bruke git branches. Når du lager en branch, bryter du ut i en egen gren fra hoved-branchen, der du kan arbeide fritt uten å påvirke andre sitt arbeid.

:pencil2: Sjekk at du står i `main` branch (`git branch`) og sjekk deretter ut en ny branch med kommandoen `git checkout -b feature-branch-1`. Da vil du sjekke ut en ny branch med navn `feature-branch-1` som spinner ut av branchen du sto på, `main`. Nå kan du fritt arbeide i denne branchen (og pushe branchen til et remote repository) og arbeide uforstyrret.

:pencil2: Kopier innhold i filen `code/copypasta/2.1.ts` og legg innholdet i `code/index.ts`. Sjekk at du ser endringene enten ved å bruke diff-verktøyet i VS Code, eller bruk `git diff`. Commit endringen i branchen din. Sjekk at finner igjen endringen i git-loggen (`git log`).

:bulb: Når vi arbeider sammen, gjør vi gjerne endringer i brancher og merger til hovedbranchen (`main` eller `master`). Slik kan vi skille ferdig og uferdig kode, og slipper å blokkere hovedbranch fra å gå ut i produksjon.

## 2.2 - Merging av brancher

:bulb: Når du merger en branch, oppretter vi en egen commit i git-historikken som beskriver endringene i commitene du merger inn. Dette fungere som en bro mellom historikken i de 2 forskjellige branchene og gjør at vi får en felles historikk i branchen i merger inn i.

:pencil2: Ta inn endringene du gjorde i `feature-branch-1` inn i `main` branch

```sh
git checkout main
git merge feature-branch-1
```

Du vil få opp et editor-vindu (f.eks. Visual Studio Code, Vi, Nano). Dette er i tilfelle du vil beskrive merge-commiten videre.

:pencil2: Lagre og lukk editor-vinduet for å fullføre merge.

## 2.3 - Konflikter

Når en er flere som arbeider sammen, ender man ofte opp med å jobbe i samme fil, og kan komme til å endre de samme delene av koden. For at git skal vite hvordan endringer skal konsolideres, må en løse eventuelle konflikter.Nå skal vi lage en kunstig konflikt, som vi skal løse.

:pencil2: Sjekk ut en feature-branch, `feature-branch-3`, fra `main` branch. Erstatt innholdet i `code/index.ts` med innholdet i `code/copypasta/2.3-endring-1.ts`. Sjekk endringene inn i en commit i branchen din.

:pencil2: Sjekk ut `main` branch, og ut i fra `main` branch, opprett en ny branch, `feature-branch-4`. Erstatt innholdet i `code/index.ts` med innholdet i `code/copypasta/2.3-endring-2.ts`.

:pencil2: Skift

- Kopiere innhold fra fil 1, legge inn i main
- Kopiere innhold fra fil 2, legge i en commit i en feature-branch
- Merge main inn i feature-branch, resolve konflikter
- Pushe endringer i feature-branch til remote

---

[:arrow_right: Gå til neste oppgave](../oppgave-3/README.md)
