<template>
  <v-container>
    <v-row>
      <v-col class="d-flex justify-end">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" @click="onLogout" color="primary" icon>
              <v-icon>mdi-logout</v-icon>
            </v-btn>
          </template>
          <span>Sair da Área do Cliente</span>
        </v-tooltip>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h1>Cartão do Beneficiário</h1>
        <p>
          O Cartão do Beneficiário serve para você e seus dependentes se
          identificarem na rede credenciada e locais conveniados. Lembrando que
          sua apresentação é imprescindível em lugares que não possuem o sistema
          da Vitae Saúde. Então é bom sempre estar munido do mesmo.
        </p>
        <meu-cartao />
      </v-col>
    </v-row>
    <v-divider class="my-5" />
    <v-row>
      <v-col>
        <h1>Procedimentos</h1>
        <procedimentos />
      </v-col>
    </v-row>
    <v-divider class="my-5" />
    <v-row>
      <v-col>
        <h1>Rede credenciada</h1>
        <rede-credenciada />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MeuCartao from '@/components/meu-cartao';
import Procedimentos from '@/components/procedimentos';
import RedeCredenciada from '@/components/rede-credenciada';

export default {
  name: 'ClientesPage',
  components: { MeuCartao, Procedimentos, RedeCredenciada },
  methods: {
    async onLogout() {
      await this.$auth.logout();
    }
  },
  head: () => ({
    title: 'Área do Cliente'
  }),
  middleware: 'auth'
};
</script>
