<template>
  <v-container class="gelo">
    <v-row class="black--text">
      <v-col>
        <v-img
          :src="require('@/assets/logos/dentistas.png')"
          class="mx-auto"
          width="400"
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
      </v-col>
    </v-row>
    <v-row class="black--text">
      <v-col class="text-center">
        <h3 class="my-6">Especialidades Odontológicas</h3>
      </v-col>
    </v-row>
    <v-row class="black--text">
      <v-col>
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-center">Profissional</th>
              <th class="text-center">Especialidade</th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr>
              <td>Dr. Valdecir Ferreira</td>
              <td>Clínica Geral</td>
            </tr>
            <tr>
              <td>Dra. Fernanda Duque Graça</td>
              <td>Clínica Geral</td>
            </tr>
            <tr>
              <td>Dra. Máira Machado</td>
              <td>Clínica Geral</td>
            </tr>
            <tr>
              <td>Dra. Ivê Freitas Couto</td>
              <td>Clínica Geral</td>
            </tr>
            <tr>
              <td>Dra. Jéssica de Souza Hermosilla</td>
              <td>Clínica Geral</td>
            </tr>
            <tr>
              <td>Dra. Ivê Freitas Couto</td>
              <td>Implantodontia</td>
            </tr>
            <tr>
              <td>Dr. Júlio Pereira Gonçalves</td>
              <td>Implantodontia</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
      <v-col>
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-center">Profissional</th>
              <th class="text-center">Especialidade</th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr>
              <td>Dr. Rafael Viana dos Santos Moura</td>
              <td>Endodontia</td>
            </tr>
            <tr>
              <td>Dra. Máira Machado</td>
              <td>Endodontia</td>
            </tr>
            <tr>
              <td>Dr. Jean Soares Cabral</td>
              <td>Ortodontia</td>
            </tr>
            <tr>
              <td>Dra. Fernanda Duque Graça</td>
              <td>Ortodontia</td>
            </tr>
            <tr>
              <td>Dr. Marcelo Arantes Pereira</td>
              <td>Ortodontia</td>
            </tr>
            <tr>
              <td>Dra. Fernanda Duque Graça</td>
              <td>Odontopediatria</td>
            </tr>
            <tr>
              <td>Dra. Jéssica de Souza Hermosilla</td>
              <td>Odontopediatria</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>
