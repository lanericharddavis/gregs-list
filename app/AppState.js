import Car from "./Models/Car.js"
import House from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Car[]} */
  cars = [
    new Car('Ford', 'Pinto', 1975, 1000, 'ITS HOT!', 'https://pbs.twimg.com/media/ETpZLKZXgAANyBw.jpg'),
    new Car('AMC', 'Gremlin', 1972, 1200, 'Gremlin Green!', 'https://cdn1.mecum.com/auctions/fl0120/fl0120-395915/images/1-1572992729058@2x.jpg?1574881322000'),
    new Car('Volkswagen', 'Rabbit', 1983, 2990, 'Not an actual rabbit', 'https://hips.hearstapps.com/roa.h-cdn.co/assets/cm/14/47/546b400aba069_-_gti11-lg.jpg'),
    new Car('Zastava', 'Yugo', 1988, 100, 'spome rust', 'https://media.istockphoto.com/photos/old-rusty-red-broken-and-damaged-yugo-car-full-of-junk-parked-and-on-picture-id1056309302?s=612x612')
  ]

  houses = [
    new House(3, 1.5, 1050, "123 N. Point Higgins, Ketchikan, AK 99901", 100000, "https://ap.rdcpix.com/3240680123/f0440da738ac200a263fd1a8dd744bc3l-m0xd-w1020_h770_q80.jpg"),
    new House(3, 2, 2000, "1021 S. Rocky Rd, Ketchikan, AK 99901", 250000, "https://ap.rdcpix.com/3b261ce3b5fe1f4ee14eff947ec84dbel-m16345101xd-w1020_h770_q80.jpg"),
    new House(2, 2, 1150, "189 W. Lost Pointe, Ketchikan, AK 99901", 399000, "https://photos.zillowstatic.com/fp/d07c149676f6c6d53816f8ff9d6c6b0b-p_h.jpg"),
    new House(4, 2, 2250, "54 E. Hidden Cove Rd, Ketchikan, AK 99901", 875000, "https://storage.googleapis.com/idx-photos-gs.ihouseprd.com/AK-JUNEAU/15641/org/000.jpg")

  ]
}






// NOTE Oh oh.. its magic! Ya know!
export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
