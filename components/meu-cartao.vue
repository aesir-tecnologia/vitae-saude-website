<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" color="primary">
        Meu cartão
      </v-btn>
    </template>
    <v-card color="primary" dark>
      <v-container>
        <v-row>
          <v-col cols="4" class="d-flex align-center">
            <v-img
              :src="require('@/assets/logo-250.png')"
              class="mx-auto"
              max-width="148"
            />
          </v-col>
          <v-col cols="8">
            <div class="headline my-12 text-center">Cartão do Beneficiário</div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div class="caption pt-10">Número do contrato</div>
            <div>{{ $auth.user.contrato }}</div>
            <div class="caption pt-3">Nome do beneficiário</div>
            <div>{{ $auth.user.nome }}</div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'MeuCartao',
  data: () => ({}),
  methods: {}
};
</script>
