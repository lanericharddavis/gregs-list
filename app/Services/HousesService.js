import { ProxyState } from "../AppState.js"
import House from "../Models/House.js"


class HousesService {
  createHouse(newHouse) {
    let house = new House(newHouse.bed, newHouse.bed, newHouse.sqft, newHouse.address, newHouse.price, newHouse.imgUrl)
    ProxyState.houses = [...ProxyState.houses, house]
  }

  bidHouse(id) {
    let house = ProxyState.houses.find(house => house.id === id)
    house.price += 1000
    ProxyState.houses = ProxyState.houses
  }

  deleteHouse(id) {
    ProxyState.houses = ProxyState.houses.filter(house => house.id != id)
  }

}

export const housesService = new HousesService();