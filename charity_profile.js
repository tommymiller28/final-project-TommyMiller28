// Event listener for "Volunteer Now" button
document.addEventListener("DOMContentLoaded", () => {
    const volunteerButton = document.getElementById("volunteer-btn");
    const volunteerForm = document.getElementById("volunteer-form");

    // Show the form when the button is clicked
    volunteerButton.addEventListener("click", () => {
        volunteerForm.style.display = "block"; // Display the form
        volunteerButton.style.display = "none"; // Hide the button
    });

    // Additional Interactivity: Toggle charity details
    const detailsButton = document.getElementById("details-btn");
    const charityDetails = document.getElementById("charity-details");

    detailsButton.addEventListener("click", () => {
        if (charityDetails.style.display === "block") {
            charityDetails.style.display = "none";
            detailsButton.textContent = "Show More Details";
        } else {
            charityDetails.style.display = "block";
            detailsButton.textContent = "Hide Details";
        }
    });
});