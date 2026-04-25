// Local Storage Management
class BusinessDirectory {
    constructor() {
        this.storageKey = 'wedoBusinesses';
        this.initializeData();
    }

    initializeData() {
        const stored = localStorage.getItem(this.storageKey);
        if (!stored) {
            const defaultBusinesses = [
// Travel Agencies
{ id: 1, name: "Mumbai Travel Hub", category: "travel-agency", city: "mumbai", mobile: "+91 98765 43210", email: "mumbaitravelhub@gmail.com", address: "Shop 15, Marine Drive, Mumbai - 400001", dateAdded: new Date().toISOString() },
{ id: 2, name: "Delhi Tours & Travels", category: "travel-agency", city: "delhi", mobile: "+91 98765 43211", email: "delhitourstravels@yahoo.com", address: "Connaught Place, New Delhi - 110001", dateAdded: new Date().toISOString() },
{ id: 3, name: "Bangalore Adventure Tours", category: "travel-agency", city: "bangalore", mobile: "+91 98765 43212", email: "bangaloreadventure@gmail.com", address: "MG Road, Bangalore - 560001", dateAdded: new Date().toISOString() },
{ id: 4, name: "Pune Travel Express", category: "travel-agency", city: "pune", mobile: "+91 98765 43213", email: "punetravelexpress@gmail.com", address: "FC Road, Pune - 411005", dateAdded: new Date().toISOString() },
{ id: 5, name: "Chennai Holiday Planners", category: "travel-agency", city: "chennai", mobile: "+91 98765 43214", email: "chennaiplanners@yahoo.com", address: "T Nagar, Chennai - 600017", dateAdded: new Date().toISOString() },
{ id: 31, name: "Noida Travel World", category: "travel-agency", city: "noida", mobile: "+91 98765 43240", email: "noidatravelworld@gmail.com", address: "Sector 18, Noida - 201301", dateAdded: new Date().toISOString() },

// Hotels
{ id: 6, name: "Grand Palace Hotel", category: "hotels", city: "mumbai", mobile: "+91 98765 43215", email: "grandpalacehotel@gmail.com", address: "Bandra West, Mumbai - 400050", dateAdded: new Date().toISOString() },
{ id: 7, name: "Delhi Luxury Suites", category: "hotels", city: "delhi", mobile: "+91 98765 43216", email: "delhiluxurysuites@yahoo.com", address: "Karol Bagh, New Delhi - 110005", dateAdded: new Date().toISOString() },
{ id: 8, name: "Bangalore Business Hotel", category: "hotels", city: "bangalore", mobile: "+91 98765 43217", email: "blrbusinesshotel@gmail.com", address: "Whitefield, Bangalore - 560066", dateAdded: new Date().toISOString() },
{ id: 9, name: "Pune Heritage Inn", category: "hotels", city: "pune", mobile: "+91 98765 43218", email: "puneheritageinn@gmail.com", address: "Koregaon Park, Pune - 411001", dateAdded: new Date().toISOString() },
{ id: 10, name: "Chennai Beach Resort", category: "hotels", city: "chennai", mobile: "+91 98765 43219", email: "chennaibeachresort@yahoo.com", address: "ECR Road, Chennai - 600041", dateAdded: new Date().toISOString() },
{ id: 32, name: "Noida Business Inn", category: "hotels", city: "noida", mobile: "+91 98765 43241", email: "noidabusinessinn@gmail.com", address: "Sector 62, Noida - 201309", dateAdded: new Date().toISOString() },

// Car Wash
{ id: 11, name: "SparkleClean Car Wash", category: "car-wash", city: "mumbai", mobile: "+91 98765 43220", email: "sparklecleancarwash@gmail.com", address: "Andheri East, Mumbai - 400069", dateAdded: new Date().toISOString() },
{ id: 12, name: "Delhi Auto Spa", category: "car-wash", city: "delhi", mobile: "+91 98765 43221", email: "delhiautospa@yahoo.com", address: "Lajpat Nagar, New Delhi - 110024", dateAdded: new Date().toISOString() },
{ id: 13, name: "Bangalore Car Care", category: "car-wash", city: "bangalore", mobile: "+91 98765 43222", email: "bangalorecarcare@gmail.com", address: "Indiranagar, Bangalore - 560038", dateAdded: new Date().toISOString() },
{ id: 14, name: "Pune Wash Express", category: "car-wash", city: "pune", mobile: "+91 98765 43223", email: "punewashexpress@gmail.com", address: "Viman Nagar, Pune - 411014", dateAdded: new Date().toISOString() },
{ id: 15, name: "Chennai Auto Clean", category: "car-wash", city: "chennai", mobile: "+91 98765 43224", email: "chennaiautoclean@yahoo.com", address: "Velachery, Chennai - 600042", dateAdded: new Date().toISOString() },
{ id: 33, name: "Noida Premium Wash", category: "car-wash", city: "noida", mobile: "+91 98765 43242", email: "noidapremiumwash@gmail.com", address: "Sector 15, Noida - 201301", dateAdded: new Date().toISOString() },

// Car/Bike Dealers
{ id: 16, name: "AutoMax Dealers", category: "car-bike-dealers", city: "mumbai", mobile: "+91 98765 43225", email: "automaxdealers@gmail.com", address: "Goregaon West, Mumbai - 400062", dateAdded: new Date().toISOString() },
{ id: 17, name: "Delhi Motor World", category: "car-bike-dealers", city: "delhi", mobile: "+91 98765 43226", email: "delhimotorworld@yahoo.com", address: "Rajouri Garden, New Delhi - 110027", dateAdded: new Date().toISOString() },
{ id: 18, name: "Bangalore Bike Hub", category: "car-bike-dealers", city: "bangalore", mobile: "+91 98765 43227", email: "bangalorebikehub@gmail.com", address: "Jayanagar, Bangalore - 560011", dateAdded: new Date().toISOString() },
{ id: 19, name: "Pune Auto Gallery", category: "car-bike-dealers", city: "pune", mobile: "+91 98765 43228", email: "puneautogallery@gmail.com", address: "Hadapsar, Pune - 411028", dateAdded: new Date().toISOString() },
{ id: 20, name: "Chennai Vehicle Center", category: "car-bike-dealers", city: "chennai", mobile: "+91 98765 43229", email: "chennaivehiclecenter@yahoo.com", address: "Porur, Chennai - 600116", dateAdded: new Date().toISOString() },
{ id: 34, name: "Noida Auto Hub", category: "car-bike-dealers", city: "noida", mobile: "+91 98765 43243", email: "noidaautohub@gmail.com", address: "Sector 63, Noida - 201301", dateAdded: new Date().toISOString() },

// Car Workshops
{ id: 21, name: "Expert Car Workshop", category: "car-workshops", city: "mumbai", mobile: "+91 98765 43230", email: "expertcarworkshop@gmail.com", address: "Malad West, Mumbai - 400064", dateAdded: new Date().toISOString() },
{ id: 22, name: "Delhi Service Station", category: "car-workshops", city: "delhi", mobile: "+91 98765 43231", email: "delhiservicestation@yahoo.com", address: "Mayur Vihar, New Delhi - 110091", dateAdded: new Date().toISOString() },
{ id: 23, name: "Bangalore Auto Repair", category: "car-workshops", city: "bangalore", mobile: "+91 98765 43232", email: "bangaloreautorepair@gmail.com", address: "Koramangala, Bangalore - 560034", dateAdded: new Date().toISOString() },
{ id: 24, name: "Pune Garage Pro", category: "car-workshops", city: "pune", mobile: "+91 98765 43233", email: "punegaragepro@gmail.com", address: "Wakad, Pune - 411057", dateAdded: new Date().toISOString() },
{ id: 25, name: "Chennai Fix It", category: "car-workshops", city: "chennai", mobile: "+91 98765 43234", email: "chennaifixit@yahoo.com", address: "Adyar, Chennai - 600020", dateAdded: new Date().toISOString() },
{ id: 35, name: "Noida Service Center", category: "car-workshops", city: "noida", mobile: "+91 98765 43244", email: "noidaservicecenter@gmail.com", address: "Sector 16, Noida - 201301", dateAdded: new Date().toISOString() },

// Rental Agencies
{ id: 26, name: "DriveEasy Rentals", category: "rental-agencies", city: "mumbai", mobile: "+91 98765 43235", email: "driveeasyrentals@gmail.com", address: "Powai, Mumbai - 400076", dateAdded: new Date().toISOString() },
{ id: 27, name: "Delhi Self Drive", category: "rental-agencies", city: "delhi", mobile: "+91 98765 43236", email: "delhiselfdrive@yahoo.com", address: "Dwarka, New Delhi - 110075", dateAdded: new Date().toISOString() },
{ id: 28, name: "Bangalore Rent A Car", category: "rental-agencies", city: "bangalore", mobile: "+91 98765 43237", email: "bangalorerentacar@gmail.com", address: "Electronic City, Bangalore - 560100", dateAdded: new Date().toISOString() },
{ id: 29, name: "Pune Drive Zone", category: "rental-agencies", city: "pune", mobile: "+91 98765 43238", email: "punedrivezone@gmail.com", address: "Baner, Pune - 411045", dateAdded: new Date().toISOString() },
{ id: 30, name: "Chennai Wheels", category: "rental-agencies", city: "chennai", mobile: "+91 98765 43239", email: "chennaiwheels@yahoo.com", address: "OMR Road, Chennai - 600097", dateAdded: new Date().toISOString() },
{ id: 36, name: "Noida Drive Solutions", category: "rental-agencies", city: "noida", mobile: "+91 98765 43245", email: "noidadrivesolutions@gmail.com", address: "Sector 37, Noida - 201303", dateAdded: new Date().toISOString() },
{ id: 37, name: "JS Travels", category: "rental-agencies", city: "Greater Noida", mobile: "+91 98765 43234", email: "jstravels.greaternoida@gmail.com", address: "Jewar, Noida", dateAdded: new Date().toISOString() },

// Grocery Stores
// Noida Stores
{ id: 38, name: "Fresh Mart Grocery", category: "grocery-stores", city: "noida", locality: "sector-18", state: "uttar-pradesh", mobile: "+91 98234 56789", address: "Shop 12, Atta Market, Sector 18, Noida - 201301", products: ["Grocery", "Vegetables", "Dairy"], dateAdded: new Date().toISOString() },
{ id: 39, name: "Sector 18 Kirana", category: "grocery-stores", city: "noida", locality: "sector-18", state: "uttar-pradesh", mobile: "+91 99876 54321", address: "A-15, DLF Mall Road, Sector 18, Noida - 201301", products: ["Grocery", "Stationary", "Snacks"], dateAdded: new Date().toISOString() },
{ id: 40, name: "Daily Needs Store", category: "grocery-stores", city: "noida", locality: "sector-62", state: "uttar-pradesh", mobile: "+91 97123 45678", address: "H-Block Market, Sector 62, Noida - 201309", products: ["Grocery", "Household Items", "Personal Care"], dateAdded: new Date().toISOString() },
{ id: 41, name: "Sector 62 Supermart", category: "grocery-stores", city: "noida", locality: "sector-62", state: "uttar-pradesh", mobile: "+91 96789 01234", address: "Shop 25, Electronic City Metro, Sector 62, Noida - 201309", products: ["Grocery", "Electronics", "Medicines"], dateAdded: new Date().toISOString() },
{ id: 42, name: "Quick Shop 15", category: "grocery-stores", city: "noida", locality: "sector-15", state: "uttar-pradesh", mobile: "+91 95456 78901", address: "C-Block Market, Sector 15, Noida - 201301", products: ["Grocery", "Fruits", "Bakery"], dateAdded: new Date().toISOString() },
{ id: 43, name: "Sector 15 General Store", category: "grocery-stores", city: "noida", locality: "sector-15", state: "uttar-pradesh", mobile: "+91 94321 09876", address: "Shop 8, Main Market, Sector 15, Noida - 201301", products: ["Grocery", "Stationary", "Toys"], dateAdded: new Date().toISOString() },

// Jaipur Stores
{ id: 44, name: "C Scheme Mart", category: "grocery-stores", city: "jaipur", locality: "c-scheme", state: "rajasthan", mobile: "+91 93567 89012", address: "Shop 45, C Scheme Market, Jaipur - 302001", products: ["Grocery", "Spices", "Sweets"], dateAdded: new Date().toISOString() },
{ id: 45, name: "Rajasthan Kirana", category: "grocery-stores", city: "jaipur", locality: "c-scheme", state: "rajasthan", mobile: "+91 92890 12345", address: "B-12, Ashok Marg, C Scheme, Jaipur - 302001", products: ["Grocery", "Traditional Items", "Dairy"], dateAdded: new Date().toISOString() },
{ id: 46, name: "Malviya Nagar Store", category: "grocery-stores", city: "jaipur", locality: "malviya-nagar", state: "rajasthan", mobile: "+91 91234 56789", address: "Shop 22, Malviya Nagar Market, Jaipur - 302017", products: ["Grocery", "Vegetables", "Household Items"], dateAdded: new Date().toISOString() },
{ id: 47, name: "Pink City Grocery", category: "grocery-stores", city: "jaipur", locality: "malviya-nagar", state: "rajasthan", mobile: "+91 90678 90123", address: "A-5, JLN Marg, Malviya Nagar, Jaipur - 302017", products: ["Grocery", "Organic Products", "Snacks"], dateAdded: new Date().toISOString() },

// Raipur Stores
{ id: 48, name: "Pandri Fresh Mart", category: "grocery-stores", city: "raipur", locality: "pandri", state: "chhattisgarh", mobile: "+91 89012 34567", address: "Shop 18, Pandri Main Road, Raipur - 492001", products: ["Grocery", "Local Products", "Dairy"], dateAdded: new Date().toISOString() },
{ id: 49, name: "CG Kirana Store", category: "grocery-stores", city: "raipur", locality: "pandri", state: "chhattisgarh", mobile: "+91 88345 67890", address: "Near Pandri Station, Pandri, Raipur - 492001", products: ["Grocery", "Stationary", "Medicines"], dateAdded: new Date().toISOString() },
{ id: 50, name: "Shankar Nagar Mart", category: "grocery-stores", city: "raipur", locality: "shankar-nagar", state: "chhattisgarh", mobile: "+91 87678 90123", address: "Block C, Shankar Nagar, Raipur - 492007", products: ["Grocery", "Electronics", "Personal Care"], dateAdded: new Date().toISOString() },
{ id: 51, name: "Raipur General Store", category: "grocery-stores", city: "raipur", locality: "shankar-nagar", state: "chhattisgarh", mobile: "+91 86901 23456", address: "Shop 12, Shankar Nagar Market, Raipur - 492007", products: ["Grocery", "Household Items", "Toys"], dateAdded: new Date().toISOString() },

// Delhi Stores
{ id: 52, name: "CP Central Store", category: "grocery-stores", city: "delhi", locality: "connaught-place", state: "delhi", mobile: "+91 85234 56789", address: "Block A, Connaught Place, New Delhi - 110001", products: ["Grocery", "Imported Items", "Beverages"], dateAdded: new Date().toISOString() },
{ id: 53, name: "Delhi Kirana", category: "grocery-stores", city: "delhi", locality: "connaught-place", state: "delhi", mobile: "+91 84567 89012", address: "Shop 15, Janpath Market, CP, New Delhi - 110001", products: ["Grocery", "Stationary", "Snacks"], dateAdded: new Date().toISOString() },
{ id: 54, name: "Karol Bagh Mart", category: "grocery-stores", city: "delhi", locality: "karol-bagh", state: "delhi", mobile: "+91 83890 12345", address: "Shop 28, Karol Bagh Market, New Delhi - 110005", products: ["Grocery", "Textiles", "Electronics"], dateAdded: new Date().toISOString() },
{ id: 55, name: "KB General Store", category: "grocery-stores", city: "delhi", locality: "karol-bagh", state: "delhi", mobile: "+91 82123 45678", address: "A-45, Ajmal Khan Road, Karol Bagh, New Delhi - 110005", products: ["Grocery", "Personal Care", "Medicines"], dateAdded: new Date().toISOString() }


            ];
            this.saveBusinesses(defaultBusinesses);
        }
    }

    getBusinesses() {
        const stored = localStorage.getItem(this.storageKey);
        return stored ? JSON.parse(stored) : [];
    }

    saveBusinesses(businesses) {
        localStorage.setItem(this.storageKey, JSON.stringify(businesses));
    }

    addBusiness(businessData) {
        const businesses = this.getBusinesses();
        const newBusiness = {
            id: Date.now(),
            ...businessData,
            dateAdded: new Date().toISOString()
        };
        businesses.push(newBusiness);
        this.saveBusinesses(businesses);
        return newBusiness;
    }

    searchBusinesses(city, category) {
        let businesses = this.getBusinesses();
        
        if (city) {
            businesses = businesses.filter(b => 
                b.city.toLowerCase().includes(city.toLowerCase())
            );
        }
        
        if (category) {
            businesses = businesses.filter(b => b.category === category);
        }
        
        return businesses;
    }
}

const categoryNames = {
    'travel-agency': 'Travel Agency',
    'hotels': 'Hotel/Stay',
    'car-wash': 'Car Wash',
    'car-bike-dealers': 'Car/Bike Dealer',
    'car-workshops': 'Car Workshop',
    'rental-agencies': 'Rental Agency',
    'grocery-stores': 'Grocery Store'
};

// Utility: title-case a string (capitalize first letter of each word)
function titleCase(s) {
    if (!s) return '';
    // Normalize, trim and collapse spaces
    let str = s.toString().normalize('NFKC').trim().replace(/\s+/g, ' ');
    // Title-case each token, preserving hyphens/apostrophes
    return str.split(' ').map(token => {
        // split on hyphen or apostrophe but keep the separators
        return token.split(/([-'])/).map(part => {
            if (part === '-' || part === "'") return part;
            if (!part) return '';
            return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
        }).join('');
    }).join(' ');
}

// Initialize directory
const directory = new BusinessDirectory();

// Navigation
document.getElementById('findBtn').addEventListener('click', () => {
    document.getElementById('findSection').classList.add('active');
    document.getElementById('listSection').classList.remove('active');
    document.getElementById('groxSection').classList.remove('active');
    document.getElementById('findBtn').classList.add('active');
    document.getElementById('listBtn').classList.remove('active');
    document.getElementById('groxBtn').classList.remove('active');
});

document.getElementById('listBtn').addEventListener('click', () => {
    document.getElementById('listSection').classList.add('active');
    document.getElementById('findSection').classList.remove('active');
    document.getElementById('groxSection').classList.remove('active');
    document.getElementById('listBtn').classList.add('active');
    document.getElementById('findBtn').classList.remove('active');
    document.getElementById('groxBtn').classList.remove('active');
});

document.getElementById('groxBtn').addEventListener('click', () => {
    document.getElementById('groxSection').classList.add('active');
    document.getElementById('findSection').classList.remove('active');
    document.getElementById('listSection').classList.remove('active');
    document.getElementById('groxBtn').classList.add('active');
    document.getElementById('findBtn').classList.remove('active');
    document.getElementById('listBtn').classList.remove('active');
    // Show all grocery stores when section loads
    displayGroxResults(directory.getBusinesses().filter(b => b.category === 'grocery-stores'));
});

// Search functionality
function searchBusinesses() {
    const city = document.getElementById('citySearch').value;
    const category = document.getElementById('categoryFilter').value;
    
    const results = directory.searchBusinesses(city, category);
    displayResults(results);
    
    // Hide categories when showing search results
    const categoriesGrid = document.querySelector('.categories-grid');
    if (city || category) {
        categoriesGrid.style.display = 'none';
    } else {
        categoriesGrid.style.display = 'grid';
    }
}

function displayResults(results) {
    const container = document.getElementById('results');
    
    if (results.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #6b7280; font-size: 1.1rem;">No businesses found. Try different search criteria.</p>';
        return;
    }
    
    container.innerHTML = results.map(business => `
        <div class="business-card">
            <div class="business-name">${titleCase(business.name)}</div>
            <div class="business-category">${categoryNames[business.category]} • ${titleCase(business.city)}</div>
            <div class="contact-info">

                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <span>${business.email}</span>
                </div>
                <div class="contact-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${business.address}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Event listeners
document.getElementById('searchBtn').addEventListener('click', searchBusinesses);
document.getElementById('citySearch').addEventListener('keyup', (e) => {
    if (e.key === 'Enter') searchBusinesses();
});
document.getElementById('categoryFilter').addEventListener('change', searchBusinesses);

// Category card clicks
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        document.getElementById('categoryFilter').value = category;
        searchBusinesses();
    });
});

// Google Sheets Web App URL (replace with your actual URL)
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbysD9s7IGptOYIu9T43hxTVi5xRazPVFAWR3S8m0uVAusbkHvl2wsIAIaIysxHMtcszNQ/exec';

// Business form submission
document.getElementById('businessForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById('submitBtn') || document.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
    submitBtn.disabled = true;

    const formData = {
        name: document.getElementById('businessName').value,
        category: document.getElementById('businessCategory').value,
        mobile: document.getElementById('mobile').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        locality: document.getElementById('locality').value || '',
        state: document.getElementById('state').value || '',
        timestamp: new Date().toISOString()
    };

    // Normalize name and city before sending so sheet shows proper capitalization
    formData.name = titleCase(formData.name);
    formData.city = titleCase(formData.city);

    try {
        // Send to Google Sheets
        const response = await fetch(GOOGLE_SHEETS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(formData)
        });

    // Show inline success message and reset form
    showFormMessage(`Thanks — "${formData.name}" submitted. Admin will review within 24-48 hours.`);
    document.getElementById('businessForm').reset();
    updatePreview();

    } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    showFormMessage('Error submitting. Please try again later.', 'error');
    } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
});

// Live preview updates
function updatePreview() {
    const name = document.getElementById('businessName').value || 'Business Name';
    const category = document.getElementById('businessCategory').value || '';
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value || 'info@example.com';
    const address = document.getElementById('address').value || 'Full address will appear here';
    const city = document.getElementById('city').value || '';

    // Show/hide locality and state fields for grocery stores
    const localityGroup = document.getElementById('localityGroup');
    const stateGroup = document.getElementById('stateGroup');
    if (category === 'grocery-stores') {
        stateGroup.style.display = 'flex';
        localityGroup.style.display = 'flex';
        updateFormLocalityOptions();
    } else {
        stateGroup.style.display = 'none';
        localityGroup.style.display = 'none';
    }

    // Use the shared, robust titleCase helper (handles mixed-case, hyphens, apostrophes)
    document.getElementById('previewName').textContent = titleCase(name);
    document.getElementById('previewCategory').textContent = `${category ? categoryNames[category] : 'Category'}${city ? ' • ' + titleCase(city) : ''}`;
    const previewMobileEl = document.getElementById('previewMobile');
    if (mobile) {
        previewMobileEl.style.display = '';
        previewMobileEl.innerHTML = `<i class="fas fa-phone" style="color:#667eea; margin-right:0.5rem;"></i> ${mobile}`;
    } else {
        // hide the mobile row when empty to avoid showing a default number
        previewMobileEl.style.display = 'none';
    }
    document.getElementById('previewEmail').innerHTML = `<i class="fas fa-envelope" style="color:#667eea; margin-right:0.5rem;"></i> ${email}`;
    document.getElementById('previewAddress').textContent = address;

    // Update avatar initials
    const avatar = document.getElementById('previewAvatar');
    const tcName = titleCase(name);
    const initials = tcName.split(' ').filter(Boolean).slice(0,2).map(s => s.charAt(0).toUpperCase()).join('') || 'WA';
    avatar.textContent = initials;

    // Basic form validity: enable submit only if required fields are present
    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        const nameVal = document.getElementById('businessName').value.trim();
        const catVal = document.getElementById('businessCategory').value.trim();
        const mobileVal = document.getElementById('mobile').value.trim();
        const emailVal = document.getElementById('email').value.trim();
        const addrVal = document.getElementById('address').value.trim();
        const cityVal = document.getElementById('city').value.trim();
        const isValid = nameVal && catVal && mobileVal && emailVal && addrVal && cityVal;
        submitBtn.disabled = !isValid;
    }
}

function updateFormLocalityOptions() {
    const state = document.getElementById('state').value;
    const localitySelect = document.getElementById('locality');
    
    localitySelect.innerHTML = '<option value="">Select Locality</option>';
    
    if (state && locationData[state]) {
        localitySelect.disabled = false;
        const city = Object.keys(locationData[state])[0];
        if (locationData[state][city]) {
            locationData[state][city].forEach(locality => {
                const option = document.createElement('option');
                option.value = locality.toLowerCase().replace(/\s+/g, '-');
                option.textContent = locality;
                localitySelect.appendChild(option);
            });
        }
    } else {
        localitySelect.disabled = true;
    }
}

['businessName','businessCategory','mobile','email','address','city','locality','state'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
        el.addEventListener('input', updatePreview);
        if (id === 'state') el.addEventListener('change', updateFormLocalityOptions);
    }
});

// Clear form button
const clearBtn = document.getElementById('clearForm');
if (clearBtn) {
    clearBtn.addEventListener('click', () => {
        document.getElementById('businessForm').reset();
        updatePreview();
    });
}

// Small helper to show a message in the form area
function showFormMessage(message, type='success'){
    const el = document.getElementById('formMessage');
    if (!el) return;
    el.textContent = message;
    el.style.display = 'block';
    if (type === 'error') {
        el.style.background = 'linear-gradient(90deg,#fff1f2,#fee2e2)';
        el.style.color = '#661010';
        el.style.borderColor = 'rgba(102,16,16,0.08)';
    } else {
        el.style.background = 'linear-gradient(90deg,#ecfdf5,#d1fae5)';
        el.style.color = '#065f46';
        el.style.borderColor = 'rgba(6,95,70,0.08)';
    }
    setTimeout(()=>{ el.style.display = 'none'; }, 4500);
}

// initialize preview immediately
updatePreview();



// Initial load - show all businesses
displayResults(directory.getBusinesses());

// Grox search functionality
const locationData = {
    'uttar-pradesh': {
        'noida': ['Sector 18', 'Sector 62', 'Sector 15', 'Sector 63', 'Sector 16', 'Sector 37']
    },
    'rajasthan': {
        'jaipur': ['C Scheme', 'Malviya Nagar', 'Vaishali Nagar', 'Mansarovar', 'Jagatpura']
    },
    'chhattisgarh': {
        'raipur': ['Pandri', 'Shankar Nagar', 'Civil Lines', 'Telibandha', 'Devendra Nagar']
    },
    'delhi': {
        'delhi': ['Connaught Place', 'Karol Bagh', 'Lajpat Nagar', 'Rajouri Garden', 'Mayur Vihar']
    }
};

function updateCityOptions() {
    const state = document.getElementById('stateSelect').value;
    const citySelect = document.getElementById('groxCitySelect');
    const localitySelect = document.getElementById('localitySelect');
    
    citySelect.innerHTML = '<option value="">Select City</option>';
    localitySelect.innerHTML = '<option value="">Select Locality</option>';
    
    if (state && locationData[state]) {
        citySelect.disabled = false;
        Object.keys(locationData[state]).forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = titleCase(city);
            citySelect.appendChild(option);
        });
    } else {
        citySelect.disabled = true;
        localitySelect.disabled = true;
    }
}

function updateLocalityOptions() {
    const state = document.getElementById('stateSelect').value;
    const city = document.getElementById('groxCitySelect').value;
    const localitySelect = document.getElementById('localitySelect');
    
    localitySelect.innerHTML = '<option value="">Select Locality</option>';
    
    if (state && city && locationData[state] && locationData[state][city]) {
        localitySelect.disabled = false;
        locationData[state][city].forEach(locality => {
            const option = document.createElement('option');
            option.value = locality.toLowerCase().replace(/\s+/g, '-');
            option.textContent = locality;
            localitySelect.appendChild(option);
        });
    } else {
        localitySelect.disabled = true;
    }
}

function searchGroxStores() {
    const state = document.getElementById('stateSelect').value;
    const city = document.getElementById('groxCitySelect').value;
    const locality = document.getElementById('localitySelect').value;
    
    let stores = directory.getBusinesses().filter(b => b.category === 'grocery-stores');
    
    // If no filters selected, show all grocery stores
    if (!state && !city && !locality) {
        displayGroxResults(stores);
        return;
    }
    
    if (state) {
        stores = stores.filter(s => s.state && s.state.toLowerCase().replace(/\s+/g, '-') === state);
    }
    
    if (city) {
        stores = stores.filter(s => s.city.toLowerCase().replace(/\s+/g, '-') === city);
    }
    
    if (locality) {
        stores = stores.filter(s => s.locality && s.locality.toLowerCase().replace(/\s+/g, '-') === locality);
    }
    
    displayGroxResults(stores);
}

function displayGroxResults(stores) {
    const container = document.getElementById('groxResults');
    
    if (stores.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #6b7280; font-size: 1.1rem;">No grocery stores found. Try different search criteria.</p>';
        return;
    }
    
    container.innerHTML = stores.map(store => `
        <div class="business-card">
            <div class="business-name">${titleCase(store.name)}</div>
            <div class="business-category">${categoryNames[store.category]} • ${titleCase(store.locality ? store.locality.replace(/-/g, ' ') : store.city)}, ${titleCase(store.state ? store.state.replace(/-/g, ' ') : store.city)}</div>
            <div class="contact-info">
                <div class="contact-item" style="background: rgba(16, 185, 129, 0.1); border-radius: 8px; padding: 0.75rem; margin-bottom: 0.5rem;">
                    <i class="fas fa-phone" style="color: #10b981;"></i>
                    <span style="font-weight: 600; color: #10b981;">Call to Order: ${store.mobile.substring(0, 7)}xxxxx</span>
                </div>
                <div class="contact-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${store.address}</span>
                </div>
                ${store.products ? `<div class="contact-item" style="margin-top: 0.5rem;">
                    <i class="fas fa-shopping-cart" style="color: #667eea;"></i>
                    <span><strong>Available:</strong> ${store.products.join(', ')}</span>
                </div>` : ''}
            </div>
        </div>
    `).join('');
}

// Grox search event listeners
document.getElementById('stateSelect').addEventListener('change', updateCityOptions);
document.getElementById('groxCitySelect').addEventListener('change', updateLocalityOptions);
document.getElementById('groxSearchBtn').addEventListener('click', searchGroxStores);

// Admin function to export current businesses
function exportCurrentBusinesses() {
    const businesses = directory.getBusinesses();
    const dataStr = JSON.stringify(businesses, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'current-businesses.json';
    link.click();
}

console.log('WeDo Business Directory loaded.');
console.log('Admin: Use exportCurrentBusinesses() to download current business data.');