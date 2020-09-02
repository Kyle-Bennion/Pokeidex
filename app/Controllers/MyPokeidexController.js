import { ProxyState } from "../AppState.js"
import myPokeidexService from "../Services/MyPokeidexService.js"
//PRIVATE
function _drawActivePokemon() {
  let elem = document.getElementById("active-pokemon")
  if (ProxyState.activePokemon) {
    elem.innerHTML = ProxyState.activePokemon.Template
  } else {
    elem.innerHTML = ""
  }

}

function _drawMyPokemon() {
  let pokemon = ProxyState.myPokemon
  let template = ''
  pokemon.forEach(p => template += `<li onclick="app.myPokemonController.setActive('${this.id}')">${p.name}</li>)`)
  document.getElementById('my-pokemon').innerHTML = template
}


//PUBLIC
export default class MyPokeidexController {

  constructor() {
    ProxyState.on("activePokemon", _drawActivePokemon)
    ProxyState.on("myPokemon", _drawMyPokemon)
    this.getMyPokemon();
  }
  getMyPokemon() {
    try {
      myPokeidexService.getMyPokemon();
    } catch (error) {
      console.error(error)
    }
  }
  setActive(id) {
    myPokeidexService.setActive(id)
  }
  addPokemon() {
    try {
      myPokeidexService.addPokemon()
    } catch (error) {
      console.error(error)
    }
  }
  removePokemon() {
    try {
      myPokeidexService.removePokemon()
    } catch (error) {
      console.error(error)
    }
  }





}
