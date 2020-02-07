<template>
  <v-container class="gelo">
    <v-row class="black--text">
      <v-col>
        <v-img
          :src="require('@/assets/logos/radiovida.png')"
          class="mx-auto"
          width="400"
        />
      </v-col>
      <v-col class="text-center">
        <h2 class="primary--text">Radiovida</h2>
        <p>
          Rua 41C, 434 - Vila Santa Cecília, Volta Redonda - RJ
        </p>
        <v-chip class="mx-2 mb-3" color="black" outlined>
          <v-icon left>mdi-phone</v-icon>(24) 3340-2000
        </v-chip>
        <v-chip class="mx-2 mb-3" color="black" outlined>
          <v-icon left>mdi-phone</v-icon>(24) 99867-4458
        </v-chip>
        <br />
        <v-chip class="mx-2" color="black" outlined>
          <v-icon left>mdi-web</v-icon>
          <a href="http://www.clinicaradiovida.com.br/" target="_blank">
            clinicaradiovida.com.br
          </a>
        </v-chip>
      </v-col>
    </v-row>
    <v-divider class="my-12" />
    <v-row class="black--text">
      <v-col>
        <v-img
          :src="require('@/assets/logos/radiclin.png')"
          class="mx-auto"
          width="300"
        />
      </v-col>
      <v-col class="text-center">
        <h2 class="primary--text">Radiclin</h2>
        <p>
          R. Vinte e seis, 3 - Vila Santa Cecília, Volta Redonda - RJ
        </p>
        <v-chip class="mx-1" color="black" outlined>
          <v-icon left>mdi-phone</v-icon>(24) 3336-7950
        </v-chip>
        <v-chip class="mx-1" color="black" outlined>
          <v-icon left>mdi-web</v-icon>
          <a href="http://www.radiclin.com.br/" target="_blank"
            >radiclin.com.br
          </a>
        </v-chip>
      </v-col>
    </v-row>
  </v-container>
</template>
