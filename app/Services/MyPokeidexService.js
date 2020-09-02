import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";

class MyPokeidexService {
  addValue() {
    ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
}

export const valuesService = new MyPokeidexService();

