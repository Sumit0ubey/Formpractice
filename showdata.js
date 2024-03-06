function fetchData() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(this.responseText, 'text/html');
            
            const firstName = htmlDoc.getElementById('fname').value || '-';
            const lastName = htmlDoc.getElementById('lname').value || '-';
            const phone = htmlDoc.getElementById('phone').value || '-';

            document.getElementById("fillfname").innerText = firstName;
            document.getElementById("filllname").innerText = lastName;
            document.getElementById("fillphone").innerText = phone;
        }
    };
    xhttp.open("GET", "form.html", true);
    xhttp.send();
}

window.onload = function() {
    fetchData();
};

