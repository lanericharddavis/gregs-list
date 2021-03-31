import { generateId } from "../Utils/GenerateId.js"

export default class House {
  constructor(bed, bath, sqft, address, price, imgUrl) {
    this.id = generateId()
    this.bed = bed
    this.bath = bath
    this.sqft = sqft
    this.address = address
    this.price = price
    this.imgUrl = imgUrl
  }


  // NOTE 'get' signifies a FAKE property
  // GETters MUST return a value
  get Template() {
    return `
      <div class="col-md-4 mb-3">
          <div class="card shadow">
              <img class="card-img-top" src="${this.imgUrl}" alt="">
              <div class="card-body">
                  <h4 class="card-title">${this.bed} | ${this.bath} | ${this.sqft}</h4>
                  <p class="card-text">${this.address}</p>
                  <p class="card-text">${this.price}</p>
              </div>
              <div class="px-3 pb-3 d-flex justify-content-between">
                  <button type="button" class="btn btn-danger" onclick="app.housesController.deletehouse(${this.id})">Delete</button>
                  <button type="button" class="btn btn-info" onclick="app.housesController.bidhouse(${this.id})">Bid</button>
              </div>
          </div>
      </div>
    `
  }
}