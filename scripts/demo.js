// button event
// function collectCourse() {
//   let submitButton = document.querySelector('#submit')
  
//   submitButton.addEventListener('click', () => {
//     let enteredCourse = document.querySelector("#courseInput").value;
//     console.log(`${enteredCourse} was entered in the search box.`);
//     return enteredCourse;
//   })
// };

// collectCourse();

function collectCourse() {
  let submitButton = document.querySelector('#submit')
  
  submitButton.addEventListener('click', () => {
    let enteredCourse = document.querySelector("#courseInput").value;
    console.log(`${enteredCourse} was entered in the search box.`);
    // return enteredCourse;
    if (enteredCourse === "BMES 338") {
      // pre-req
      let prereq = document.querySelector('#prereq');
      let prereqOutput = document.createElement('p');
      prereq.appendChild(prereqOutput);
      prereqOutput.textContent = `${enteredCourse} does not have pre-requisites.`;

      // co-req
      let coreq = document.querySelector('#coreq');
      let coreqOutput = document.createElement('p');
      coreq.appendChild(coreqOutput);
      coreqOutput.textContent = `${enteredCourse} does not have co-requisites.`;

      // post-req
      let postreq = document.querySelector('#postreq');
      let postreqOutput = document.createElement('p');
      postreq.appendChild(postreqOutput);
      postreqOutput.textContent = `${enteredCourse} does not have post-requisites.`;
    } else if (enteredCourse === "BMES 325") {
      // pre-req
      let prereq = document.querySelector('#prereq');
      let prereqOutput = document.createElement('p');
      prereq.appendChild(prereqOutput);
      prereqOutput.textContent = `BIO 122 and one of the following must be taken before ${enteredCourse}: ENGR 232, or MATH 262 or MATH 210.`;

      // co-req
      let coreq = document.querySelector('#coreq');
      let coreqOutput = document.createElement('p');
      coreq.appendChild(coreqOutput);
      coreqOutput.textContent = `MEM 202 can be taken concurrently with ${enteredCourse}.`;

      // post-req
      let postreq = document.querySelector('#postreq');
      let postreqOutput = document.createElement('p');
      postreq.appendChild(postreqOutput);
      postreqOutput.textContent = `${enteredCourse} must be taken before BMES 326.`;
    }
  })
};

collectCourse();