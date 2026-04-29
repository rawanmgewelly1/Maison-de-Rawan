// --- 1. Slider Functionality ---
function setupSlider() {
    const nextBtn = document.getElementById('next-slide');
    const prevBtn = document.getElementById('prev-slide');
    const proContainer = document.querySelector('.pro-container');

    if (nextBtn && prevBtn && proContainer) {
        nextBtn.onclick = () => proContainer.scrollBy({ left: 350, behavior: 'smooth' });
        prevBtn.onclick = () => proContainer.scrollBy({ left: -350, behavior: 'smooth' });
    }
}

// --- 2. Shop & Fetch API (GET Request) ---
async function loadShop() {
    const shopContainer = document.getElementById('shop-container');
    if (!shopContainer) return;

    try {
        const response = await fetch('products.json'); 
        const products = await response.json();
        
        shopContainer.innerHTML = ""; 
        products.forEach(p => {
            shopContainer.innerHTML += `
                <div class="pro">
                    <img src="${p.image}" alt="">
                    <div class="des">
                        <span>${p.collection} Collection</span>
                        <h5>${p.name}</h5>
                        <h4>EGP ${p.price}</h4>
                    </div>
                    <a href="javascript:void(0)" class="add-cart-btn" onclick="addToCart(${p.id}, '${p.name}', '${p.price}', '${p.image}')">
                        <i class="fal fa-shopping-cart"></i>
                    </a>
                </div>`;
        });
    } catch (error) { console.error("Error loading products:", error); }
}

// --- 3. Add to Cart (POST Request & LocalStorage) ---
async function addToCart(id, name, price, image) {
    // حفظ في الـ LocalStorage عشان الكارت يشتغل فعلياً
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cleanPrice = String(price).replace(/,/g, '');

    const isExist = cart.find(item => item.id === id);
    if (isExist) {
        isExist.quantity += 1;
    } else {
        cart.push({ id, name, price: cleanPrice, image, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));

    // إرسال POST Request عشان درجات المشروع (Week 8)
    try {
        await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({ productId: id, productName: name }),
            headers: { 'Content-type': 'application/json' }
        });
        alert(name + " added to cart successfully!");
    } catch (error) { 
        console.error("POST Error:", error);
        alert(name + " added to cart!"); 
    }
}

// --- 4. Form Validation ---
function setupFormValidation() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            if (name === "" || email === "") {
                alert("All fields are required!");
            } else {
                alert("Message Sent Successfully!");
                contactForm.reset();
            }
        });
    }
}

// --- 5. Dropdown Menu ---
function setupDropdown() {
    const shopLink = document.getElementById('shop-link');
    const dropdownMenu = document.getElementById('dropdown-menu');

    if (shopLink && dropdownMenu) {
        shopLink.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownMenu.classList.toggle('show-dropdown');
        });

        document.addEventListener('click', () => {
            dropdownMenu.classList.remove('show-dropdown');
        });
    }
}

// --- تشغيل كل الدوال عند تحميل الصفحة ---
document.addEventListener('DOMContentLoaded', () => {
    setupSlider();
    setupFormValidation();
    setupDropdown();
    loadShop();
});