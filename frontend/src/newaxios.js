import axios from "axios"
const newaxios = axios.create({
  baseURL: 'http://localhost:3000',
})

export default newaxios