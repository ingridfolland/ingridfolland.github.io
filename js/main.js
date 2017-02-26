function askQuestions(){
		
	var firstName = prompt('What is your first name?').trim();
	var lastName = prompt('What is your last name?').trim();
	var fullName = firstName + ' ' + lastName;
	console.log(fullName);

	var age = prompt('How old are you?');
	age = parseInt(age);
	// console.log(age);

	if (age >=18) {
		console.log('User is an adult');
	} else	if (age >=13) {
		console.log('User is a teenager');
	} else if (age <13)	{
		console.log('User is a kid');
	} else {
		console.log('nah, mate');
	}
	// if (firstName === "" || lastName === ""){
	// 	alert('You need to reenter with a value');
	// 	askQuestions();
	// }
	if (firstName.toLowerCase() === 'general') {
		if (lastName.toLowerCase() !=='assembly') {
			console.log('Hello General' + ' ' + lastName + '!');
		} 
		// else {
		// console.log('user is a general assembly, therefore: nah, mate');
		// }
	} 
	// else {
	// 	console.log('user is not a general');
	// }
}

//When the page has loaded
$(function(){

	$('img').on('click', askQuestions);

	//When the user clicks an h3
	$('h3').on('click',function(){
		
		//Hide next element if unhidden, unhide if hidden
		$(this).next().slideToggle(750);


	});

});