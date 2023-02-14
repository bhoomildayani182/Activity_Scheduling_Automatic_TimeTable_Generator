import axios from "axios"
const newaxios = axios.create({
  baseURL: 'http://44.204.98.242:3000',
})

export default newaxios