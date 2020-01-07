<template>
  <div>
    <div class="col-lg-4 offset-lg-4 col-md-6 offset-md-3">
      <h2>Kayıt Ol</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">İsim</label>
          <input type="text" v-model="user.name" name="name" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="surname">Soyisim</label>
          <input type="text" v-model="user.surname" name="surname" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" v-model="user.email" name="email" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="password">Şifre</label>
          <input
            type="password"
            v-model="user.password"
            name="password"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <button class="btn btn-primary mr-2">Kayıt Ol</button>
          <router-link to="/login" class="btn btn-primary">Giriş Yap</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "register",
  data() {
    return {
      user: {
        name: "",
        surname: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions("account", ["register","logout"]),
    handleSubmit() {
      let user = this.user;
      this.register({ user })

      }
  },
  created() {
    this.logout();
  },
};
</script>