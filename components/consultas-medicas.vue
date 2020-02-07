<template>
  <v-container class="gelo">
    <v-row class="black--text">
      <v-col>
        <v-img
          :src="require('@/assets/logos/renascer.png')"
          class="mx-auto"
          width="300"
        />
      </v-col>
      <v-col class="text-center">
        <h2 class="primary--text">Centro de Saúde Renascer</h2>
        <p>
          Rua 40, 57 - Vila Santa Cecília, Volta Redonda - RJ
        </p>
        <v-chip class="mx-1 mb-3" color="black" outlined>
          <v-icon left>mdi-phone</v-icon>(24) 3343-2150
        </v-chip>
        <v-chip class="mx-1 mb-3" color="black" outlined>
          <v-icon left>mdi-phone</v-icon>(24) 3348-1098
        </v-chip>
        <br />
        <v-chip class="mx-1 mb-3" color="black" outlined>
          <v-icon left>mdi-phone</v-icon>(24) 3343-4620
        </v-chip>
        <v-chip class="mx-1 mb-3" color="black" outlined>
          <v-icon left>mdi-phone</v-icon>(24) 98855-1876
        </v-chip>
        <br />
        <v-chip color="black" outlined>
          <v-icon left>mdi-web</v-icon>
          <a href="http://www.centrodesauderenascer.com.br/" target="_blank">
            centrodesauderenascer.com.br
          </a>
        </v-chip>
      </v-col>
    </v-row>
    <v-row class="black--text">
      <v-col class="text-center">
        <h3 class="my-6">Especialidades Médicas</h3>
      </v-col>
    </v-row>
    <v-row class="black--text text-center">
      <v-col>Angiologia</v-col>
      <v-col>Cardiologia</v-col>
      <v-col>Clínica Geral</v-col>
      <v-col>Dermatologia</v-col>
      <v-col>Endocrinologia</v-col>
      <v-col>Fisioterapia</v-col>
    </v-row>
    <v-row class="black--text text-center">
      <v-col>Fisioterapia Infantil</v-col>
      <v-col>Fonoaudiologia</v-col>
      <v-col>Gastroenterologia</v-col>
      <v-col>Gastropediatria</v-col>
      <v-col>Geriatria</v-col>
      <v-col>Ginecologia</v-col>
    </v-row>
    <v-row class="black--text text-center">
      <v-col>Medicina Ortomolecular</v-col>
      <v-col>RPG ( Reeducação Postural Global )</v-col>
      <v-col>Mastologia</v-col>
      <v-col>Neurologia</v-col>
      <v-col>Neuropsiquiatria</v-col>
      <v-col>Nutrição</v-col>
    </v-row>
    <v-row class="black--text text-center">
      <v-col>Obstetrícia</v-col>
      <v-col>Ortopedia</v-col>
      <v-col>Otorrinolaringologia</v-col>
      <v-col>Pediatria</v-col>
      <v-col>Pneumologia</v-col>
      <v-col>Pneumopediatria</v-col>
    </v-row>
    <v-row class="black--text text-center">
      <v-col>Proctologia</v-col>
      <v-col>Psicologia</v-col>
      <v-col>Psicopedagogia</v-col>
      <v-col>Psiquiatria</v-col>
      <v-col>Psiquiatria Infantil</v-col>
      <v-col>Reumatologia</v-col>
    </v-row>
  </v-container>
</template>
