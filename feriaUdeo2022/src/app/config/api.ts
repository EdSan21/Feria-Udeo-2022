import { environment } from "src/environments/environment";

export const baseUrl = environment.production ? 'https://api.feriaudeo2022.com' : 'http://localhost:3000'

export const projectUrl = baseUrl + '/projects'
export const juradotUrl = baseUrl + '/jurado'