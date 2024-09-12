// Sample data for specialists
const specialists = [
    {
        name: "Dr. Rajesh Kumar",
        hospital: "Fortis",
        specialty: "Nephrologist",
        address: "Delhi",
        contact: {
            email: "rajesh.kumar@fortis.com",
            phone: "9999999999"
        }
    },
    {
        name: "Dr. Rajesh Kumar",
        hospital: "Fortis",
        specialty: "Nephrologist",
        address: "Delhi",
        contact: {
            email: "rajesh.kumar@fortis.com",
            phone: "9999999999"
        }
    },
    {
        name: "Dr. Priya Sharma",
        hospital: "Max Healthcare",
        specialty: "Kidney Specialist",
        address: "Gurgaon",
        contact: {
            email: "priya.sharma@maxhealthcare.com",
            phone: "8888888888"
        }
    },
    {
        name: "Dr. Arjun Patel",
        hospital: "Apollo Hospitals",
        specialty: "Renal Medicine",
        address: "Hyderabad",
        contact: {
            email: "arjun.patel@apollohospitals.com",
            phone: "7777777777"
        }
    }
];

// Get the search query from local storage
const query = localStorage.getItem('searchQuery').toLowerCase();

// Filter specialists based on the search query
const results = specialists.filter(specialist =>
    specialist.specialty.toLowerCase().includes(query) ||
    specialist.name.toLowerCase().includes(query)
);

// Display results
const resultsDiv = document.getElementById('specialist-results');
resultsDiv.innerHTML = '';

if (results.length > 0) {
    results.forEach(specialist => {
        resultsDiv.innerHTML += `
            <div class="specialist">
                <h3>${specialist.name}</h3>
                <p><strong>Hospital:</strong> ${specialist.hospital}</p>
                <p><strong>Specialty:</strong> ${specialist.specialty}</p>
                <p><strong>Address:</strong> ${specialist.address}</p>
                <p><strong>Email:</strong> ${specialist.contact.email}</p>
                <p><strong>Phone:</strong> ${specialist.contact.phone}</p>
            </div>
        `;
    });
} else {
    resultsDiv.innerHTML = '<p>No specialists found for the given disease.</p>';
}
