// listing 
var _a;
(_a = document.getElementById("Resume")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameElement = document.getElementById("Name");
    var emailElement = document.getElementById("Email");
    var phoneElement = document.getElementById("Phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // resume output
        var resumeOutput = "\n    <h2>Resume</h2> \n    <p><strong>Name:</strong> ".concat(name_1, " </p>\n    <p><strong>email:</strong>").concat(email, " </p>\n    <p><strong>Phone Number:</strong> ").concat(phone, " </p>\n    \n\n    <h3> Education </h3> \n    <p>").concat(education, "</P>\n\n     <h3>Experiences </h3> \n    <p>").concat(experience, "</P>\n\n     <h3>Skills </h3> \n    <p>").concat(skills, "</P>\n    ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("The Resume Output Elements Are Misiing ");
        }
    }
    else {
        console.error("One Or More Outputs Elements  Are Missing");
    }
});
