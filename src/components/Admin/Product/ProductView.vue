<template>
  <div class="px-8 mt-4">
    <v-row>
      <v-col cols="12" sm="6" md="6" lg="3">
        <v-text-field label="Tìm kiếm" append-inner-icon="mdi-magnify" density="compact" variant="outlined">
        </v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" sm="12" md="4" lg="9" class="text-right">
        <v-btn color="#0F60FF" prepend-icon="mdi-plus" height="40" width="130" @click="dialog = true">Tạo mới</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card elevation="3" style="border-radius: 15px;">
          <v-row>
            <v-col cols="12">
              <v-card variant="text">
                <v-table density="compact">
                  <thead>
                    <tr>
                      <th class="text-left text-uppercase text-medium-emphasis">
                        Tên sản phẩm
                      </th>
                      <th class="text-left text-uppercase text-medium-emphasis">
                        Giá
                      </th>
                      <th class="text-left text-uppercase text-medium-emphasis">
                        Số lượng
                      </th>
                      <th class="text-left text-uppercase text-medium-emphasis">
                        Mô tả
                      </th>
                      <th class="text-left text-uppercase text-medium-emphasis">
                        Ảnh
                      </th>
                      <th class="text-center text-uppercase text-medium-emphasis">
                        Hành động
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="i in 10" :key="i">
                      <td>Sản phẩm {{ i }}</td>
                      <td>$6,000</td>
                      <td>1</td>
                      <td class="v-text-truncate">
                        Lorem ipsum dolor sit amet
                      </td>
                      <td class="text-center">
                        <v-img src="@/assets/logo.jpg" :width="100" contain height="50" />
                      </td>
                      <td class="text-center">
                        <v-icon class="ma-1">mdi-clipboard-edit-outline</v-icon>
                        <v-icon class="ma-1">mdi-trash-can-outline</v-icon>
                      </td>
                    </tr>
                    <v-divider></v-divider>
                  </tbody>
                </v-table>
              </v-card>
            </v-col>
          </v-row>
          <v-row class="ma-2">
            <v-col cols="12" sm="2" md="6" lg="8">
              <v-row>
                <p class="mt-5 opacity">Showing</p>
                <v-col cols="12" sm="4" lg="2">
                  <v-select v-model="selectProduct" density="compact" :items="['10', '20', '25', '30', 'All']" variant="outlined"></v-select>
                </v-col>
                <p class="mt-5 opacity">of 50</p>
              </v-row>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="4" class="text-right">
              <v-pagination active-color="#0F60FF" :length="4" variant="elevated" density="compact"></v-pagination>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <dialog-product v-model="dialog" @close="dialog = false" />

  </div>
</template>

<script setup>
import DialogProduct from './DialogProduct.vue';
import {ref} from 'vue'
const dialog=ref(false);
const selectProduct=ref(10);
</script>

<style></style>