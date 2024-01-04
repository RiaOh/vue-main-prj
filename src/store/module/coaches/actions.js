export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      // id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      areas: data.areas,
      description: data.desc,
      hourlyRate: data.rate,
    };
    console.log('userId', userId);
    const response = await fetch(
      `https://vue-main-prj-01-9bcae-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );
    console.log('response', response);

    // const responseData = await response.json();
    if (!response.ok) {
      //error..
    }
    context.commit('registerCoach', { ...coachData, id: userId });
  },
  async loadCoaches(context) {
    //두번째인자인 payload는 사용하지 않으니 지워주기.
    const response = await fetch(
      `https://vue-main-prj-01-9bcae-default-rtdb.firebaseio.com/coaches.json`
    ); //coaches노드에 있는 모든 코치를 페칭.
    const responseData = await response.json();

    if (!response.ok) {
      //..오류처리구문. 지금은 pass.
    }
    //여기서 요구하는 형식에 맞도록, 페칭하는 데이터를 변환해야한다.
    //Firebase에서 데이터를 가져올 때, 객체를 통째로 가져오는데,
    //하나로 된 큰 객체가 아닌 코치의 배열로 가져오고 싶으므로.

    const coaches = [];
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        areas: responseData[key].areas,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
      };
      coaches.push(coach);
    }
    console.log('coaches', coaches);

    context.commit('setCoaches', coaches);
  },
};
