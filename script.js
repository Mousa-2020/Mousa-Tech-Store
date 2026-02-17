// ===== المتغيرات العامة =====
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentFilter = 'all';

// ===== عرض المنتجات =====
function displayProducts(products) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    let allProducts = [];
    for (const category in products) {
        allProducts = allProducts.concat(products[category]);
    }

    const productsToShow = currentFilter === 'all' ? allProducts : products[currentFilter] || [];
    
    if (productsToShow.length === 0) {
        grid.innerHTML = '<p style="text-align: center; padding: 40px;">لا توجد منتجات</p>';
        return;
    }

    grid.innerHTML = productsToShow.slice(0, 8).map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">$${(product.price / 1500).toFixed(0)}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> أضف للسلة
                </button>
            </div>
        </div>
    `).join('');
}

// ===== إضافة للسلة =====
function addToCart(productId) {
    let product = null;
    for (const category in productsData) {
        const found = productsData[category].find(p => p.id === productId);
        if (found) {
            product = found;
            break;
        }
    }

    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        alert('تمت الإضافة للسلة ✅');
    }
}

// ===== تحديث عداد السلة =====
function updateCartCount() {
    const counts = document.querySelectorAll('.cart-count');
    counts.forEach(el => {
        el.textContent = cart.length;
    });
}

// ===== تصفية المنتجات =====
function filterProducts(category) {
    currentFilter = category;
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    displayProducts(productsData);
}

// ===== البحث =====
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(productsData);
    updateCartCount();

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            // تنفيذ البحث
        });
    }
});
