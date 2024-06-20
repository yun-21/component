const component = (id, name ,age) =>{
    return {
        id : id,
        name : name,
        age : age
    }
}

const render = () =>{
    const a = component (1,"컴포넌",22);
    return `
    <h1>${a.id}</h1>
    <h3>${a.name}</h3>
    <h4>${a.age}</h4>`
}
console.log(render())