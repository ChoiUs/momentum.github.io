const quotes = [
    {
        quote: "Comfort me say what I'm meant to you",
        singer: "_Yerin Baek",
    },
    {
        quote: "I love that you're stayin' at my place like you say home, sweet home, baby, you are my home",
        singer: "_Yerin Baek",
    },
    {
        quote: "now we are grown, but the same, I still need you",
        singer: "_Yerin Baek",
    },
    {
        quote: "I asked you, If you are the same what if I quit it",
        singer: "_Yerin Baek",
    },
    {
        quote: "Cause I love the gap between your teeth and I love the riddles that you speak",
        singer: "_Taylor Swift",
    },
    {
        quote: "Don't say yes, run away now",
        singer: "_Taylor Swift",
    },
    {
        quote: "You don't have to say I love you to say I love you",
        singer: "_Troye Sivan",
    },
    {
        quote: "You were my favorite regret",
        singer: "_Peder Elias",
    },
    {
        quote: "This is going no where but I love wasting my time with you",
        singer: "_Grace VanderWaal",
    },
    {
        quote: "You're my painkiller",
        singer: "_Ruel",
    },
];

const quote = document.querySelector("#quote span:first-child");
const singer = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
singer.innerText = todaysQuote.singer;