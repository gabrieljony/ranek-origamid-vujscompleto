<template>
  <form>
    <div class="usuario" v-if="mostrarDadosLogin">
      <label for="nome">Nome</label>
      <input id="nome" name="nome" type="text" v-model="nome" />
      <label for="email">Email</label>
      <input id="email" name="email" type="email" v-model="email" />
      <label for="senha">Senha</label>
      <input id="senha" name="senha" type="password" v-model="senha" />
    </div>
    <label for="cep">Cep</label>
    <input id="cep" name="cep" type="text" v-model="cep" @keyup="preencherCep" />
    <label for="rua">Rua</label>
    <input id="rua" name="rua" type="text" v-model="rua" />
    <label for="numero">Numero</label>
    <input id="numero" name="numero" type="text" v-model="numero" />
    <label for="bairro">Bairro</label>
    <input id="bairro" name="bairro" type="text" v-model="bairro" />
    <label for="cidade">Cidade</label>
    <input id="cidade" name="cidade" type="text" v-model="cidade" />
    <label for="estado">Estado</label>
    <input id="estado" name="estado" type="text" v-model="estado" />
    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
import { mapFields } from "@/helpers";
import { getCep } from "@/services";

export default {
  computed: {
    ...mapFields({
      fields: [
        "nome",
        "email",
        "senha",
        "rua",
        "cep",
        "numero",
        "bairro",
        "cidade",
        "estado"
      ],
      base: "usuario",
      mutation: "UPDATE_USUARIO"
    }),
    mostrarDadosLogin() {
      return !this.$store.state.login || this.$route.name === "usuario-editar";
    }
  },
  methods: {
    preencherCep() {
      const cep = this.cep.replace(/\D/g, "");
      if (cep.length === 8) {
        getCep(cep).then(response => {
          this.rua = response.data.logradouro;
          this.bairro = response.data.bairro;
          this.estado = response.data.uf;
          this.cidade = response.data.localidade;
        });
      }
    }
  }
};
</script>

<style scoped>
form,
.usuario {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}

.usuario {
  grid-column: 1 / 3;
}

.button {
  grid-column: 2;
  margin-top: 10px;
}

/* inputs */

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
