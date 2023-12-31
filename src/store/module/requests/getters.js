export default {
  //   requests(state) {
  //     return state.requests;
  //   },
  //   hasRequests(state) {
  //     return state.requests && state.requests.length > 0;
  //   },
  requests(state, _, _2, rootGetters) {
    const coachId = rootGetters.userId;
    return state.requests.filter((req) => req.coachId === coachId);
  },
  hasRequests(_, getters) {
    //필터링된 requests만을 확인.
    return getters.requests && getters.requests.length > 0;
  },
};
