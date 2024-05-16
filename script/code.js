document.getElementById('working').addEventListener('change', function() {
    var div = document.getElementById('workingHours');
    div.style.display = this.checked ? 'block' : 'none';
});

document.getElementById('calculate').addEventListener('click', function() {
    // Check if all fields are filled
    var inputs = document.querySelectorAll('input[type="text"], input[type="number"], input[type="date"]');
    var allFilled = true;
    inputs.forEach(function(input) {
        if (input.value.trim() === '') {
            allFilled = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    if (!allFilled) {
        alert('All fields are necessary!');
        return;
    }

    // positive/negative values
    inputs.forEach(function(input) {
        if (parseFloat(input.value) >= 0) {
            input.classList.add('success');
            input.classList.remove('error');
        } else {
            input.classList.add('error');
            input.classList.remove('success');
        }
    });

    // leap year 
    var dob = new Date(document.getElementById('dob').value);
    if ((dob.getFullYear() % 4 == 0 && dob.getFullYear() % 100 != 0) || dob.getFullYear() % 400 == 0) {
        document.getElementById('dob').classList.add('leapYear');
    } else {
        document.getElementById('dob').classList.remove('leapYear');
    }

  

    // Displaying the output
    var greeting = document.getElementById('greeting').value;
    var fullName = greeting + ' ' + document.getElementById('firstName').value + ' ' + document.getElementById('lastName').value;
    var outputLabel = document.getElementById('outputLabel');
    outputLabel.textContent = 'Hello Dear ' + fullName + ', We hope you\'re doing well; here\'s your salary after deduction. R......';
});

document.getElementById('saveData').addEventListener('click', function() {
    // local storage
    var userData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        age  }
    });