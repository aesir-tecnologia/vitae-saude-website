<template>
  <v-container>
    <v-row class="black--text">
      <v-col>
        <v-img
          :src="require('@/assets/logos/dentistas.jpg')"
          class="mx-auto"
          width="300"
        />
      </v-col>
      <v-col class="text-center">
        <h2 class="primary--text">Dentista Popular do Brasil</h2>
        <p class="mt-2">Unidade 1</p>
        <p>
          Avenida Amaral Peixoto, 366 - Centro, Volta Redonda - RJ
        </p>
        <v-chip color="black" outlined>
          <v-icon left>mdi-phone</v-icon>(24) 3342-9277
        </v-chip>
        <p class="mt-3">Unidade 2</p>
        <p>
          Av. Sávio Gama, 1899 - Retiro, Volta Redonda - RJ
        </p>
        <v-chip color="black" outlined>
          <v-icon left>mdi-phone</v-icon>(24) 3342-8277
        </v-chip>
        <h3 class="my-6">Especialidades Odontológicas</h3>
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-center">Profissional</th>
              <th class="text-center">Especialidade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Marcelo Arbex</td>
              <td>Clínico Geral</td>
            </tr>
            <tr>
              <td>Dra Suzana Lustosa</td>
              <td>Ortodontista</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>
