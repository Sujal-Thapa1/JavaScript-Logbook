// setTimeout(() => (console.log("Sujal")),1000);
// console.log("Thapa");

// let promise = fetch('https://jsonplaceholder.typicode.com/posts/1');
// promise.then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.log("Errors", error));

const dt = () => {
const input = document.querySelector('#number').value;

const target = document.querySelector('#content');

var data = fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${input}`);
data.then(value => value.json()).then(value2 => 
    value2.forEach(element => {
        const tempDiv = document.createElement('div');
        const temph4 = document.createElement('h4');
        const tempP = document.createElement('p');
        temph4.textContent = element.title;
        tempP.textContent = element.body;
        tempDiv.appendChild(temph4);
        tempDiv.appendChild(tempP);
        target.appendChild(tempDiv);
    })

)
target.innerHTML = '';
}