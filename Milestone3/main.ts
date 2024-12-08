// listing 

document.getElementById("Resume")?.addEventListener("submit",function(event){
    event.preventDefault();

  

    const nameElement = document.getElementById("Name") as HTMLInputElement;
    const emailElement = document.getElementById("Email") as HTMLInputElement;
    const phoneElement = document.getElementById("Phone") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLTextAreaElement;
    const experienceElement = document.getElementById("experience") as HTMLTextAreaElement;
    const skillsElement = document.getElementById("skills") as HTMLTextAreaElement;


    if(nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

    // resume output

    const resumeOutput =`
    <h2>Resume</h2> 
    <p><strong>Name:</strong> ${name} </p>
    <p><strong>email:</strong>${email} </p>
    <p><strong>Phone Number:</strong> ${phone} </p>
    

    <h3> Education </h3> 
    <p>${education}</P>

     <h3>Experiences </h3> 
    <p>${experience}</P>

     <h3>Skills </h3> 
    <p>${skills}</P>
    `;



    const resumeOutputElement = document.getElementById("resumeOutput")
    if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
    }else{
        console.error("The Resume Output Elements Are Misiing ");
    }
    
   
    
}else{
    console.error("One Or More Outputs Elements  Are Missing")
}


})


