import { ProxyState } from "../AppState.js";
import apiPokeidexService from "../Services/ApiPokeidexService.js"

function _drawApiPokemon() {
  let pokemon = ProxyState.apiPokemon
  let template = ''
  pokemon.forEach(p => template += `<li onclick="app.apiPokeidexController.getDetails('${p.index}')">${p.name}</li>`)
  document.getElementById('api-pokemon').innerHTML = template
}
export default class apiPokeidexController {

  constructor() {
    ProxyState.on("apiPokemon", _drawApiPokemon)
    this.getAllApiPokemon()
  }
  getAllApiPokemon() {
    try {
      apiPokeidexService.getAll()
    } catch (error) {
      console.error(error)
    }
  }
  getDetails(index) {
    try {
      apiPokeidexService.getDetails(index)
    } catch (error) {
      console.error(error)
    }
  }
}