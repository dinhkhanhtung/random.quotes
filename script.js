const text = document.querySelector(".quote");
const author = document.getElementById("author");
const tweetButton = document.querySelector("#twitter");
const facebookButton = document.querySelector("#facebook");
const darkModeSwitch = document.querySelector("#toggle-dark-mode");

const getNewQuote = async () => {
    // API endpoint for quotes
    var url = "https://raw.githubusercontent.com/dinhkhanhtung/dkt/main/new-quotes.json";

    // Fetch the data from the API
    const response = await fetch(url);

    // Convert response to JSON and store it in the quotes array
    const allQuotes = await response.json();

    // Generates a random number between 0 and the length of the quotes array
    const indx = Math.floor(Math.random() * allQuotes.length);

    // Store the quote present at the randomly generated index
    const quote = allQuotes[indx].text;

    // Store the author of the respective quote
    const auth = allQuotes[indx].author;

    if (auth == null) {
        author.innerHTML = "Anonymous";
    } else {
        author.innerHTML = "~ " + auth;
    }

    // Function to dynamically display the quote and the author
    text.innerHTML = quote;

    // Tweet the quote
    tweetButton.href = "https://twitter.com/intent/tweet?text=" +
        encodeURIComponent(text.innerHTML) + " ~ " +
        encodeURIComponent(author.innerHTML);

    // Share on Facebook
    facebookButton.href = "https://www.facebook.com/sharer/sharer.php?u=" +
        encodeURIComponent(window.location.href);
};

document.getElementById("new-quote").addEventListener("click", getNewQuote);

tweetButton.addEventListener("click", () => {
    window.open("https://twitter.com/intent/tweet?text=" +
        encodeURIComponent(text.innerHTML) + " ~ " +
        encodeURIComponent(author.innerHTML),
        "_blank"
    );
});

facebookButton.addEventListener("click", () => {
    window.open("https://www.facebook.com/sharer/sharer.php?u=" +
        encodeURIComponent(window.location.href),
        "_blank"
    );
});

darkModeSwitch.addEventListener("change", () => {
    document.documentElement.classList.toggle("dark-mode", darkModeSwitch.checked);
});

const speechButton = document.getElementById('speech');
speechButton.addEventListener('click', () => {
    // Add code for handling the speech button click event (if needed)
    alert('Speech button clicked!');
});

const copyButton = document.getElementById('copy');
copyButton.addEventListener('click', () => {
    // Add code for handling the copy button click event (if needed)
    alert('Copy button clicked!');
});

getNewQuote();
