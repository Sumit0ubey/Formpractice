function fetchData() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const formData = JSON.parse(this.responseText).formData;
            
            // Extracting form data
            const firstName = formData.firstname || '-';
            const lastName = formData.lastname || '-';
            const phone = formData.phone || '-';

            // Displaying the extracted data in the specified HTML elements
            document.getElementById("fillfname").innerText = firstName;
            document.getElementById("filllname").innerText = lastName;
            document.getElementById("fillphone").innerText = phone;
        }
    };
    xhttp.open("GET", "form_data.json", true); // Specifying the JSON file to fetch data from
    xhttp.send();
}

// Calling the fetchData function when the page loads
window.onload = function() {
    fetchData();
};



document.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });
