$(document).ready( function () {
  // Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
  var studente = {
    nome: "Nome",
    cognome: "Cognome",
    eta: "Età",
  }

  // Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
  for (var key in studente) {
    console.log(key + ': ' + studente[key]);
    $("#proprieta").append(key + ': ' + studente[key] + '<br>')
  }

  // Creare un array di oggetti di studenti.
  var studenti = [
    {
      nome: "Walter",
      cognome: "Rubicondo",
      eta: 28,
    },
    {
      nome: "Leonardo",
      cognome: "Bongianni",
      eta: 30,
    },
    {
      nome: "Andrea",
      cognome: "Gori",
      eta: 28,
    }
  ]


  // Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

  for (var i = 0; i < studenti.length; i++) {
    console.log(studenti[i].nome + ' ' + studenti[i].cognome);
    $("#nomi-cognomi").append(studenti[i].nome + ' ' + studenti[i].cognome + '<br>')
  }

    // Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

  var nome = prompt("inserisci il tuo nome");
  var cognome = prompt("inserisci il tuo cognome");
  var eta = prompt("inserisci la tua eta");

  var studente =
    {
      nome: nome,
      cognome: cognome,
      eta: eta,
    }
    ;

  studenti.push(studente);
  console.log(studenti);
  for (var key in studenti) {
    $("#elenco").append(studenti[key].nome + " " + studenti[key].cognome + " " + studenti[key].eta + "<br>") }


// Variante Input

    // $("#add").click(function () {
    //   var nome = $("#nome").val();
    //   var cognome = $("#cognome").val();
    //   var eta = $("#eta").val();
    //
    //   var studente = {
    //     nome: nome,
    //     cognome: cognome,
    //     eta: eta,
    //   }
    //   studenti.push(studente)
    //   for (var key in studenti) {
    //     $("#elenco").append(studenti[key].nome + " " + studenti[key].cognome + " " + studenti[key].eta + "<br>")
    //   }
    // })

})
