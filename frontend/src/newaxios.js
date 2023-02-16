import axios from "axios"
const newaxios = axios.create({
  baseURL: 'http://54.199.58.104/:3000',
})

export default newaxios