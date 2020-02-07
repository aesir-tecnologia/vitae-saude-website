<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-container>
        <v-row align="center">
          <v-col class="d-flex align-center" cols="auto">
            <!-- <v-img :src="require('@/assets/logo-01.png')" height="35" contain /> -->
            <v-img :src="require('@/assets/logo-02.png')" height="40" contain />
          </v-col>
          <v-col class="d-flex justify-end">
            <v-btn exact to="/" text>Home</v-btn>
            <v-btn to="/#quem-somos" text>Quem somos</v-btn>
            <v-btn to="/#como-funciona" text>Como funciona</v-btn>
            <v-btn to="/#beneficios" text>Guia de Benefícios</v-btn>
            <v-btn color="teal darken-2" dark rounded to="/clientes" nuxt>
              Área do cliente
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
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
                <v-icon class="mx-2" large>mdi-facebook-box</v-icon>
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
