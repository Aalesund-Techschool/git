# Oppgave 4 - Rebasing

## :bulb: Mål med Oppgave 4

Etter denne oppgaven skal du kunne å:

- Bruke `git rebase` for å flette endringer
- Bruke `git rebase` i interaktiv-modus
- Bruke `git pull --rebase` for å bruke rebase når du drar ned endringer

### Git rebase

Vi skal nå sette oss i en situasjon lik før, der vi har behov for å merge endringer. I stedet for å bruke `git merge`, skal vi bruke `git rebase`.

:pencil2: TODO: Kopier inn endringer til fil, push til main og feature branch, gå til feature branch, og bruk `git rebase main` for å rebase endringene i main inn i feature branch

OBS: Du ønsker som regel aldri å rebase i main. Da skriver du om historikken i felles arbeidsbranch!

### Git rebase interactive

Når du står i en feature-branch, vil du i noen tilfeller skrive om commits du har sjekket inn, f.eks. ved å slå sammen commits eller endre commit-melding for en commit. Dette kan du gjøre med `git rebase` i interaktiv modus.

### Git pull --rebase

---

[:arrow_right: Gå til neste oppgave](../oppgave-5/README.md)
