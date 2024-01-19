<template>
  <div class="px-8 mt-4">
    <v-row>
      <v-col cols="3">
        <v-text-field label="Tìm kiếm" append-inner-icon="mdi-magnify" density="compact" variant="outlined">
        </v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="2" class="text-right">
        <v-btn color="#0F60FF" prepend-icon="mdi-plus" @click="dialog=true">Tạo mới</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-data-table :headers="headers" :items="items" item-value="name">
            <template v-slot:item="{ item }">
              <tr>
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.soluong }}</td>
                <td>{{ item.mota }}</td>
                <td>
                  <v-img src="@/assets/logo.jpg" :width="100" contain height="50" />
                </td>
                <td>
                  <v-icon class="ma-1">mdi-clipboard-edit-outline</v-icon>
                  <v-icon class="ma-1">mdi-trash-can-outline</v-icon>
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <dialog-product :dialog="dialog" @close="dialog=false"/>
  </div>
</template>

<script>
import DialogProduct from './DialogProduct.vue';

export default {
    name: 'ProductView',
    data() {
        return {
            dialog: false,
            headers: [
                {
                    title: 'Tên sản phẩm',
                },
                { title: 'Giá' },
                { title: 'Số lượng' },
                { title: 'Mô tả' },
                { title: 'ảnh' },
                { title: 'Hành động' },
            ],
            items: [
                {
                    name: 'Sản phẩm 1',
                    price: '$6,00',
                    soluong: '10',
                    mota: 'Lorem ipsum dolor sit amet'
                },
                {
                    name: 'Sản phẩm 1',
                    price: '$6,00',
                    soluong: '10',
                    mota: 'Lorem ipsum dolor sit amet'
                },
                {
                    name: 'Sản phẩm 1',
                    price: '$6,00',
                    soluong: '10',
                    mota: 'Lorem ipsum dolor sit amet'
                },
                {
                    name: 'Sản phẩm 1',
                    price: '$6,00',
                    soluong: '10',
                    mota: 'Lorem ipsum dolor sit amet'
                },
                {
                    name: 'Sản phẩm 1',
                    price: '$6,00',
                    soluong: '10',
                    mota: 'Lorem ipsum dolor sit amet'
                },
                {
                    name: 'Sản phẩm 1',
                    price: '$6,00',
                    soluong: '10',
                    mota: 'Lorem ipsum dolor sit amet'
                },
                {
                    name: 'Sản phẩm 1',
                    price: '$6,00',
                    soluong: '10',
                    mota: 'Lorem ipsum dolor sit amet'
                },
                {
                    name: 'Sản phẩm 1',
                    price: '$6,00',
                    soluong: '10',
                    mota: 'Lorem ipsum dolor sit amet'
                }, {
                    name: 'Sản phẩm 1',
                    price: '$6,00',
                    soluong: '10',
                    mota: 'Lorem ipsum dolor sit amet'
                }, {
                    name: 'Sản phẩm 1',
                    price: '$6,00',
                    soluong: '10',
                    mota: 'Lorem ipsum dolor sit amet'
                }
            ],
        };
    },
    components: { DialogProduct }
}
</script>

<style></style>