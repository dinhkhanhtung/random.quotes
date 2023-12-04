// Lấy các phần tử từ HTML
var copyButton = document.getElementById('copy');
var speechButton = document.getElementById('speech');
var favoriteButton = document.getElementById('favorite');
var downloadButton = document.getElementById('download-image');
var tweetButton = document.getElementById('twitter');
var facebookButton = document.getElementById('facebook');
var quoteText = document.querySelector(".quote");
var authorText = document.getElementById("author");
var newQuoteButton = document.getElementById('new-quote');

var isSpeaking = false; // Biến để theo dõi trạng thái của việc phát âm thanh

// Hàm lấy trích dẫn mới
const getNewQuote = async () => {
    //api for quotes
    var url = "https://raw.githubusercontent.com/dinhkhanhtung/random.quotes/main/new-quotes.json";

    // fetch the data from api
    const response = await fetch(url);

    //convert response to json and store it in quotes array
    const allQuotes = await response.json();

    // Generates a random number between 0 and the length of the quotes array
    const indx = Math.floor(Math.random() * allQuotes.length);

    //Store the quote present at the randomly generated index
    const quote = allQuotes[indx].text;

    //Store the author of the respective quote
    const auth = allQuotes[indx].author;

    if (auth == null) {
        authorText.innerHTML = "Anonymous";
    } else {
        authorText.innerHTML = "~ " + auth;
    }

    //function to dynamically display the quote and the author
    quoteText.innerHTML = quote;

    //tweet the quote
    tweetButton.href = "https://twitter.com/intent/tweet?text=" +
        encodeURIComponent(quoteText.textContent) + " ~ " +
        encodeURIComponent(authorText.textContent);

    // Check if the quote is in the favorites list
    var favoriteQuotes = JSON.parse(localStorage.getItem('favoriteQuotes')) || [];
    var isFavorite = favoriteQuotes.some(function(favoriteQuote) {
        return favoriteQuote.quote === quote && favoriteQuote.author === auth;
    });

    // Update the color of the favorite button
    favoriteButton.style.color = isFavorite ? "red" : "";

    // share on Facebook
    facebookButton.href = "https://www.facebook.com/sharer/sharer.php?u=" +
        encodeURIComponent(window.location.href);
};

// Thêm sự kiện cho nút copy
copyButton.addEventListener('click', function() {
    var textArea = document.createElement("textarea");
    textArea.value = quoteText.textContent + ' - ' + authorText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
    alert("Trích dẫn đã được sao chép!");
});

// Thêm sự kiện cho nút nghe
speechButton.addEventListener('click', function() {
    var speech = new SpeechSynthesisUtterance();
    speech.lang = "vi-VN";
    speech.text = quoteText.textContent;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    if (isSpeaking) {
        // Nếu đang phát âm thanh, hãy dừng lại
        window.speechSynthesis.cancel();
        isSpeaking = false;
    } else {
        // Nếu không, hãy bắt đầu phát âm thanh
        window.speechSynthesis.speak(speech);
        isSpeaking = true;
    }
});

// Thêm sự kiện cho nút yêu thích
favoriteButton.addEventListener('click', function() {
    // Lưu trích dẫn yêu thích vào localStorage hoặc thực hiện hành động khác
    var favoriteQuotes = JSON.parse(localStorage.getItem('favoriteQuotes')) || [];
    var quote = quoteText.textContent;
    var author = authorText.textContent;

    // Check if the quote is already in the favorites list
    var index = favoriteQuotes.findIndex(function(favoriteQuote) {
        return favoriteQuote.quote === quote && favoriteQuote.author === author;
    });

    if (index === -1) {
        // If it's not in the favorites list, add it
        favoriteQuotes.push({quote, author});
        favoriteButton.style.color = "red";
    } else {
        // If it's already in the favorites list, remove it
        favoriteQuotes.splice(index, 1);
        favoriteButton.style.color = "";
    }

    localStorage.setItem('favoriteQuotes', JSON.stringify(favoriteQuotes));
});

// Thêm sự kiện cho nút tải xuống
downloadButton.addEventListener('click', function() {
    // Tải xuống trích dẫn hoặc thực hiện hành động khác
    var element = document.createElement('a');
    var quote = quoteText.textContent;
    var author = authorText.textContent;
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(quote + ' - ' + author));
    element.setAttribute('download', 'quote.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
});

// Thêm sự kiện cho nút chia sẻ trên Twitter
tweetButton.addEventListener('click', function() {
    var tweetUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quoteText.textContent + ' - ' + authorText.textContent);
    window.open(tweetUrl, '_blank');
});

// Thêm sự kiện cho nút chia sẻ trên Facebook
facebookButton.addEventListener('click', function() {
    var facebookUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(document.URL);
    window.open(facebookUrl, '_blank');
});

// Thêm sự kiện cho nút "Trích dẫn mới"
newQuoteButton.addEventListener('click', function() {
    // Dừng âm thanh nếu đang phát
    if (isSpeaking) {
        window.speechSynthesis.cancel();
        isSpeaking = false;
    }

    // Lấy trích dẫn mới
    getNewQuote();
});

// Hiển thị thông điệp ban đầu
quoteText.innerHTML = "Xin vui lòng nhấp vào nút 'Trích dẫn Mới' để nhận một Trích dẫn mới!";
authorText.innerHTML = "~ Đinh Khánh Tùng";
