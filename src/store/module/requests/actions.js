export default {
  contactCoach(context, payload) {
    const newRequest = {
      id: new Date().toISOString(), //지금 당장은 더미 id
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };
    context.commit('addRequest', newRequest);
  },
};
