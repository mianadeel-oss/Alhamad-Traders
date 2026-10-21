const Cart = {
    getCart() {
        return JSON.parse(localStorage.getItem('alhamad_cart')) || [];
    },

    saveCart(cart) {
        localStorage.setItem('alhamad_cart', JSON.stringify(cart));
        this.updateBadge();
    },

    addItem(product, quantity = 1) {
        const cart = this.getCart();
        const existing = cart.find(i => i.id === product.id);

        if (existing) {
            existing.quantity += Number(quantity);
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.discountPrice || product.price,
                packageSize: product.packageSize,
                image: product.image,
                quantity: Number(quantity)
            });
        }

        this.saveCart(cart);
        showToast(`Added ${product.name} to cart!`);
    },

    updateQuantity(id, delta) {
        let cart = this.getCart();
        const item = cart.find(i => i.id === id);
        if (!item) return;

        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
        this.saveCart(cart);
    },

    removeItem(id) {
        let cart = this.getCart();
        cart = cart.filter(i => i.id !== id);
        this.saveCart(cart);
        showToast("Item removed from cart", "error");
    },

    clear() {
        localStorage.removeItem('alhamad_cart');
        this.updateBadge();
    },

    getSubtotal() {
        return this.getCart().reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },

    getCount() {
        return this.getCart().reduce((count, item) => count + item.quantity, 0);
    },

    updateBadge() {
        const count = this.getCount();
        const badges = document.querySelectorAll('.cart-count-badge');
        badges.forEach(b => {
            b.textContent = count;
            b.style.display = count > 0 ? 'inline-flex' : 'none';
        });
    },

    generateWhatsAppUrl(whatsappNumber, customer, items, total) {
        let msg = `*NEW ORDER — ALHAMAD TRADER*\n`;
        msg += `---------------------------------\n`;
        msg += `*Customer:* ${customer.name}\n`;
        msg += `*Phone:* ${customer.phone}\n`;
        msg += `*Address:* ${customer.address}\n`;
        if (customer.city) msg += `*City/Tehsil:* ${customer.city}\n`;
        if (customer.notes) msg += `*Notes:* ${customer.notes}\n`;
        msg += `---------------------------------\n`;
        msg += `*ORDER ITEMS:*\n`;

        items.forEach((it, idx) => {
            msg += `${idx + 1}. ${it.name} (${it.packageSize}) x ${it.quantity} = Rs. ${(it.price * it.quantity).toLocaleString()}\n`;
        });

        msg += `---------------------------------\n`;
        msg += `*Total Order Amount:* Rs. ${total.toLocaleString()}\n`;
        msg += `*Payment:* Cash on Delivery\n`;
        msg += `Please confirm my order dispatch. Thank you!`;

        return `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(msg)}`;
    }
};

document.addEventListener('DOMContentLoaded', () => Cart.updateBadge());