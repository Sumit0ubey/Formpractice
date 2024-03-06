function validateForm() {
    const data1 = document.forms["Forms"]["fname"].value;
    const data2 = document.forms["Forms"]["lname"].value;
    const data3 = document.forms["Forms"]["phone"].value;

    if (data1 === "" || data2 === "" || data3 === "") {
        alert("Please fill in all required fields.");
        return false;
    } else {
        alert("Form submitted successfully.");
        return true;
    }
}

function Navht() {
    if (validateForm()) {
        
        window.open('conformination.html', '_blank');
    }
}

const Fname = document.forms["Forms"]["fname"].value;
const Lname = document.forms["Forms"]["lname"].value;
const Phone = document.forms["Forms"]["phone"].value;

First_name = document.getElementById("fillfname");
Last_name = document.getElementById("filllname");
Phone_no = document.getElementById("fillphoneno");

First_name.innerText = Fname;
Last_name.innerText = Lname;
Phone_no.innerText = Phone;

document.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });
