<template>
  <validation-observer ref="obs" v-slot="{ handleSubmit }">
    <v-container class="fill-height grey lighten-3" fluid>
      <v-row>
        <v-col>
          <v-form @submit.prevent="handleSubmit(submit)">
            <v-card class="mx-auto" max-width="500px" shaped>
              <v-card-title class="justify-center">
                <div>
                  Cadastro de Cliente
                </div>
              </v-card-title>
              <v-card-subtitle class="text-center">
                <div>
                  Preencha o formulário abaixo para criar sua senha de acesso.
                </div>
              </v-card-subtitle>
              <v-divider />
              <v-card-text>
                <template v-if="!success">
                  <validation-provider
                    v-slot="{ errors }"
                    name="contrato"
                    rules="required"
                  >
                    <v-text-field
                      v-model="contrato"
                      :error-messages="errors"
                      label="Número do contrato"
                      name="contrato"
                      outlined
                    />
                  </validation-provider>
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
                  <validation-provider
                    v-slot="{ errors }"
                    name="chave"
                    rules="required"
                  >
                    <v-text-field
                      v-model="chave"
                      :error-messages="errors"
                      label="Chave de acesso"
                      name="chave"
                      outlined
                    />
                  </validation-provider>
                </template>
                <v-alert v-if="error" v-text="error" type="error" />
                <v-alert v-if="success" v-text="success" type="success" />
              </v-card-text>
              <v-card-actions v-if="!success">
                <v-btn
                  :loading="loading"
                  class="mx-auto"
                  color="primary"
                  type="submit"
                >
                  Cadastrar
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
  name: 'CadastroPage',
  components: { ValidationObserver, ValidationProvider },
  data: () => ({
    error: null,
    success: null,
    loading: false,
    contrato: null,
    email: null,
    password: null,
    chave: null
  }),
  methods: {
    async submit() {
      try {
        this.error = null;
        this.success = null;
        this.loading = true;

        const { data } = await this.$axios.post('auth/cliente/register', {
          contrato: this.contrato,
          email: this.email,
          password: this.password,
          chave: this.chave
        });

        this.success = data.message;
      } catch ({ response }) {
        if (response && response.status === 401) {
          this.error = response.data.message;
        }

        if (response && response.status === 422) {
          this.$refs.obs.setErrors(response.data.errors);
        }
      } finally {
        this.loading = false;
      }
    }
  },
  head: {
    title: 'Cadastro'
  }
};
</script>
