// Fetch data from the API
document.addEventListener("DOMContentLoaded", () => {
    const apiURL = "https://api.charitynavigator.org/v2/organizations?app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY";

    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error);
            document.getElementById("data-container").innerHTML = `<p>Unable to fetch data at this time. Please try again later.</p>`;
        });
});

// Function to display data on the page
function displayData(data) {
    const container = document.getElementById("data-container");
    data.slice(0, 5).forEach(item => {
        const charityElement = document.createElement("div");
        charityElement.className = "charity-item";
        charityElement.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.mission ? item.mission : "Mission details not available."}</p>
        `;
        container.appendChild(charityElement);
    });
}