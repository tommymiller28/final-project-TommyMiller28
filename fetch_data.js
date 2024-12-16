// fetch_data.js
document.addEventListener("DOMContentLoaded", () => {
    const apiURL = "https://jsonplaceholder.typicode.com/posts"; // Replace with your chosen API
    const dataContainer = document.getElementById("apiData"); // A container in your HTML to display data

    // Function to fetch data
    fetch(apiURL)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok.");
            }
            return response.json(); // Parse JSON response
        })
        .then((data) => {
            // Display data dynamically
            let content = "<h2>Charity Data</h2>";
            data.slice(0, 5).forEach((item) => { // Display first 5 items
                content += `
                    <div>
                        <h3>${item.title}</h3>
                        <p>${item.body}</p>
                    </div>
                `;
            });
            dataContainer.innerHTML = content;
        })
        .catch((error) => {
            dataContainer.innerHTML = `<p style="color: red;">Unable to fetch data at this time.</p>`;
            console.error("Error fetching data:", error);
        });
});
