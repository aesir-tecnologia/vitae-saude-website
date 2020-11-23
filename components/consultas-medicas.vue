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
      <v-col>
        <v-img
          :src="require('@/assets/logos/viesante.png')"
          class="mx-auto"
          width="200"
        />
      </v-col>
      <v-col class="text-center">
        <h2 class="primary--text">Clínica Vie Santé</h2>
        <p>
          Endereço: Rua 40, número 42 - Vila Santa Cecília - Volta Redonda.
        </p>
        <v-chip class="mx-1 mb-3" color="black" outlined>
          <v-icon left>mdi-phone</v-icon>(24) 3342-2617
        </v-chip>
        <v-chip class="mx-1 mb-3" color="black" outlined>
          <v-icon left>mdi-phone</v-icon>(24) 3025-1114
        </v-chip>
        <br />
        <v-chip class="mx-1 mb-3" color="black" outlined>
          <v-icon left>mdi-phone</v-icon>(24) 99859-803
        </v-chip>
        <br />
        <v-chip color="black" outlined>
          <v-icon left>mdi-web</v-icon>
          <a href="https://www.viesante.com.br" target="_blank">
            viesante.com.br
          </a>
        </v-chip>
      </v-col>
    </v-row>

    <v-row class="black--text">
      <v-col class="text-center">
        <h3 class="my-6">Especialidades Médicas</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="container_selects" cols="10">
        <v-select
          :items="clínicas"
          v-model="clínica"
          @change="especialidade = null"
          label="Clínicas"
        />
        <v-select
          :items="especialidades"
          v-model="especialidade"
          label="Especialidade"
        />
        <v-data-table
          :headers="cabecalhos"
          :items="profissionaisPorEspecialidade"
          :search="search"
          class="content_table"
          hide-default-footer
          no-data-text="Selecione uma clínica e uma especialidade para mostrar os profissionais"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const data = require('@/assets/clinicas.js');
export default {
  name: 'ConsultasMedicas',
  data: () => ({
    clínica: null,
    especialidade: null,
    cabecalhos: [
      {
        text: 'Especialidade',
        value: 'especialidade',
        align: 'center',
        sortable: false
      },
      {
        text: 'Nome',
        value: 'nome',
        align: 'center'
      }
    ],
    profissionais: data
  }),
  computed: {
    clínicas() {
      const lista = [];
      this.profissionais.map((profissional) =>
        lista.push(profissional.clínica)
      );
      return lista;
    },
    especialidades() {
      if (!this.clínica) return;
      const lista = [];
      this.profissionais.map((profissional) => {
        if (profissional.clínica === this.clínica) {
          lista.push(profissional.especialidade);
        }
      });
      return lista;
    },

    profissionaisPorEspecialidade() {
      if (!this.especialidade || !this.clínica) return;

      return this.profissionais.filter(
        (profissional) =>
          profissional.especialidade === this.especialidade &&
          profissional.clínica === this.clínica
      );
    }
  }
};
</script>
<style>
.container_selects {
  margin-left: auto;
  margin-right: auto;
}
.container_selects .v-data-table-header-mobile th {
  padding: 0px !important;
}
@media (max-width: 32em) {
  .container_selects {
    flex: 1;
    padding: 10px;
    margin-left: 0px !important;
    margin-right: 0px !important;
    max-width: 100%;
  }
  .container_selects .v-data-table__empty-wrapper td {
    padding: 15px 10px;
  }
}
</style>
