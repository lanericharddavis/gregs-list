import { ProxyState } from "../AppState.js";


//Private
function _draw() {

}

//Public
export default class CarsController {
  constructor() {
    // OH oh more magic. you still know.....
    // 1st argument is name of the property in the AppState to 'watch' for changes
    // 2nd argument: name of the function to run when 1st argument property changes
    ProxyState.on('cars', _draw);

    // manually run draw the on page load
    _draw()
  }


}
