<template>
  <div>
    <v-tabs v-model="tab">
      <v-tab>Serviços</v-tab>
      <v-tab>Exames</v-tab>
    </v-tabs>
    <v-data-table
      :headers="headers"
      :items="items"
      :loading="loading"
      :search="search"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          class="mt-2"
          clearable
          dense
          outlined
          placeholder="Digite o procedimento para pesquisar..."
        />
      </template>
      <template v-slot:item.valor_repasse="{ item }">
        {{ item.valor_repasse | currency }}
      </template>
      <template v-slot:item.valor_referencia="{ item }">
        {{ item.valor_referencia | currency }}
      </template>
      <template v-slot:item.valor_participacao="{ item }">
        {{ item.valor_participacao | currency }}
      </template>
      <template v-slot:item.tipo="{ item }">
        <span class="text-capitalize">{{ item.tipo }}</span>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'Procedimentos',
  data: () => ({
    error: null,
    loading: false,
    tab: null,
    search: null,
    servicos: [],
    exames: []
  }),
  computed: {
    headers() {
      const headers = [
        {
          text: 'Nome',
          value: 'nome'
        },
        {
          text: 'Valor referência',
          value: 'valor_referencia',
          sortable: false
        },
        {
          text: 'Valor participação',
          value: 'valor_participacao',
          sortable: false
        }
      ];

      if (this.tab === 1) {
        headers.push({
          text: 'Tipo',
          value: 'tipo'
        });
      }

      return headers;
    },

    items() {
      return this.tab === 0 ? this.servicos : this.exames;
    }
  },
  async created() {
    try {
      this.loading = true;
      const { data } = await this.$axios.get('procedimentos');
      this.servicos = data.servicos;
      this.exames = data.exames;
    } catch (error) {
      this.error = error;
    } finally {
      this.loading = false;
    }
  }
};
</script>
