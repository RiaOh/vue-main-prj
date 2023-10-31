<template>
  <section>FILTER</section>
  <section>
    <base-card>
      <div class="controls">
        <!-- <button>Refresh</button> -->
        <base-button mode="flat">Refresh</base-button>
        <!-- <router-link to="/register">Register as Coach</router-link> -->
        <base-button link="true" mode="outline">Register as Coach</base-button>
      </div>
      <ul v-if="hasCoachees">
        <!-- <li v-for="coach in filteredCoaches" :key="coach.id">
        {{ coach.firstName }}
      </li> -->
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        ></coach-item>
      </ul>
      <h3 v-else>No coaches found.</h3>
    </base-card>
  </section>
</template>
<script>
import CoachItem from '../../components/coaches/CoachItem.vue';

export default {
  components: { CoachItem },
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches'];
    },
    hasCoachees() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
  mounted() {
    console.log('coaches', this.filteredCoaches);
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
