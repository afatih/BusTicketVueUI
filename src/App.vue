<template>
  <div id="app">
    <div class="appStyle">
      <div class="row">
        <div class="col-md-10 offset-md-1">
          <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  name: "app",
  computed: {
    ...mapState({
      alert: state => state.alert,
      account: state => state.account
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
  }
};
</script>

<style>
@import "./assets/css/main.css";
</style>