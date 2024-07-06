// let paragraphId = 0;
// [document.getElementById](['p‑button']).[addEventListener](['click'], () => {

//     // Locate the parent 
//     let parent = [document.getElementById](['p‑div']);
    
    
//     // Create a new element
//     let newElement = [document.createElement]( ['p'] );
//     newElement.[textContent] = [document.getElementById](['p‑input']).[value];
//     newElement.setAttribute('id', paragraphId++);
    
    
//     // Attach to the parent
//     parent.[appendChild](newElement);
    
    
//     // Clear out the input box after adding the element
//     [document.getElementById]( ['p‑input'] ).[value] = '';
//     });
    

// This script contains the JavaScript logic to handle form submission and table row addition.

    let rowId = 0;
    document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-btn');

    //locate the parent
    const tableBody = document.querySelector('#dataTable tbody');
    const form = document.getElementById('myForm');
    
    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission

        const firstName = document.getElementById('fname').value;
        const lastName = document.getElementById('lname').value;
        const Email = document.getElementById('emailid').value;
        const Phone = document.getElementById('phonenumber').value;
       
        // Create a new row
        const newRow = document.createElement('tr');

        // Insert cells into the row
        newRow.innerHTML = `
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
