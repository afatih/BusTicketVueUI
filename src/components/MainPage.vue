<template>
  <div>
    <router-link :to="{ name: 'user', params: { userId } }">Hesabım</router-link>
    <button @click="read">read Id</button>
    <div v-if="tour.errorMessage" :class="`alert ${tour.errorType}`">{{tour.errorMessage}}</div>
    <div class="row">
      <div class="col-lg-4">
        <div class="form-group">
          <label for="from">Nereden</label>
          <select v-model="from" id="from">
            <option v-for="city in cities" :key="city.id" :value="city.name">{{city.name}}</option>
          </select>
          <button @click="change">Change</button>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="form-group">
          <label for="to">Nereye</label>
          <select v-model="to" id="to">
            <option v-for="city in cities" :key="city.id" :value="city.name">{{city.name}}</option>
          </select>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="form-group">
          <label for="date">Tarih</label>
          <input type="date" id="date" v-model="date" />
        </div>
      </div>
    </div>

    <button @click="searchTour">Ara</button>

    <p>
      <router-link to="/login">Logout</router-link>
    </p>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      from: this.$route.params.from,
      to: this.$route.params.to,
      date: this.$route.params.date,
      userId: this.$store.state.account.user.id
    };
  },
  computed: {
    ...mapState({
      cities: state => state.tour.cities,
      tours: state => state.tour.tours,
      tour: state => state.tour
    })
  },
  created() {
    this.getCities();
  },
  methods: {
    ...mapActions("tour", ["getCities", "getTours"]),
    change() {
      var oldFrom = this.from;
      this.from = this.to;
      this.to = oldFrom;
    },
    searchTour() {
      //   console.log("Result"+this.from,this.to,this.date)
      const { from, to, date } = this;
      this.getTours({ from, to, date });
    },
    read() {
      console.log(this.userId);
    }
  }
};
</script>