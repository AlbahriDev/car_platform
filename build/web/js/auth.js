let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// تسجيل دخول
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(user));
            showNotification('تم تسجيل الدخول بنجاح', 'success');
            setTimeout(() => {
                window.location.href = user.isAdmin ? 'admin.html' : 'index.html';
            }, 1000);
        } else {
            showNotification('البريد أو كلمة المرور غير صحيحة', 'error');
        }
    });
}

// إنشاء حساب
if (document.getElementById('registerForm')) {
    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;
        
        if (password !== confirmPassword) {
            showNotification('كلمة المرور غير متطابقة', 'error');
            return;
        }
        
        if (users.find(u => u.email === email)) {
            showNotification('البريد مستخدم بالفعل', 'error');
            return;
        }
        
        const newUser = {
            id: Date.now(),
            name,
            email,
            password,
            isAdmin: false,
            walletBalance: 0,
            transactions: [],
            createdAt: new Date().toISOString()
        };
        
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        currentUser = newUser;
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        
        showNotification('تم إنشاء الحساب بنجاح', 'success');
        setTimeout(() => window.location.href = 'index.html', 1000);
    });
}

// تسجيل خروج
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('currentUser');
        showNotification('تم تسجيل الخروج', 'info');
        setTimeout(() => window.location.href = 'login.html', 1000);
    });
}

function updateAuthUI() {
    currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const profileLink = document.getElementById('profileLink');
    const loginLink = document.getElementById('loginLink');
    const logoutBtnElement = document.getElementById('logoutBtn');
    
    if (currentUser) {
        if (loginLink) loginLink.style.display = 'none';
        if (profileLink) profileLink.style.display = 'inline-block';
        if (logoutBtnElement) logoutBtnElement.style.display = 'inline-block';
    } else {
        if (loginLink) loginLink.style.display = 'inline-block';
        if (profileLink) profileLink.style.display = 'none';
        if (logoutBtnElement) logoutBtnElement.style.display = 'none';
    }
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 12px 20px;
        border-radius: 10px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

document.addEventListener('DOMContentLoaded', updateAuthUI);