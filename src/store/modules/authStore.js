import Vuex from 'vuex';
import { instanceWithToken} from '@/router/apiConfig.js';
import createPersistedState from 'vuex-persistedstate';

export default new Vuex.Store({
  state: {
    email: '',
    isLoggedIn: false
  },
  mutations: {
    login(state, email) {
      state.email = email;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.email = '';
      state.isLoggedIn = false;
    }
  },
  actions: {
    loginCheck({ commit }) {
      const accessToken = sessionStorage.getItem('accessToken');
      if (accessToken) {
        instanceWithToken.get('/member/login-status',{withCredentials:true})
          .then(response => {
            if (response.status === 200) {
              commit('login', response.data.email);
            } else {
              throw new Error('Not logged in');
            }
          })
          .catch(error => {
            if (error.response && error.response.status === 401) {
              this.dispatch('refreshAccessToken')
                .then(isRefreshed => {
                  if (!isRefreshed) {
                    alert('로그인 후 이용 가능합니다');
                    commit('logout');
                  }
                });
            }
          });
      }
    },
    logout({ commit }) {
      instanceWithToken.get('/member/logout',{withCredentials:true})
        .then(() => {
           alert('로그아웃 되었습니다!');
          commit('logout');
          sessionStorage.removeItem('accessToken');
           window.location.href='/itblog/main';
        })
        .catch(error => {
          console.error('Logout failed:', error);
        });
    },
    refreshAccessToken({ commit }) {
      return instanceWithToken.get('/member/refresh',{withCredentials: true})
        .then(response => {
          if (response.status === 200) {
            const newAccessToken = response.headers['Authorization'] || response.headers['authorization'];
            sessionStorage.setItem('accessToken', newAccessToken);
            commit('login', response.data.email);
            return true;
          }
          return false;
        })
        .catch(error => {
          console.error('Failed to refresh access token:', error);
          return false;
        });
    }
  },
  plugins: [createPersistedState()]
});
