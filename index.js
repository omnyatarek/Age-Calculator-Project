const user = document.getElementById("user_date");
const btn = document.getElementById("btn"); // Changed 'calc' to 'btn'
const result = document.getElementById("result");

function CalculateAge() { // Fixed spelling from "CalulateAge" to "CalculateAge"
    const num = user.value;


    const dob = new Date(num);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    

   

    result.textContent = `🎉 You are ${age} years old!`;
    result.style.color = "green";
}

// Fixed variable name in event listener
btn.addEventListener("click", CalculateAge);
