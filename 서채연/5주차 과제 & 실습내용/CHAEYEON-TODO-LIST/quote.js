let quotes = [
    {
        quote : "If you want the present to be differnet from the past, study the past.",
        author : "- Baruch Spinoza"
    },
    {
        quote : "Change is hard at first, messy in the middle and gorgeous at the end.",
        author : "- Robin Sharma"
    },
    {
        quote : "You wait and watch and work: You don’t give up.",
        author : "- Anne Lamott"
    },
    {
        quote : "A champion is someone who gets up when he can't.",
        author : "- Jack Dempsey"
    },
    {
        quote : "He who has dreamed for long resembles his dream.",
        author : "- Andre Malraux"
    },
    {
        quote : "The measure of intelligence is the ability to change.",
        author : "- Albert Einstein"
    },
    {
        quote : "Everyone thinks of changing the world, but no one thinks of changing himself.",
        author : "- Leo Tolstoy"
    },
    {
        quote : "Be the change that you wish to see in the world.",
        author : "- Mahatma Gandhi"
    }
];

let quote = document.getElementById('quote');
let author = document.getElementById('author');

function RandomQuotes () {
let random = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerHTML = random.quote;
author.innerHTML = random.author;
return random;
}

function init () {
    RandomQuotes();
}

init();