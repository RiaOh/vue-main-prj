export default {
  addRequest(state, payload) {
    const request = payload;
    state.requests.push(request);
  },
};
