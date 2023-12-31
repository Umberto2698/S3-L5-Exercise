/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
const n1 = 10;
const n2 = 20;
let sum = n1 + n2;
console.log("A) ", sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let randomNmb = Math.floor(Math.random() * 21);
console.log("B) ", randomNmb);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
  name: "Umberto",
  surname: "Zappulla",
  age: 25,
};
console.log("C) ", me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log("D) ", me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
let skills = ["HTML", "CSS", "JavaScript", "Latex"];
me.skills = skills;
console.log("E) ", me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("Matlab");
console.log("F ", me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log("G) ", me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = () => Math.floor(Math.random() * 6 + 1);

console.log("1) ", dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const whoIsBigger = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number") {
    alert("Inserisci due numeri");
  } else if (x === NaN || y === NaN) {
    alert("NaN non è valido");
  } else if (x === y) {
    return `I due numeri sono uguali a ${x}`;
  } else if (x > y) {
    return x;
  } else {
    return y;
  }
};
console.log("2) ", whoIsBigger(n1, n2));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = (str) => {
  if (typeof str !== "string") {
    alert("Inserisci una stringa");
  } else {
    let arr = [];
    arr.push(str.split(" "));
    return arr;
  }
};
console.log("3) ", splitMe("Ciao mamma sono a casa"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = (str, bool) => {
  if (typeof str !== "string") {
    alert("Inserisci una stringa e un booleano");
  } else if (typeof bool !== "boolean") {
    alert("Inserisci una stringa e un booleano ");
  } else if (bool === true) {
    return str.slice(1);
  } else {
    return str.slice(0, -1);
  }
};
console.log("4) ", deleteOne("Ciao mamma sono a casa", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
const onlyLetters = (str) => {
  if (typeof str !== "string") {
    alert("Inserisci una stringa e un booleano");
  } else {
    let arr = [...str];
    let nmbArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (let i = 0; i < arr.length; i++) {
      if (
        nmbArr.some((value) => {
          return value === arr[i];
        })
      ) {
        arr.splice(i, 1, " ");
      }
    }
    str = arr.join("");
    return str;
  }
};
console.log("5) ", onlyLetters("Ci4o m4mm4 sono a casa 234"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
const isThisAnEmail = (str) => {
  if (typeof str !== "string") {
    alert("Inserisci un valido indirizzo email");
  } else {
    let arr = [...str];
    let chiocciola = "@";
    if (arr[0] === chiocciola || arr[-1] === chiocciola) {
      alert("Inserisci un valido indirizzo email");
    } else if (
      arr.some((letter) => {
        return letter === chiocciola;
      })
    ) {
      let indirizzo = ["gmail.com", "gmail.it", "hotmail.com", "hotmail.it", "libero.com", "libero.it"];
      if (
        indirizzo.some((end) => {
          return str.endsWith(end);
        })
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      alert("Inserisci una @");
    }
  }
};
console.log("6) ", isThisAnEmail("blabla@gmail.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsIt = () => {
  const dayOfTheWeek = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
  let today = new Date();
  let n = today.getDay();
  return dayOfTheWeek[n];
};
console.log("7) ", whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
const rollTheDices = (int) => {
  if (typeof int !== "number") {
    alert("Inserisci un numero intero");
  } else if (int === NaN) {
    alert("Questo valore non è valido, inserisci un numero intero");
  } else if (parseInt(int) !== int) {
    alert("Inserisci un numero intero");
  } else {
    const ritorna = {
      sum: 0,
      values: [],
    };
    for (let i = 0; i < int; i++) {
      let rolled = dice();
      ritorna.values.push(rolled);
      ritorna.sum += rolled;
    }
    return ritorna;
  }
};
console.log("8) ", rollTheDices(3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const howManyDays = (date) => {
  let today = Date.now();
  let thatDate = Date.parse(date);
  let howManyMillisec = today - thatDate;
  let days = parseInt(howManyMillisec / 86400000);
  console.log("9) Sono passati ", days, "giorni");
};
let date = new Date(72389422927);
howManyDays(date);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const isTodayMyBirthday = () => {
  let today = new Date(Date.now());
  const myBirtday = new Date("April 26");
  if (today.getDate() === myBirtday.getDate() && today.getMonth() === myBirtday.getMonth()) {
    return true;
  } else {
    return false;
  }
};
console.log("10) ", isTodayMyBirthday());

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const deleteProp = (obj, str) => {
  if (obj.hasOwn(str)) {
    delete obj.str;
  }
  return obj;
};

/* Questo array viene usato per gli esercizi. Non modificarlo. */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 12
Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
newestMovie = (arr) => {
  let arrYear = [];
  arr.forEach((film) => arrYear.push(parseInt(film.Year, 10)));
  let arrYearSorted = [...arrYear];
  arrYearSorted.sort();
  let year = arrYearSorted[arrYearSorted.length - 1];
  let position = arrYear.indexOf(year);
  return arr[position];
};
console.log("12 ", newestMovie(movies));

/* ESERCIZIO 13
Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = (arr) => {
  let total = 0;
  arr.map(() => total++);
  return total;
};
console.log("13) ", countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const onlyTheYears = (arr) => {
  let onlyYear = [];
  arr.forEach((film) => {
    onlyYear.push(film.Year);
  });
  return onlyYear;
};
console.log("14) ", onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = (arr) => arr.filter((film) => parseInt(film.Year, 10) < 2000);

console.log("15) ", onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = (arr) => arr.reduce((total, film) => total + parseInt(film.Year, 10), 0);

console.log("16) ", sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = (str) => {
  const filteredMovies = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(str)) {
      filteredMovies.push(movies[i]);
    }
  }
  return filteredMovies;
};

console.log("17) ", searchByTitle("The"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const searchAndDivide = (str) => {
  const obj = {
    match: [],
    unmatch: [],
  };
  const filteredMovies = [];
  const otherMovies = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(str)) {
      filteredMovies.push(movies[i]);
    } else {
      otherMovies.push(movies[i]);
    }
  }
  obj.match.push(filteredMovies);
  obj.unmatch.push(otherMovies);
  return obj;
};
console.log("18) ", searchAndDivide("The"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
const removeIndex = (n) => {
  movies.splice(n, 1);
  return movies;
};
console.log("19) ", removeIndex(3));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const getContainer = () => {
  const container = document.getElementById(container);
};

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const getAllTd = () => {
  const td = document.getElementsByTagName("td");
  for (let i = 0; i < td.length; i++) {
    console.log(td[i]);
  }
};

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const whatIsInside = () => {
  const td = document.getElementsByTagName("td");
  for (let i = 0; i < td.length; i++) {
    console.log(td[i].innerText);
  }
};

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const redBackground = () => {
  const links = document.getElementsByTagName("link");
  for (let i = 0; i < links.length; i++) {
    links[i].style.backgroundColor = "red";
  }
};

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const addUl = () => {
  const ul = document.getElementById("myList");
  const li = document.createElement("li");
  ul.appendChild(li);
};

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const emptyUl = () => {
  const ul = document.getElementById("myList");
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
};

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const addClass = () => {
  const tr = document.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) {
    tr[i].classList.add("test");
  }
};

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
const halfTree = (n) => {
  const div = document.querySelector("div");
  let halftree = "";
  for (let i = 0; i < n; i++) {
    halftree += "*";
    const p = document.createElement("p");
    p.innerText = halftree;
    div.appendChild(p);
  }
};
halfTree(6);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
const tree = (n) => {
  const div = document.querySelector("body>div:nth-child(2)");
  let Tree = "";
  for (let i = 0; i < n; i++) {
    Tree += "*";
    Tree = Tree.padStart(i + (i + 1), "*");
    const p = document.createElement("p");
    p.innerText = Tree;
    div.appendChild(p);
  }
};
tree(5);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
const isItPrime = (n) => {
  let dividendo = 2;
  if (n === 1) {
    return true;
  }
  for (let i = 1; i < n; i++) {
    if (dividendo === n) {
      return true;
    } else if (n % dividendo === 0) {
      return false;
    }
    dividendo++;
  }
};
console.log("29) ", isItPrime(13), isItPrime(1), isItPrime(121));
