// @ts-ignore
export const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon?limit=1050",
  timeout: 10000
})


// @ts-ignore
export const sandboxApi = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/Trundle_TheGreat/pokemon",
  timeout: 10000
})