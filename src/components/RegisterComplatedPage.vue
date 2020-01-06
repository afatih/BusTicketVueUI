<template>
  <div>
    <h2 v-if="registerComplated">{{registerComplated}}</h2>
    <div class="col-lg-4 offset-lg-5 col-md-4 offset-md-4 col-sm-6 offset-sm-3 col-8 offset-2">
      <div class="form-group mt-5">
        <router-link to="/login" class="btn btn-primary mr-2">Giriş Yap</router-link>
        <router-link to="/register" class="btn btn-primary">Kayıt Ol</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("account", ["registerComplated"])
  },
};
</script>