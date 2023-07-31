
class App {
    constructor () {
    this.$root = document.getElementById('root')
    this.render()
    }
    render(){
       this.$root.innerHTML = `<div>Date: <div>`
    }
}

new App ()