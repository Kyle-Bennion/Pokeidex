export default class Pokemon {
    constructor(_id = "", name, height, weight, species, img) {
        this.id = _id
        this.name = name
        this.height = height
        this.weight = weight
        this.species = species
        //this.img = sprites Come back to this to add an image. 

    }

    get Template() {

        return /*html*/ `
        <div class="card-body">
          <h4 class="card-title">${this.name}</h4>
          <p class="card-text">Species: ${this.species}</p>
          <p class="card-text">Height: ${this.height}</p>
          <p class="card-text">Weight: ${this.weight}</p>
        </div>
        `
    }
}
