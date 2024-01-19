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
                <td>
                  <v-img src="@/assets/logo.jpg" :width="100" contain height="50" />
                </td>
                <td>{{ item.name }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.ngaysinh }}</td>
                <td>{{ item.sdt }}</td>
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
    <dialog-user :dialog="dialog" @close="dialog=false"/>
  </div>
</template>
<script>
import DialogUser from './DialogUser.vue';

export default {
    data() {
        return {
            dialog: false,
            headers: [
                {
                    title: 'Avatar',
                    align: 'start',
                    sortable: false
                },
                { title: 'Tên người dùng' },
                { title: 'Email' },
                { title: 'Ngày sinh' },
                { title: 'Số điện thoại' },
                { title: 'Hành động' },
            ],
            items: [
                {
                    name: 'Nguyễn Văn A',
                    email: 'nevaeh.simmons@example.com',
                    ngaysinh: '1989/04/06',
                    sdt: '063-222-1125'
                },
                {
                    name: 'Nguyễn Văn A',
                    email: 'nevaeh.simmons@example.com',
                    ngaysinh: '1989/04/06',
                    sdt: '063-222-1125'
                },
                {
                    name: 'Nguyễn Văn A',
                    email: 'nevaeh.simmons@example.com',
                    ngaysinh: '1989/04/06',
                    sdt: '063-222-1125'
                },
                {
                    name: 'Nguyễn Văn A',
                    email: 'nevaeh.simmons@example.com',
                    ngaysinh: '1989/04/06',
                    sdt: '063-222-1125'
                },
                {
                    name: 'Nguyễn Văn A',
                    email: 'nevaeh.simmons@example.com',
                    ngaysinh: '1989/04/06',
                    sdt: '063-222-1125'
                },
                {
                    name: 'Nguyễn Văn A',
                    email: 'nevaeh.simmons@example.com',
                    ngaysinh: '1989/04/06',
                    sdt: '063-222-1125'
                },
                {
                    name: 'Nguyễn Văn A',
                    email: 'nevaeh.simmons@example.com',
                    ngaysinh: '1989/04/06',
                    sdt: '063-222-1125'
                },
                {
                    name: 'Nguyễn Văn A',
                    email: 'nevaeh.simmons@example.com',
                    ngaysinh: '1989/04/06',
                    sdt: '063-222-1125'
                }, {
                    name: 'Nguyễn Văn A',
                    email: 'nevaeh.simmons@example.com',
                    ngaysinh: '1989/04/06',
                    sdt: '063-222-1125'
                }, {
                    name: 'Nguyễn Văn A',
                    email: 'nevaeh.simmons@example.com',
                    ngaysinh: '1989/04/06',
                    sdt: '063-222-1125'
                }
            ],
        };
    },
    components: { DialogUser }
}
</script>