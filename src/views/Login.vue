<template>
  <section class="login">
    <h1>Login</h1>
    <form>
      <label for="email">Email</label>
      <input type="email" name="email" id="email" v-model="login.email" />
      <label for="senha">Senha</label>
      <input type="password" name="senha" id="senha" v-model="login.senha" />
      <button class="btn" @click.prevent="logar">Logar</button>
    </form>
    <p class="perdeu">
      <a href="/" target="_blank">Perdeu a senha? Clique aqui.</a>
    </p>
    <LoginCriar />
  </section>
</template>

<script>
import LoginCriar from "@/components/LoginCriar.vue";

export default {
  name: "Login",
  components: {
    LoginCriar
  },
  data() {
    return {
      login: {
        email: "",
        senha: ""
      }
    };
  },
  methods: {
    logar() {}
  }
};
</script>

<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #87f;
}

form {
  display: grid;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.perdeu {
  text-align: center;
  margin: 20px auto 0 auto;
}

.perdeu a:hover {
  color: #87f;
  text-decoration: underline;
}

label {
  margin-bottom: 5px;
}

input,
textarea {
  border-radius: 4px;
  border: 1px solid white;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  transition: all 0.3s;
  font-size: 1rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin-bottom: 15px;
}

input:hover,
input:focus,
textarea:hover,
textarea:focus {
  outline: none;
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  border-color: #87f;
}
</style>
