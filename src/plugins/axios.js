// axios
import axios from 'axios'

const baseURL = 'http://127.0.0.1:8090/'

export default axios.create({
  baseURL
  // You can add your headers here
})
