// Hàm xử lý hiển thị các citations
function showQuote(quote) {
  const quoteElement = document.getElementById('quote');
  quoteElement.innerHTML = quote;
  quoteElement.style.maxHeight = '0';
  quoteElement.style.overflow = 'hidden';
  quoteElement.style.transition = 'max-height 0.3s ease';

  setTimeout(() => {
    quoteElement.style.maxHeight = '100vh';
    quoteElement.style.overflow = 'visible';
  }, 300);
}

// Hàm xử lý sự kiện click vào các nút chọn
function openModal(quote) {
  const modalElement = document.getElementById('modal');
  modalElement.style.display = 'block';
  showQuote(quote);
}

// Hàm đóng góng các citations khi mở rộng màn hình
window.addEventListener('resize', () => {
  const quotes = document.querySelectorAll('.quote');
  quotes.forEach((quote) => {
    const quoteElement = document.getElementById(quote.dataset.id);
    quoteElement.style.maxHeight = '0';
    quoteElement.style.overflow = 'hidden';
    quoteElement.style.transition = 'max-height 0.3s ease';

    setTimeout(() => {
      quoteElement.style.maxHeight = '100vh';
      quoteElement.style.overflow = 'visible';
    }, 300);
  });
});

// Hàm đóng góng các citations khi đóng góng màn hình
window.addEventListener('load', () => {
  const quotes = document.querySelectorAll('.quote');
  quotes.forEach((quote) => {
    openModal(quote);
  });
});

// Hàm đóng góng các citations khi mở rộng màn hình
// window.addEventListener('resize', () => {
//   const quotes = document.querySelectorAll('.quote');
//   quotes.forEach((quote) => {
//     const quoteElement = document.getElementById(quote.dataset.id);
//     quoteElement.style.maxHeight = '0';
//     quoteElement.style.overflow = 'hidden';
//     quoteElement.style.transition = 'max-height 0.3s ease';
//
//     setTimeout(() => {
//       quoteElement.style.maxHeight = '100vh';
//       quoteElement.style.overflow = 'visible';
//     }, 300);
//   });
// });
