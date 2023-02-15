import axios from "axios"
const newaxios = axios.create({
  baseURL: 'http://54.95.44.48/:3000',
})

export default newaxios