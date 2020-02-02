<template>
  <v-container fluid>
    <v-row class="mt-n3 mx-n3" no-gutters>
      <v-col>
        <v-img height="500" src="https://picsum.photos/id/17/1920/500" />
      </v-col>
    </v-row>
    <v-row class="primary">
      <v-col>
        <v-container>
          <v-row>
            <v-col class="white--text">
              <h1 id="quem-somos" class="display-2 text-center text-uppercase">
                Quem somos
              </h1>
              <v-divider class="my-6" />
              <p>
                A Vitae Saúde é uma empresa inovadora que foca em dar a seus
                beneficiários um atendimento de qualidade, rápido e com preço
                acessível.
              </p>
              <p>
                Através de nossos parceiros conseguimos atender você e sua
                família nas inúmeras áreas da saúde.
              </p>
              <p>
                Na área médica, contamos com diversos profissionais
                especializados em tratamentos de doenças, bem como a prevenção
                destas, através de consultas médicas e exames.
              </p>
              <p>
                Na área odontológica os benefícios vão desde prevenção,
                tratamento e estética, até procedimentos mais específicos.
              </p>
              <p>
                É a solução para milhares de famílias que querem ter um
                atendimento particular, de qualidade, com menos filas, e muito
                mais recursos por um preço que cabe no bolso.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-container>
          <v-row>
            <v-col>
              <h1
                id="como-funciona"
                class="display-2 text-center text-uppercase"
              >
                Como funciona
              </h1>
              <v-divider class="my-6" />
              <p>
                O Beneficiário irá até nossa unidade, onde será apresentado o
                nosso plano de benefícios. Após a adesão deste, poderá colocar
                também seus dependentes legais (filhos até 18 anos e cônjuge), e
                seus ascendentes (pai e mãe) sem custo adicional na mensalidade.
              </p>
              <p>
                O plano dará direito ao atendimento em toda a rede credenciada
                da cidade.
              </p>
              <p>
                Na área médica, contamos com diversos profissionais
                especializados em tratamentos de doenças, bem como a prevenção
                destas, através de consultas médicas e exames.
              </p>
              <p>
                Será disponibilizado um guia completo com as informações
                necessárias para utilização, bem como uma área exclusiva em
                nosso site, onde ele terá acesso a sua carteirinha virtual para
                identificação, acesso também a rede credenciada e serviços
                atualizados em tempo real.
              </p>
              <p>
                Com o plano aderido, e com as informações obtidas, você estará
                pronto pra cuidar do que mais importa: sua saúde.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomePage',
  head: {
    title: 'Home'
  }
};
</script>
