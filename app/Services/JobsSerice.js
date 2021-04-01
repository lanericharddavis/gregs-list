import { ProxyState } from "../AppState.js"
import Job from "../Models/Job.js"


class JobsService {

  createJob(newJob) {
    let job = new Job(newJob.title, newJob.description, newJob.rate, newJob.hours, newJob.company)
    ProxyState.jobs = [...ProxyState.jobs, job]
  }

  deleteJob(id) {
    ProxyState.jobs = ProxyState.jobs.filter(job => job.id != id)
  }

  applyJob(id) {
    let job = ProxyState.jobs.find(job => job.id === id)
    job.description = "You Have Applied!"
    ProxyState.jobs = ProxyState.jobs
  }

}







export const jobsService = new JobsService