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
    let res = await sandboxApi.post('', ProxyState.activePokemon)
    ProxyState.myPokemon = [...ProxyState.myPokemon, new Pokemon(res.data.data)]
  }
  async removePokemon() {
    await sandboxApi.delete(ProxyState.activePokemon.id)
    ProxyState.myPokemon = ProxyState.myPokemon.filter(p => p.id != ProxyState.activePokemon.id)
    ProxyState.activePokemon = null
  }

}

const myPokeidexService = new MyPokeidexService();
export default myPokeidexService
