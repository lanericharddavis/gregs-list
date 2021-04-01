import { ProxyState } from "../AppState.js"
import { jobsService } from "../Services/JobsSerice.js"

//PRIVATE

function _draw() {
  let jobs = ProxyState.jobs
  let template = ''
  jobs.forEach(job => {
    console.log(job)
    template += job.Template
  })
  document.getElementById('jobs').innerHTML = template
}


//PUBLIC

export default class JobsController {
  constructor() {
    ProxyState.on("jobs", _draw)
    _draw()
  }

  createJob() {
    window.event.preventDefault()
    const form = window.event.target
    let newJob = {
      title: form[title].value,
      description: form[description].value,
      rate: Number(form[rate].value),
      hours: form[hours].value,
      company: form[company].value
    }
    jobsService.createJob(newJob)
    form.reset()
    $('#new-job-form').modal('hide')
  }

  deleteJob(id) {
    jobsService.deleteJob(id)
  }

  applyJob(id) {
    jobsService.applyJob(id)
  }

}