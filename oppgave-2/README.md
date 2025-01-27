# Oppgave 2 - Brancher og konflikter

## :bulb: Mål med Oppgave 2

Etter denne oppgaven skal du kunne å:

- Opprette brancher
- Merge brancher
- Håndtere konflikter

## 2.1 - Første feature branch

### 2.1.1 - Første commit

Når en arbeider sammen, er det svært vanlig å bruke branches i Git. Når du lager en branch, bryter du ut i en egen gren fra hoved-branchen, der du kan arbeide fritt uten å påvirke andre sitt arbeid.

:pencil2: Sjekk at du står i `main` branch (`git branch`) og sjekk deretter ut en ny branch med kommandoen `git checkout -b feature-branch-1`. Da vil du sjekke ut en ny branch med navn `feature-branch-1` som går ut fra branchen du sto på, `main`. Nå kan du fritt arbeide i denne branchen (og pushe branchen til et remote repository) og arbeide uforstyrret.

:pencil2: Opprett en fil som heter `index.ts` i repositoriet ditt og legg følgende innhold inn i filen. Sjekk filen inn i lokalt repository med en passende commit-melding.

```ts
export const greeting = (name: string) => {
    console.log(`Hello ${name}`);
};
```

### 2.1.2 - Bruk av `git diff`

:pencil2: Erstatt innholdet i `index.ts` med kodesnutten under. Bruk deretter `git diff` for å se hvilke endringer du har utført.

```ts
/**
 * Function that greets a person
 * @param firstname First name
 * @param lastname Last name
 */

export const greeting = (firstname: string, lastname: string) => {
    console.log(`Hello ${firstname} ${lastname}`);
};
```

:bulb: `git diff` er nyttig når du vil se en liten diff. Skal du inspisere en større diff, er det lurt å bruke verkøyet i VS Code eller tilsvarende verktøy i andre editorer/IDEer. Under ser du hvor du finner git-verktøyet i VS Code. Du finner git-verktøyet i VS Code ved å trykke på følgende ikon: 

![alt text](image-1.png)


:pencil2: Sjekk diff i VS code

![alt text](image.png)

:pencil2: Lag en commit med siste endring i `index.ts`. Velg en passende commit-melding.

## 2.2 - Merging av brancher

:bulb: Når vi arbeider sammen, gjør vi gjerne endringer i en branch og merger til en sentral branch (`main` eller `master`). Slik kan vi skille ferdig og uferdig kode, og kan arbeide fritt i egen branch frem til arbeidet vårt er klart til å gå inn i sentral branch (og videre ut til produksjon).

:pencil2: Ta inn endringene du gjorde i `feature-branch-1` inn i `main` branch. Kommandoene under viser hvordan du sjekker ut `main` branch, og deretter fletter inn endringene fra din feature-branch.

```sh
git checkout main
git merge feature-branch-1
```

:bulb: Om du har vært borti merging før, forventet du kanskje at det skulle opprettes en merge-commit? Siden vi ikke har noe arbeid i `main` branch som gjør at historien skiller seg (og historien forblir lineær), vil vi få en "fast-forward"-merge, og det vil ikke lages en merge-commit.

## 2.3 - Konflikter

Når en er flere som arbeider sammen, ender man ofte opp med å jobbe i samme fil, og kan komme til å endre de samme delene av koden. Dette skjer relativt ofte når en arbeider i større team. For at git skal vite hvordan endringer skal konsolideres, må en løse eventuelle konflikter. Nå skal vi lage en kunstig konflikt, som vi skal løse.

:pencil2: Sjekk ut en feature-branch, `feature-branch-3`, fra `main` branch. Erstatt innholdet i `index.ts` med innholdet i `code/2.3-endring-1.ts`. Sjekk endringene inn i en commit i branchen din.

:pencil2: Sjekk ut `main` branch, og ut i fra `main` branch, opprett en ny branch, `feature-branch-4`. Erstatt innholdet i `index.ts` med innholdet i `code/2.3-endring-2.ts`.

Vi har nå 2 commits fra main der begge endrer samme fil, har laget en kunstig situasjon der vi "går i beina på hverandre". 
![alt text](image-2.png)


:pencil2: Merge `feature-branch-3` inn i `main` branch. 

![alt text](image-3.png)

:pencil2: Merge `feature-branch-4` inn i `main` branch. Løs konflikten slik at endringene fra `feature-branch-4` blir med videre. Dvs:
- Output fra `greeting`-funksjonen starter med `Hei hei`.
- Det er 2 objekter i array'en `people`.

:pencil2: I git-verktøyet i VS Code, trykk på filen `index.ts` som under `Merge Changes`, og velg `Resolve in Merge Editor`
![alt text](image-5.png)

:bulb: Du vil få opp 3 vinduer. Ett vindu til venstre med tittel `Incoming`. Dette er endringene fra branchen som skal inn i `main`. Du har ett vindu som heter `Current`, som er innholdet i main. Til slutt har du et `Result`-vindu nederst som viser hvordan endelig merge ser ut. 

:pencil2: Velg `Accept Incoming` i `Incoming`-vinduet for å velge riktig side.  Klikk deretter `Complete Merge`. 

:pencil2: For å fullføre merge, gå i terminalen din for å stage filen du har merget med `git add index.ts`. Fullfør deretter merge med kommando `git merge --continue`. Du vil få opp et editor-vindu, der du kan beskrive merge-commit nærmere. Lukk dette vinduet for å godta merge-commit. 

:pencil2: Sjekk `git log`. Du bør nå ha en merge-commit i loggen din. 

![alt text](image-7.png)


![alt text](image-6.png)

:bulb: Nå har vi merget en branch med konflikter inn i `main`. En god strategi er å holde din feature-branch oppdatert mot `main` og løse konflikter den veien. Da har du anledning til å løse konflikten og påse at innholdet i feature-branchen din fungere som det skal, og slipper konflikter for `main`.

:bulb: Av og til er det ikke så enkelt at man kan velge fra `Incoming` eller `Current`, da en kanskje vil ha litt fra hver side. Det går an å klippe og lime inn i `Result` vinduet fra de to andre vinduene for å gjennomføre merge. Eksempelvis kan en akseptere en side, og kopiere det man trenger fra den andre siden. 



:bulb: Når du merger en branch, oppretter vi en egen commit i git-historikken som beskriver endringene i commitene du merger inn. Dette fungere som en bro mellom historikken i de 2 forskjellige branchene og gjør at vi får en felles historikk i branchen i merger inn i.

---

[:arrow_right: Gå til neste oppgave](../oppgave-3/README.md)
