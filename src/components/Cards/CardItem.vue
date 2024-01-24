<template>
    <div>
        <v-card>
            <v-row>
                <v-col cols="12" sm="3" v-for="i in 12" :key="i">
                    <v-card variant="flat" hover class="ma-2">
                        <v-img cover class="px-2 mx-auto"
                            src="https://assets.hermes.cn/is/image/hermesproduct/h-embroidered-t-shirt--072025HA01-worn-1-0-0-1000-1000_g.jpg"></v-img>
                        <v-card-text>
                            Vintage Typewriter to post awesome stories about UI design and webdev.
                        </v-card-text>
                        <v-card-item>
                            <p class="font-weight-black" style="font-size:25px;">
                                $12.48
                            </p>
                        </v-card-item>
                        <v-card-subtitle>
                            Eligible for Shipping To Mars or somewhere else
                        </v-card-subtitle>
                        <v-card-actions>
                            <v-rating half-increments hover readonly model-value="3" :size="24" color="yellow-darken-3"
                                class="mb-1 mr-3"></v-rating>
                            4.99
                            <v-spacer></v-spacer>
                            <v-btn prepend-icon="mdi-heart-outline" variant="outlined" class="text-capitalize"
                                color="primary">Watch</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'CardView'
}
</script>

<style></style>