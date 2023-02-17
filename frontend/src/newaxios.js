import axios from "axios"
const newaxios = axios.create({
  baseURL: 'http://18.182.59.97/:3000',
})

export default newaxios