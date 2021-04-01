import { generateId } from "../Utils/GenerateId.js"


export default class Job {
  constructor(title, description, rate, hours, company) {
    this.id = generateId()
    this.title = title,
      this.description = description,
      this.rate = rate,
      this.hours = hours,
      this.company = company
  }


  get Template() {
    return `
    <div class="col-md-4 mb-3">
      <div class="card shadow">
        <img class="card-img-top" src="https://thumbs.dreamstime.com/b/job-text-red-grungy-lines-stamp-vintage-rubber-209319118.jpg" alt="">
        <div class="card-body">
          <h4 class="card-title">${this.title}</h4>
          <p class="car-text">${this.description}</p>
          <p class="card-text">$${this.rate.toFixed(2)}/Hr | ${this.hours}Hrs/Wk</p>
          <p class="card-text">Contact ${this.company} For More Info</p>
        </div>
      <div class="px-3 pb-3 d-flex justify-content-between">
        <button type="button" class="btn btn-danger" onclick="app.jobsController.delete()>Delete</button>
        <button type="button" class="btn btn-info" onclick="app.jobsController.apply()>Apply</button>
        </div>
      </div>
    </div>
    `
  }
}