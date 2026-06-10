let selectedCars = [];

function loadCarSelectors() {
    const select1 = document.getElementById('carSelect1');
    const select2 = document.getElementById('carSelect2');
    
    if (!select1) return;
    
    const options = carsDatabase.map(car => 
        `<option value="${car.id}">${car.brand} ${car.name} (${car.year})</option>`
    ).join('');
    
    select1.innerHTML = '<option value="">اختر سيارة</option>' + options;
    select2.innerHTML = '<option value="">اختر سيارة</option>' + options;
    
    select1.addEventListener('change', updateCompare);
    select2.addEventListener('change', updateCompare);
}

function updateCompare() {
    const carId1 = document.getElementById('carSelect1').value;
    const carId2 = document.getElementById('carSelect2').value;
    
    selectedCars = [];
    if (carId1) selectedCars.push(carsDatabase.find(c => c.id == carId1));
    if (carId2) selectedCars.push(carsDatabase.find(c => c.id == carId2));
    
    displayCompareTable();
}

function displayCompareTable() {
    const container = document.getElementById('compareTable');
    if (!container) return;
    
    if (selectedCars.length === 0) {
        container.innerHTML = '<p style="text-align:center;">الرجاء اختيار سيارة للمقارنة</p>';
        return;
    }
    
    const specs = [
        { label: 'الاسم', key: 'name', icon: '🚗' },
        { label: 'الشركة', key: 'brand', icon: '🏭' },
        { label: 'السعر', key: 'price', icon: '💰', formatter: (v) => `${v.toLocaleString()} ر.س` },
        { label: 'سنة الصنع', key: 'year', icon: '📅' },
        { label: 'المحرك', key: 'horsePower', icon: '⚡', formatter: (v) => `${v} حصان` },
        { label: 'السرعة القصوى', key: 'maxSpeed', icon: '🏎️', formatter: (v) => `${v} كم/س` },
        { label: 'استهلاك الوقود', key: 'fuelConsumption', icon: '⛽', formatter: (v) => `${v} كم/لتر` },
        { label: 'نوع الوقود', key: 'fuelType', icon: '🔥' }
    ];
    
    let tableHTML = `
        <div class="compare-wrapper">
            <div class="compare-cards">
                ${selectedCars.map(car => `
                    <div class="compare-car-card">
                        <img src="${car.imageUrl}" alt="${car.name}">
                        <h3>${car.brand} ${car.name}</h3>
                        <div class="compare-specs">
                            ${specs.map(spec => `
                                <div class="compare-spec-item">
                                    <span class="spec-icon">${spec.icon}</span>
                                    <span class="spec-label">${spec.label}:</span>
                                    <span class="spec-value">${spec.formatter ? spec.formatter(car[spec.key]) : car[spec.key]}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    container.innerHTML = tableHTML;
}

// تهيئة الصفحة
if (document.getElementById('compareTable')) {
    document.addEventListener('DOMContentLoaded', loadCarSelectors);
}