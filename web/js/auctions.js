// عرض جميع المزادات مع الفلترة
function displayAllAuctions() {
    const container = document.getElementById('allAuctions');
    if (!container) return;
    
    let filtered = [...auctionsDatabase];
    
    // تطبيق الفلاتر
    const search = document.getElementById('searchCar')?.value.toLowerCase();
    const brand = document.getElementById('brandFilter')?.value;
    const category = document.getElementById('categoryFilter')?.value;
    const sortBy = document.getElementById('sortBy')?.value;
    
    if (search) {
        filtered = filtered.filter(a => 
            a.name.toLowerCase().includes(search) || 
            a.brand.toLowerCase().includes(search)
        );
    }
    if (brand && brand !== '') {
        filtered = filtered.filter(a => a.brand === brand);
    }
    if (category && category !== '') {
        filtered = filtered.filter(a => a.category === category);
    }
    
    // الترتيب
    if (sortBy === 'ending') {
        filtered.sort((a,b) => new Date(a.endTime) - new Date(b.endTime));
    } else if (sortBy === 'price-asc') {
        filtered.sort((a,b) => a.currentBid - b.currentBid);
    } else if (sortBy === 'price-desc') {
        filtered.sort((a,b) => b.currentBid - a.currentBid);
    } else if (sortBy === 'bids') {
        filtered.sort((a,b) => (b.bids?.length || 0) - (a.bids?.length || 0));
    }
    
    if (filtered.length === 0) {
        container.innerHTML = '<p style="text-align:center;">لا توجد مزادات تطابق المعايير</p>';
        return;
    }
    
    container.innerHTML = filtered.map(auction => createAuctionCard(auction)).join('');
}

// تهيئة صفحة المزادات
if (document.getElementById('allAuctions')) {
    document.addEventListener('DOMContentLoaded', () => {
        displayAllAuctions();
        
        const filters = ['searchCar', 'brandFilter', 'categoryFilter', 'sortBy'];
        filters.forEach(filterId => {
            const element = document.getElementById(filterId);
            if (element) {
                element.addEventListener('input', displayAllAuctions);
                element.addEventListener('change', displayAllAuctions);
            }
        });
    });
}