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
{ id: 37, name: "JS Travels", category: "rental-agencies", city: "Greater Noida", mobile: "+91 98765 43234", email: "jstravels.greaternoida@gmail.com", address: "Jewar, Noida", dateAdded: new Date().toISOString() }


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
    'rental-agencies': 'Rental Agency'
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
    document.getElementById('mentorshipSection').classList.remove('active');
    document.getElementById('findBtn').classList.add('active');
    document.getElementById('listBtn').classList.remove('active');
    document.getElementById('mentorshipBtn').classList.remove('active');
});

document.getElementById('listBtn').addEventListener('click', () => {
    document.getElementById('listSection').classList.add('active');
    document.getElementById('findSection').classList.remove('active');
    document.getElementById('mentorshipSection').classList.remove('active');
    document.getElementById('listBtn').classList.add('active');
    document.getElementById('findBtn').classList.remove('active');
    document.getElementById('mentorshipBtn').classList.remove('active');
});

document.getElementById('mentorshipBtn').addEventListener('click', () => {
    document.getElementById('mentorshipSection').classList.add('active');
    document.getElementById('findSection').classList.remove('active');
    document.getElementById('listSection').classList.remove('active');
    document.getElementById('mentorshipBtn').classList.add('active');
    document.getElementById('findBtn').classList.remove('active');
    document.getElementById('listBtn').classList.remove('active');
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

['businessName','businessCategory','mobile','email','address','city'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updatePreview);
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