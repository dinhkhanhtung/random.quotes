const quoteText = document.getElementById("quote-text");
const authorText = document.getElementById("author-text");
const newQuoteBtn = document.getElementById("new-quote");

// Hàm lấy một trích dẫn ngẫu nhiên (hãy đảm bảo bạn đã triển khai nó)
function getRandomQuote() {
    // Thay thế hàm này với logic lấy trích dẫn ngẫu nhiên của bạn
    return { quote: "Sample Quote", author: "Author" };
}

// Hàm hiển thị trích dẫn mới
function displayQuote() {
    const { quote, author } = getRandomQuote();
    quoteText.textContent = quote;
    authorText.textContent = `— ${author}`;
}

// Xử lý sự kiện click nút "Trích Dẫn Mới"
newQuoteBtn.addEventListener("click", displayQuote);

// Gọi hàm hiển thị trích dẫn lần đầu tiên khi trang được tải
displayQuote();
document.addEventListener("DOMContentLoaded", function () {
    const quoteText = document.getElementById("quote-text");
    const authorText = document.getElementById("author-text");
    const newQuoteBtn = document.getElementById("new-quote");

    // Hàm lấy một trích dẫn ngẫu nhiên (hãy đảm bảo bạn đã triển khai nó)
    function getRandomQuote() {
        // Thay thế hàm này với logic lấy trích dẫn ngẫu nhiên của bạn
        return { quote: "Sample Quote", author: "Author" };
    }

    // Hàm hiển thị trích dẫn mới
    function displayQuote() {
        const { quote, author } = getRandomQuote();
        quoteText.textContent = quote;
        authorText.textContent = `— ${author}`;
    }

    // Xử lý sự kiện click nút "Trích Dẫn Mới"
    newQuoteBtn.addEventListener("click", displayQuote);

    // Gọi hàm hiển thị trích dẫn lần đầu tiên khi trang được tải
    displayQuote();
});
