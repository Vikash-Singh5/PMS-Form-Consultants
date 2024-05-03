// Define the ecData object
var ecData = {

    "C00009": { "name": "S.C TALWAR   ", "department": "Administration", "email": "stalwar@autolek.com" },
    "C00018": { "name": "CHANDRAMA YADAV    ", "department": "Finance", "email": "chandrama@autolek.com" },
    "C00020": { "name": "ACHAMMA ALBERT     ", "department": "Administration ", "email": "achammaalbert@gmail.com" },
    "C00021": { "name": "RADHEY SHYAM ", "department": "Marketing ", "email": "radheyshyam@autolek.com" },
    "C00029": { "name": "ABDUL HAKIM  ", "department": "Tool Room", "email": "abdulautolek@gmail.com" },
    "C00031": { "name": "RAVINDRA KUMAR SHARMA    ", "department": "Finance", "email": "ravinderkmar@autolek.com" },
    "C00036": { "name": "CHANDRAN M   ", "department": "Marketing ", "email": "chandrankannom@gmail.com" },
    "C00041": { "name": "GAURAV CHAUHAN     ", "department": "Quality", "email": "gauravchauhan00@gmail.com" },
    "C00042": { "name": "SASHI SOLANKI", "department": "Administration", "email": "solankishashi9958@gmail.com" },
    "C00043": { "name": "NARINDER KUMAR SHARMA    ", "department": "Production ", "email": "deepaksharma2004ds@gmail.co" },
    "C00044": { "name": "CHANDAN KUMAR BATTACHARJE", "department": "Marketing", "email": "cbhattacharya@autolek.com" },
    "C00045": { "name": "NAVEEN CHAUDHARY   ", "department": "Production ", "email": "naveenc1996@gmail.com" },
    "C00046": { "name": "VIVEK KUMAR  ", "department": "Quality", "email": "vivekshalu1313@gmail.com" },
    "C00049": { "name": "RAJENDER PRASAD    ", "department": "Tool Room", "email": "rajender26166@gmai.com" },
    "C00027": { "name": "RAJENDER SAHAI", "department": "STORE", "email": "rmstorerudrapur@autolek.com" },
    "INT003": { "name": "VIKASH SINGH", "department": "DIGITALIZATION", "email": "vikash.singh@autolek.com" }

    

   };
   
   function filterOptions() {
    var input, filter, select, options, option, i, txtValue;
    input = document.getElementById("ecSearch");
    filter = input.value.toUpperCase();
    select = document.getElementById("entry.459367307");
    options = select.getElementsByTagName("option");

    for (i = 0; i < options.length; i++) {
        option = options[i];
        txtValue = option.textContent || option.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            option.style.display = "";
        } else {
            option.style.display = "none";
        }
    }
}
   


   function fillDetails() {
       var selectedECNo = document.getElementById("entry.459367307").value;
       var nameField = document.getElementById("entry.1901190079");
       var departmentField = document.getElementById("entry.1673632614");
       var emailField = document.getElementById("entry.1269000508");
   
       // Check if the selected E.C No exists in the ecData object
       if (ecData[selectedECNo]) {
           nameField.value = ecData[selectedECNo].name;
           departmentField.value = ecData[selectedECNo].department;
           emailField.value = ecData[selectedECNo].email;
       } else {
           // Clear the fields if no E.C No is selected or if the selected E.C No doesn't match any predefined values
           nameField.value = "";
           departmentField.value = "";
           emailField.value = "";
       }
   }

   
   // Add event listeners to weightage inputs to trigger calculation
document.addEventListener('DOMContentLoaded', function() {
    // Loop through each row individually
    for (var i = 1; i <= 10; i++) {
        var row = document.querySelector('.row' + i); // Select each row

        var weightageInputs = row.querySelectorAll('input[name^="entry.2154909"], input[name^="entry.1851935999"], input[name^="entry.80525495"], input[name^="entry.1353547461"], input[name^="entry.105008738"], input[name^="entry.542858498"], input[name^="entry.495272561"], input[name^="entry.1894423910"], input[name^="entry.1896290339"], input[name^="entry.1179970253"]');

        // Add event listener to each weightage input
        weightageInputs.forEach(function(weightageInput) {
            weightageInput.addEventListener('input', calculateTotalWeightageKRA);
        });
    }
});


function calculateTotalWeightageKRA() {
    var totalWeightage = 0;

    // Loop through each row individually
    for (var i = 1; i <= 10; i++) {
        var row = document.querySelector('.row' + i); // Select each row

        var weightageInputs = row.querySelectorAll('input[name^="entry.2154909"], input[name^="entry.1851935999"], input[name^="entry.80525495"], input[name^="entry.1353547461"], input[name^="entry.105008738"], input[name^="entry.542858498"], input[name^="entry.495272561"], input[name^="entry.1894423910"], input[name^="entry.1896290339"], input[name^="entry.1179970253"]');

        // Add event listener to each weightage input
        weightageInputs.forEach(function(weightageInput) {
            var weightage = parseFloat(weightageInput.value) || 0;
            totalWeightage += weightage;
        });
    }

    if (totalWeightage > 60) {
        alert("Total weightage cannot be more than 60");
        totalWeightage = 0; // Reset total weightage to zero
    }

    var totalWeightageInput = document.querySelector('input[name="entry.1106801050"]');
    if (totalWeightageInput) {
        totalWeightageInput.value = totalWeightage;
    }

    console.log('Total Weightage:', totalWeightage);
}



document.addEventListener('DOMContentLoaded', function() {
    // Loop through each row individually
    for (var i = 11; i <= 13; i++) {
        var row = document.querySelector('.row' + i); // Select each row

        var weightageInputs = row.querySelectorAll('input[name^="entry.577462297"], input[name^="entry.237334848"], input[name^="entry.1501775503"]');

        // Add event listener to each weightage input
        weightageInputs.forEach(function(weightageInput) {
            if (weightageInput.getAttribute('name') === 'entry.237334848') {
                weightageInput.value = 10; // Prefill with 10
            }
            weightageInput.addEventListener('input', calculateTotalWeightage);
        });
    }
});

function calculateTotalWeightage() {
    var totalWeightage = 0;

    // Loop through each row individually
    for (var i = 11; i <= 13; i++) {
        var row = document.querySelector('.row' + i); // Select each row

        var weightageInputs = row.querySelectorAll('input[name^="entry.577462297"], input[name^="entry.237334848"], input[name^="entry.1501775503"]');

        // Add event listener to each weightage input
        weightageInputs.forEach(function(weightageInput) {
            var weightage = parseFloat(weightageInput.value) || 0;
            totalWeightage += weightage;
        });
    }

    if (totalWeightage > 20) {
        alert("Total weightage cannot be more than 20, plese fill again.");
        totalWeightage = 0; // Reset total weightage to zero

        // Reset the values of other fields
        var resetFields = document.querySelectorAll('input[name^="entry.577462297"], input[name^="entry.1501775503"]');
        resetFields.forEach(function(field) {
            field.value = 0;
        });
    }

    var totalWeightageInput = document.querySelector('input[name="entry.2003645448"]');
    if (totalWeightageInput) {
        totalWeightageInput.value = totalWeightage;
    }

    console.log('Total Weightage:', totalWeightage);
}



// function submitForm() {
//     var selectedECNo = document.getElementById("entry.459367307").value;
//     var nameField = document.getElementById("entry.1901190079").value;
//     var departmentField = document.getElementById("entry.1673632614").value;
//     var emailField = document.getElementById("entry.1269000508").value;
//     var mandatoryFieldsFilled = true;

//     // Check if E.C No, Name, and Department are filled
//     if (!selectedECNo || !nameField || !departmentField || !emailField) {
//         mandatoryFieldsFilled = false;
//     }

//     // Loop through each mandatory row to check if all fields are filled
//     var mandatoryRows = [1, 2, 3, 4, 5, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
//     mandatoryRows.forEach(function(rowNumber) {
//         var row = document.querySelector('.row' + rowNumber); // Select each row

//         // Check if the row contains a select element
//         var select = row.querySelector('select[data-category]');
//         if (select) {
//             // Check if the select element has a value selected
//             if (!select.value) {
//                 mandatoryFieldsFilled = false;
//             }
//         } else {
//             // If the row contains input elements, check them for empty values
//             var inputs = row.querySelectorAll('input[data-category]');
//             inputs.forEach(function(input) {
//                 if (!input.value) {
//                     mandatoryFieldsFilled = false;
//                 }
//             });
//         }
//     });

//     // If all mandatory fields are filled, submit the form
//     if (mandatoryFieldsFilled) {
//         var formData = new FormData(document.querySelector('form'));
//         var xhr = new XMLHttpRequest();

//         xhr.onreadystatechange = function() {
//             if (xhr.readyState === XMLHttpRequest.DONE) {
//                 if (xhr.status === 200) {
//                     // Handle successful form submission
//                     alert('Form submitted successfully!');
//                 } else {
//                     // Handle form submission error
//                     console.error('Error occurred while submitting the form:', xhr.statusText);
//                     alert('Error occurred while submitting the form. Please try again later.');
//                 }
//             }
//         };

//         // Replace the URL with your Google Forms URL
//         xhr.open('POST', 'https://docs.google.com/forms/d/e/1FAIpQLSeqaELMMosegug7m1HRW1IfAu35G2LHR5IJVyGrPmlMtq_KYg/formResponse');
//         xhr.send(formData);
//     } else {
//         // Show an alert to fill required details
//         alert('Please fill all the required details.');
//     }
// }

// document.addEventListener('DOMContentLoaded', function() {
//     var form = document.querySelector('form');

//     form.addEventListener('submit', function(event) {
//         // Check if all mandatory fields are filled
//         var selectedECNo = document.getElementById("entry.459367307").value;
//         var nameField = document.getElementById("entry.1901190079").value;
//         var departmentField = document.getElementById("entry.1673632614").value;
//         var emailField = document.getElementById("entry.1269000508").value;
//         var mandatoryFieldsFilled = true;

//         // Check if E.C No, Name, and Department are filled
//         if (!selectedECNo || !nameField || !departmentField || !emailField) {
//             mandatoryFieldsFilled = false;
//         }

//         // Loop through each mandatory row to check if all fields are filled
//         var mandatoryRows = [1, 2, 3, 4, 5, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,25];
//         mandatoryRows.forEach(function(rowNumber) {
//             var row = document.querySelector('.row' + rowNumber); // Select each row

//             // Check if the row contains a select element
//             var select = row.querySelector('select[data-category]');
//             if (select) {
//                 // Check if the select element has a value selected
//                 if (!select.value) {
//                     mandatoryFieldsFilled = false;
//                 }
//             } else {
//                 // If the row contains input elements, check them for empty values
//                 var inputs = row.querySelectorAll('input[data-category]');
//                 inputs.forEach(function(input) {
//                     if (!input.value) {
//                         mandatoryFieldsFilled = false;
//                     }
//                 });
//             }
//         });


//         // Prevent form submission if any mandatory field is not filled
//         if (!mandatoryFieldsFilled) {
//             event.preventDefault();
//             alert('Please fill all the required details before submitting.');
//         }
//     });
// });




function submitForm() {
    // Check if the checkbox is checked
    var agreeCheckbox = document.getElementById('agreeCheckbox');
    if (!agreeCheckbox.checked) {
        alert('Please check the checkbox before submitting the form.');
        return; // Prevent form submission if the checkbox is not checked
    }

    var selectedECNo = document.getElementById("entry.459367307").value;
    var nameField = document.getElementById("entry.1901190079").value;
    var departmentField = document.getElementById("entry.1673632614").value;
    var emailField = document.getElementById("entry.1269000508").value;
    var mandatoryFieldsFilled = true;

    // Check if E.C No, Name, and Department are filled
    if (!selectedECNo || !nameField || !departmentField || !emailField) {
        mandatoryFieldsFilled = false;
    }

    // Loop through each mandatory row to check if all fields are filled
    var mandatoryRows = [1, 2, 3, 4, 5, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    mandatoryRows.forEach(function(rowNumber) {
        var row = document.querySelector('.row' + rowNumber); // Select each row

        // Check if the row contains a select element
        var select = row.querySelector('select[data-category]');
        if (select) {
            // Check if the select element has a value selected
            if (!select.value) {
                mandatoryFieldsFilled = false;
            }
        } else {
            // If the row contains input elements, check them for empty values
            var inputs = row.querySelectorAll('input[data-category]');
            inputs.forEach(function(input) {
                if (!input.value) {
                    mandatoryFieldsFilled = false;
                }
            });
        }
    });

    // If all mandatory fields are filled and the checkbox is checked, submit the form
    if (mandatoryFieldsFilled) {
        var formData = new FormData(document.querySelector('form'));
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Handle successful form submission
                    alert('Form submitted successfully!');
                } else {
                    // Handle form submission error
                    console.error('Error occurred while submitting the form:', xhr.statusText);
                    alert('Error occurred while submitting the form. Please try again later.');
                }
            }
        };

        // Replace the URL with your Google Forms URL
        xhr.open('POST', 'https://docs.google.com/forms/d/e/1FAIpQLSeqaELMMosegug7m1HRW1IfAu35G2LHR5IJVyGrPmlMtq_KYg/formResponse');
        xhr.send(formData);
    } else {
        // Show an alert to fill required details
        alert('Please fill all the required details.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        // Check if all mandatory fields are filled
        var selectedECNo = document.getElementById("entry.459367307").value;
        var nameField = document.getElementById("entry.1901190079").value;
        var departmentField = document.getElementById("entry.1673632614").value;
        var emailField = document.getElementById("entry.1269000508").value;
        var mandatoryFieldsFilled = true;

        // Check if E.C No, Name, and Department are filled
        if (!selectedECNo || !nameField || !departmentField || !emailField) {
            mandatoryFieldsFilled = false;
        }

        // Loop through each mandatory row to check if all fields are filled
        var mandatoryRows = [1, 2, 3, 4, 5, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,25];
        mandatoryRows.forEach(function(rowNumber) {
            var row = document.querySelector('.row' + rowNumber); // Select each row

            // Check if the row contains a select element
            var select = row.querySelector('select[data-category]');
            if (select) {
                // Check if the select element has a value selected
                if (!select.value) {
                    mandatoryFieldsFilled = false;
                }
            } else {
                // If the row contains input elements, check them for empty values
                var inputs = row.querySelectorAll('input[data-category]');
                inputs.forEach(function(input) {
                    if (!input.value) {
                        mandatoryFieldsFilled = false;
                    }
                });
            }
        });

        // Check if the checkbox is checked
        var agreeCheckbox = document.getElementById('agreeCheckbox');
        if (!agreeCheckbox.checked || !mandatoryFieldsFilled) {
            event.preventDefault(); // Prevent form submission
            alert('Please check the checkbox and fill all required details before submitting.');
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
    // Get all input fields you want to apply the functionality to
    var inputFields = document.querySelectorAll('.auto-resize-input');
    
    // Loop through each input field
    inputFields.forEach(function(inputField) {
        var originalInputHeight = inputField.offsetHeight; // Store the original height
        
        inputField.addEventListener('input', function() {
            autoResize(inputField);
        });
        
        inputField.addEventListener('focus', function() {
            inputField.style.height = 'auto'; // Set height to auto to adjust to content
            inputField.classList.add('expanded'); // Add expanded class to increase width
            autoResize(inputField); // Call autoResize function
        });
        
        inputField.addEventListener('blur', function() {
            inputField.style.height = originalInputHeight + 'px'; // Reset the height to original size
            inputField.classList.remove('expanded'); // Remove expanded class
        });
    });
    
    // Function to auto resize the textarea
    function autoResize(element) {
        element.style.height = 'auto'; // Set height to auto to adjust to content
        element.style.height = element.scrollHeight + 'px'; // Set the height to fit the content
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Select all question select elements
    var questionSelects = document.querySelectorAll('.question-select');
    
    // Total marks variable to store the sum of marks
    var totalMarks = 0;
    
    // Function to calculate total marks based on the selected option
    function calculateTotalMarks() {
        totalMarks = 0;
        questionSelects.forEach(function(select) {
            var selectedOption = select.value;
            switch(selectedOption) {
                case 'Directed':
                    totalMarks += 0.5;
                    break;
                case 'Skilled':
                    totalMarks += 1;
                    break;
                case 'Autonomous':
                    totalMarks += 1.5;
                    break;
                case 'Role Model':
                    totalMarks += 2;
                    break;
            }
        });
        // Update the total marks text
        document.getElementById('totalMarks').textContent = totalMarks;
    }
    
    // Add change event listeners to all question select elements
    questionSelects.forEach(function(select) {
        select.addEventListener('change', calculateTotalMarks);
    });
});


  
  