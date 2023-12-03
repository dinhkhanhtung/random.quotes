// Lấy các phần tử từ DOM
const text = document.querySelector(".quote");
const author = document.getElementById("author");
const tweetButton = document.querySelector("#twitter");
const facebookButton = document.querySelector("#facebook");

// Hàm lấy trích dẫn mới từ API
const getNewQuote = async () => {
    const url = "https://raw.githubusercontent.com/dinhkhanhtung/dkt/main/new-quotes.json";
    const response = await fetch(url);
    const allQuotes = await response.json();
    const indx = Math.floor(Math.random() * allQuotes.length);
    const quote = allQuotes[indx].text;
    const auth = allQuotes[indx].author;

    text.innerHTML = quote;
    author.innerHTML = auth ? "~ " + auth : "Anonymous";

    // Cập nhật liên kết chia sẻ trên Twitter và Facebook
    tweetButton.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text.innerHTML)} ~ ${encodeURIComponent(author.innerHTML)}`;
    facebookButton.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
};

// Sự kiện click cho nút "Trích dẫn mới"
document.getElementById("new-quote").addEventListener("click", getNewQuote);

// Sự kiện click cho nút chia sẻ trên Twitter và Facebook
[tweetButton, facebookButton].forEach(button => {
    button.addEventListener("click", () => {
        window.open(button.href, "_blank");
    });
});

// Sự kiện click cho các nút khác (nếu cần)
["speech", "copy"].forEach(id => {
    document.getElementById(id).addEventListener("click", () => {
        alert(`${id.charAt(0).toUpperCase() + id.slice(1)} button clicked!`);
    });
});

// Gọi hàm lấy trích dẫn mới khi tải trang
getNewQuote();
