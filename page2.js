
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

// popup open js
function openForm(formId) {
    document.getElementById(formId).style.display = 'block';
}

function closeForm(formId) {
    document.getElementById(formId).style.display = 'none';
}

btn1.addEventListener('click', () => {
    openForm('form1');
    closeForm('form2');
});

btn2.addEventListener('click', () => {
    openForm('form2');
    closeForm('form1');
});


//  form1 ko  login success ki js
function login(form) {
    var username = form.querySelector('username').value;
    var password = form.querySelector('password').value;

    if (username === 'user' && password === 'pass') {
        alert('Login successful! Redirecting...');
        setTimeout(function() {
            window.location.href = 'dashboard.html'; // Redirect to dashboard.html after 2 seconds
        }, 2000); // Wait for 2 seconds before redirecting
        return false; // Prevent form submission
    } else {
        alert('Invalid username or password.');
        return false; // Prevent form submission
    }
}

document.getElementById("form2").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form data
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var streetAddress = document.getElementById("streetAddress").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var goals = document.getElementById("goals").value;

    // Validate form data
    if (firstName.trim() === "" || lastName.trim() === "" || email.trim() === "" || phone.trim() === "" || streetAddress.trim() === "" || gender.trim() === "" || goals.trim() === "") {
        alert("Please fill in all fields");
        return;
    }

    // Save form data to localStorage
    var formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        streetAddress: streetAddress,
        gender: gender,
        goals: goals
    };
    localStorage.setItem("formData", JSON.stringify(formData));

    // Show welcome alert
    alert("Welcome " + formData.firstName + "!");

    // Redirect to a new page
    window.location.href = "https://example.com/welcome-page";
});






document.getElementById("form1").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Your form submission logic for form1 (join now) here

    // Hide join now button
    joinNowBtn.style.display = 'none';
});

document.getElementById("form2").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Your form submission logic for form2 (book a demo) here

    // Hide book demo button
    bookDemoBtn.style.display = 'none';
});




