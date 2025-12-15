document.addEventListener('DOMContentLoaded', function() {
    // الحصول على عناصر التحكم
    const toggleImage = document.getElementById('toggleImage');
    const loginForm = document.getElementById('loginForm');

    // ⚡ الحالة المبدئية: إخفاء الفورم
    loginForm.style.display = 'none';

    // مستمع حدث النقر على زر التشغيل/الإيقاف
    toggleImage.addEventListener('click', function() {
        
        // 1. تبديل فئات الصورة
        toggleImage.classList.toggle('off-state');
        toggleImage.classList.toggle('on-state');
        
        // 2. التحقق من الحالة الحالية لتحديد ما إذا كان يجب عرض الفورم أو إخفاؤه
        const is_on = toggleImage.classList.contains('on-state');
        
        if (is_on) {
            // إذا كان On: اعرض الفورم
            loginForm.style.display = 'flex'; 
        } else {
            // إذا كان Off: أخفِ الفورم
            loginForm.style.display = 'none';
        }
    });
});
