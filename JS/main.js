let quotes = [

    {
        quote: "“Be yourself; everyone else is already taken.”",
        auther: "― Oscar Wilde",
    },
    {
        quote: "“So many books, so little time.” ",
        auther: "― Frank Zappa",
    },
    {
        quote: "“A room without books is like a body without a soul.” ",
        auther: " ― Marcus Tullius Cicero ",
    },
    {
        quote: "“To live is the rarest thing in the world. Most people exist, that is all.” ",
        auther: "― Oscar Wilde ",
    },

]


let newindex;

let lastindex;


let displayedQuotes = [];



function getQuotes() {

    if (displayedQuotes.length == quotes.length) {

        displayedQuotes = [];
    }


    lastindex = newindex;

    do {
        newindex = Math.floor(Math.random() * quotes.length);                    

    } while (newindex == lastindex || displayedQuotes.includes(newindex));




    displayedQuotes.push(newindex);



    console.log(newindex);


    document.getElementById("quote").innerHTML = quotes[newindex].quote;
    document.getElementById("auther").innerHTML = quotes[newindex].auther;

}