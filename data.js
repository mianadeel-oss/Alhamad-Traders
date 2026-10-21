// Default Agricultural Catalog Data
const DEFAULT_PRODUCTS = [
    // --- SEEDS (Maize, Mustard, Rice, Wheat) ---
    {
        id: "seed-01",
        name: "Pioneer 30Y87 Hybrid Maize Seed",
        category: "Seeds",
        subcategory: "Maize Seeds",
        brand: "Corteva Pioneer",
        packageSize: "8 kg Bag",
        price: 9800,
        discountPrice: 9400,
        stock: 40,
        isFeatured: true,
        description: "Certified yellow hybrid corn seed engineered for high cob weight, heat tolerance, and premium grain/silage yield. [Demo Data]",
        safetyInstructions: "Chemically treated seed. Keep away from livestock and food grains.",
        image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "seed-02",
        name: "DK-6789 High Yield Corn Seed",
        category: "Seeds",
        subcategory: "Maize Seeds",
        brand: "Dekalb Bayer",
        packageSize: "8.5 kg Bag",
        price: 10200,
        discountPrice: 9900,
        stock: 25,
        isFeatured: false,
        description: "Top-tier hybrid maize with rapid dry-down, strong root hold, and foliar disease tolerance. [Demo Data]",
        safetyInstructions: "Store in a dry, ventilated room off concrete flooring.",
        image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "seed-03",
        name: "Super Raya Mustard (Canola Type)",
        category: "Seeds",
        subcategory: "Mustard Seeds",
        brand: "Ayub Agri Research",
        packageSize: "2 kg Bag",
        price: 1850,
        discountPrice: 1700,
        stock: 65,
        isFeatured: true,
        description: "Certified high oil extraction (42%+) mustard variety with strong branching and shatter resistance. [Demo Data]",
        safetyInstructions: "Preserve in airtight bags to protect germination purity.",
        image: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "seed-04",
        name: "Kainat 1121 Basmati Rice Seed",
        category: "Seeds",
        subcategory: "Rice Seeds",
        brand: "Guard Agri",
        packageSize: "10 kg Bag",
        price: 4200,
        discountPrice: 3950,
        stock: 50,
        isFeatured: true,
        description: "Premium long-grain aromatic Kainat 1121 paddy seed with high tillering and uniform maturity. [Demo Data]",
        safetyInstructions: "Soak in recommended fungicide before nursery broadcasting.",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "seed-05",
        name: "Akbar-2019 Certified Wheat Seed",
        category: "Seeds",
        subcategory: "Wheat Seeds",
        brand: "Punjab Seed Corp",
        packageSize: "50 kg Bag",
        price: 5400,
        discountPrice: null,
        stock: 85,
        isFeatured: true,
        description: "Top-performing rust-resistant certified wheat seed variety with bold amber grains and high tillering. [Demo Data]",
        safetyInstructions: "Poisonous: Coated with protective fungicide for seed drilling.",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "seed-06",
        name: "Dilkash-20 Certified Wheat Seed",
        category: "Seeds",
        subcategory: "Wheat Seeds",
        brand: "Fauji Seed Division",
        packageSize: "50 kg Bag",
        price: 5300,
        discountPrice: 5100,
        stock: 45,
        isFeatured: false,
        description: "Lodging-tolerant certified wheat variety suited for timely and late season sowing. [Demo Data]",
        safetyInstructions: "Wear gloves and dust mask during sowing.",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80"
    },

    // --- PESTICIDES ---
    {
        id: "pest-01",
        name: "Belt Expert 480 SC Insecticide",
        category: "Pesticides",
        subcategory: "Insecticides",
        brand: "Bayer Crop Science",
        packageSize: "100 ml Bottle",
        price: 3850,
        discountPrice: 3650,
        stock: 35,
        isFeatured: true,
        description: "Broad-spectrum insecticide for armyworm, bollworms, and sucking insect management. [Demo Data]",
        safetyInstructions: "WARNING: Toxic. Wear rubber gloves and face shield when preparing spray.",
        image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "pest-02",
        name: "Coragen 20 SC Insecticide",
        category: "Pesticides",
        subcategory: "Insecticides",
        brand: "FMC Chemical",
        packageSize: "50 ml Bottle",
        price: 2450,
        discountPrice: 2300,
        stock: 40,
        isFeatured: true,
        description: "Targeted control against stem borer in rice and fall armyworm in maize crops. [Demo Data]",
        safetyInstructions: "Store strictly in locked cabinets away from children and food.",
        image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "pest-03",
        name: "Atlantis Super Selective Herbicide",
        category: "Pesticides",
        subcategory: "Herbicides",
        brand: "Bayer Crop Science",
        packageSize: "400 ml Bottle",
        price: 3200,
        discountPrice: 2950,
        stock: 30,
        isFeatured: false,
        description: "Broadleaf and grassy weed solution for wheat fields including Phalaris minor control. [Demo Data]",
        safetyInstructions: "Apply strictly using recommended flat fan nozzles at 2-4 leaf stage.",
        image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "pest-04",
        name: "Nativo 75 WG Systemic Fungicide",
        category: "Pesticides",
        subcategory: "Fungicides",
        brand: "Bayer Crop Science",
        packageSize: "100 g Pack",
        price: 2900,
        discountPrice: 2750,
        stock: 45,
        isFeatured: true,
        description: "Dual active preventive and curative fungicide for blast, rust, and sheath blight. [Demo Data]",
        safetyInstructions: "Wash hands and clothing thoroughly after application.",
        image: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=600&q=80"
    },

    // --- FERTILIZERS ---
    {
        id: "fert-01",
        name: "Sona Urea Prilled 46% N",
        category: "Fertilizers",
        subcategory: "Urea",
        brand: "FFC (Fauji Fertilizer)",
        packageSize: "50 kg Bag",
        price: 4650,
        discountPrice: 4500,
        stock: 120,
        isFeatured: true,
        description: "Premium pure white nitrogen fertilizer promoting vegetative foliage growth and tillering. [Demo Data]",
        safetyInstructions: "Store in moisture-free sheds away from rain.",
        image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "fert-02",
        name: "Engro DAP (Di-Ammonium Phosphate)",
        category: "Fertilizers",
        subcategory: "DAP",
        brand: "Engro Fertilizers",
        packageSize: "50 kg Bag",
        price: 11800,
        discountPrice: 11500,
        stock: 60,
        isFeatured: true,
        description: "Foundational root establishment fertilizer supplying 18% Nitrogen and 46% Phosphorus. [Demo Data]",
        safetyInstructions: "Avoid inhaling heavy dust during field broadcast.",
        image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "fert-03",
        name: "Sarsabz Nitrophos (NP 22:20)",
        category: "Fertilizers",
        subcategory: "NPK",
        brand: "Fatima Fertilizer",
        packageSize: "50 kg Bag",
        price: 8900,
        discountPrice: 8600,
        stock: 55,
        isFeatured: false,
        description: "Balanced quick-release nitrogen and phosphorus blend for early vigor and root strength. [Demo Data]",
        safetyInstructions: "Broadcast evenly across field before irrigation.",
        image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "fert-04",
        name: "SoluPotasse NPK (0:0:50 + 18% S)",
        category: "Fertilizers",
        subcategory: "NPK",
        brand: "Tessenderlo Kerley",
        packageSize: "25 kg Bag",
        price: 13500,
        discountPrice: 13000,
        stock: 30,
        isFeatured: true,
        description: "100% water-soluble Potassium Sulphate for drip irrigation and grain weight boost. [Demo Data]",
        safetyInstructions: "Highly soluble. Keep container closed tightly.",
        image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=600&q=80"
    }
];

// Local Storage Initializer
const DataManager = {
    getProducts() {
        let prods = localStorage.getItem('alhamad_products');
        if (!prods) {
            localStorage.setItem('alhamad_products', JSON.stringify(DEFAULT_PRODUCTS));
            return DEFAULT_PRODUCTS;
        }
        return JSON.parse(prods);
    },

    saveProducts(products) {
        localStorage.setItem('alhamad_products', JSON.stringify(products));
    },

    getProductById(id) {
        return this.getProducts().find(p => p.id === id);
    },

    getOrders() {
        return JSON.parse(localStorage.getItem('alhamad_orders')) || [
            {
                orderNumber: "AT-829102",
                createdAt: new Date().toISOString(),
                customer: {
                    name: "Chaudhry Tariq",
                    phone: "03009876543",
                    address: "Chak 12/L, Near Grain Elevator, Okara"
                },
                items: [{ name: "Pioneer 30Y87 Hybrid Maize Seed", quantity: 2, price: 9400 }],
                total: 18800,
                status: "Processing"
            }
        ];
    },

    saveOrder(order) {
        const orders = this.getOrders();
        orders.unshift(order);
        localStorage.setItem('alhamad_orders', JSON.stringify(orders));
    },

    updateOrderStatus(orderNumber, newStatus) {
        const orders = this.getOrders();
        const target = orders.find(o => o.orderNumber === orderNumber);
        if (target) {
            target.status = newStatus;
            localStorage.setItem('alhamad_orders', JSON.stringify(orders));
        }
    },

    getSettings() {
        return JSON.parse(localStorage.getItem('alhamad_settings')) || {
            shopName: "Alhamad Trader",
            tagline: "Grow Better. Harvest More.",
            phone: "+92 300 1234567",
            whatsapp: "923001234567",
            address: "Shop # 14-16, Ghalla Mandi, Depalpur Road, Okara, Punjab, Pakistan",
            businessHours: "Monday - Saturday: 8:00 AM - 8:30 PM",
            currency: "Rs."
        };
    },

    saveSettings(settings) {
        localStorage.setItem('alhamad_settings', JSON.stringify(settings));
    }
};