# test-xdatanet

Per l'avvio del progetto è necessario avere una versione recente di Node.js installata.
Testato con la versione 22.13.0 di Node

### Installazione dipendenze

```sh
npm install
```

### Avvio progetto

```sh
npm run dev
```

### Test ed informazioni utili

L'indirizzo di default per poter utilizzare l'applicativo è http://localhost:5173

Oltre al login con google ho creato un form per il login con username e password. Ho già inserito un utente con queste credenziali:

- username: test@test.it
- password: Prova12!

Nel form di login non sono state fatte validazioni grafiche in tempo reale. Per semplicità viene fatto un controllo su username e password solamente al submit

Nella pagina principale è possibile fare il logout e visualizzare la lista degli elementi con il relativo dettaglio.

Se si vogliono aggiungere elementi è possibile accedere alla firebase console con le seguenti credenziali:

- email: t64608072@gmail.com
- password: Prova12!
