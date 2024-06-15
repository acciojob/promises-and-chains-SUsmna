//your JS code here. If required.
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const nameInput = document.getElementById('name').value.trim();
    const ageInput = document.getElementById('age').value.trim();
	const btn = document.getElementById("bts");


    if (nameInput === '' || ageInput === '') {
        alert('Inputs cannot be empty');
        return;
    }
	
    const age = parseInt(ageInput);
	
// function displayOutput(){
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age > 18) {
                resolve();
            } else {
                reject();
            }
        }, 4000); 
    })
    .then(() => {
        alert(`Welcome, ${nameInput}. You can vote.`);
    })
    .catch(() => {
        alert(`Oh sorry ${nameInput}. You aren't old enough.`);
    });
});
// }
// btn.addEventListener('click', displayOutput);





