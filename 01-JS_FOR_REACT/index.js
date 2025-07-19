const names = ['nombre1', 'nombre2', 'nombre3']
const names2 = ['nombre4', 'nombre5', 'nombre6']

// for (let i = 0; i < names.length; i++) {
//     const element = names[i];
//     console.log(element)
// }

//esto recorre el arreglo, pero puede ponerse names.map, lo que recorre y puede devolver otro arreglo
names.forEach(function(name) {
    console.log(name)
})

//find busca un elemento con una condicion

const newNamesFind = names.find(function(name){
    if (name === 'nombre2') {
        return name
    }
})

console.log(newNamesFind);

console.log(names.concat(names2));
//esto es lo mismo que
console.log([...names, ...names2])

const ul = document.createElement("ul");

async function loadData(){
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts') //aqui va la api
    const data = await response.json()
    data.forEach(function(post){
        const li = document.createElement("li");
        li.innerText = post.title;
        ul.append(li);
    });
    document.body.append(ul);
}

loadData()