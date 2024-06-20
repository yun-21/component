class Component {
    constructor(id, name, age){
        this.id=id;
        this.name=name;
        this.age=age;
    }

    render(){
        return `
        <h1>${this.id}</h1>
        <h2>${this.name}</h2>
        <h3>${this.age}</h3>
        `
    }
}

const app=(id,name,age) => {
    const component = new Component(id,name,age)
    return component.render()
}

console.log(app(1,"됐나",22))