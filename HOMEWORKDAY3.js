/* ESERCIZIO 1
 Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
*/

const changeTitle = function (newTitle) {
  const h1 = document.querySelector("h1");
  h1.innerText = newTitle;
};

/* ESERCIZIO 2
 Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/

const addClassToTitle = function () {
  const h1 = document.querySelector("h1");
  h1.classList.add("myHeading");
};

/* ESERCIZIO 3
       Scrivi una funzione che cambi il testo dei p figli di un div
      */

const changePcontent = function (newText) {
  const allDivs = document.querySelectorAll("div p");
  allDivs.forEach((p) => {
    p.innerText = newText;
  });
};

/* ESERCIZIO 4
       Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
      */

const changeUrls = function () {
  const allLinls = document.querySelectorAll("a : not (footer a)");
  allLinls.forEach((allLinlk) => {
    allLinlk.href = "https://www.google.com";
  });
};

/* ESERCIZIO 5
       Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
    */

const addToTheSecond = function (text) {
  const secondList = document.getElementById("secondList");
  const newLi = document.createElement("li");
  newLi.innerText = text;
  secondList.appendChild(newLi);
};

/* ESERCIZIO 6
       Scrivi una funzione che aggiunga un paragrafo al primo div
    */

const addParagraph = function (text) {
  const firstDiv = document.querySelector("div");
  const newP = document.createElement("p");
  newP.innerText = text;
  firstDiv.appendChild(newP);
};

/* ESERCIZIO 7
       Scrivi una funzione che faccia scomparire la prima lista non ordinata
    */

const hideFirstUl = function () {
  const firstUl = document.getElementById("firstList");
  firstUl.style.display = "none";
};

/* ESERCIZIO 8 
       Scrivi una funzione che renda verde il background di ogni lista non ordinata
      */

const paintItGreen = function () {
  const allUls = document.querySelectorAll("ul");
  allUls.forEach((ul) => {
    ul.style.backgroundColor = "green";
  });
};

/* ESERCIZIO 9
       Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
      */

const makeItClickable = function () {
  const h1 = document.querySelector("h1");
  h1.addEventListener("click", () => {
    h1.innerText = h1.innerText.slice(0, -1);
  });
};

/* ESERCIZIO 10
       Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
      */

const revealFooterLink = function () {
  const footer = document.querySelector("footer");
  const link = footer.querySelector("a");
  footer.addEventListener("click", () => {
    alert(link.href);
  });
};

/* ESERCIZIO 11
       Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
       La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
    */

const generateTable = function () {
  const tableArea = document.getElementById("tableArea");
  const table = document.createElement("table");
  table.border = "1";
  table.style.width = "100%";
  table.style.borderCollapse = "collapse";
};

/* ESERCIZIO 12
       Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
    */

const addRow = function (imgUrl, nome, quantita, prezzo) {};
/* ESERCIZIO 14
      Crea una funzione che nasconda le immagini della tabella quando eseguita
    */

const hideAllImages = function () {
  const images = document.querySelectorAll("#tableArea img");
  images.forEach((img) => {
    img.style.display = "none";
  });
};

/* EXTRA ESERCIZIO 15
      Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
    */
