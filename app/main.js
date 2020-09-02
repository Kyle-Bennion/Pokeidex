import ApiPokeidexController from "./Controllers/ApiPokeidexController.js";
import MyPokeidexController from "./Controllers/MyPokeidexController.js";

class App {
  apiPokeidexController = new ApiPokeidexController()
  myPokeidexController = new MyPokeidexController()
}

window["app"] = new App();
