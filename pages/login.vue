<template>
  <validation-observer ref="obs" v-slot="{ handleSubmit }">
    <v-container class="fill-height grey lighten-3" fluid>
      <v-row>
        <v-col>
          <v-form @submit.prevent="handleSubmit(submit)">
            <v-card class="mx-auto" max-width="500px" shaped>
              <v-card-title class="justify-center">
                <div>
                  Área do Cliente
                </div>
              </v-card-title>
              <v-card-subtitle class="text-center">
                <div>
                  Utilize o e-mail e senha cadastrados para acessar a sua área
                  exclusiva.
                </div>
                <div>
                  Ou clique para
                  <nuxt-link to="/cadastro">Criar Cadastro</nuxt-link>.
                </div>
              </v-card-subtitle>
              <v-divider />
              <v-card-text>
                <validation-provider
                  v-slot="{ errors }"
                  name="email"
                  rules="required|email"
                >
                  <v-text-field
                    v-model="email"
                    :error-messages="errors"
                    label="E-mail"
                    name="email"
                    outlined
                  />
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="password"
                  rules="required|min:6"
                >
                  <v-text-field
                    v-model="password"
                    :error-messages="errors"
                    label="Senha"
                    name="password"
                    outlined
                    type="password"
                  />
                </validation-provider>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  :loading="loading"
                  class="mx-auto"
                  color="primary"
                  type="submit"
                >
                  Entrar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </validation-observer>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';

export default {
  name: 'LoginPage',
  components: { ValidationObserver, ValidationProvider },
  data: () => ({
    loading: false,
    email: null,
    password: null
  }),
  methods: {
    async submit() {
      try {
        this.loading = true;
        await this.$auth.loginWith('local', {
          data: { email: this.email, password: this.password }
        });
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$refs.obs.setErrors({
            email: ['Não foi possível entrar com essas credenciais.']
          });
        }

        if (error.response && error.response.status === 422) {
          this.$refs.obs.setErrors(error.response.data.errors);
        }
      } finally {
        this.loading = false;
      }
    }
  },
  head: {
    title: 'Login'
  }
};
</script>
