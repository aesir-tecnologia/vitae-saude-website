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
    <v-row>
      <v-col class="mx-auto" cols="10">
        <v-select
          :items="especialidades"
          v-model="especialidade"
          label="Especialidade"
        />
        <v-data-table
          :headers="cabecalhos"
          :items="profissionaisPorEspecialidade"
          :search="search"
          hide-default-footer
          no-data-text="Selecione uma especialidade para mostrar os profissionais"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ConsultasMedicas',
  data: () => ({
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
    profissionais: [
      {
        especialidade: 'Alergologia',
        nome: 'Dra. Fernanda Sobreira Cesar Valença'
      },
      {
        especialidade: 'Angiologia',
        nome: 'Dr. Luis Eduardo Fogaça Ribeiro'
      },
      {
        especialidade: 'Cardiologia',
        nome: 'Dr. Álvaro da Graça Oliveira'
      },
      {
        especialidade: 'Cardiologia',
        nome: 'Dr. Álvaro de Carvalho Sales'
      },
      {
        especialidade: 'Clínica Médica',
        nome: 'Dr. Álvaro de Carvalho Sales'
      },
      {
        especialidade: 'Clínica Médica',
        nome: 'Dr. Carlos Alberto de Azevedo'
      },
      {
        especialidade: 'Clínica Médica',
        nome: 'Dra. Fernanda Cristine Silva Dantas'
      },
      {
        especialidade: 'Clínica Médica',
        nome: 'Dra. Patricia Britte Bruno'
      },
      {
        especialidade: 'Clínica Médica',
        nome: 'Dra. Flavia de Oliveira Alves'
      },
      {
        especialidade: 'Clínica Médica',
        nome: 'Dra. Paula de Oliveira Varella'
      },
      {
        especialidade: 'Dermatologia',
        nome: 'Dr. André Piffer Mendonça Bahia'
      },
      {
        especialidade: 'Dermatologia',
        nome: 'Dra. Amanda da Cruz Machado Baker'
      },
      {
        especialidade: 'Dermatologia',
        nome: 'Dra. Maitê Barbosa Vieira Piffer Bahia'
      },
      {
        especialidade: 'Dermatologia',
        nome: 'Dra. Tainara Pedroza Araújo'
      },
      {
        especialidade: 'Dermatologia',
        nome: 'Dra. Thayane Simões Azevedo'
      },
      {
        especialidade: 'Endocrinologia',
        nome: 'Dra. Luciana Marcia Guimaraes Gama'
      },
      {
        especialidade: 'Endocrinologia',
        nome: 'Dra. Mayra Miranda Corrêa Dias'
      },
      {
        especialidade: 'Endocrinologia',
        nome: 'Dra. Regiane Maria Nakamura'
      },
      {
        especialidade: 'Fisioterapia',
        nome: 'Caio Ramon Queiroz'
      },
      {
        especialidade: 'Fisioterapia',
        nome: 'Gustavo Guimarães Pereira'
      },
      {
        especialidade: 'Fisioterapia',
        nome: 'Leonardo Bronzato Guimaraes'
      },
      {
        especialidade: 'Fisioterapia',
        nome: 'Valdileia Gomes da Silva Oliveira'
      },
      {
        especialidade: 'Fonoaudiologia',
        nome: 'Fernanda Paiva Padilha'
      },
      {
        especialidade: 'Fonoaudiologia',
        nome: 'Flavia Rodrigues Toniolo de Paula'
      },
      {
        especialidade: 'Fonoaudiologia',
        nome: 'Renata Ferraz Martins Mattos '
      },
      {
        especialidade: 'Gastroenterologia',
        nome: 'Dra. Patricia Britte Bruno '
      },
      {
        especialidade: 'Gastropediatria',
        nome: 'Dra. Nathalia Marinho Ferreira '
      },
      {
        especialidade: 'Ginecologia',
        nome: 'Dr. Victor Israel Pastrana Velasco'
      },
      {
        especialidade: 'Ginecologia e Obstetrícia',
        nome: 'Dra. Eliete Gonçalves Brandão'
      },
      {
        especialidade: 'Ginecologia e Obstetrícia',
        nome: 'Dra. Jessica Cople Loureiro'
      },
      {
        especialidade: 'Ginecologia e Obstetrícia',
        nome: 'Dra. Mariana Silva Abrantes'
      },
      {
        especialidade: 'Mastologia',
        nome: 'Dra. Priscila Pereira Marquiore'
      },
      {
        especialidade: 'Neuropisiquiatria',
        nome: 'Dr. Marcio Eduardo Braga'
      },
      {
        especialidade: 'Neurologia',
        nome: 'Dra. Jeane Del Campo da Silva'
      },
      {
        especialidade: 'Nutrição',
        nome: 'Dra. Ângela Marta de Souza'
      },
      {
        especialidade: 'Nutrição',
        nome: 'Dra. Fabíolla Reis da Silva'
      },
      {
        especialidade: 'Nutrição',
        nome: 'Dra. Clarisse da Silva Resende'
      },
      {
        especialidade: 'Nutrição',
        nome: 'Dra. Desiane de Carvalho Moresi Brum'
      },
      {
        especialidade: 'Nutrição',
        nome: 'Dra. Dilvana Hoff Alixandre'
      },
      {
        especialidade: 'Nutrição',
        nome: 'Dra. Julia Maria Gonçalves de Souza'
      },
      {
        especialidade: 'Nutrição',
        nome: 'Dra. Khetlyn Souza Rocha'
      },
      {
        especialidade: 'Nutrição',
        nome: 'Dra. Nathalia Soares de Queiroz Santos'
      },
      {
        especialidade: 'Nutrição',
        nome: 'Dra. Paola Costa Queiroz de Oliveira'
      },
      {
        especialidade: 'Nutrição',
        nome: 'Dra. Priscilla Silva de Azevedo'
      },
      {
        especialidade: 'Oftalmologia',
        nome: 'Dra Tereza Cristina Pilotto de Moura'
      },
      {
        especialidade: 'Ortopedia',
        nome: 'Dr. Francisco das Chagas Rebelo Basílio da Silva'
      },
      {
        especialidade: 'Ortopedia',
        nome: 'Dr. Gustavo dos Reis Barros'
      },
      {
        especialidade: 'Ortopedia',
        nome: 'Dr. Hugo Barcellos Baliza'
      },
      {
        especialidade: 'Ortopedia',
        nome: 'Dr. Paulo Henrique Viana Dias'
      },
      {
        especialidade: 'Otorrinolaringologia',
        nome: 'Dra. Camila Freire de Vasconcellos'
      },
      {
        especialidade: 'Pediatria',
        nome: 'Dra. Andrea Maria de Lacerda'
      },
      {
        especialidade: 'Pediatria',
        nome: 'Dra. Luciana Mansur Coelho'
      },
      {
        especialidade: 'Pneumologia',
        nome: 'Dr. Carlos Alberto de Azevedo'
      },
      {
        especialidade: 'Pneumologia',
        nome: 'Dra. Fernanda Cristine Silva Dantas'
      },
      {
        especialidade: 'Psicologia',
        nome: 'Ana Carolina da Silva'
      },
      {
        especialidade: 'Psicologia',
        nome: 'Cintia de Cassia Maia Macedo Aguiar'
      },
      {
        especialidade: 'Psicologia',
        nome: 'Clícia de Fatima Viana da Cunha'
      },
      {
        especialidade: 'Psicologia',
        nome: 'Erick Gustavo de Almeida Alves'
      },
      {
        especialidade: 'Psicologia',
        nome: 'Giselle da Silveira Leopoldino'
      },
      {
        especialidade: 'Psicologia',
        nome: 'Greicy Karla Teles Pereira Moreira'
      },
      {
        especialidade: 'Psicologia',
        nome: 'Juliana Martins Ramos da Silva'
      },
      {
        especialidade: 'Psiquiatria',
        nome: 'Dr. Marcio Eduardo Braga'
      },
      {
        especialidade: 'Psiquiatria',
        nome: 'Dra. Marina Ferreira de Carvalho'
      },
      {
        especialidade: 'Reumatologia',
        nome: 'Dra. Paula Beck de Souza'
      }
    ]
  }),
  computed: {
    especialidades() {
      const lista = [];

      this.profissionais.map((profissional) =>
        lista.push(profissional.especialidade)
      );

      return lista;
    },

    profissionaisPorEspecialidade() {
      if (!this.especialidade) return;

      return this.profissionais.filter(
        (profissional) => profissional.especialidade === this.especialidade
      );
    }
  }
};
</script>
