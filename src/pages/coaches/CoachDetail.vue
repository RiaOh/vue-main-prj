<template>
  <!-- DETAILS FOR COACH
  <router-view></router-view>
  <router-link to="/coaches/c1/contact">Contact</router-link> -->
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>
<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: 'ria',
    };
  },
  computed: {
    contactLink() {
      // return '/coaches/' + this.id + '/contact';
      return this.$route.path + '/contact';
    },
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    description() {
      return this.selectedCoach.description;
    },
  },
  beforeCreate() {
    // console.log('beforeCreated', this.selectedCoach); //여기서는 data, computed 접근불가능
  },
  created() {
    //created에서는 data, computed 접근 가능
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      (coach) => coach.id === this.id
    );
  },
};
</script>
