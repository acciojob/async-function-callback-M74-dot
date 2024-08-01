const url = "https://jsonplaceholder.typicode.com/posts/1";

//your JS code here. If required.
const btn = document.querySelector('#btn');
const outputDiv = document.querySelector('#output');

async function fetchData(callback){
	try{
		const response = await fetch(url);
		const data = await response.json();
		callback(data.title);
	}catch(error){
		console.error('Error fetching data: ',error);
	}
}
function displayMessage(msg){
	outputDiv.textContent = msg;
}
btn.addEventListener('click',()=>{
	fetchData(displayMessage)
});