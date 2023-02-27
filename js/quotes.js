const quoteBlock = document.querySelector('.quote');
const authorBlock = document.querySelector('.author');
const changeQuoteBtn = document.querySelector('.change-quote');
let quoteNum = Math.floor(Math.random() * 20) + 1;
async function getQuotes() {  
    const quotes = '../assets/json/quotes.json';
    const res = await fetch(quotes);
    const data = await res.json();
    quoteBlock.innerHTML = data[quoteNum]['text'];
    authorBlock.innerHTML = data[quoteNum]['author'];
}
getQuotes();
const changeQuote = function() {
    quoteNum = Math.floor(Math.random() * 20) + 1;
    getQuotes();
}
changeQuoteBtn.addEventListener('click', changeQuote);