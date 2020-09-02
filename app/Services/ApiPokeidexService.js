import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { pokeApi } from "./AxiosSerivce.js"


class ApiPokeindexService {
  //This is me going to get the Pokemon?
  async getAll() {
    let res = await pokeApi.get('')
    ProxyState.apiPokemon = res.data.results
  }
  async getDetails(id) {

    let res = await pokeApi.get(id)
    ProxyState.activePokemon = new Pokemon(res.data)

  }



}