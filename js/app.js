/* ==========================================================
   SESSION 2-10: RECIPES, CATEGORIES, SEARCH & MODAL
   ========================================================== */

let currentCategory = 'all';
let searchText = '';

// 1. Display recipes on the page
function displayRecipes(category) {
    const grid = document.getElementById('recipesGrid');
    if (!grid) return;
    grid.innerHTML = '';

    let recipesToShow = [];

    if (category === 'all') {
        Object.values(recipes).forEach(categoryRecipes => {
            recipesToShow = recipesToShow.concat(categoryRecipes);
        });
    } else {
        recipesToShow = recipes[category] || [];
    }

    // Filter by search text
    if (searchText !== '') {
        recipesToShow = recipesToShow.filter(recipe => {
            const nameMatch = recipe.name.toLowerCase().includes(searchText);
            const ingredientMatch = recipe.ingredients.some(ing => ing.toLowerCase().includes(searchText));
            return nameMatch || ingredientMatch;
        });
    }

    if (recipesToShow.length === 0) {
        grid.innerHTML = '<div class="empty-state"><h2>No recipes found</h2></div>';
        return;
    }

    recipesToShow.forEach((recipe) => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.onclick = () => showRecipeDetails(recipe);

        card.innerHTML = `
            <div class="recipe-image">
                <img src="${recipe.icon}" alt="${recipe.name}">
            </div>
            <div class="recipe-content">
                <h3>${recipe.name}</h3>
                <p class="recipe-calories">Calories: ${recipe.calories || 0} kcal</p>
                <p class="recipe-price">${recipe.price || 100} EGP</p>
                
                <!-- Session 9-10: Card Buttons -->
                <div class="card-actions">
                    <button class="btn-card-add">Add to Cart</button>
                    <button class="btn-card-buy">Buy Now</button>
                </div>
            </div>
        `;

        // Session 9-10: Button Click Events
        card.querySelector('.btn-card-add').onclick = (e) => {
            e.stopPropagation();
            addToCart(recipe);
        };
        card.querySelector('.btn-card-buy').onclick = (e) => {
            e.stopPropagation();
            buyNow(recipe);
        };

        grid.appendChild(card);
    });
}

// 2. Show Recipe Details Popup
function showRecipeDetails(recipe) {
    const modal = document.getElementById('recipeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalIcon = document.getElementById('modalIcon');
    const modalBody = document.getElementById('modalBody');

    modalTitle.textContent = recipe.name;
    modalIcon.innerHTML = `<img src="${recipe.icon}" alt="${recipe.name}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 10px;">`;

    const videoUrl = recipe.youtubeUrl || '';
    const videoBlock = videoUrl
        ? `<div class="recipe-video-wrapper"><h4>Recipe Video</h4><iframe class="recipe-video" src="${videoUrl}" title="${recipe.name} recipe video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>`
        : '<div class="recipe-video-wrapper"><h4>Recipe Video</h4><p class="recipe-video-empty">Video URL is empty for this recipe.</p></div>';

    let bodyHTML = `
        <p><strong>Calories:</strong> ${recipe.calories || 0} kcal</p>
        <p><strong>Price:</strong> ${recipe.price || 100} EGP</p>
        ${videoBlock}
        <h4>Ingredients:</h4>
        <ul>${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
        <h4>Steps:</h4>
        <ol>${recipe.steps.map(step => `<li>${step}</li>`).join('')}</ol>
        
        <!-- Session 9-10: Modal Actions -->
        <div class="modal-actions">
            <button class="add-cart-btn" id="modalAddBtn">Add to Cart</button>
            <button class="buy-now-btn" id="modalBuyBtn">Buy Now</button>
        </div>
    `;

    modalBody.innerHTML = bodyHTML;

    // Session 9-10: Modal Button Events
    document.getElementById('modalAddBtn').onclick = () => addToCart(recipe);
    document.getElementById('modalBuyBtn').onclick = () => buyNow(recipe);

    modal.classList.add('active');
}

// 3. Close Recipe Modal
function closeModal() {
    const modal = document.getElementById('recipeModal');
    modal.classList.remove('active');
    const iframe = modal.querySelector('iframe');
    if (iframe) {
        iframe.src = '';
    }
}

// 4. Category Filter Buttons
const categoriesElement = document.getElementById('categories');
if (categoriesElement) {
    categoriesElement.addEventListener('click', (e) => {
        if (e.target.classList.contains('category-btn')) {
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.getAttribute('data-category');
            displayRecipes(currentCategory);
        }
    });
}

// 5. Search Bar Input
const searchBarElement = document.getElementById('searchBar');
if (searchBarElement) {
    searchBarElement.addEventListener('input', (e) => {
        searchText = e.target.value.toLowerCase().trim();
        displayRecipes(currentCategory);
    });
}

// 6. Close Modal when clicking background
const recipeModalElement = document.getElementById('recipeModal');
if (recipeModalElement) {
    recipeModalElement.addEventListener('click', (e) => {
        if (e.target.id === 'recipeModal') closeModal();
    });
}


/* ==========================================================
   SESSION 9-10: CART SYSTEM & BUY NOW
   ========================================================== */

const DEFAULT_RECIPE_PRICE = 100;
const DELIVERY_FEE = 50;

let cart = [];
let customerProfile = loadCustomerProfile();
let isDeliveryEditing = false;

function loadCustomerProfile() {
    try {
        return JSON.parse(localStorage.getItem('foodzillaCustomer') || 'null');
    } catch {
        return null;
    }
}

function escapeHTML(value) {
    return String(value || '').replace(/[&<>"']/g, character => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    })[character]);
}

function updateAccountButton() {
    const accountButton = document.getElementById('accountButton');
    if (accountButton) {
        accountButton.textContent = customerProfile ? customerProfile.name : 'Sign in';
    }
}

function showSignIn() {
    const overlay = document.getElementById('accountOverlay');
    const form = document.getElementById('signInForm');
    const message = document.getElementById('accountMessage');

    form.reset();
    message.textContent = '';
    if (customerProfile) {
        Object.entries(customerProfile).forEach(([key, value]) => {
            if (form.elements[key]) form.elements[key].value = value;
        });
    }
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    form.elements.name.focus();
}

function hideSignIn() {
    const overlay = document.getElementById('accountOverlay');
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
}

const signInFormEl = document.getElementById('signInForm');
if (signInFormEl) {
    signInFormEl.addEventListener('submit', event => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const password = String(formData.get('password') || '');

        if (password.length < 8) {
            const msgEl = document.getElementById('accountMessage');
            if (msgEl) msgEl.textContent = 'Password must be at least 8 characters.';
            return;
        }

        customerProfile = {
            name: String(formData.get('name')).trim(),
            governorate: String(formData.get('governorate')).trim(),
            city: String(formData.get('city')).trim(),
            address: String(formData.get('address')).trim(),
            phone: String(formData.get('phone')).trim()
        };
        localStorage.setItem('foodzillaCustomer', JSON.stringify(customerProfile));
        updateAccountButton();
        renderCart();
        hideSignIn();
    });
}

const togglePasswordBtn = document.getElementById('togglePassword');
if (togglePasswordBtn) {
    togglePasswordBtn.addEventListener('click', event => {
        const button = event.currentTarget;
        const passwordInput = document.getElementById('signInPassword');
        if (!passwordInput) return;
        const shouldShow = passwordInput.type === 'password';

        passwordInput.type = shouldShow ? 'text' : 'password';
        button.setAttribute('aria-pressed', String(shouldShow));
        button.setAttribute('aria-label', shouldShow ? 'Hide password' : 'Show password');
        button.title = shouldShow ? 'Hide password' : 'Show password';
        const eyeIcon = button.querySelector('.eye-icon');
        const eyeOffIcon = button.querySelector('.eye-off-icon');
        if (eyeIcon) eyeIcon.hidden = shouldShow;
        if (eyeOffIcon) eyeOffIcon.hidden = !shouldShow;
    });
}

const accountOverlayEl = document.getElementById('accountOverlay');
if (accountOverlayEl) {
    accountOverlayEl.addEventListener('click', event => {
        if (event.target.id === 'accountOverlay') hideSignIn();
    });
}

function renderDeliveryDetails() {
    const delivery = document.getElementById('cartDelivery');
    if (!delivery) return;

    if (!customerProfile) {
        delivery.innerHTML = `
            <div class="delivery-heading"><h4>Delivery details</h4></div>
            <p class="delivery-empty">Sign in to add an address and phone number.</p>
            <button class="delivery-action" type="button" onclick="showSignIn()">Add details</button>
        `;
        return;
    }

    if (isDeliveryEditing) {
        delivery.innerHTML = `
            <div class="delivery-heading"><h4>Delivery details</h4></div>
            <form class="delivery-form" id="deliveryForm">
                <label>Governorate<input name="governorate" value="${escapeHTML(customerProfile.governorate)}" required></label>
                <label>City<input name="city" value="${escapeHTML(customerProfile.city)}" required></label>
                <label>Address<input name="address" value="${escapeHTML(customerProfile.address)}" required></label>
                <label>Phone number<input name="phone" type="tel" value="${escapeHTML(customerProfile.phone)}" required></label>
                <div class="delivery-form-actions">
                    <button class="delivery-action" type="submit">Save</button>
                    <button class="delivery-cancel" type="button" onclick="cancelDeliveryEdit()">Cancel</button>
                </div>
            </form>
        `;
        document.getElementById('deliveryForm').addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            customerProfile = {
                ...customerProfile,
                governorate: String(formData.get('governorate')).trim(),
                city: String(formData.get('city')).trim(),
                address: String(formData.get('address')).trim(),
                phone: String(formData.get('phone')).trim()
            };
            localStorage.setItem('foodzillaCustomer', JSON.stringify(customerProfile));
            isDeliveryEditing = false;
            renderCart();
        });
        return;
    }

    delivery.innerHTML = `
        <div class="delivery-heading">
            <h4>Delivery details</h4>
            <button class="delivery-edit" type="button" onclick="editDeliveryDetails()">Edit</button>
        </div>
        <p class="delivery-recipient">${escapeHTML(customerProfile.name)}</p>
        <p>${escapeHTML([customerProfile.address, customerProfile.city, customerProfile.governorate].filter(Boolean).join(', '))}</p>
        <p>${escapeHTML(customerProfile.phone)}</p>
    `;
}

function editDeliveryDetails() {
    isDeliveryEditing = true;
    renderDeliveryDetails();
}

function cancelDeliveryEdit() {
    isDeliveryEditing = false;
    renderDeliveryDetails();
}

// 1. Draw/Update Cart in the page
function renderCart() {
    const cartCount = document.getElementById('cartCount');
    const cartItemsList = document.getElementById('cartItemsList');
    const cartSubtotalPrice = document.getElementById('cartSubtotalPrice');
    const cartDeliveryFee = document.getElementById('cartDeliveryFee');
    const cartTotalPrice = document.getElementById('cartTotalPrice');

    renderDeliveryDetails();

    let totalCount = 0;
    let subtotalPrice = 0;

    cart.forEach(item => {
        totalCount += item.qty;
        subtotalPrice += item.price * item.qty;
    });

    if (cartCount) cartCount.textContent = totalCount;
    if (!cartItemsList) return;

    if (cart.length === 0) {
        cartItemsList.innerHTML = '<p style="text-align:center; padding:20px; color:#aaa;">Cart is empty</p>';
        if (cartSubtotalPrice) cartSubtotalPrice.textContent = '0 EGP';
        if (cartDeliveryFee) cartDeliveryFee.textContent = '0 EGP';
        if (cartTotalPrice) cartTotalPrice.textContent = '0 EGP';
    } else {
        cartItemsList.innerHTML = cart.map((item, index) => {
            totalCount += item.qty;
            subtotalPrice += item.price * item.qty;
            return `
                <div class="cart-item">
                    <img src="${item.icon}" alt="${item.name}">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p>${item.price} EGP × ${item.qty} = ${item.price * item.qty} EGP</p>
                    </div>
                    <div class="cart-qty-buttons">
                        <button onclick="changeQty(${index}, -1)">-</button>
                        <span>${item.qty}</span>
                        <button onclick="changeQty(${index}, 1)">+</button>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${index})">×</button>
                </div>
            `;
        }).join('');

        const finalTotal = subtotalPrice + DELIVERY_FEE;
        if (cartSubtotalPrice) cartSubtotalPrice.textContent = subtotalPrice + ' EGP';
        if (cartDeliveryFee) cartDeliveryFee.textContent = DELIVERY_FEE + ' EGP';
        if (cartTotalPrice) cartTotalPrice.textContent = finalTotal + ' EGP';
    }

    cartCount.textContent = totalCount;
}

// 2. Add recipe to Cart
function addToCart(recipe) {
    const item = cart.find(i => i.name === recipe.name);
    if (item) {
        item.qty++;
    } else {
        cart.push({
            name: recipe.name,
            icon: recipe.icon,
            price: recipe.price || DEFAULT_RECIPE_PRICE,
            qty: 1
        });
    }
    renderCart();
    alert(`"${recipe.name}" added to cart!`);
}

// 3. Buy Now Button: adds to cart and opens it directly
function buyNow(recipe) {
    addToCart(recipe);
    closeModal();
    toggleCart(true);
}

// 4. Change quantity (+ / -)
function changeQty(index, amount) {
    cart[index].qty += amount;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    renderCart();
}

// 5. Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

// 6. Clear entire cart
function clearCart() {
    cart = [];
    renderCart();
}

// 7. Checkout / Place Order
function checkoutCart() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    if (!customerProfile || !customerProfile.address || !customerProfile.phone) {
        showSignIn();
        return;
    }
    alert('Thank you! Your order has been placed.');
    clearCart();
    toggleCart(false);
}

// 8. Open / Close Cart Drawer
function toggleCart(open) {
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    const shouldOpen = open !== undefined ? open : !drawer.classList.contains('active');

    drawer.classList.toggle('active', shouldOpen);
    overlay.classList.toggle('active', shouldOpen);
}


if (document.getElementById('recipesGrid')) {
    displayRecipes('all');
}
updateAccountButton();
renderCart();