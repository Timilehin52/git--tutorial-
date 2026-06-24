// fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json ()).then((data) => console.log(data))

// console.log("Fashola")

// fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(json => console.log(json))


async function getEverything() {
    const res = await fetch ("https://jsonplaceholder.typicode.com/todos")
    const data = await res.json()
    console.log(data);
    
}
getEverything()