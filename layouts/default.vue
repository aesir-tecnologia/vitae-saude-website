<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-img :src="require('@/assets/logo-02.png')" height="40" contain />
      <template v-if="$vuetify.breakpoint.lgAndUp">
        <v-btn exact to="/" text>Home</v-btn>
        <v-btn to="/#quem-somos" text>Quem somos</v-btn>
        <v-btn to="/#como-funciona" text>Como funciona</v-btn>
        <v-btn to="/#beneficios" text>Guia de Benefícios</v-btn>
        <v-btn color="teal darken-2" dark rounded to="/clientes" nuxt>
          Área do cliente
        </v-btn>
      </template>
      <v-menu v-else offset-y>
        <template v-slot:activator="{ on }">
          <v-app-bar-nav-icon v-on="on" />
        </template>
        <v-list>
          <v-list-item exact to="/">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item exact to="/#quem-somos">
            <v-list-item-title>Quem Somos</v-list-item-title>
          </v-list-item>
          <v-list-item exact to="/#como-funciona">
            <v-list-item-title>Como Funciona</v-list-item-title>
          </v-list-item>
          <v-list-item exact to="/#beneficios">
            <v-list-item-title>Guia de Benefícios</v-list-item-title>
          </v-list-item>
          <v-list-item exact to="/clientes">
            <v-list-item-title>Área do Cliente</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer class="gelo">
      <v-container>
        <v-row class="text-center">
          <v-col cols="12" md="4">
            <h3 class="mb-3 primary--text text-uppercase">Vitae Saúde</h3>
            <p>
              Sua saúde na palma da mão.
            </p>
          </v-col>
          <v-col cols="12" md="4">
            <h3 class="mb-3 primary--text text-uppercase">Entre em Contato</h3>
            <p>
              Av. Amaral Peixoto, 363 - Sala 204 <br />
              Centro, Volta Redonda - RJ
            </p>
            <p><v-icon left>mdi-phone</v-icon>(24) 3300-0000</p>
            <p><v-icon left>mdi-whatsapp</v-icon>(24) 98106-1365</p>
          </v-col>
          <v-col cols="12" md="4">
            <h3 class="mb-3 primary--text text-uppercase">Redes Sociais</h3>
            <p>
              <v-btn
                href="https://www.facebook.com/Vitae-Sa%C3%BAde-Volta-Redonda-108566624046098"
                target="_blank"
                text
              >
                <v-icon class="mx-2" large>mdi-facebook</v-icon>
              </v-btn>
              <v-btn
                href="https://www.instagram.com/vitaesaudevr/"
                target="_blank"
                text
              >
                <v-icon class="mx-2" large>mdi-instagram</v-icon>
              </v-btn>
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data: () => ({
    email: null,
    password: null
  })
};
</script>

<style>
.gelo {
  background-color: #fffafa !important;
}

.fundo {
  background-image: url('~assets/fundo2.png');
  background-position: center center;
  background-repeat: repeat-y;
  background-size: contain;
}
</style>
