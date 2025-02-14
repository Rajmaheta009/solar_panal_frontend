document.addEventListener("DOMContentLoaded", function() {
    const headerPlaceholder = document.getElementById("home-placeholder");

    // Fetch the navbar HTML file
    fetch("header.html")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to load header");
            }
            return response.text();
        })
        .then((html) => {
            // Insert the navbar content into the placeholder
            headerPlaceholder.innerHTML = html;
        })
        .catch((error) => {
            console.error("Error loading header:", error);
        });
});