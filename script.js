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
                { id: 1, name: "Mumbai Travel Hub", category: "travel-agency", city: "mumbai", mobile: "+91 98765 43210", email: "info@mumbaitravelhub.com", address: "Shop 15, Marine Drive, Mumbai - 400001", dateAdded: new Date().toISOString() },
                { id: 2, name: "Delhi Tours & Travels", category: "travel-agency", city: "delhi", mobile: "+91 98765 43211", email: "booking@delhitours.com", address: "Connaught Place, New Delhi - 110001", dateAdded: new Date().toISOString() },
                { id: 3, name: "Bangalore Adventure Tours", category: "travel-agency", city: "bangalore", mobile: "+91 98765 43212", email: "info@bangaloreadventure.com", address: "MG Road, Bangalore - 560001", dateAdded: new Date().toISOString() },
                { id: 4, name: "Pune Travel Express", category: "travel-agency", city: "pune", mobile: "+91 98765 43213", email: "contact@punetravel.com", address: "FC Road, Pune - 411005", dateAdded: new Date().toISOString() },
                { id: 5, name: "Chennai Holiday Planners", category: "travel-agency", city: "chennai", mobile: "+91 98765 43214", email: "info@chennaiholidays.com", address: "T Nagar, Chennai - 600017", dateAdded: new Date().toISOString() },
                
                // Hotels
                { id: 6, name: "Grand Palace Hotel", category: "hotels", city: "mumbai", mobile: "+91 98765 43215", email: "booking@grandpalace.com", address: "Bandra West, Mumbai - 400050", dateAdded: new Date().toISOString() },
                { id: 7, name: "Delhi Luxury Suites", category: "hotels", city: "delhi", mobile: "+91 98765 43216", email: "reservations@delhiluxury.com", address: "Karol Bagh, New Delhi - 110005", dateAdded: new Date().toISOString() },
                { id: 8, name: "Bangalore Business Hotel", category: "hotels", city: "bangalore", mobile: "+91 98765 43217", email: "info@bangalorebusiness.com", address: "Whitefield, Bangalore - 560066", dateAdded: new Date().toISOString() },
                { id: 9, name: "Pune Heritage Inn", category: "hotels", city: "pune", mobile: "+91 98765 43218", email: "stay@puneheritage.com", address: "Koregaon Park, Pune - 411001", dateAdded: new Date().toISOString() },
                { id: 10, name: "Chennai Beach Resort", category: "hotels", city: "chennai", mobile: "+91 98765 43219", email: "booking@chennaibeach.com", address: "ECR Road, Chennai - 600041", dateAdded: new Date().toISOString() },
                
                // Car Wash
                { id: 11, name: "SparkleClean Car Wash", category: "car-wash", city: "mumbai", mobile: "+91 98765 43220", email: "contact@sparklecarwash.com", address: "Andheri East, Mumbai - 400069", dateAdded: new Date().toISOString() },
                { id: 12, name: "Delhi Auto Spa", category: "car-wash", city: "delhi", mobile: "+91 98765 43221", email: "service@delhiautospa.com", address: "Lajpat Nagar, New Delhi - 110024", dateAdded: new Date().toISOString() },
                { id: 13, name: "Bangalore Car Care", category: "car-wash", city: "bangalore", mobile: "+91 98765 43222", email: "info@bangalorecarcare.com", address: "Indiranagar, Bangalore - 560038", dateAdded: new Date().toISOString() },
                { id: 14, name: "Pune Wash Express", category: "car-wash", city: "pune", mobile: "+91 98765 43223", email: "contact@punewash.com", address: "Viman Nagar, Pune - 411014", dateAdded: new Date().toISOString() },
                { id: 15, name: "Chennai Auto Clean", category: "car-wash", city: "chennai", mobile: "+91 98765 43224", email: "service@chennaiauto.com", address: "Velachery, Chennai - 600042", dateAdded: new Date().toISOString() },
                
                // Car/Bike Dealers
                { id: 16, name: "AutoMax Dealers", category: "car-bike-dealers", city: "mumbai", mobile: "+91 98765 43225", email: "sales@automax.com", address: "Goregaon West, Mumbai - 400062", dateAdded: new Date().toISOString() },
                { id: 17, name: "Delhi Motor World", category: "car-bike-dealers", city: "delhi", mobile: "+91 98765 43226", email: "info@delhimotorworld.com", address: "Rajouri Garden, New Delhi - 110027", dateAdded: new Date().toISOString() },
                { id: 18, name: "Bangalore Bike Hub", category: "car-bike-dealers", city: "bangalore", mobile: "+91 98765 43227", email: "sales@bangalorebike.com", address: "Jayanagar, Bangalore - 560011", dateAdded: new Date().toISOString() },
                { id: 19, name: "Pune Auto Gallery", category: "car-bike-dealers", city: "pune", mobile: "+91 98765 43228", email: "contact@puneauto.com", address: "Hadapsar, Pune - 411028", dateAdded: new Date().toISOString() },
                { id: 20, name: "Chennai Vehicle Center", category: "car-bike-dealers", city: "chennai", mobile: "+91 98765 43229", email: "info@chennaivehicle.com", address: "Porur, Chennai - 600116", dateAdded: new Date().toISOString() },
                
                // Car Workshops
                { id: 21, name: "Expert Car Workshop", category: "car-workshops", city: "mumbai", mobile: "+91 98765 43230", email: "service@expertcarworkshop.com", address: "Malad West, Mumbai - 400064", dateAdded: new Date().toISOString() },
                { id: 22, name: "Delhi Service Station", category: "car-workshops", city: "delhi", mobile: "+91 98765 43231", email: "repair@delhiservice.com", address: "Mayur Vihar, New Delhi - 110091", dateAdded: new Date().toISOString() },
                { id: 23, name: "Bangalore Auto Repair", category: "car-workshops", city: "bangalore", mobile: "+91 98765 43232", email: "workshop@bangalorerepair.com", address: "Koramangala, Bangalore - 560034", dateAdded: new Date().toISOString() },
                { id: 24, name: "Pune Garage Pro", category: "car-workshops", city: "pune", mobile: "+91 98765 43233", email: "service@punegaragepro.com", address: "Wakad, Pune - 411057", dateAdded: new Date().toISOString() },
                { id: 25, name: "Chennai Fix It", category: "car-workshops", city: "chennai", mobile: "+91 98765 43234", email: "repair@chennaifix.com", address: "Adyar, Chennai - 600020", dateAdded: new Date().toISOString() },
                
                // Rental Agencies
                { id: 26, name: "DriveEasy Rentals", category: "rental-agencies", city: "mumbai", mobile: "+91 98765 43235", email: "rent@driveeasy.com", address: "Powai, Mumbai - 400076", dateAdded: new Date().toISOString() },
                { id: 27, name: "Delhi Self Drive", category: "rental-agencies", city: "delhi", mobile: "+91 98765 43236", email: "booking@delhiselfdrive.com", address: "Dwarka, New Delhi - 110075", dateAdded: new Date().toISOString() },
                { id: 28, name: "Bangalore Rent A Car", category: "rental-agencies", city: "bangalore", mobile: "+91 98765 43237", email: "info@bangalorerent.com", address: "Electronic City, Bangalore - 560100", dateAdded: new Date().toISOString() },
                { id: 29, name: "Pune Drive Zone", category: "rental-agencies", city: "pune", mobile: "+91 98765 43238", email: "contact@punedrive.com", address: "Baner, Pune - 411045", dateAdded: new Date().toISOString() },
                { id: 30, name: "Chennai Wheels", category: "rental-agencies", city: "chennai", mobile: "+91 98765 43239", email: "rent@chennaiwheels.com", address: "OMR Road, Chennai - 600097", dateAdded: new Date().toISOString() }
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

// Initialize directory
const directory = new BusinessDirectory();

// Navigation
document.getElementById('findBtn').addEventListener('click', () => {
    document.getElementById('findSection').classList.add('active');
    document.getElementById('listSection').classList.remove('active');
    document.getElementById('findBtn').classList.add('active');
    document.getElementById('listBtn').classList.remove('active');
});

document.getElementById('listBtn').addEventListener('click', () => {
    document.getElementById('listSection').classList.add('active');
    document.getElementById('findSection').classList.remove('active');
    document.getElementById('listBtn').classList.add('active');
    document.getElementById('findBtn').classList.remove('active');
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
            <div class="business-name">${business.name}</div>
            <div class="business-category">${categoryNames[business.category]} • ${business.city.charAt(0).toUpperCase() + business.city.slice(1)}</div>
            <div class="contact-info">
                <div class="contact-item">
                    <i class="fas fa-phone"></i>
                    <span>${business.mobile}</span>
                </div>
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

// Business form submission
document.getElementById('businessForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('businessName').value,
        category: document.getElementById('businessCategory').value,
        mobile: document.getElementById('mobile').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value.toLowerCase()
    };
    
    // Show admin approval message instead of adding directly
    alert(`Thank you! Your business listing request for "${formData.name}" has been submitted. Payment of ₹299 processed successfully. Our admin will review and approve your listing within 24-48 hours.`);
    
    // Reset form
    document.getElementById('businessForm').reset();
});

// Initial load - show all businesses
displayResults(directory.getBusinesses());