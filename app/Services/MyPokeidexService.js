import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { sandboxApi, pokeApi } from "./AxiosService.js"
class MyPokeidexService {

  setActive(id) {
    ProxyState.activePokemon = ProxyState.myPokemon.find(p => p.id == id)

  }


  async getMyPokemon() {
    let res = await sandboxApi.get('')
    ProxyState.myPokemon = res.data.data.map(p => new Pokemon(p))
  }
  //Dont Worry about the Math Part Right now.
  async addPokemon() {
    ProxyState.myPokemon = [...ProxyState.myPokemon, new Pokemon({ title: Math.random() })]
  }

  async removePokemon() {

  }

}

export const valuesService = new MyPokeidexService();

