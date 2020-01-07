<template>
  <div id="app">
    <div class="appStyle">
      <div class="row">
        <div class="col-md-10 offset-md-1">
          <div class="col-lg-4 offset-lg-4 col-md-6 offset-md-3" >
          <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
          </div>
          <navbar v-if="user" ></navbar>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Navbar from './smallComponents/Navbar';

export default {

  name: "app",
  computed: {
    ...mapState({
      alert: state => state.alert,
      user: state => state.account.user
    })
  },
  methods: {
    ...mapActions({
      clearAlert: "alert/clear"
    })
  },
  watch: {
    $route() {
      //clear alert on location change
      this.clearAlert();
    }
  },
  components:{
    "navbar":Navbar
  }
};
</script>

<style>
@import "./assets/css/main.css";
</style>