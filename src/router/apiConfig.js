import axios from 'axios';

// url 공통화
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
      'Content-Type': 'application/json',
      // 기타 필요한 헤더
    },
})

export { instance }