// 首页数据请求在vuex中完成
import mockRequest from '@/utils/mockRequest'

const state = {
    list: {}
};
const mutations = {
    GETDATA(state, list) {
        state.list = list
    }
};
const actions = {
    // 发请求获取首页mock数据  home(dashboard)组件一挂载就开始发请求
    async getData({ commit }) {
        let result = await mockRequest.get('/home/list')
        if (result.code == 20000) {
            commit('GETDATA', result.data)
        }
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}