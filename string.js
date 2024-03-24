//Select relevant DOM elements
const button = document.querySelector("#btn");
const inputText = document.querySelector("#input-text");
const result = document.querySelector("#result");

//the event listent to the check button

button.addEventListener("click", () => {
    //input text value and remove the white line at the end of the text
    const text = inputText.value.trim();

    //checking if the input is empty

if(text.length == 0) {

    //showing an alert if so
    alert("Input cannot be empty");
    return; //Exit the function if the input is empty
}

//Remove any non-alphanumeric characters and convert to lowercase
const cleanText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

//check if the text is a palindrome

const ispalindrome = cleanText === cleanText.split
("").reverse("").join("");

//create a message based on whether the input is a palindrome or not
const message= ispalindrome ? `<span> Yes.</span> It's a palindrome`: `<span> Nope. </span> Not a palindrome` 

result.innerHTML = message;
result.classList.remove("error","success");
setTimeout(()=>{
    result.classList.add(ispalindrome ? "success" : "error");
}, 10);
});