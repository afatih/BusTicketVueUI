<template>
  <div>
      <main-page></main-page>
    <div v-if="tours.length==0">Seçili kriterlere uygun sefer bulunmamaktadır</div>
    <ul>
      <li v-for="tour in tours" :key="tour.id">{{tour.id}}-{{tour.from}}-{{tour.to}}-{{tour.date}}-{{tour.hour}}-{{tour.price}} <button :disabled="!tour.isAvailable"  @click="chooseTour(tour.id)" >{{tour.buttonText}} </button></li>
    </ul>
    <p>
      <router-link to="/login">Logout</router-link>
    </p>
    <!-- <button @click="read" >read</button> -->
  </div>
</template>

<script>
import { mapState,mapActions } from "vuex";
import MainPage from './MainPage';

export default {
    components:{
        'main-page':MainPage
    },
  data() {
    return {
      from: this.$route.params.from,
      to: this.$route.params.to,
      date: this.$route.params.date
    };
  },
  computed: {

    ...mapState({
      tours: state => state.tour.tours
    })
  },
  created() {

    const {from,to,date}=this;
    this.getTours({from,to,date})
  },
  methods: {
    ...mapActions("tour", ["getTours","getTourDetail"]),
    chooseTour(id){
        this.getTourDetail({id})
    },
    read(){
        // console.log((this.$store.state.account.user.id));
        
    }
  }
 
};
</script>