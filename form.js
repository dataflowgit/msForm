const steps = Array.from(document.querySelectorAll("form .step"));
const countrySteps = Array.from(document.querySelectorAll("form .country"));
const clients = Array.from(document.querySelectorAll("form .show-clients"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("right-sec-top #back-btn");
const form = document.querySelector("form");
let count = 1;
const finalData = {}

// Active country  and opacity functionality
for (i = 0; i < countrySteps.length; i++) {
    countrySteps[i].addEventListener('click', function () {
    document.querySelector("form .country.active_country").classList.remove("active_country");
    this.classList.add('active_country');
    document.getElementsByClassName(".show-clients").style = "display:block"
  })
}


// form submit functionality
form.addEventListener("submit", (e) => {
  e.preventDefault();
  e.stopPropagation()
  const inputs = [];
  form.querySelectorAll("input").forEach((input) => {
    const { name, value } = input;
    inputs.push({ name, value });
  });
  // form.reset();
  finalData.formData = inputs
  // form.reset();
  console.log("final data",finalData.formData)

  // showing fields according to the selecting type of request
  if (finalData.requestType === "Paid services center support") {
    const act1 = document.querySelectorAll("#screenshot,#attach,#passport,#case,#proName,#facilityName,#remark,#proEmail");
    for (const iterator of act1) {
      iterator.classList.add("d-none");
      if(iterator.className !== "d-none"){
     console.log("iterator =", iterator.className )
    }

    
    }
  }
  
  if (finalData.requestType === "How to apply for verification?") {
    const act2 = document.querySelectorAll("#screenshot,#attach,#passport,#case,#proName,#facilityName,#remark,#proEmail");
    for (const iterator of act2) {
      iterator.classList.add("d-none")
    }
  }
  if (finalData.requestType === "I need a new document to be verified") {
    const act3 = document.querySelectorAll("#screenshot,#attach,#proName,#facilityName,#remark,#proEmail");
    for (const iterator of act3) {
      iterator.classList.add("d-none")
    }
  }

  if (finalData.requestType === "I have a fee related query") {
    const act4 = document.querySelectorAll("#screenshot,#attach,#passport,#case,#proName,#facilityName,#remark,#proEmail");
    for (const iterator of act4) {
      iterator.classList.add("d-none")
    }
  }

  if (finalData.requestType === "I am facing technical issue") {
    const act5 = document.querySelectorAll("#case,#proName,#attach,#facilityName,#remark,#passport,#proEmail");
    for (const iterator of act5) {
      iterator.classList.add("d-none")
    }
  }

  if (finalData.requestType === "My application is delayed") {
    const act6 = document.querySelectorAll("#proName,#attach,#screenshot,#facilityName,#passport,#remark,#proEmail");
    for (const iterator of act6) {
      iterator.classList.add("d-none")
    }
  }

  if (finalData.requestType === "How to download a report?") {
    const act7 = document.querySelectorAll("#attach,#screenshot,#proName,#facilityName,#remark,#proEmail");
    for (const iterator of act7) {
      iterator.classList.add("d-none")
    }
  }

  if (finalData.requestType === "Error in my report") {
    const act8 = document.querySelectorAll("#attach,#proName,#passport,#facilityName,#proEmail");
    for (const iterator of act8) {
      iterator.classList.add("d-none")
    }
  }

  if (finalData.requestType === "Re-verification request") {
    const act9 = document.querySelectorAll("#screenshot,#proName,#facilityName,#proEmail,#remark,#passport");
    for (const iterator of act9) {
      iterator.classList.add("d-none")
    }
  }

  if (finalData.requestType === "Re-issuance of previous Dataflow report") {
    const act10 = document.querySelectorAll("#screenshot,#attach,#proName,#facilityName,#proEmail,#remark,#passport");
    for (const iterator of act10) {
      iterator.classList.add("d-none")
    }
  }

  if (finalData.requestType === "I need to register as an Agency/PRO") {
    const act11 = document.querySelectorAll("#fname,#lname,#email,#case,#screenshot,#attach,#remark,#passport");
    for (const iterator of act11) {
      iterator.classList.add("d-none")
    }
  }

  if (finalData.requestType === "Refund request") {
    const act12 = document.querySelectorAll("#screenshot,#attach,#remark,#proName,#facilityName,#proEmail,#passport");
    for (const iterator of act12) {
      iterator.classList.add("d-none")
    }
  }

  if (finalData.requestType === "I am unable to make payment") {
    const act13 = document.querySelectorAll("#attach,#remark,#proName,#facilityName,#proEmail,#passport,#case");
    for (const iterator of act13) {
      iterator.classList.add("d-none")
    }
  }
});
// showing fields according to the selecting type of request end here


// hiding dropdown functionality start here
const getDrop1 = document.getElementById('dropdown-1')
const getDrop2 = document.getElementById('dropdown-2')
window.onclick = function (e) {
  if (count == 1 && e.target.id === "find") {
    document.getElementById('dropdown-1').style.display = "block"
  }
  else if(count == 1 && e.target.id === "searchOthers"){
    document.getElementById('dropdown-1').style.display = "block"
  }
  else {
    document.getElementById('dropdown-1').style.display = "none"
  }

  if (count == 2 && e.target.id === "find") {
    document.getElementById('dropdown-2').style.display = "block"
  }

  else if(count == 2 && e.target.id === "searchOthers"){
    document.getElementById('dropdown-2').style.display = "block"
  }
  else {
    document.getElementById('dropdown-2').style.display = "none"
  }
}
// hiding dropdown functionality end here

// next step all buttons functionality start here
nextBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    const currentKey = e.target.dataset.type;
    let resetSearchVal = document.getElementById("find").value
    console.log(resetSearchVal);
    resetSearchVal=== null;
    console.log("current Key = ",currentKey)
    finalData[currentKey] = e.target.innerText;
    const removeDnone = document.querySelectorAll("#fname,#lname,#email,#case,#telephone,#screenshot,#attach,#remark,#passport,#facilityName,#proEmail,#proName,#description")
      for (const iterator of removeDnone) {
        iterator.classList.remove("d-none");
  }
  // console.log("input fields",removeDnone)
    activeTitle()
  });

});
// next step all buttons functionality end here

// navigate cursor functionality start here
document.getElementById('searchOthers').onclick = function (e, count) {
  const elemInput = document.getElementById('find')
  elemInput.focus();
  if (document.activeElement == elemInput) {
    showDropDown()
  }
};
// navigate cursor functionality end here

// show dropdown onclick on searchbar functionality start here
function handleClickInput() {
  const isShowDropdown = showDropDown();
  isShowDropdown;
}
// show dropdown onclick on searchbar functionality end here

// show dropdown by conditions functionality start here
function showDropDown() {
  let currentElemId = 0
  const allSearchElem = document.querySelectorAll('.for-search');
  allSearchElem.forEach((elem) => {
    const isActiveElem = elem.classList.contains('active');
    if (isActiveElem) {
      currentElemId = elem.dataset.id;
    }  
  });
  
  const dropDownELem = document.getElementById(`dropdown-${currentElemId}`)
  console.log("currentelem  id=",dropDownELem);
  document.querySelectorAll('dropdown').forEach((elem) => {
    elem.classList.remove('active')
  })
  dropDownELem.classList.add('active');
}
// show dropdown by conditions functionality end here


// searching functionality start here
function search() {
  let filter = document.getElementById("find").value.toUpperCase();
  let li = document.querySelectorAll('#drop1-clients-list li');
 let li2 = document.querySelectorAll('#type-of-req-list-search li');
 if(count === 1){
  for (var i = 0; i < li.length; i++) {
    let btn = li[i].getElementsByTagName("button")[0];
    let textValue = btn.textContent || btn.innerHTML;
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "flex";
      li[i].style = "z-index:2";
    }
    else {
      li[i].style.display = "none";
    }
  }
 }

 if(count === 2){
  for (var i = 0; i < li2.length; i++) {
    let btn2 = li2[i].getElementsByTagName("button")[0];
    let textValue2 = btn2.textContent || btn2.innerHTML;
    if (textValue2.toUpperCase().indexOf(filter) > -1) {
      li2[i].style.display = "flex";
      li2[i].style = "z-index:2";
    }
    else {
      li2[i].style.display = "none";
    }
  }
 }
  
}
// searching functionality end here

function openUAEClients() {
  document.getElementById("uae-clients-list").style = "display:block;"
  document.getElementById("ksa-clients-list").style = "display:none;"
  document.getElementById("qatar-clients").style = "display:none;"
  document.getElementById("oman-clients").style = "display:none;"
}

function openKSAClients() {
  document.getElementById("ksa-clients-list").style = "display:block;"
  document.getElementById("uae-clients-list").style = "display:none;"
  document.getElementById("qatar-clients").style = "display:none;"
  document.getElementById("oman-clients").style = "display:none;"
}

function openQatarClients() {
  document.getElementById("qatar-clients").style = "display:block;"
  document.getElementById("uae-clients-list").style = "display:none;"
  document.getElementById("ksa-clients-list").style = "display:none;"
  document.getElementById("oman-clients").style = "display:none;"
}

function openOmanClients() {
  document.getElementById("oman-clients").style = "display:block;"
  document.getElementById("qatar-clients").style = "display:none;"
  document.getElementById("uae-clients-list").style = "display:none;"
  document.getElementById("ksa-clients-list").style = "display:none;"

}

// top bar next step button,show dropdown, and title change functionality start here
function activeTitle() {
  document.querySelectorAll('.dropdown').forEach((elem) => {
    elem.classList.remove('active')
  })
  const elemInput = document.getElementById('find')
  if (document.activeElement !== elemInput) {
    document.querySelectorAll('.dropdown').forEach((elem) => {
      elem.classList.remove('active')
    })
  }
  count++;
  if (count > 1) {
    document.getElementById("back-btn").style = "visibility:visible;"
  }
  if (count > 3) {
    return;
  }
  if (count === 2) {
    document.getElementById("title2").classList.add("active-title")
    document.getElementById("title1").classList.remove("active-title")
    document.getElementById("step2").classList.add("active")
    document.getElementById("step1").classList.remove("active")
    document.getElementById("back-btn").style = "visibility:visible!important;"
  }

  // if(count === 2 && document.querySelector("#type-of-req-list li button")){
  //   document.querySelector("#step3 #email").style ="display:none";
  // }

  if (count === 3) {
    console.log(count);
    document.getElementById("title3").classList.add("active-title")
    document.getElementById("title2").classList.remove("active-title")
    document.getElementById("step3").classList.add("active")
    document.getElementById("step2").classList.remove("active")
    document.getElementById("right-sec-searchbar").style = "display:none"
    document.getElementsByClassName("search-other")[0].style = "display:none"
    document.getElementById("forward-btn").style = "visibility:hidden";
  }
}
// top bar next step button,show dropdown, and title change functionality end here

// back step button functionality
function BackStep() {
  const elemInput = document.getElementById('find')
  if (document.activeElement !== elemInput) {
    document.querySelectorAll('.dropdown').forEach((elem) => {
      elem.classList.remove('active')
    })
  }
  count--;

  if (count < 2) {
    document.getElementById("back-btn").style = "visibility:hidden;"
  }
  if (count === 1) {
    document.getElementById("title1").classList.add("active-title")
    document.getElementById("title2").classList.remove("active-title")
    document.getElementById("step1").classList.add("active")
    document.getElementById("step2").classList.remove("active")
    document.getElementById("forward-btn").style = "visibility:visible"
  }
  if (count === 2) {
    document.getElementById("title2").classList.add("active-title")
    document.getElementById("title3").classList.remove("active-title")
    document.getElementById("step2").classList.add("active")
    document.getElementById("step3").classList.remove("active")
    document.getElementById("right-sec-searchbar").style = "display:block"
    document.getElementsByClassName("search-other")[0].style = "display:block"
    document.getElementById("forward-btn").style = "visibility:visible"
  } 
  search() 
}
 

// form validation 
function validateForm() {

  let fName = document.forms["myForm"]["fname"].value;
  let lName = document.forms["myForm"]["lname"].value;
  let applicantEmail = document.forms["myForm"]["email"].value;
  atpos = applicantEmail.indexOf("@");
  dotpos = applicantEmail.lastIndexOf(".");
  let mobile = document.forms["myForm"]["phone"].value;
  let proEmail = document.forms["myForm"]["pro email"].value;
  posOfAt = proEmail.indexOf("@");
  posOfDot = proEmail.lastIndexOf(".");
  let proName = document.forms["myForm"]["PRO name"].value;
  let caseNum = document.forms["myForm"]["case"].value;
  let facilityName = document.forms["myForm"]["facility name"].value;
  let passportNum = document.forms["myForm"]["passport number"].value;
  let rejectionRemark = document.forms["myForm"]["remark"].value;
  let cktext = document.forms["myForm"]["cktext"].value;

  // checking which field has d-none class
const allFields = document.querySelectorAll("#fname,#lname,#email,#case,#telephone,#screenshot,#attach,#remark,#passport,#facilityName,#proEmail,#proName,#description")
for (let i=0; i<allFields.length; i++) {
  const dNoneClasses = allFields[i].classList;
  if(dNoneClasses.contains('d-none')){
  console.log("className = ",allFields[i].className); 
}
}

  // let screenshotDoc = document.forms["myForm"]["ss doc"].value;
  // let supportingDoc = document.forms["myForm"]["document"].value;

  if (fName == "" && lName == "" && applicantEmail == "" && mobile == "" && proEmail == ""  && proName == "" && caseNum == ""
  && facilityName == "" && passportNum == "" && rejectionRemark == "") {
    alert("all fields are required");
}

else if (fName == "") {
  alert("first name must be filled out");
  document.getElementById('fname').focus();
}

else if (fName.length<=3) {
  alert("First name length must contain minimum 4 characters");
  document.getElementById('fname').focus();
}

else if (lName == "") {
  alert("last name must be filled out");
  document.getElementById('lname').focus();
}

else if (lName.length<=3) {
  alert("Last name length should contain minimum 4 characters");
  document.getElementById('lname').focus();
}

else if (applicantEmail == "") {
alert("Applicant email must be filled out");
document.getElementById('email').focus();
}

else if (atpos < 1 || ( dotpos - atpos < 2 )) {
  alert("Please enter correct email ID")
  document.getElementById('email').focus();
}

else if (proEmail == "") {
  alert("PRO Email must be filled out");
  document.getElementById('proEmail').focus();
  }
  
  else if (posOfAt < 1 || ( posOfDot - posOfAt < 2 )) {
    alert("Please enter correct PRO email ID")
    document.getElementById('proEmail').focus();
  }


  else if (caseNum == "") {
    alert("case number must be filled out");
    document.getElementById('case').focus();
  }

else if (mobile == "") {
alert("mobile number must be filled out");
document.getElementById('telephone').focus();
}

else if(mobile.length<10){
  alert("mobile number length should be 10")
  document.getElementById('telephone').focus();
}

else if (proName == "") {
  alert("PRO name must be filled out");
  document.getElementById('proName').focus();
  }

  else if (passportNum == "") {
    alert("passport number must be filled out");
    document.getElementById('passport').focus();
  }

  else if (facilityName == "") {
    alert("facility name must be filled out");
    document.getElementById('facilityName').focus();
  }

  else if (rejectionRemark == "") {
    alert("rejection remark must be filled out");
    document.getElementById('remark').focus();
  }

  else if (cktext == "") {
    alert("description must be filled out")
    document.getElementById('cktext').focus();
  }
  
  else if (fName !== "" && lName !== "" && applicantEmail !== "" && mobile !== "" && proEmail !== ""  && proName !== "" && caseNum !== ""
  && facilityName !== "" && passportNum !== "" && rejectionRemark !== "" && cktext !== "" ) {
    cktext == "";
    form.reset();  
  }  
}
