// Tailwind CSS Configuration Extension
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Oswald', 'sans-serif'],
            },
            colors: {
                brand: {
                    400: '#facc15',
                    500: '#eab308',
                    600: '#ca8a04',
                },
                dark: {
                    900: '#09090b',
                    800: '#18181b',
                    700: '#27272a',
                }
            }
        }
    }
}

// --- DETAILED DATA CATALOG ---
const catalogData = {
    "pistols": {
        id: "pistols", title: "🔫 Pistols", icon: "fa-crosshairs",
        desc: "Compact, reliable handguns for self-defense and tactical use.",
        bgImage: "pistol.jpeg",
        items: [
            { 
                id: "p1", name: "Glock 17", price: 599.00, 
                image: "glock17.png",
                thumbnails: [
                    "glock17-1jpeg.jpeg", "glock17-2.jpeg", "glock17-3jpeg.jpeg", "glock17-4jpeg.jpeg"
                ],
                specs: { caliber: "9x19mm", capacity: "17+1", action: "Striker-Fired", weight: "24.5 oz" }, desc: "The standard 9x19mm duty weapon worldwide. Unmatched reliability." 
            },
            { 
                id: "p2", name: "Beretta 92", price: 680.00, 
                image: "beretta-92.jpeg",
                thumbnails: ["beretta92-1.jpeg", "beretta92-2.jpeg", "beretta92-3.jpeg", "beretta92-4.jpeg"],
                specs: { caliber: "9x19mm", capacity: "15+1", action: "DA/SA", weight: "33.3 oz" }, desc: "Classic DA/SA 9mm pistol used by military and police forces." 
            },
            { 
                id: "p3", name: "Colt M1911", price: 950.00, 
                image: "colt-m1911.jpeg",
                thumbnails: ["coltm1911-1.jpeg", "coltm1911-2.jpeg", "coltm1911-3.jpeg", "coltm1911-4.jpeg"],
                specs: { caliber: ".45 ACP", capacity: "7+1", action: "Single-Action", weight: "39 oz" }, desc: "Legendary .45 ACP stopping power with a single-action trigger." 
            },
            { 
                id: "p4", name: "SIG Sauer P226", price: 1050.00, 
                image: "SIGSauerP226.jpeg",
                thumbnails: ["sigsauerp226-1.jpeg", "sigsauerp226-2.jpeg", "sigsauerp226-3.jpeg", "sigsauerp226-4.jpeg"],
                specs: { caliber: "9mm", capacity: "15+1", action: "DA/SA", weight: "34 oz" }, desc: "Premium full-size combat pistol known for accuracy." 
            },
            { 
                id: "p5", name: "Smith & Wesson M&P", price: 550.00, 
                image: "Smith&WessonM&P.jpeg",
                thumbnails: ["Smith&WessonM&P-1.jpeg", "Smith&WessonM&P-2.jpeg", "Smith&WessonM&P-3.jpeg", "Smith&WessonM&P-4.jpeg"],
                specs: { caliber: "9mm", capacity: "17+1", action: "Striker-Fired", weight: "24.7 oz" }, desc: "Striker-fired polymer pistol with interchangeable grips." 
            },
            { 
                id: "p6", name: "CZ 75", price: 650.00, 
                image: "cz-75.jpeg",
                thumbnails: ["cz-75-1.jpeg", "cz-75-2.jpeg", "cz-75-3.jpeg", "cz-75-4.jpeg"],
                specs: { caliber: "9mm", capacity: "16+1", action: "DA/SA", weight: "35.2 oz" }, desc: "All-steel construction with a smooth double-action pull." 
            }
        ]
    },
    "revolvers": {
        id: "revolvers", title: "🔫 Revolvers", icon: "fa-bullseye",
        desc: "Classic wheel guns providing fail-proof operation and heavy calibers.",
        bgImage: "revolvers.jpeg",
        items: [
            { 
                id: "r1", name: "Smith & Wesson Model 10", price: 750.00, 
                image: "smith-wesson-model-10.jpeg",
                thumbnails: ["smith-wesson-model-10-1.jpeg", "smith-wesson-model-10-2.jpeg", "smith-wesson-model-10-3.jpeg", "smith-wesson-model-10-4.jpeg"],
                specs: { caliber: ".38 Special", capacity: "6", action: "DA/SA", weight: "34.4 oz" }, desc: "The iconic .38 Special duty revolver." 
            },
            { 
                id: "r2", name: "Colt Python", price: 1499.00, 
                image: "colt-python.jpeg",
                thumbnails: ["colt-python-1.jpeg", "colt-python-2.jpeg", "colt-python-3.jpeg", "colt-python-4.jpeg"],
                specs: { caliber: ".357 Magnum", capacity: "6", action: "DA/SA", weight: "46 oz" }, desc: "Premium .357 Magnum with a ventilated rib barrel." 
            },
            { 
                id: "r3", name: "Ruger GP100", price: 820.00, 
                image: "ruger-gp100.jpeg",
                thumbnails: ["ruger-gp100-1.jpeg", "ruger-gp100-2.jpeg", "ruger-gp100-3.jpeg", "ruger-gp100-4.jpeg"],
                specs: { caliber: ".357 Magnum", capacity: "6", action: "DA/SA", weight: "40 oz" }, desc: "Built like a tank. Handles the hottest .357 loads." 
            },
            { 
                id: "r4", name: "Smith & Wesson Model 686", price: 899.00, 
                image: "smith-wesson-model-686.jpeg",
                thumbnails: ["smith-wesson-model-686-1.jpeg", "smith-wesson-model-686-2.jpeg", "smith-wesson-model-686-3.jpeg", "smith-wesson-model-686-4.jpeg"],
                specs: { caliber: ".357 Magnum", capacity: "6", action: "DA/SA", weight: "39.7 oz" }, desc: "Stainless steel L-frame .357 Magnum." 
            },
            { 
                id: "r5", name: "Colt Detective Special", price: 900.00, 
                image: "colt-detective-special.jpeg",
                thumbnails: ["colt-detective-special-1.jpeg", "colt-detective-special-2.jpeg", "colt-detective-special-3.jpeg", "colt-detective-special-4.jpeg"],
                specs: { caliber: ".38 Special", capacity: "6", action: "DA/SA", weight: "21 oz" }, desc: "Classic snub-nose for concealed carry." 
            },
            { 
                id: "r6", name: "Ruger LCR", price: 580.00, 
                image: "ruger-lcr.jpeg",
                thumbnails: ["ruger-lcr-1.jpeg", "ruger-lcr-2.jpeg", "ruger-lcr-3.jpeg", "ruger-lcr-4.jpeg"],
                specs: { caliber: ".38 Special", capacity: "5", action: "DAO", weight: "13.5 oz" }, desc: "Lightweight compact revolver utilizing polymer technology." 
            }
        ]
    },
    "bolt-action": {
        id: "bolt-action", title: "🔫 Bolt-Action Rifles", icon: "fa-person-rifle",
        desc: "Precision rifles for hunting and long-range tactical engagements.",
        bgImage: "bolt-action-rifles.jpeg",
        items: [
            { 
                id: "b1", name: "Remington 700", price: 849.00, 
                image: "remington-700.jpeg",
                thumbnails: ["remington-700-1.jpeg", "remington-700-2.jpeg", "remington-700-3.jpeg", "remington-700-4.jpeg"],
                specs: { caliber: ".308 Win", capacity: "4+1", action: "Bolt-Action", weight: "7.5 lbs" }, desc: "The platform of choice for snipers and hunters alike." 
            },
            { 
                id: "b2", name: "Winchester Model 70", price: 950.00, 
                image: "winchester-model-70.jpeg",
                thumbnails: ["winchester-model-70-1.jpeg", "winchester-model-70-2.jpeg", "winchester-model-70-3.jpeg", "winchester-model-70-4.jpeg"],
                specs: { caliber: ".30-06 Sprg", capacity: "5+1", action: "Bolt-Action", weight: "7.25 lbs" }, desc: "The 'Rifleman's Rifle' with controlled round feed." 
            },
            { 
                id: "b3", name: "Lee-Enfield", price: 600.00, 
                image: "lee-enfield.jpeg",
                thumbnails: ["lee-enfield-1.jpeg", "lee-enfield-2.jpeg", "lee-enfield-3.jpeg", "lee-enfield-4.jpeg"],
                specs: { caliber: ".303 British", capacity: "10", action: "Bolt-Action", weight: "8.8 lbs" }, desc: "Historic fast-cycling bolt action rifle." 
            },
            { 
                id: "b4", name: "Mauser 98", price: 1200.00, 
                image: "mauser-98.jpeg",
                thumbnails: ["mauser-98-1.jpeg", "mauser-98-2.jpeg", "mauser-98-3.jpeg", "mauser-98-4.jpeg"],
                specs: { caliber: "8x57mm IS", capacity: "5", action: "Bolt-Action", weight: "8.6 lbs" }, desc: "The father of modern bolt-action designs." 
            },
            { 
                id: "b5", name: "Tikka T3", price: 799.00, 
                image: "tikka-t3.jpeg",
                thumbnails: ["tikka-t3-1.jpeg", "tikka-t3-2.jpeg", "tikka-t3-3.jpeg", "tikka-t3-4.jpeg"],
                specs: { caliber: "6.5 Creedmoor", capacity: "3+1", action: "Bolt-Action", weight: "6.4 lbs" }, desc: "Finnish precision, incredibly smooth bolt throw." 
            },
            { 
                id: "b6", name: "Savage 110", price: 650.00, 
                image: "savage-110.jpeg",
                thumbnails: ["savage-110-1.jpeg", "savage-110-2.jpeg", "savage-110-3.jpeg", "savage-110-4.jpeg"],
                specs: { caliber: ".300 Win Mag", capacity: "3+1", action: "Bolt-Action", weight: "7.8 lbs" }, desc: "Affordable accuracy with the AccuTrigger system." 
            }
        ]
    },
    "semi-auto": {
        id: "semi-auto", title: "🔫 Semi-Auto Rifles", icon: "fa-gun",
        desc: "Modern sporting rifles offering rapid follow-up shots and modularity.",
        bgImage: "semi-auto-rifles.jpeg",
        items: [
            { 
                id: "sa1", name: "AR-15", price: 1299.00, 
                image: "ar-15.jpeg",
                thumbnails: ["ar-15-1.jpeg", "ar-15-2.jpeg", "ar-15-3.jpeg", "ar-15-4.jpeg"],
                specs: { caliber: "5.56 NATO", capacity: "30+1", action: "Semi-Auto", weight: "6.5 lbs" }, desc: "America's rifle. Highly modular and versatile 5.56mm." 
            },
            { 
                id: "sa2", name: "AK-47", price: 899.00, 
                image: "ak-47.jpeg",
                thumbnails: ["ak-47-1.jpeg", "ak-47-2.jpeg", "ak-47-3.jpeg", "ak-47-4.jpeg"],
                specs: { caliber: "7.62x39mm", capacity: "30+1", action: "Semi-Auto", weight: "7.7 lbs" }, desc: "Legendary reliability in harsh conditions, 7.62x39mm." 
            },
            { 
                id: "sa3", name: "SKS", price: 450.00, 
                image: "sks.jpeg",
                thumbnails: ["sks-1.jpeg", "sks-2.jpeg", "sks-3.jpeg", "sks-4.jpeg"],
                specs: { caliber: "7.62x39mm", capacity: "10 (Internal)", action: "Semi-Auto", weight: "8.5 lbs" }, desc: "Rugged fixed-magazine battle rifle." 
            },
            { 
                id: "sa4", name: "M1 Garand", price: 1500.00, 
                image: "m1-garand.jpeg",
                thumbnails: ["m1-garand-1.jpeg", "m1-garand-2.jpeg", "m1-garand-3.jpeg", "m1-garand-4.jpeg"],
                specs: { caliber: ".30-06 Sprg", capacity: "8 (En-bloc)", action: "Semi-Auto", weight: "9.5 lbs" }, desc: "The greatest battle implement ever devised." 
            },
            { 
                id: "sa5", name: "Ruger Mini-14", price: 950.00, 
                image: "ruger-mini-14.jpeg",
                thumbnails: ["ruger-mini-14-1.jpeg", "ruger-mini-14-2.jpeg", "ruger-mini-14-3.jpeg", "ruger-mini-14-4.jpeg"],
                specs: { caliber: "5.56 NATO", capacity: "20+1", action: "Semi-Auto", weight: "6.7 lbs" }, desc: "Piston-driven .223 rifle with traditional styling." 
            },
            { 
                id: "sa6", name: "FN SCAR", price: 3200.00, 
                image: "fn-scar.jpeg",
                thumbnails: ["fn-scar-1.jpeg", "fn-scar-2.jpeg", "fn-scar-3.jpeg", "fn-scar-4.jpeg"],
                specs: { caliber: "7.62 NATO", capacity: "20+1", action: "Semi-Auto", weight: "7.9 lbs" }, desc: "Special operations combat assault rifle." 
            }
        ]
    },
    "shotguns": {
        id: "shotguns", title: "🔫 Shotguns", icon: "fa-burst",
        desc: "Pump, Semi, and Break action tools for breach, defense, and sport.",
        bgImage: "shotgun.jpeg",
        items: [
            { 
                id: "sg1", name: "Remington 870", price: 450.00, 
                image: "remington-870.jpeg",
                thumbnails: ["remington-870-1.jpeg", "remington-870-2.jpeg", "remington-870-3.jpeg", "remington-870-4.jpeg"],
                specs: { caliber: "12 Gauge", capacity: "6+1", action: "Pump-Action", weight: "7.5 lbs" }, desc: "The definitive pump-action shotgun." 
            },
            { 
                id: "sg2", name: "Mossberg 500", price: 420.00, 
                image: "mossberg-500.jpeg",
                thumbnails: ["mossberg-500-1.jpeg", "mossberg-500-2.jpeg", "mossberg-500-3.jpeg", "mossberg-500-4.jpeg"],
                specs: { caliber: "12 Gauge", capacity: "5+1", action: "Pump-Action", weight: "7.5 lbs" }, desc: "Military-approved pump action with ambidextrous safety." 
            },
            { 
                id: "sg3", name: "Benelli M4", price: 1999.00, 
                image: "benelli-m4.jpeg",
                thumbnails: ["benelli-m4-1.jpeg", "benelli-m4-2.jpeg", "benelli-m4-3.jpeg", "benelli-m4-4.jpeg"],
                specs: { caliber: "12 Gauge", capacity: "5+1", action: "Semi-Auto", weight: "8.4 lbs" }, desc: "Gas-operated semi-auto chosen by the USMC." 
            },
            { 
                id: "sg4", name: "Winchester SXP", price: 350.00, 
                image: "winchester-sxp.jpeg",
                thumbnails: ["winchester-sxp-1.jpeg", "winchester-sxp-2.jpeg", "winchester-sxp-3.jpeg", "winchester-sxp-4.jpeg"],
                specs: { caliber: "12 Gauge", capacity: "4+1", action: "Pump-Action", weight: "6.8 lbs" }, desc: "Incredibly fast rotary bolt pump action." 
            },
            { 
                id: "sg5", name: "Browning Citori", price: 2100.00, 
                image: "browning-citori.jpeg",
                thumbnails: ["browning-citori-1.jpeg", "browning-citori-2.jpeg", "browning-citori-3.jpeg", "browning-citori-4.jpeg"],
                specs: { caliber: "12 Gauge", capacity: "2", action: "Over/Under", weight: "8.0 lbs" }, desc: "Premium over/under break-action for clay and bird." 
            },
            { 
                id: "sg6", name: "Ithaca 37", price: 900.00, 
                image: "ithaca-37.jpeg",
                thumbnails: ["ithaca-37-1.jpeg", "ithaca-37-2.jpeg", "ithaca-37-3.jpeg", "ithaca-37-4.jpeg"],
                specs: { caliber: "12 Gauge", capacity: "4+1", action: "Pump-Action", weight: "7.6 lbs" }, desc: "Bottom-ejecting classic pump shotgun." 
            }
        ]
    },
    "smg": {
        id: "smg", title: "🔫 Submachine Guns", icon: "fa-meteor",
        desc: "Compact, pistol-caliber carbines (Civilian Legal Semi-Auto variants).",
        bgImage: "submachine.jpeg",
        items: [
            { 
                id: "smg1", name: "MP5", price: 2800.00, 
                image: "mp5.jpeg",
                thumbnails: ["mp5-1.jpeg", "mp5-2.jpeg", "mp5-3.jpeg", "mp5-4.jpeg"],
                specs: { caliber: "9mm", capacity: "30", action: "Roller-Delayed", weight: "5.5 lbs" }, desc: "Roller-delayed blowback perfection in 9mm." 
            },
            { 
                id: "smg2", name: "Uzi", price: 1500.00, 
                image: "uzi.jpeg",
                thumbnails: ["uzi-1.jpeg", "uzi-2.jpeg", "uzi-3.jpeg", "uzi-4.jpeg"],
                specs: { caliber: "9mm", capacity: "32", action: "Blowback", weight: "7.7 lbs" }, desc: "Iconic compact design with telescoping bolt." 
            },
            { 
                id: "smg3", name: "MP7", price: 3500.00, 
                image: "mp7.jpeg",
                thumbnails: ["mp7-1.jpeg", "mp7-2.jpeg", "mp7-3.jpeg", "mp7-4.jpeg"],
                specs: { caliber: "4.6x30mm", capacity: "40", action: "Gas-Operated", weight: "4.2 lbs" }, desc: "Armor-piercing capability in a PDW package." 
            },
            { 
                id: "smg4", name: "Thompson", price: 1800.00, 
                image: "thompson.jpeg",
                thumbnails: ["thompson-1.jpeg", "thompson-2.jpeg", "thompson-3.jpeg", "thompson-4.jpeg"],
                specs: { caliber: ".45 ACP", capacity: "30", action: "Blowback", weight: "10.6 lbs" }, desc: "The 'Tommy Gun' - heavy, historical, .45 ACP." 
            },
            { 
                id: "smg5", name: "P90", price: 1700.00, 
                image: "p90.jpeg",
                thumbnails: ["p90-1.jpeg", "p90-2.jpeg", "p90-3.jpeg", "p90-4.jpeg"],
                specs: { caliber: "5.7x28mm", capacity: "50", action: "Blowback", weight: "5.8 lbs" }, desc: "Futuristic bullpup firing 5.7x28mm." 
            },
            { 
                id: "smg6", name: "MAC-10", price: 900.00, 
                image: "mac-10.jpeg",
                thumbnails: ["mac-10-1.jpeg", "mac-10-2.jpeg", "mac-10-3.jpeg", "mac-10-4.jpeg"],
                specs: { caliber: ".45 ACP", capacity: "30", action: "Blowback", weight: "6.2 lbs" }, desc: "Ultra-compact stamped steel machine pistol design." 
            }
        ]
    },
    "machine-guns": {
        id: "machine-guns", title: "🔫 Machine Guns", icon: "fa-fire",
        desc: "Heavy firepower (Civilian Semi-Auto Replicas or NFA Title II).",
        bgImage: "machine.jpeg",
        items: [
            { 
                id: "mg1", name: "M60", price: 12000.00, 
                image: "m60.jpeg",
                thumbnails: ["m60-1.jpeg", "m60-2.jpeg", "m60-3.jpeg", "m60-4.jpeg"],
                specs: { caliber: "7.62 NATO", capacity: "Belt-Fed", action: "Gas-Operated", weight: "23.1 lbs" }, desc: "The 'Pig'. Belt-fed 7.62 NATO suppression weapon." 
            },
            { 
                id: "mg2", name: "M249", price: 8500.00, 
                image: "m249.jpeg",
                thumbnails: ["m249-1.jpeg", "m249-2.jpeg", "m249-3.jpeg", "m249-4.jpeg"],
                specs: { caliber: "5.56 NATO", capacity: "Belt-Fed", action: "Gas-Operated", weight: "17 lbs" }, desc: "Squad Automatic Weapon in 5.56mm." 
            },
            { 
                id: "mg3", name: "PKM", price: 9000.00, 
                image: "pkm.jpeg",
                thumbnails: ["pkm-1.jpeg", "pkm-2.jpeg", "pkm-3.jpeg", "pkm-4.jpeg"],
                specs: { caliber: "7.62x54mmR", capacity: "Belt-Fed", action: "Gas-Operated", weight: "16.5 lbs" }, desc: "Rugged Russian belt-fed general purpose MG." 
            },
            { 
                id: "mg4", name: "MG42", price: 15000.00, 
                image: "mg42.jpeg",
                thumbnails: ["mg42-1.jpeg", "mg42-2.jpeg", "mg42-3.jpeg", "mg42-4.jpeg"],
                specs: { caliber: "8x57mm IS", capacity: "Belt-Fed", action: "Recoil-Operated", weight: "25.6 lbs" }, desc: "Historical 'Hitler's Buzzsaw' with insane cyclic rate." 
            },
            { 
                id: "mg5", name: "Browning M2", price: 18000.00, 
                image: "browning-m2.jpeg",
                thumbnails: ["browning-m2-1.jpeg", "browning-m2-2.jpeg", "browning-m2-3.jpeg", "browning-m2-4.jpeg"],
                specs: { caliber: ".50 BMG", capacity: "Belt-Fed", action: "Recoil-Operated", weight: "83.7 lbs" }, desc: "Ma Deuce. The legendary .50 Caliber heavy machine gun." 
            },
            { 
                id: "mg6", name: "RPD", price: 4500.00, 
                image: "rpd.jpeg",
                thumbnails: ["rpd-1.jpeg", "rpd-2.jpeg", "rpd-3.jpeg", "rpd-4.jpeg"],
                specs: { caliber: "7.62x39mm", capacity: "Belt-Fed", action: "Gas-Operated", weight: "16.3 lbs" }, desc: "Early Soviet squad automatic weapon." 
            }
        ]
    }
};

// Create a flat map for easy ID lookup
const productLookupMap = {};
for(let cat in catalogData) {
    catalogData[cat].items.forEach(item => {
        productLookupMap[item.id] = { item, catId: cat };
    });
}

// --- STATE ---
let currentView = 'auth'; // Default gate
let currentCategory = null;
let currentProduct = null;
let cart = [];

// Auth State (In-Memory Mock)
let currentUser = null;
let mockUsers = []; 
let isSignupMode = false;

// --- NAVIGATION & VIEWS ---
function triggerTransition(targetView, actionOrPayload = null) {
    // Guard: Enforce Authentication
    if (!currentUser && targetView !== 'auth') {
        targetView = 'auth';
    }

    const overlay = document.getElementById('page-transition');
    const label = document.getElementById('transition-label');
    
    let action = actionOrPayload === 'about' ? 'about' : null;
    let payload = actionOrPayload !== 'about' ? actionOrPayload : null;
    
    if(action === 'about') label.innerText = 'LOCATING TARGET';
    else if(targetView === 'store' || targetView === 'category-detail') label.innerText = 'UNLOCKING ARSENAL';
    else if(targetView === 'auth') label.innerText = 'ENCRYPTED CONNECTION';
    else if(targetView === 'receipt') label.innerText = 'GENERATING MANIFEST';
    else label.innerText = 'SYSTEM ACCESS';

    overlay.classList.remove('wipe-out');
    overlay.classList.add('wipe-in');

    setTimeout(() => {
        navigate(targetView, payload);
        
        if (action === 'about') {
            const aboutSec = document.getElementById('about-section');
            aboutSec.scrollIntoView({behavior: 'instant'});
        } else {
            window.scrollTo(0,0);
        }

        overlay.classList.remove('wipe-in');
        overlay.classList.add('wipe-out');
        
        if (action === 'about') {
            const aboutSec = document.getElementById('about-section');
            aboutSec.classList.add('target-lock');
            setTimeout(() => aboutSec.classList.remove('target-lock'), 1500);
        }

    }, 400); 
}

function navigate(viewId, payload = null) {
    // Guard: Enforce Authentication
    if (!currentUser && viewId !== 'auth') {
        viewId = 'auth';
    }

    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
    
    const target = document.getElementById(`view-${viewId}`);
    if (target) {
        target.classList.add('active');
        window.scrollTo(0, 0);
    }
    
    currentView = viewId;

    if (viewId === 'store') renderCategories();
    if (viewId === 'category-detail') renderCategoryDetail(payload);
    if (viewId === 'product-detail') renderProductDetail(payload);
    if (viewId === 'checkout') {
        renderCheckout();
        // Re-initialize payment method toggle after DOM is ready
        setTimeout(initPaymentMethodToggle, 50);
    }
    if (viewId === 'auth') updateAuthUI();

    if (typeof observeElements === 'function') {
        setTimeout(observeElements, 100);
    }
}

// --- RENDER FUNCTIONS ---
function renderCategories() {
    const grid = document.getElementById('categories-grid');
    grid.innerHTML = '';
    
    Object.values(catalogData).forEach(cat => {
        const card = document.createElement('div');
        card.className = "relative rounded-sm overflow-hidden text-center cursor-pointer group transform hover:-translate-y-2 transition duration-300 border border-dark-700 hover:border-brand-500 h-64";
        card.onclick = () => triggerTransition('category-detail', cat.id); 
        
        card.innerHTML = `
            <div class="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110" style="background-image: url('${cat.bgImage}');"></div>
            <div class="absolute inset-0 cat-overlay"></div>
            
            <div class="absolute inset-0 p-8 flex flex-col items-center justify-end pb-10 z-10">
                <div class="w-16 h-16 bg-dark-900/80 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 transition border border-dark-600 group-hover:border-brand-500 group-hover:bg-brand-500/10">
                    <i class="fa-solid ${cat.icon} text-2xl text-brand-500"></i>
                </div>
                <h3 class="text-2xl font-heading font-bold text-white uppercase mb-2 shadow-black drop-shadow-md">${cat.title}</h3>
                <div class="mt-2 text-brand-400 font-bold uppercase text-xs tracking-wider opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">Explore Collection <i class="fa-solid fa-arrow-right ml-1"></i></div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderCategoryDetail(categoryId) {
    currentCategory = catalogData[categoryId];
    document.getElementById('cat-title').innerText = currentCategory.title;
    document.getElementById('cat-desc').innerText = currentCategory.desc;
    
    const grid = document.getElementById('guns-grid');
    grid.innerHTML = '';

    currentCategory.items.forEach(item => {
        const card = document.createElement('div');
        card.className = "bg-dark-800 border border-dark-700 rounded-sm overflow-hidden group hover:border-brand-500 transition cursor-pointer flex flex-col";
        card.onclick = () => navigate('product-detail', { catId: categoryId, item: item });
        
        card.innerHTML = `
            <div class="h-48 overflow-hidden bg-dark-900 relative p-4 flex items-center justify-center">
                <img src="${item.image}" alt="${item.name}" class="max-h-full object-contain transform group-hover:scale-110 transition duration-500 drop-shadow-xl z-10">
                <div class="absolute inset-0 bg-gradient-to-t from-dark-800 to-transparent z-0"></div>
                <div class="absolute top-2 right-2 bg-dark-700/80 backdrop-blur text-xs px-2 py-1 rounded text-gray-300 font-bold border border-dark-600">${item.specs.caliber}</div>
            </div>
            <div class="p-5 flex-grow flex flex-col">
                <h3 class="text-xl font-heading font-bold text-white mb-2 uppercase tracking-wide">${item.name}</h3>
                <p class="text-gray-400 text-sm mb-4 flex-grow line-clamp-2">${item.desc}</p>
                <div class="flex justify-between items-center border-t border-dark-700 pt-4 mt-auto">
                    <span class="text-brand-500 font-bold text-xl">$${item.price.toFixed(2)}</span>
                    <span class="text-white bg-dark-700 hover:bg-brand-600 hover:text-dark-900 px-4 py-2 rounded-sm text-xs font-bold uppercase transition">View Specs</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderProductDetail(payload) {
    currentProduct = payload.item;
    const category = catalogData[payload.catId];
    
    document.getElementById('back-to-cat-btn').onclick = () => triggerTransition('category-detail', category.id);
    document.getElementById('prod-category-label').innerText = category.title;
    document.getElementById('prod-title').innerText = currentProduct.name;
    document.getElementById('prod-price').innerText = `$${currentProduct.price.toFixed(2)}`;
    document.getElementById('prod-desc').innerText = currentProduct.desc + " Milled from high-grade materials, this firearm ensures precision and reliability when it matters most. Shipped in a secure hard-case with factory accessories.";
    
    document.getElementById('spec-caliber').innerText = currentProduct.specs.caliber;
    document.getElementById('spec-capacity').innerText = currentProduct.specs.capacity;
    document.getElementById('spec-action').innerText = currentProduct.specs.action;
    document.getElementById('spec-weight').innerText = currentProduct.specs.weight;

    const mainImg = document.getElementById('main-product-img');
    mainImg.src = currentProduct.image;

    const thumbsContainer = document.getElementById('product-thumbnails');
    thumbsContainer.innerHTML = '';
    
    const thumbList = currentProduct.thumbnails || [
        currentProduct.image, 
        currentProduct.image, 
        currentProduct.image, 
        currentProduct.image
    ];

    for(let i=0; i<4; i++) {
        const thumb = document.createElement('div');
        thumb.className = "bg-dark-900 border border-dark-700 rounded-sm h-20 cursor-pointer overflow-hidden hover:border-brand-500 transition opacity-70 hover:opacity-100 flex items-center justify-center p-1";
        
        const thumbSrc = thumbList[i % thumbList.length];
        
        thumb.innerHTML = `<img src="${thumbSrc}" class="max-w-full max-h-full object-cover">`;
        thumb.onclick = () => {
            mainImg.style.opacity = '0.5';
            setTimeout(() => {
                mainImg.src = thumbSrc; 
                mainImg.style.opacity = '1';
            }, 150);
        };
        thumbsContainer.appendChild(thumb);
    }

    document.getElementById('add-cart-btn').onclick = () => addToCart(currentProduct);
    document.getElementById('buy-now-btn').onclick = () => {
        addToCart(currentProduct);
        triggerTransition('checkout');
    };
}

function renderCheckout() {
    const summary = document.getElementById('checkout-summary-items');
    summary.innerHTML = '';
    
    if(cart.length === 0) {
        summary.innerHTML = '<p class="text-gray-500">Cart is empty.</p>';
        document.getElementById('checkout-subtotal').innerText = '$0.00';
        document.getElementById('checkout-total').innerText = '$0.00';
        return;
    }

    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.price;
        summary.innerHTML += `
            <div class="flex justify-between items-center text-sm">
                <span class="text-white truncate pr-2">${item.name}</span>
                <span class="text-gray-400 whitespace-nowrap">$${item.price.toFixed(2)}</span>
            </div>
        `;
    });

    document.getElementById('checkout-subtotal').innerText = `$${subtotal.toFixed(2)}`;
    const shipping = 35.00;
    const total = subtotal + shipping;
    document.getElementById('checkout-total').innerText = `$${total.toFixed(2)}`;
}

// --- CART LOGIC ---
function addToCart(item) {
    cart.push(item);
    updateCartUI();
    showToast(`${item.name} added to cart.`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
    if(currentView === 'checkout') renderCheckout();
}

function updateCartUI() {
    const countEl = document.getElementById('cart-count');
    countEl.innerText = cart.length;
    if (cart.length > 0) countEl.classList.remove('scale-0');
    else countEl.classList.add('scale-0');

    const itemsContainer = document.getElementById('cart-items');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    if (cart.length === 0) {
        itemsContainer.innerHTML = '<div class="text-center text-gray-500 mt-10" id="empty-cart-msg">Your arsenal is currently empty.</div>';
        checkoutBtn.disabled = true;
        document.getElementById('cart-total').innerText = '$0.00';
        return;
    }

    checkoutBtn.disabled = false;
    itemsContainer.innerHTML = '';

    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const el = document.createElement('div');
        el.className = "flex gap-4 items-center bg-dark-900 p-3 rounded-sm border border-dark-700";
        el.innerHTML = `
            <div class="w-16 h-12 bg-black flex items-center justify-center overflow-hidden rounded-sm">
                <img src="${item.image}" class="max-h-full max-w-full object-contain">
            </div>
            <div class="flex-grow">
                <h4 class="text-white text-sm font-bold uppercase truncate">${item.name}</h4>
                <span class="text-brand-500 text-sm font-bold">$${item.price.toFixed(2)}</span>
            </div>
            <button onclick="removeFromCart(${index})" class="text-red-500 hover:text-red-400 p-2"><i class="fa-solid fa-trash"></i></button>
        `;
        itemsContainer.appendChild(el);
    });

    document.getElementById('cart-total').innerText = `$${total.toFixed(2)}`;
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    const panel = document.getElementById('cart-panel');
    
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        setTimeout(() => panel.classList.remove('translate-x-full'), 10);
    } else {
        panel.classList.add('translate-x-full');
        setTimeout(() => modal.classList.add('hidden'), 300);
    }
}

function goToCheckout() {
    toggleCart();
    triggerTransition('checkout');
}

// --- PAYMENT METHOD LOGIC (NEW) ---
function initPaymentMethodToggle() {
    const cardDetails = document.getElementById('card-details');
    const upiDetails = document.getElementById('upi-details');
    const radioButtons = document.querySelectorAll('input[name="paymentMethod"]');

    if (!radioButtons.length) return;

    function togglePaymentFields() {
        const selected = document.querySelector('input[name="paymentMethod"]:checked').value;
        if (selected === 'card') {
            if(cardDetails) cardDetails.classList.remove('hidden');
            if(upiDetails) upiDetails.classList.add('hidden');
        } else if (selected === 'upi') {
            if(cardDetails) cardDetails.classList.add('hidden');
            if(upiDetails) upiDetails.classList.remove('hidden');
        } else { // cod
            if(cardDetails) cardDetails.classList.add('hidden');
            if(upiDetails) upiDetails.classList.add('hidden');
        }
    }

    radioButtons.forEach(radio => radio.addEventListener('change', togglePaymentFields));
    togglePaymentFields(); // set initial state based on default checked radio
}

// --- FORM SUBMISSION (UPDATED TO INCLUDE PAYMENT METHOD) ---
document.getElementById('checkout-form').addEventListener('submit', function(e) {
    e.preventDefault();
    if(cart.length === 0) {
        showToast("Your cart is empty!", true);
        return;
    }
    const btn = this.querySelector('button[type="submit"]');
    const ogText = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Processing Secure Payment...';
    btn.disabled = true;

    // Get selected payment method
    const selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'card';

    setTimeout(() => {
        showToast("Payment Successful! Order placed.", false, 5000);
        
        // Generate and render the receipt before wiping cart
        const orderId = 'ORD-' + Math.floor(Math.random() * 900000 + 100000);
        const customerName = currentUser ? currentUser.name : 'Operative';
        const date = new Date().toLocaleDateString();
        renderReceipt(orderId, customerName, date, cart, selectedPaymentMethod);

        cart = [];
        updateCartUI();
        btn.innerHTML = ogText;
        btn.disabled = false;
        this.reset();
        // Reset payment method to default (card) after checkout
        const defaultRadio = document.querySelector('input[name="paymentMethod"][value="card"]');
        if(defaultRadio) defaultRadio.checked = true;
        initPaymentMethodToggle(); // reset UI fields
        triggerTransition('receipt');
    }, 2500);
});

// --- RECEIPT GENERATION (UPDATED TO SHOW PAYMENT METHOD) ---
function renderReceipt(orderId, name, date, orderedItems, paymentMethod = 'card') {
    document.getElementById('receipt-order-id').innerText = orderId;
    document.getElementById('receipt-name').innerText = name || "Operative";
    document.getElementById('receipt-date').innerText = date;
    
    const itemsContainer = document.getElementById('receipt-items');
    itemsContainer.innerHTML = '';
    let subtotal = 0;
    
    orderedItems.forEach(item => {
        subtotal += item.price;
        itemsContainer.innerHTML += `
            <div class="flex justify-between items-center border-b border-dark-700 py-3 text-sm">
                <span class="text-white truncate pr-4">${item.name}</span>
                <span class="text-brand-500 font-bold whitespace-nowrap">$${item.price.toFixed(2)}</span>
            </div>
        `;
    });
    
    // Add payment method line
    let methodDisplay = '';
    if (paymentMethod === 'card') methodDisplay = 'Credit/Debit Card';
    else if (paymentMethod === 'upi') methodDisplay = 'UPI';
    else methodDisplay = 'Cash on Delivery (FFL)';
    
    itemsContainer.innerHTML += `
        <div class="flex justify-between items-center border-t border-dark-700 pt-4 mt-4 text-sm">
            <span class="text-gray-400">Payment Method</span>
            <span class="text-white font-bold">${methodDisplay}</span>
        </div>
    `;
    
    const shipping = 35.00;
    const total = subtotal + shipping;
    
    document.getElementById('receipt-subtotal').innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById('receipt-total').innerText = `$${total.toFixed(2)}`;
}

// --- UTILS ---
function showToast(message, isError = false, duration = 3000) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${isError ? 'border-red-500' : 'border-brand-500'}`;
    toast.innerHTML = `<i class="fa-solid ${isError ? 'fa-triangle-exclamation text-red-500' : 'fa-check-circle text-brand-500'} mr-2"></i> ${message}`;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease-out reverse forwards';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// Initialize Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('bg-dark-900/95', 'shadow-lg');
        nav.classList.remove('border-b', 'border-dark-700/50');
    } else if (currentView === 'home') {
        nav.classList.remove('bg-dark-900/95', 'shadow-lg');
        nav.classList.add('border-b', 'border-dark-700/50');
    }
});

// Mobile Menu Toggle Fix with Animation
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-menu-icon');
    if (menu.classList.contains('hidden') || menu.classList.contains('scale-y-0')) {
        menu.classList.remove('hidden');
        setTimeout(() => {
            menu.classList.remove('scale-y-0', 'opacity-0');
            menu.classList.add('scale-y-100', 'opacity-100');
        }, 10);
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        menu.classList.remove('scale-y-100', 'opacity-100');
        menu.classList.add('scale-y-0', 'opacity-0');
        setTimeout(() => menu.classList.add('hidden'), 300);
        icon.classList.replace('fa-times', 'fa-bars');
    }
}

// Intersection Observer for Scroll Animations
const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            scrollObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

function observeElements() {
    document.querySelectorAll('#categories-grid > div, #guns-grid > div, #featured .grid > div, .bg-dark-900.p-8.rounded-sm').forEach((el, index) => {
        el.classList.add('reveal-up');
        el.style.transitionDelay = `${(index % 4) * 0.1}s`; 
        scrollObserver.observe(el);
    });
    
    const aboutImg = document.querySelector('#about-section img');
    const aboutText = document.querySelector('#about-section h3')?.parentElement;
    if(aboutImg) { aboutImg.classList.add('reveal-left'); scrollObserver.observe(aboutImg); }
    if(aboutText) { aboutText.classList.add('reveal-right'); scrollObserver.observe(aboutText); }
}

// Initial setup for existing DOM
document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    observeElements();
    updateAuthUI();
    // Initialize payment toggle if checkout is already visible (rare but safe)
    initPaymentMethodToggle();
});

// --- AUTHENTICATION LOGIC (IN-MEMORY MOCK) ---
function toggleAuthMode() {
    isSignupMode = !isSignupMode;
    const nameGroup = document.getElementById('auth-name-group');
    const title = document.getElementById('auth-title');
    const subtitle = document.getElementById('auth-subtitle');
    const btnText = document.getElementById('auth-btn-text');
    const toggleText = document.getElementById('auth-toggle-text');
    const toggleBtn = document.getElementById('auth-toggle-btn');
    
    if (isSignupMode) {
        nameGroup.classList.remove('hidden');
        document.getElementById('auth-name').required = true;
        title.innerText = 'Request Access';
        subtitle.innerText = 'Create your secure operative profile.';
        btnText.innerText = 'Create Account';
        toggleText.innerText = 'Already have clearance?';
        toggleBtn.innerText = 'Login Here';
    } else {
        nameGroup.classList.add('hidden');
        document.getElementById('auth-name').required = false;
        title.innerText = 'Agent Login';
        subtitle.innerText = 'Access your tactical dashboard.';
        btnText.innerText = 'Authenticate';
        toggleText.innerText = "Don't have an access code?";
        toggleBtn.innerText = 'Request Access';
    }
}

document.getElementById('auth-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    const originalHtml = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Processing...';
    btn.disabled = true;

    setTimeout(() => {
        const email = document.getElementById('auth-email').value.trim();
        const pass = document.getElementById('auth-pass').value.trim();
        let success = false;
        
        if (isSignupMode) {
            const name = document.getElementById('auth-name').value.trim();
            const existingUser = mockUsers.find(u => u.email === email);
            if (existingUser) {
                showToast("Email already exists. Please login.", true);
            } else {
                const newUser = { name, email, pass };
                mockUsers.push(newUser);
                currentUser = newUser;
                success = true;
                showToast("Account created successfully. Welcome to Tactical Arsenal!");
            }
        } else {
            const user = mockUsers.find(u => u.email === email && u.pass === pass);
            if (user) {
                currentUser = user;
                success = true;
                showToast("Authentication successful. Welcome back.");
            } else {
                showToast("Invalid credentials. Access denied.", true);
            }
        }
        
        btn.innerHTML = originalHtml;
        btn.disabled = false;
        
        if(success) {
            this.reset();
            updateAuthUI();
            triggerTransition('home');
        }
    }, 1000);
});

function logout() {
    currentUser = null;
    showToast("Session terminated. Logged out successfully.");
    updateAuthUI();
    triggerTransition('auth');
}

function updateAuthUI() {
    const navbar = document.getElementById('navbar');
    const footer = document.getElementById('app-footer');
    
    if (currentUser) {
        navbar.style.display = 'block';
        if(footer) footer.style.display = 'block';
        const navAuthIcon = document.getElementById('nav-auth-icon');
        const navAuthLabel = document.getElementById('nav-auth-label');
        const mobileAuthLink = document.getElementById('mobile-auth-link');
        
        if(navAuthIcon) navAuthIcon.className = "fa-solid fa-user-check text-xl text-green-500";
        if(navAuthLabel) navAuthLabel.innerText = "Profile";
        if(mobileAuthLink) mobileAuthLink.innerText = "Profile / Logout";
    } else {
        navbar.style.display = 'none';
        if(footer) footer.style.display = 'none';
    }

    const formContainer = document.getElementById('auth-form-container');
    const profileContainer = document.getElementById('auth-profile');
    
    if (currentUser) {
        formContainer.classList.add('hidden');
        profileContainer.classList.remove('hidden');
        document.getElementById('profile-name').innerText = currentUser.name || "Operative";
        document.getElementById('profile-email').innerText = currentUser.email;
    } else {
        formContainer.classList.remove('hidden');
        profileContainer.classList.add('hidden');
        if(isSignupMode) toggleAuthMode();
    }
}

// --- TACTICAL UI SOUND EFFECT ---
let audioCtx = null;
function playClickSound() {
    try {
        if (!audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;
            audioCtx = new AudioContext();
        }
        
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.05);
        
        gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.start();
        osc.stop(audioCtx.currentTime + 0.05);
    } catch(e) {
        console.warn("Audio not supported or blocked");
    }
}

// Attach the sound and visual effect to all interactive elements globally
document.addEventListener('click', function(e) {
    const target = e.target.closest('button, a, .cursor-pointer, .fa-times, .fa-shopping-cart');
    if (target) {
        playClickSound();
        
        target.classList.remove('click-flash');
        void target.offsetWidth;
        target.classList.add('click-flash');
        
        setTimeout(() => {
            target.classList.remove('click-flash');
        }, 300);
    }
});