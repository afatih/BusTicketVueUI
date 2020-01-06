<template>
  <div>
    <div class="row mb-4">
      <div class="col-lg-8 col-sm-6 col-xs-6 col-6">
        <router-link to="/">Ana Sayfa</router-link>
      </div>
      <div class="col-lg-4  col-sm-6 col-xs-6 col-6">
        <div class="float-right">
          <router-link class="mr-3" :to="{ name: 'user'}">Biletlerim</router-link>
          <router-link to="/login">Çıkış</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: this.$store.state.account.user.id
    };
  },
  name: "register",
  components: {}
};
</script>