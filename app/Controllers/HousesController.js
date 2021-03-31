import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js"

//Private

function _draw() {
  let houses = ProxyState.houses
  let template = ''
  houses.forEach(house => {
    console.log(house)
    template += house.Template
  })

  document.getElementById("houses").innerHTML = template
}


//Public
export default class HousesController {
  constructor() {
    ProxyState.on("houses", _draw)
  }
  _draw()
}

createHouse() {
  window.event.preventDefault()
  const form = window.event.target
  let newHouse = {
    bed: form.bed.value,
    bath: form.bath.value,
    sqft: form.sqft.value,
    address: form.address.value,
    price: Number(form.price.value),
    imgUrl: form.imgUrl.value
  }
  housesService.createHouse(newHouse)
  form.reset();
  $('#new-house-form').modal('hide')
}

bidHouse(id) {
  housesService.bidHouse(id)
}

deleteHouse(id) {
  housesService.deleteHouse(id)
}



