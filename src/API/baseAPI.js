import axios from "axios";

const baseAPI = axios.create({
    baseURL:'https://stoplight.io/mocks/bestada/interview/65467795/mobile/user/v1/'
})

export default baseAPI