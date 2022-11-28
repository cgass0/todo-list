export default function inputValidation() {
   
    let breaker;
    document.getElementsByClassName('new-project-input')[0].reportValidity() == false ? breaker = false : ""; 

    document.querySelectorAll(".name").forEach(task => {
        task.reportValidity() == false ? breaker = false : "";
    }); 

    document.querySelectorAll(".date").forEach(task => {
        task.reportValidity() == false ? breaker = false : "";
    });
    
    if(breaker == false) {
        return false
    } else {
        return true
    }

};