import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { pokeApi } from "./AxiosSerivce.js"


class ApiPokeindexService {
  async getAll() {
    let results = await pokeApi.get('')
  }



}