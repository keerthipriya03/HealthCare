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

// Event listener for search button
document.getElementById('submit-search').addEventListener('click', function() {
    const query = document.getElementById('search').value.toLowerCase();

    // Store the search query in local storage
    localStorage.setItem('searchQuery', query);

    // Redirect to results page
    window.location.href = 'results.html';
});
