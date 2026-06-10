// قاعدة بيانات المزادات
let auctionsDatabase = [
    {
        id: 1,
        name: "كامري",
        brand: "تويوتا",
        year: 2022,
        condition: "مصدومة",
        category: "damaged",
        currentBid: 25000,
        minIncrement: 1000,
        startPrice: 20000,
        imageUrl: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500",
        images: [
            "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500",
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500"
        ],
        endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
        bids: [
            { userName: "أحمد", amount: 25000, time: new Date().toISOString() }
        ],
        mileage: 45000,
        fuelType: "بنزين",
        transmission: "أوتوماتيك",
        color: "أبيض",
        location: "الرياض",
        status: "active"
    },
    {
        id: 2,
        name: "اكورد",
        brand: "هوندا",
        year: 2023,
        condition: "سليمة",
        category: "clean",
        currentBid: 55000,
        minIncrement: 2000,
        startPrice: 50000,
        imageUrl: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=500",
        images: [
            "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=500"
        ],
        endTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
        bids: [
            { userName: "محمد", amount: 55000, time: new Date().toISOString() }
        ],
        mileage: 15000,
        fuelType: "بنزين",
        transmission: "أوتوماتيك",
        color: "أسود",
        location: "جدة",
        status: "active"
    },
    {
        id: 3,
        name: "الفئة الخامسة",
        brand: "بي إم دبليو",
        year: 2024,
        condition: "مصدومة خفيف",
        category: "luxury",
        currentBid: 120000,
        minIncrement: 5000,
        startPrice: 100000,
        imageUrl: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500",
        images: [
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500"
        ],
        endTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
        bids: [
            { userName: "سعيد", amount: 120000, time: new Date().toISOString() }
        ],
        mileage: 8000,
        fuelType: "بنزين",
        transmission: "أوتوماتيك",
        color: "فضي",
        location: "الدمام",
        status: "active"
    }
];

// حفظ البيانات في localStorage
function saveAuctions() {
    localStorage.setItem('auctions', JSON.stringify(auctionsDatabase));
}

function loadAuctions() {
    const saved = localStorage.getItem('auctions');
    if (saved) {
        auctionsDatabase = JSON.parse(saved);
    } else {
        saveAuctions();
    }
}

// عرض المزادات الساخنة في الصفحة الرئيسية
function displayHotAuctions() {
    const container = document.getElementById('hotAuctions');
    if (!container) return;
    
    const hot = auctionsDatabase.filter(a => a.status === 'active').slice(0, 4);
    container.innerHTML = hot.map(auction => createAuctionCard(auction)).join('');
}

function createAuctionCard(auction) {
    const timeLeft = getTimeLeft(auction.endTime);
    return `
        <div class="auction-card" onclick="viewAuction(${auction.id})">
            <img src="${auction.imageUrl}" alt="${auction.name}">
            <div class="auction-info">
                <h3>${auction.brand} ${auction.name}</h3>
                <div class="brand">${auction.year} - ${auction.condition}</div>
                <div class="current-bid">${auction.currentBid.toLocaleString()} ر.س</div>
                <div class="bid-count">📊 ${auction.bids?.length || 0} عرضاً</div>
                <div class="countdown-timer">
                    <div class="timer">${timeLeft}</div>
                </div>
            </div>
        </div>
    `;
}

function getTimeLeft(endTime) {
    const now = new Date().getTime();
    const end = new Date(endTime).getTime();
    const diff = end - now;
    
    if (diff <= 0) return 'انتهى';
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 24) {
        const days = Math.floor(hours / 24);
        return `${days} يوم`;
    }
    return `${hours} ساعة ${minutes} دقيقة`;
}

function viewAuction(auctionId) {
    localStorage.setItem('selectedAuctionId', auctionId);
    window.location.href = 'auction-details.html';
}

// تحديث عدد المزادات النشطة
function updateActiveAuctionsCount() {
    const countElement = document.getElementById('activeAuctions');
    if (countElement) {
        const activeCount = auctionsDatabase.filter(a => a.status === 'active').length;
        countElement.textContent = activeCount;
    }
}

// تحميل الصفحة
loadAuctions();
document.addEventListener('DOMContentLoaded', () => {
    displayHotAuctions();
    updateActiveAuctionsCount();
});