<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-toolbar-title>Vitae Saúde</v-toolbar-title>
          </v-col>
          <v-col class="d-flex justify-end" cols="9">
            <v-btn exact to="/" text>Home</v-btn>
            <v-btn to="/#quem-somos" text>Quem somos</v-btn>
            <v-btn to="/#como-funciona" text>Como funciona</v-btn>
            <v-btn to="/clientes" nuxt text>Área do cliente</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer color="primary" dark>
      <v-container>
        <v-row>
          <v-col></v-col>
          <v-col></v-col>
          <v-col></v-col>
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
