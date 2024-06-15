//your JS code here. If required.
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const nameInput = document.getElementById('name').value.trim();
    const ageInput = document.getElementById('age').value.trim();

    // Check if inputs are not empty
    if (nameInput === '' || ageInput === '') {
        alert('Inputs cannot be empty');
        return;
    }

    const age = parseInt(ageInput);

    // Create a promise that resolves or rejects based on the age
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age > 18) {
                resolve();
            } else {
                reject();
            }
        }, 4000); // 4 seconds delay
    })
    .then(() => {
        alert(`Welcome, ${nameInput}. You can vote.`);
    })
    .catch(() => {
        alert(`Oh sorry ${nameInput}. You aren't old enough.`);
    });
});





