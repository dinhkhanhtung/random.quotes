// Dữ liệu trích dẫn
const quotes = [
    {
        quote: "Trích dẫn mẫu 1.",
        author: "Tác giả 1"
    },
    {
        quote: "Trích dẫn mẫu 2.",
        author: "Tác giả 2"
    },
    {
        quote: "Trích dẫn mẫu 3.",
        author: "Tác giả 3"
    },
    // Thêm các trích dẫn khác nếu cần
];

// Chọn phần tử DOM
const quoteText = document.querySelector(".quote");
const authorText = document.querySelector(".author span:first-child");
const newQuoteBtn = document.getElementById("new-quote");

// Lấy trích dẫn ngẫu nhiên
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Hiển thị trích dẫn mới
function displayQuote() {
    const { quote, author } = getRandomQuote();
    quoteText.textContent = quote;
    authorText.textContent = author;
}

// Sự kiện nút Trích dẫn mới
newQuoteBtn.addEventListener("click", displayQuote);

// Hiển thị trích dẫn ban đầu
displayQuote();
// Trong hàm displayQuote()
function displayQuote() {
    const { quote, author } = getRandomQuote();
    console.log("Displaying new quote:", quote, author);
    quoteText.textContent = quote;
    authorText.textContent = author;
}

// Trong sự kiện click nút
newQuoteBtn.addEventListener("click", () => {
    console.log("New quote button clicked");
    displayQuote();
});

