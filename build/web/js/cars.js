// عرض جميع السيارات مع الفلترة
function displayAllCars() {
    const container = document.getElementById('allCars');
    if (!container) return;
    
    let filteredCars = [...carsDatabase];
    
    // تطبيق الفلاتر
    const brand = document.getElementById('brandFilter')?.value;
    const year = document.getElementById('yearFilter')?.value;
    const fuel = document.getElementById('fuelFilter')?.value;
    const maxPrice = document.getElementById('priceFilter')?.value;
    
    if (brand && brand !== '') {
        filteredCars = filteredCars.filter(car => car.brand === brand);
    }
    if (year && year !== '') {
        filteredCars = filteredCars.filter(car => car.year == year);
    }
    if (fuel && fuel !== '') {
        filteredCars = filteredCars.filter(car => car.fuelType === fuel);
    }
    if (maxPrice && maxPrice !== '') {
        filteredCars = filteredCars.filter(car => car.price <= parseInt(maxPrice));
    }
    
    // تطبيق الترتيب
    const sortBy = document.getElementById('sortBy')?.value;
    if (sortBy === 'price-asc') {
        filteredCars.sort((a,b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
        filteredCars.sort((a,b) => b.price - a.price);
    } else if (sortBy === 'year') {
        filteredCars.sort((a,b) => b.year - a.year);
    } else {
        filteredCars.sort((a,b) => a.name.localeCompare(b.name));
    }
    
    if (filteredCars.length === 0) {
        container.innerHTML = '<p style="text-align:center;">لا توجد سيارات تطابق المعايير</p>';
        return;
    }
    
    container.innerHTML = filteredCars.map(car => createCarCard(car)).join('');
}

// تهيئة صفحة السيارات
if (document.getElementById('allCars')) {
    document.addEventListener('DOMContentLoaded', () => {
        displayAllCars();
        
        // إضافة مستمعي الأحداث للفلاتر
        const filters = ['brandFilter', 'yearFilter', 'fuelFilter', 'priceFilter', 'sortBy'];
        filters.forEach(filterId => {
            const element = document.getElementById(filterId);
            if (element) {
                element.addEventListener('change', displayAllCars);
                if (filterId === 'priceFilter') {
                    element.addEventListener('input', (e) => {
                        document.getElementById('priceValue').textContent = `0 - ${parseInt(e.target.value).toLocaleString()}`;
                    });
                }
            }
        });
        
        // زر إعادة تعيين
        const resetBtn = document.getElementById('resetFilters');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                document.getElementById('brandFilter').value = '';
                document.getElementById('yearFilter').value = '';
                document.getElementById('fuelFilter').value = '';
                document.getElementById('priceFilter').value = '500000';
                document.getElementById('priceValue').textContent = '0 - 500,000';
                document.getElementById('sortBy').value = 'name';
                displayAllCars();
            });
        }
        
        // البحث من الصفحة الرئيسية
        const searchQuery = localStorage.getItem('searchQuery');
        if (searchQuery) {
            setTimeout(() => {
                const searchInput = document.getElementById('searchInput');
                if (searchInput) {
                    searchInput.value = searchQuery;
                    // يمكن تنفيذ البحث هنا
                }
                localStorage.removeItem('searchQuery');
            }, 100);
        }
    });
}