import axios from 'axios';

// url 공통화
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
      'Content-Type': 'application/json',
      // 기타 필요한 헤더
    },
})

const instanceWithToken = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
      'Content-Type': 'application/json',
    },
})

//인터셉터로 최신 엑세스 토큰 추적
instanceWithToken.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

export { instance, instanceWithToken }