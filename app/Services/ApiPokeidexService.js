import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { pokeApi } from "../Services/AxiosService.js"


class ApiPokeindexService {
  //This is me going to get the Pokemon?
  async getAll() {
    let res = await pokeApi.get("/pokemon?limit=1050")
    ProxyState.apiPokemon = res.data.results
  }
  async getDetails(name) {
    let res = await pokeApi.get('/pokemon/' + name)
    debugger
    ProxyState.activePokemon = new Pokemon(res.data)
  }



}

const apiPokeindexService = new ApiPokeindexService()
export default apiPokeindexService