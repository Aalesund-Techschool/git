# Oppgave 8 - Håndtering av hemmeligheter

## :bulb: Mål med Oppgave 8

Lære hvordan man lagrer og bruker hemmeligheter (secrets) i GitHub Actions uten å eksponere sensitiv informasjon i repo eller logger. Du skal ta inn en hemmelig URL (inkl. token) og bruke den til å kalle et webhook-endepunkt med POST.

I denne oppgaven skal vi bruke URL for en Discord Webhook til å ringe til Discord for å si fra om bygget vårt gikk bra eller ikke. I URLen ligger det et token som vi ikke ønsker å sjekke inn i kode. Vi kan registrere denne verdien som en secret i Github, og den vil derfra være beskyttet. 

URL blir tilgjengelig under workshop (f.eks. via Discord). Er denne ikke tilgjengeliggjort enda, så rop ut. Vi ønsker ikke at denne skal ligge innsjekket i repositoriet her, for å unngå misbruk. 

# 8.1 - Legg inn secret i GitHub

:pencil2: Gå til GitHub-repoet ditt -> Settings -> Secrets and variables -> Actions -> New repository secret.
:pencil2: Opprett en secret:
- Name: `WEBHOOK_URL`
- Value: (Lim inn hele URL-en)

# 8.2 - Opprett / oppdater workflow
Vi lager en workflow som kjører på pull requests og etter et vellykket build kaller webhooken.

:pencil2: Utvid workflow-filen du jobbet på tidligere, `.github/workflows/app-build.yml`, slik at den etter bygg, test og audit kaller webhooken.

Eksempel (tillegg nederst i eksisterende job):
```yaml
      - name: Call webhook (POST)
        env:
          WEBHOOK_URL: ${{ secrets.WEBHOOK_URL }}
        run: |
          curl -s -X POST -H 'Content-Type: application/json' \
            -d '{"content":"Build status: ✅","username": "$GITHUB_REPOSITORY"}' \
            "$WEBHOOK_URL"
```

Her henter vi secret fra Github sin secret storage og setter den i en miljøvariabel i jobb-steget, for å så bruke URL'en til å curl'e et endepunkt (curl er et vanlig brukt terminal-program for å utføre HTTP-kall).

:pencil2: Åpne / oppdater en PR og sjekk workflow-loggen. Verfiser at du ikke ser URL med hemmelighet i loggene. 

# 8.2 - Bonus: Skriv CI-status tilbake til Discord

:pencil2: 
- Dersom bygg, audit og test går igjennom, bruk webhook til å melde til Discord at pipeline vår er grønn. (Build status: ✅)
- Dersom noe feiler, enten bygg, test eller audit, skriv tilbake at bygget har feilet (Build status: ❌)

Her krever det litt googling i dokumentasjon til Github Actions. Prøv å sett dette sammen selv.