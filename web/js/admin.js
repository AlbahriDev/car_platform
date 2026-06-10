// التحقق من صلاحيات المدير
function checkAdminAccess() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser || !currentUser.isAdmin) {
        window.location.href = 'login.html';
    }
}

// إضافة سيارة جديدة
if (document.getElementById('addCarForm')) {
    checkAdminAccess();
    
    document.getElementById('addCarForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newCar = {
            id: Date.now(),
            name: document.getElementById('carName').value,
            brand: document.getElementById('carBrand').value,
            model: document.getElementById('carModel').value,
            year: parseInt(document.getElementById('carYear').value),
            price: parseFloat(document.getElementById('carPrice').value),
            fuelType: document.getElementById('carFuelType').value,
            fuelConsumption: parseFloat(document.getElementById('carFuelConsumption').value),
            horsePower: parseInt(document.getElementById('carHorsePower').value),
            maxSpeed: parseInt(document.getElementById('carMaxSpeed').value),
            imageUrl: document.getElementById('carImageUrl').value,
            rating: 0,
            views: 0
        };
        
        carsDatabase.push(newCar);
        localStorage.setItem('carsDatabase', JSON.stringify(carsDatabase));
        
        showNotification('تمت إضافة السيارة بنجاح', 'success');
        document.getElementById('addCarForm').reset();
        loadManageCars();
    });
}

// تحميل السيارات للإدارة
function loadManageCars() {
    const container = document.getElementById('manageCarsList');
    if (!container) return;
    
    container.innerHTML = carsDatabase.map(car => `
        <div class="car-manage-item">
            <img src="${car.imageUrl}" width="80" height="60">
            <div>
                <strong>${car.brand} ${car.name}</strong><br>
                السعر: ${car.price.toLocaleString()} ر.س
            </div>
            <div>
                <button onclick="editCar(${car.id})" class="edit-btn-small">✏️ تعديل</button>
                <button onclick="deleteCar(${car.id})" class="delete-btn-small">🗑️ حذف</button>
            </div>
        </div>
    `).join('');
}

function deleteCar(carId) {
    if (confirm('هل أنت متأكد من حذف هذه السيارة؟')) {
        carsDatabase = carsDatabase.filter(c => c.id !== carId);
        showNotification('تم حذف السيارة', 'success');
        loadManageCars();
        if (document.getElementById('allCars')) displayAllCars();
    }
}

function editCar(carId) {
    const car = carsDatabase.find(c => c.id === carId);
    if (!car) return;
    
    // ملء النموذج للتعديل
    document.getElementById('carName').value = car.name;
    document.getElementById('carBrand').value = car.brand;
    document.getElementById('carModel').value = car.model;
    document.getElementById('carYear').value = car.year;
    document.getElementById('carPrice').value = car.price;
    document.getElementById('carFuelType').value = car.fuelType;
    document.getElementById('carFuelConsumption').value = car.fuelConsumption;
    document.getElementById('carHorsePower').value = car.horsePower;
    document.getElementById('carMaxSpeed').value = car.maxSpeed;
    document.getElementById('carImageUrl').value = car.imageUrl;
    
    // تغيير سلوك النموذج للتعديل
    const form = document.getElementById('addCarForm');
    form.onsubmit = (e) => {
        e.preventDefault();
        car.name = document.getElementById('carName').value;
        car.brand = document.getElementById('carBrand').value;
        car.model = document.getElementById('carModel').value;
        car.year = parseInt(document.getElementById('carYear').value);
        car.price = parseFloat(document.getElementById('carPrice').value);
        car.fuelType = document.getElementById('carFuelType').value;
        car.fuelConsumption = parseFloat(document.getElementById('carFuelConsumption').value);
        car.horsePower = parseInt(document.getElementById('carHorsePower').value);
        car.maxSpeed = parseInt(document.getElementById('carMaxSpeed').value);
        car.imageUrl = document.getElementById('carImageUrl').value;
        
        showNotification('تم تعديل السيارة بنجاح', 'success');
        loadManageCars();
        form.reset();
        form.onsubmit = originalSubmit;
    };
    
    const originalSubmit = form.onsubmit;
}

// تحميل المستخدمين للإدارة
function loadManageUsers() {
    const container = document.getElementById('usersList');
    if (!container) return;
    
    const usersList = JSON.parse(localStorage.getItem('users')) || [];
    container.innerHTML = usersList.map(user => `
        <div class="user-manage-item">
            <div>
                <strong>${user.name}</strong><br>
                ${user.email}<br>
                ${user.isAdmin ? '👑 مدير' : '👤 مستخدم'}
            </div>
            <div>
                ${!user.isAdmin ? `<button onclick="makeAdmin(${user.id})" class="edit-btn-small">⭐ جعل مدير</button>` : ''}
                <button onclick="deleteUser(${user.id})" class="delete-btn-small">🗑️ حذف</button>
            </div>
        </div>
    `).join('');
}

function makeAdmin(userId) {
    let usersList = JSON.parse(localStorage.getItem('users')) || [];
    usersList = usersList.map(u => u.id === userId ? { ...u, isAdmin: true } : u);
    localStorage.setItem('users', JSON.stringify(usersList));
    showNotification('تمت ترقية المستخدم إلى مدير', 'success');
    loadManageUsers();
}

function deleteUser(userId) {
    if (confirm('هل أنت متأكد من حذف هذا المستخدم؟')) {
        let usersList = JSON.parse(localStorage.getItem('users')) || [];
        usersList = usersList.filter(u => u.id !== userId);
        localStorage.setItem('users', JSON.stringify(usersList));
        showNotification('تم حذف المستخدم', 'success');
        loadManageUsers();
    }
}

// التبديل بين التبويبات
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
        
        if (btn.dataset.tab === 'manageCars') loadManageCars();
        if (btn.dataset.tab === 'manageUsers') loadManageUsers();
    });
});

// تحميل الصفحة
if (document.getElementById('manageCarsList')) {
    document.addEventListener('DOMContentLoaded', () => {
        loadManageCars();
        loadManageUsers();
    });
}