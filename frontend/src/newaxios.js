import axios from "axios"

const newaxios = axios.create({
  baseURL: 'http://localhost:3001',
})

export default newaxios
