document.addEventListener("DOMContentLoaded", function () {
    // Automatically focus on the first input field in the survey form
    const firstInput = document.querySelector("form input");
    if (firstInput) {
        firstInput.focus();
    }

    // Form validation before submission
    const surveyForm = document.querySelector("#surveyForm");
    if (surveyForm) {
        surveyForm.addEventListener("submit", function (event) {
            let valid = true;
            const requiredFields = surveyForm.querySelectorAll("[required]");
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    valid = false;
                    field.classList.add("border", "border-danger");
                } else {
                    field.classList.remove("border", "border-danger");
                }
            });
            
            if (!valid) {
                event.preventDefault();
                alert("Please fill in all required fields before submitting.");
            }
        });
    }
});