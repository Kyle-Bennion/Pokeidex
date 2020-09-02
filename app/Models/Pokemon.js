export default class Pokemon {
    constructor({ _id = "", name, height, weight, types, img, sprites }) {
        this.id = _id
        this.name = name
        this.height = height
        this.weight = weight
        this.types = types
        this.img = img || sprites.front_default

    }

    get Template() {

        return /*html*/ `
        <div class="card-body">
          <img src="${this.img}" alt="${this.name}">
          <h4 class="card-title">${this.name}</h4>
          <p class="card-text">Types: ${this.Types}</p>
          <p class="card-text">Height: ${this.height}</p>
          <p class="card-text">Weight: ${this.weight}</p>
        </div>
        `
    }
    get Types() {
        let template = ''
        this.types.forEach(t => template += t.type.name + " ")
        return template
    }
}
