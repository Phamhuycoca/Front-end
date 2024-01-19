<template>
  <div>
    <div class="py-6 px-6">
      <v-row>
        <v-col cols="4">
          <v-row>
            <v-select class="ma-2" label="Sort by" :items="['Useless first']" density="compact"
              variant="outlined"></v-select>
            <v-select class="ma-2" label="Condition" density="compact" variant="outlined"></v-select>
            <v-select class="ma-2" label="Delivery options" density="compact" variant="outlined"></v-select>
          </v-row>
        </v-col>

        <v-spacer></v-spacer>

        <v-col cols="5">
          <v-row>
            <v-btn class="text-capitalize font-weight-regular mt-2" variant="text" size="large" style="background-color: #EBF2FF;">Show
              all</v-btn>
            <v-btn class="text-capitalize font-weight-regular mt-2" elevation="2" size="large" style="color: #2264D1;">Auction</v-btn>
            <v-btn class="text-capitalize font-weight-regular mt-2" variant="text" size="large" style="background-color: #EBF2FF;">But
              now</v-btn>
            <v-spacer></v-spacer>
            <v-btn class="mt-2" variant="text" size="large" style="background-color: #EBF2FF;">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
            <v-btn class="mt-2" size="large">
              <v-icon>mdi-microsoft-windows</v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </div>

    <div>
      <v-row class="ml-1">
        <h3 class="ma-4 font-weight-regular">Releted</h3>
        <v-chip-group v-for="(chip,index) in chips" :key="index">
          <v-chip class="ma-2" size="large">{{ chip }}</v-chip>
        </v-chip-group>
      </v-row>
    </div>

    <div class="ma-2">
      <CardItem/>
    </div>

    <div class="ma-4">
      <Footer/>
    </div>
  </div>
</template>

<script>
import CardItem from '@/components/Cards/CardItem.vue'
import Footer from '@/components/Footers/Footer.vue'
export default {
  components:{
    CardItem,
    Footer
  },
  data()
  {
    return{
      chips:['worldwide shipping','under $50','kitten','plastic plugs','pucker shoes','vintage typewriter']
    }
  }

}
</script>

<style></style>