export default {
  registerCoach(state, payload) {
    const coachData = payload;
    state.coaches.push(coachData); //이건 사실 좋은 방법이 아니다. 하지만 actions에서 변형했으므로 ok.
  },
};
