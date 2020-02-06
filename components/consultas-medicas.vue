<template>
  <v-container>
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
        <h3 class="my-6">Especialidades Médicas</h3>
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-center">Profissional</th>
              <th class="text-center">Especialidade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dr Cláudio Duarte</td>
              <td>Clínica Médica</td>
            </tr>
            <tr>
              <td>Dr Lucas Martins</td>
              <td>Angiologia</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>
