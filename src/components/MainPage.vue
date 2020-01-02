<template>
  <div>
    <div class="form-group">
      <label for="from">Nereden</label>
      <select v-model="from" id="from">
        <option v-for="city in cities" :key="city.id" :value="city.name">{{city.name}}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="to">Nereye</label>
      <select v-model="to" id="to">
        <option v-for="city in cities" :key="city.id" :value="city.name">{{city.name}}</option>
      </select>
    </div>
    <div class="form-group">
      <label for="to">Tarih</label>
      <input type="date" v-model="date" />
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
      from: "",
      to: "",
      date: null
    };
  },
  computed: {
    ...mapState({
      cities: state => state.tour.cities,
      tours: state=> state.tour.tours
    })
  },
  created() {
    this.getCities()
  },
  methods: {
    ...mapActions("tour", ["getCities","getTours"]),
    searchTour(){
        //   console.log("Result"+this.from,this.to,this.date)
        const {from,to,date}=this;
        this.getTours({from,to,date})
    }
  }
};
</script>