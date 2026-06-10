// عرض تفاصيل السيارة
function displayCarDetails() {
    const container = document.getElementById('carDetails');
    if (!container) return;
    
    const carId = localStorage.getItem('selectedCarId');
    console.log('Car ID from storage:', carId);
    
    if (!carId) {
        container.innerHTML = `
            <div class="container" style="text-align: center; padding: 100px 0;">
                <h2>⚠️ لم يتم اختيار سيارة</h2>
                <p>الرجاء العودة إلى الصفحة الرئيسية واختيار سيارة</p>
                <a href="index.html" class="auth-btn" style="display: inline-block; margin-top: 20px;">الذهاب للرئيسية</a>
            </div>
        `;
        return;
    }
    
    // تأكد من وجود carsDatabase
    if (typeof carsDatabase === 'undefined') {
        container.innerHTML = `
            <div class="container" style="text-align: center; padding: 100px 0;">
                <h2>⚠️ خطأ في تحميل البيانات</h2>
                <p>يرجى تحديث الصفحة</p>
            </div>
        `;
        return;
    }
    
    const car = carsDatabase.find(c => c.id == carId);
    
    if (!car) {
        container.innerHTML = `
            <div class="container" style="text-align: center; padding: 100px 0;">
                <h2>⚠️ السيارة غير موجودة</h2>
                <p>لم يتم العثور على بيانات السيارة المطلوبة</p>
                <a href="cars.html" class="auth-btn" style="display: inline-block; margin-top: 20px;">عرض جميع السيارات</a>
            </div>
        `;
        return;
    }
    
    // زيادة عدد المشاهدات
    car.views = (car.views || 0) + 1;
    
    // التحقق من المفضلة
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFavorite = favorites.includes(car.id);
    
    container.innerHTML = `
        <div class="container">
            <div class="details-container">
                <img src="${car.imageUrl}" alt="${car.name}" onerror="this.src='https://via.placeholder.com/800x400?text=Car+Image'">
                <div class="details-info">
                    <h1>${car.brand} ${car.name} ${car.model || ''}</h1>
                    <div class="price" style="font-size: 32px; color: #f59e0b; margin: 15px 0; font-weight: bold;">
                        ${car.price.toLocaleString()} ر.س
                    </div>
                    
                    <div class="specs-grid">
                        <div class="spec-item">
                            <i class="fas fa-calendar"></i>
                            <div class="label">سنة الصنع</div>
                            <div class="value">${car.year}</div>
                        </div>
                        <div class="spec-item">
                            <i class="fas fa-tachometer-alt"></i>
                            <div class="label">السرعة القصوى</div>
                            <div class="value">${car.maxSpeed} كم/س</div>
                        </div>
                        <div class="spec-item">
                            <i class="fas fa-gas-pump"></i>
                            <div class="label">استهلاك الوقود</div>
                            <div class="value">${car.fuelConsumption} كم/لتر</div>
                        </div>
                        <div class="spec-item">
                            <i class="fas fa-horse-head"></i>
                            <div class="label">القوة الحصانية</div>
                            <div class="value">${car.horsePower} حصان</div>
                        </div>
                        <div class="spec-item">
                            <i class="fas fa-charging-station"></i>
                            <div class="label">نوع الوقود</div>
                            <div class="value">${car.fuelType}</div>
                        </div>
                        <div class="spec-item">
                            <i class="fas fa-star"></i>
                            <div class="label">التقييم</div>
                            <div class="value">⭐ ${car.rating || 0} / 5</div>
                        </div>
                    </div>
                    
                    <div style="display: flex; gap: 10px; margin-top: 30px;">
                        <button onclick="toggleFavorite(${car.id})" class="auth-btn" style="background: ${isFavorite ? '#ef4444' : '#2563eb'}; flex: 1;">
                            <i class="fas fa-heart"></i> ${isFavorite ? 'إزالة من المفضلة' : 'إضافة إلى المفضلة'}
                        </button>
                        <button onclick="window.location.href='compare.html'" class="auth-btn" style="background: #10b981; flex: 1;">
                            <i class="fas fa-chart-line"></i> مقارنة هذه السيارة
                        </button>
                    </div>
                    
                    <button onclick="window.location.href='cars.html'" class="auth-btn" style="background: #6b7280; margin-top: 10px;">
                        <i class="fas fa-arrow-right"></i> العودة إلى قائمة السيارات
                    </button>
                </div>
            </div>
        </div>
    `;
}

// دالة toggleFavorite إذا لم تكن موجودة في main.js
if (typeof toggleFavorite === 'undefined') {
    window.toggleFavorite = function(carId) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const index = favorites.indexOf(carId);
        if (index === -1) {
            favorites.push(carId);
            alert('تمت إضافة السيارة إلى المفضلة');
        } else {
            favorites.splice(index, 1);
            alert('تمت إزالة السيارة من المفضلة');
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
        // إعادة تحميل الصفحة لتحديث حالة الزر
        location.reload();
    };
}

// تحميل الصفحة
if (document.getElementById('carDetails')) {
    document.addEventListener('DOMContentLoaded', function() {
        console.log('DOM loaded, displaying car details...');
        displayCarDetails();
        // تحديث واجهة المصادقة
        if (typeof updateAuthUI === 'function') {
            updateAuthUI();
        }
    });
}