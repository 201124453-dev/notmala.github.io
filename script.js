// دۆزینەوەی فۆڕمەکە (login-form) و دوگمەکە لە HTML
const loginForm = document.querySelector('.login-form');

// کاتێک بەکارهێنەر کلیک لە دوگمەی 'بچۆ ژوورەوە' دەکات
loginForm.addEventListener('submit', function(event) {
    
    // ڕێگەگرتن لە ڕیفرێشکردنی لاپەڕەکە (زۆر گرنگ بۆ ڕێگەگرتن لە بە فیڕۆچوونی زانیاری)
    event.preventDefault();

    // دۆزینەوەی بەهاکانی ناو بۆکسەکان
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // پشکنینی سادە
    if (usernameInput === '' || passwordInput === '') {
        alert('تکایە خانەکان بە بەتاڵی جێمەهێڵە!');
    } else {
        // لۆژیکی سەرەکی: ئەمە شوێنی ناردنی زانیارییە پارێزراوەکانە بۆ سێرڤەری زانکۆ
        
        alert(`ناوی بەکارهێنەر: ${usernameInput}\nوشەی نهێنی: ${passwordInput}\n\nزانیارییەکان بۆ سێرڤەری زانکۆ نێردرا!`);
        
        // دواتر دەتوانین فۆڕمەکە بەتاڵ بکەینەوە
        loginForm.reset();
    }
});
