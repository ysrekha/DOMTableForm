
// This script contains the JavaScript logic to handle form submission and table row addition.

let rowId = 1;
document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-btn');

    //locate the parent
    const tableBody = document.querySelector('#dataTable tbody');
    const form = document.getElementById('myForm');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission

        // Fetch form input values
        const firstName = document.getElementById('fname').value;
        const lastName = document.getElementById('lname').value;
        const Email = document.getElementById('emailid').value;
        const Phone = document.getElementById('phonenumber').value;

        // Validating to make sure the values submitted are not empty and alerting if any value is empty
        if (firstName === '' || lastName === '' || Email === '' || Phone === '') {
            alert('Please fill out all fields.');
            return; // Exit function if any field is empty
        }

        // Create a new row
        const newRow = document.createElement('tr');

        // Insert cells into the row
        newRow.innerHTML = `
            <td>${rowId++}</td>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${Email}</td>
            <td>${Phone}</td>
        `;
        // Append the row to the table (Attach to the parent)
        tableBody.appendChild(newRow);

        // Clear form inputs after submission
        form.reset();
    });
});
