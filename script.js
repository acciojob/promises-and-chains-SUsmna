//your JS code here. If required.
document.getElementById('userForm').addEventListener('submit',function(event) {
	event.prevenDefault();
	const nameInput = document.getEmelemtById('name').value.trim();
	const getInput = document.getEmelemtById('age').value.trim();
	if (nameInput === '' || ageInput === ''){
		alert('Inputs cannot be empty');
		return;
	}
	const age = parseInt(ageInput);
	new Promise((resolve,reject) => {
		setTimeout(() => {
			if(age > 18){
				resolve();
			}else{
				reject();
			}
		},4000);
	})
	.then(()=>{
		alert(`Welcome, ${nameInput}. You can vote.`)
	})
	.catch(() =>{
		alert(`Oh sorry ${nameInput}, You aren't old enough.`)
	});
});





