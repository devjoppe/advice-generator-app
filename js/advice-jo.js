// API URL
const api_url = "https://api.adviceslip.com/advice";

// Define the async function
async function getapi(url) {

        // Storing the response
        const response = await fetch(url);

        // Storing the data in form of JSON
        let data = await response.json();
        console.log(data);
        
        // Calling the function to display the data
        showData(data);
}

// Calling the async function
getapi(api_url);

function showData(data) {

    let adviceRes = data.slip.advice;
    console.log(adviceRes);

    const adviceText = document.querySelector('span');
    adviceText.textContent = `"${adviceRes}"`;

}

const adviceBtn = document.querySelector('#newadvice');

adviceBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    console.log("New advice button click");

    getapi(api_url);
});

