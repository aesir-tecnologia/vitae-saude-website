<template>
  <v-container fluid pb-0>
    <v-row class="mt-n3 mx-n3" no-gutters>
      <v-carousel cycle interval="6000">
        <v-carousel-item :src="require('@/assets/slides/slide-1.jpg')">
          <v-sheet color="rgba(0, 0, 0, 0.3)" height="100%" tile>
            <v-row class="fill-height" align="center">
              <v-col class="text-center">
                <div class="display-3">Previnir é melhor do que remediar</div>
                <div class="headline">
                  Tenha o melhor plano de benefícios da região e proteja quem
                  você mais ama.
                </div>
              </v-col>
            </v-row>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item
          :src="require('@/assets/slides/slide-2.jpg')"
        ></v-carousel-item>
      </v-carousel>
    </v-row>
    <v-row class="primary fundo">
      <v-col>
        <v-container>
          <v-row>
            <v-col class="white--text">
              <h1
                id="quem-somos"
                class="display-1 font-weight-bold text-center text-uppercase"
              >
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
    <v-row class="gelo">
      <v-col>
        <v-container>
          <v-row>
            <v-col>
              <h1
                id="como-funciona"
                class="display-1 font-weight-bold primary--text text-center text-uppercase"
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
    <v-row class="primary fundo">
      <v-col>
        <v-container>
          <v-row>
            <v-col class="white--text">
              <h1
                id="beneficios"
                class="display-1 font-weight-bold text-center text-uppercase"
              >
                Guia de Benefícios
              </h1>
              <v-divider class="my-6" />
              <v-tabs background-color="primary" dark grow>
                <v-tab>Consultas Médicas</v-tab>
                <v-tab>Exames Laboratoriais</v-tab>
                <v-tab>Exames de Imagem</v-tab>
                <v-tab>Tratamento Odontológico</v-tab>

                <v-tab-item>
                  <consultas-medicas />
                </v-tab-item>
                <v-tab-item>
                  <exames-laboratoriais />
                </v-tab-item>
                <v-tab-item>
                  <exames-imagem />
                </v-tab-item>
                <v-tab-item>
                  <odontologico />
                </v-tab-item>
              </v-tabs>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ConsultasMedicas from '@/components/consultas-medicas';
import ExamesLaboratoriais from '@/components/exames-laboratoriais';
import ExamesImagem from '@/components/exames-imagem';
import Odontologico from '@/components/odontologico';

export default {
  name: 'HomePage',
  components: {
    ConsultasMedicas,
    ExamesLaboratoriais,
    ExamesImagem,
    Odontologico
  },
  head: () => ({
    title: 'Home'
  })
};
</script>
