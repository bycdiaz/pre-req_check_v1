// button event
let submitButton = document.querySelector('#submit')



submitButton.addEventListener('click', () => {
  let enteredCourse = document.querySelector("#courseInput").value;
  alert(`You've entered ${enteredCourse} in the search box.`);
  console.log(`You've entered ${enteredCourse} in the search box.`);
})