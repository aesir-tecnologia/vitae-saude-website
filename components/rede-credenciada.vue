<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :loading="loading"
    :search="search"
  >
    <template v-slot:top>
      <v-text-field
        v-model="search"
        clearable
        dense
        outlined
        placeholder="Digite a especialidade ou nome do profissional para pesquisar..."
      />
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'RedeCredenciada',
  data: () => ({
    error: null,
    headers: [
      {
        text: 'Especialidade',
        value: 'especialidade'
      },
      {
        text: 'Nome do profissional',
        value: 'nome'
      },
      {
        text: 'Telefone',
        value: 'clinica.telefone',
        sortable: false,
        filterable: false
      },
      {
        text: 'Endereço',
        value: 'clinica.endereco',
        sortable: false,
        filterable: false
      }
    ],
    items: [],
    loading: false,
    search: null
  }),
  async created() {
    try {
      this.loading = true;
      const { data } = await this.$axios.get('rede-credenciada');
      this.items = data;
    } catch (error) {
      this.error = error;
    } finally {
      this.loading = false;
    }
  }
};
</script>
