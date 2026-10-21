document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderFooter();
  Cart.updateBadge();

  // Search input redirection
  const searchInput = document.getElementById('globalSearchInput');
  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && e.target.value.trim()) {
        window.location.href = `pesticides.html?search=${encodeURIComponent(e.target.value.trim())}`;
      }
    });
  }
});

function formatPrice(num) {
  return `Rs. ${Number(num || 0).toLocaleString('en-PK')}`;
}

function showToast(message, type = 'success') {
  const old = document.querySelector('.toast');
  if (old) old.remove();

  const toast = document.createElement('div');
  toast.className = `toast ${type === 'success' ? 'bg-emerald-700' : 'bg-red-600'}`;
  toast.innerHTML = `<span>${type === 'success' ? '✓' : '✕'}</span> <span>${message}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function renderNavbar() {
  const mount = document.getElementById('navbar-mount');
  if (!mount) return;

  const path = window.location.pathname;

  mount.innerHTML = `
    <!-- Top info bar -->
    <div class="bg-emerald-950 text-emerald-200 text-xs py-2 px-4 border-b border-emerald-900">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-1">
        <div class="flex items-center gap-4">
          <span>📞 Shop Hotline: <strong>+92 300 0695475</strong></span>
          <span class="hidden sm:inline">|</span>
          <span class="hidden sm:inline">📍 Ghouri Market, Dunya Pur, Punjab</span>
        </div>
        <div class="flex items-center gap-4">
          <span class="bg-emerald-800 text-emerald-100 px-2 py-0.5 rounded text-[10px] font-bold">100% Genuine Certified</span>
          <a href="admin.html" class="hover:text-white transition font-medium">Admin Dashboard</a>
        </div>
      </div>
    </div>

    <!-- Navigation Header -->
    <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <a href="index.html" class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-xl bg-emerald-800 flex items-center justify-center text-white text-2xl shadow-md">
              🌾
            </div>
            <div>
              <span class="text-2xl font-black tracking-tight text-emerald-900 leading-none block">ALHAMAD</span>
              <span class="text-[11px] font-bold tracking-widest text-emerald-600 uppercase">Trader • Agriculture</span>
            </div>
          </a>

          <nav class="hidden md:flex items-center gap-8 font-semibold text-slate-700 text-sm">
            <a href="index.html" class="hover:text-emerald-700 transition ${path.endsWith('index.html') || path.endsWith('/') ? 'text-emerald-700 font-bold' : ''}">Home</a>
            <a href="pesticides.html" class="hover:text-emerald-700 transition ${path.includes('pesticides') ? 'text-emerald-700 font-bold' : ''}">Pesticides</a>
            <a href="seeds.html" class="hover:text-emerald-700 transition ${path.includes('seeds') ? 'text-emerald-700 font-bold' : ''}">Seeds</a>
            <a href="fertilizer.html" class="hover:text-emerald-700 transition ${path.includes('fertilizers') ? 'text-emerald-700 font-bold' : ''}">Fertilizers</a>
            <a href="contact.html" class="hover:text-emerald-700 transition ${path.includes('contact') ? 'text-emerald-700 font-bold' : ''}">Contact Us</a>
          </nav>

          <div class="flex items-center gap-4">
            <div class="relative hidden lg:block w-64">
              <input id="globalSearchInput" type="text" placeholder="Search products..." class="w-full bg-slate-100 border border-slate-200 rounded-full py-2 pl-9 pr-4 text-xs focus:outline-none focus:border-emerald-600 focus:bg-white transition" />
              <span class="absolute left-3 top-2 text-slate-400 text-xs">🔍</span>
            </div>

            <a href="cart.html" class="relative p-2.5 bg-emerald-50 rounded-xl text-emerald-800 hover:bg-emerald-100 transition">
              <span class="text-xl">🛒</span>
              <span class="cart-count-badge absolute -top-1 -right-1 bg-amber-500 text-white font-bold text-[10px] w-5 h-5 rounded-full items-center justify-center border-2 border-white hidden">0</span>
            </a>

            <button onclick="document.getElementById('mobileNav').classList.toggle('hidden')" class="md:hidden p-2 text-slate-600">
              ☰
            </button>
          </div>

        </div>
      </div>

      <!-- Mobile Nav -->
      <div id="mobileNav" class="hidden md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2 text-sm font-semibold">
        <a href="index.html" class="block py-1.5 text-slate-800">Home</a>
        <a href="pesticides.html" class="block py-1.5 text-slate-800">Pesticides</a>
        <a href="seeds.html" class="block py-1.5 text-slate-800">Seeds (Maize, Mustard, Rice, Wheat)</a>
        <a href="fertilizers.html" class="block py-1.5 text-slate-800">Fertilizers</a>
        <a href="contact.html" class="block py-1.5 text-slate-800">Contact Us</a>
        <a href="admin.html" class="block py-1.5 text-emerald-800 font-bold">Admin Dashboard</a>
      </div>
    </header>
  `;
}

function renderFooter() {
  const mount = document.getElementById('footer-mount');
  if (!mount) return;

  mount.innerHTML = `
    <footer class="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-4 border-emerald-600 mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800 text-sm">
        <div>
          <div class="flex items-center gap-2 mb-3">
            <span class="text-2xl">🌾</span>
            <span class="text-xl font-black text-white">ALHAMAD TRADER</span>
          </div>
          <p class="text-xs text-slate-400 leading-relaxed mb-4">
            Supplying certified pesticides, authenticated hybrid seeds, and premium soil fertilizers to maximize crop harvest.
          </p>
          <span class="bg-slate-800 text-emerald-400 text-xs px-3 py-1 rounded-full font-medium">Licensed Agri Dealer</span>
        </div>

        <div>
          <h4 class="text-white font-bold mb-3 uppercase text-xs tracking-wider">Product Categories</h4>
          <ul class="space-y-2 text-xs text-slate-400">
            <li><a href="pesticides.html" class="hover:text-emerald-400">Crop Pesticides & Insecticides</a></li>
            <li><a href="seeds.html" class="hover:text-emerald-400">Hybrid Maize (Corn) Seeds</a></li>
            <li><a href="seeds.html" class="hover:text-emerald-400">Mustard, Rice & Wheat Seeds</a></li>
            <li><a href="fertilizers.html" class="hover:text-emerald-400">Urea, DAP & NPK Fertilizers</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-3 uppercase text-xs tracking-wider">Customer Support</h4>
          <ul class="space-y-2 text-xs text-slate-400">
            <li><a href="cart.html" class="hover:text-emerald-400">View Shopping Cart</a></li>
            <li><a href="checkout.html" class="hover:text-emerald-400">Order Dispatch & Delivery</a></li>
            <li><a href="contact.html" class="hover:text-emerald-400">Shop Location & Timings</a></li>
            <li><a href="https://wa.me/923000695475" target="_blank" class="text-emerald-400 font-bold">Direct WhatsApp Order</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-bold mb-3 uppercase text-xs tracking-wider">Store Location</h4>
          <p class="text-xs text-slate-400 mb-1">📍 Ghouri Market, Dokata Road Road, Dunya Pur, Punjab</p>
          <p class="text-xs text-slate-400 mb-1">📞 Phone: +92 300 0695475</p>
          <p class="text-xs text-slate-400 mb-3">⏰ Mon - Sat: 8:00 AM - 8:30 PM</p>
          <div class="bg-slate-800 p-2.5 rounded-lg text-[11px] text-emerald-300">
            <strong>Safety Note:</strong> Always review chemical labels before application.
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 pt-6 text-center text-xs text-slate-500">
        &copy; ${new Date().getFullYear()} Alhamad Trader. All rights reserved.
      </div>
    </footer>
  `;
}