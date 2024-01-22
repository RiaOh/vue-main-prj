export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };
    const response = await fetch(
      `https://vue-main-prj-01-9bcae-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );

    const resopnseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        resopnseData.message || 'Failed to send request.'
      );
      throw error;
    }

    newRequest.id = resopnseData.name;
    newRequest.coachId = payload.coachId;
    context.commit('addRequest', newRequest);
  },

  async fetchRequests(context) {
    context.rootGetters.userId;
    const response = await fetch(
      `https://vue-main-prj-01-9bcae-default-rtdb.firebaseio.com/requests.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    for (const key in responseData) {
      const request = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        areas: responseData[key].areas,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
      };
      context.commit('addRequest', request);
    }
  },
};
