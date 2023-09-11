// Import the dummy tracking data
const dummyTrackingDataArray = [{
    trackingNumber: "ABC123456789",
    status: "In Transit",
    location: "Los Angeles, CA 90002",
    estimatedDelivery: "2023-09-15",
    details: [
        {
            timestamp: "2023-09-10 08:30 AM",
            event: "Package picked up",
            location: "123 Main Street, New York, NY 10001",
        },
        {
            timestamp: "2023-09-11 02:15 PM",
            event: "Package arrived at sorting facility",
            location: "456 Sorting Way, Newark, NJ 07102",
        },
        {
            timestamp: "2023-09-12 09:00 AM",
            event: "Package departed sorting facility",
            location: "456 Sorting Way, Newark, NJ 07102",
            
        },
        {
            timestamp: "2023-09-14 04:45 PM",
            event: "Package arrived at destination",
            location: "789 Destination Drive, Los Angeles, CA 90001",
        },
        {
            timestamp: "2023-09-15 10:00 AM",
            event: "Out for delivery",
            location: "101 Local Ave, Los Angeles, CA 90001",
        },
        {
            timestamp: "2023-09-15 03:30 PM",
            event: "Delivered",
            location: "456 Recipient Street, Los Angeles, CA 90002",
        },
    ],
},
{
    trackingNumber: "DEF987654321",
    status: "Out for Delivery",
    location: "202 Local Lane, San Francisco, CA 94102",
    estimatedDelivery: "2023-09-16",
    details: [
        {
            timestamp: "2023-09-13 10:45 AM",
            event: "Package picked up",
            location: " 321 Sender Road, Chicago, IL 60601",
        },
        {
            timestamp: "2023-09-14 03:30 PM",
            event: "Package arrived at sorting facility",
            location: "654 Sorting Street, Chicago, IL 60602",
        },
        {
            timestamp: "2023-09-15 08:15 AM",
            event: "Package departed sorting facility",
            location: "654 Sorting Street, Chicago, IL 60602",
        },
        {
            timestamp: "2023-09-15 11:30 AM",
            event: "Package arrived at destination",
            location: "987 Destination Avenue, San Francisco, CA 94101",
        },
        {
            timestamp: "2023-09-16 09:00 AM",
            event: "Out for delivery",
            location: "202 Local Lane, San Francisco, CA 94102",
        },
        {
            timestamp: "2023-09-16 02:15 PM",
            event: "Delivered",
            location: "753 Recipient Drive, San Francisco, CA 94103",
        },
    ],
},
{
    trackingNumber: "GHI246813579",
    status: "Delivered",
    location: "999 Recipient Lane, Miami, FL 33103",
    estimatedDelivery: "2023-09-14",
    details: [
        {
            timestamp: "2023-09-10 09:30 AM",
            event: "Package picked up",
            location: "111 Sender Street, Houston, TX 77001",
        },
        {
            timestamp: "2023-09-11 04:15 PM",
            event: "Package arrived at sorting facility",
            location: "444 Sorting Avenue, Houston, TX 77002",
        },
        {
            timestamp: "2023-09-12 07:45 AM",
            event: "Package departed sorting facility",
            location: "444 Sorting Avenue, Houston, TX 77002",
        },
        {
            timestamp: "2023-09-13 11:15 AM",
            event: "Package arrived at destination",
            location: "777 Destination Road, Miami, FL 33101",
        },
        {
            timestamp: "2023-09-14 08:30 AM",
            event: "Out for delivery",
            location: "303 Local Drive, Miami, FL 33102",
            
        },
        {
            timestamp: "2023-09-14 01:00 PM",
            event: "Delivered",
            location: "999 Recipient Lane, Miami, FL 33103",
        },
    ],
},
{
    trackingNumber: "JKL135792468",
    status: "Package Picked Up",
    location: "222 Sender Drive, Atlanta, GA 30301",
    estimatedDelivery: "2023-09-17",
    details: [
        {
            timestamp: "2023-09-12 02:00 PM",
            event: "Package picked up",
            location: "222 Sender Drive, Atlanta, GA 30301",
        },
        {
            timestamp: "2023-09-13 09:15 AM",
            event: "Package arrived at sorting facility",
            location: "555 Sorting Road, Atlanta, GA 30302",
            
        },
        {
            timestamp: "2023-09-14 01:45 PM",
            event: "Package departed sorting facility",
            location: "555 Sorting Road, Atlanta, GA 30302",
            
        },
        {
            timestamp: "2023-09-15 10:30 AM",
            event: "Package arrived at destination",
            location: "888 Destination Avenue, Dallas, TX 75201",
        },
        {
            timestamp: "2023-09-16 07:45 AM",
            event: "Out for delivery",
            location: "404 Local Road, Dallas, TX 75202",
        },
        {
            timestamp: "2023-09-16 03:15 PM",
            event: "Delivered",
            location: "111 Recipient Street, Dallas, TX 75203",
        },
    ],
},
{
    trackingNumber: "MNO246813579",
    status: "In Transit",
    location: "666 Sorting Drive, Boston, MA 02102",
    
    estimatedDelivery: "2023-09-18",
    details: [
        {
            timestamp: "2023-09-11 10:30 AM",
            event: "Package picked up",
            location: "333 Sender Lane, Boston, MA 02101",
        },
        {
            timestamp: "2023-09-12 02:45 PM",
            event: "Package arrived at sorting facility",
            location: "666 Sorting Drive, Boston, MA 02102",
            
        },
        {
            timestamp: "2023-09-13 08:15 AM",
            event: "Package departed sorting facility",
            location: "666 Sorting Drive, Boston, MA 02102",
            
        },
        {
            timestamp: "2023-09-14 11:45 AM",
            event: "Package arrived at destination",
            location: "999 Destination Street, Seattle, WA 98101",
        },
        {
            timestamp: "2023-09-15 09:00 AM",
            event: "Out for delivery",
            location: "505 Local Avenue, Seattle, WA 98102",
            
        },
        {
            timestamp: "2023-09-15 04:30 PM",
            event: "Delivered",
            location: "222 Recipient Road, Seattle, WA 98103",
            
        },
    ],
},
{
    trackingNumber: "PQR135792468",
    status: "Delivered",
    location: "Recipient's address",
    estimatedDelivery: "2023-09-13",
    details: [
        {
            timestamp: "2023-09-09 11:15 AM",
            event: "Package picked up",
            location: "123 Shipping Avenue, San Francisco, CA 94101",
        },
        {
            timestamp: "2023-09-10 03:30 PM",
            event: "Package arrived at sorting facility",
            location: "456 Sorting Street, San Francisco, CA 94102",
        },
        {
            timestamp: "2023-09-11 06:45 AM",
            event: "Package departed sorting facility",
            location: "456 Sorting Street, San Francisco, CA 94102",
        },
        {
            timestamp: "2023-09-12 10:00 AM",
            event: "Package arrived at destination",
            location: "789 Destination Drive, Los Angeles, CA 90001",
        },
        {
            timestamp: "2023-09-13 08:30 AM",
            event: "Out for delivery",
            location: "101 Local Ave, Los Angeles, CA 90001",
        },
        {
            timestamp: "2023-09-13 01:45 PM",
            event: "Delivered",
            location: "456 Recipient Street, Los Angeles, CA 90002",
        },
    ],
}
];


// Function to display tracking information
function displayTrackingResult(trackingData) {
    const resultDiv = document.getElementById("tracking-result");
    resultDiv.innerHTML = `
        <h2 id="track">Tracking Details</h2>
        <table>
            <tr>
                <th>Tracking Number:</th>
                <td>${trackingData.trackingNumber}</td>
            </tr>
            <tr>
                <th>Status:</th>
                <td>${trackingData.status}</td>
            </tr>
            <tr>
                <th>Location:</th>
                <td>${trackingData.location}</td>
            </tr>
            <tr>
                <th>Estimated Delivery:</th>
                <td>${trackingData.estimatedDelivery}</td>
            </tr>
        </table>
        <h3 id="tracke">Tracking Events</h3>
        <table>
            <tr>
                <th>Timestamp</th>
                <th>Event</th>
                <th>Location</th>
            </tr>
            ${trackingData.details.map((event) => `
                <tr>
                    <td>${event.timestamp}</td>
                    <td>${event.event}</td>
                    <td>${event.location}</td>
                </tr>
            `).join('')}
        </table>
    `;
}


// Function to handle the tracking form submission
function handleTrackingSubmit(event) {
    event.preventDefault();
    const trackingCode = document.getElementById("tracking-code").value;

    // In a real scenario, you would fetch tracking data from a server based on the tracking code.
    // For this example, we'll use the dummy tracking data.
const trackingArray=dummyTrackingDataArray.find((data) => data.trackingNumber === trackingCode);
console.log(trackingArray)
    // Check if the tracking code matches the dummy data (for simulation purposes).
    if (trackingArray.length!=0)  {
        displayTrackingResult(trackingArray);

    } else {
        const resultDiv = document.getElementById("tracking-result");
        resultDiv.innerHTML = "<p>No tracking information found for this code.</p>";
    }
}

// Attach event listener to the tracking form
const trackingForm = document.getElementById("tracking-form");
trackingForm.addEventListener("submit", handleTrackingSubmit);
