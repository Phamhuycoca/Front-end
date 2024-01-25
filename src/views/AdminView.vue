<template>
    <div>
        <v-app>
            <v-layout>
                <v-navigation-drawer style="max-width: 300px;" v-model="drawer" :rail="rail" permanent
                    @click="rail = false">
                    <v-list>
                        <div class="d-flex justify-space-between align-center">
                            <v-img src="@/assets/logo.jpg" :width="100" contain height="50" class="ml-5" />
                            <v-spacer></v-spacer>
                            <v-img src="../assets/icon/indent-decrease.png" height="30" @click.stop="rail = !rail"></v-img>
                        </div>
                        <v-list-subheader class="text-uppercase ml-3">Quản lý sản phẩm</v-list-subheader>
                        <v-divider></v-divider>
                        <v-list-item v-for="(item, i) in items" :key="i" :value="item" :to="item.link"
                            style="border-radius: 10px;" @click="Action(item.title)">
                            <template v-slot:prepend>
                                <v-icon :icon="item.icon"></v-icon>
                            </template>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-navigation-drawer>
                <NavbarView />
                <v-main>
                    <router-view></router-view>
                </v-main>
            </v-layout>
        </v-app>
    </div>
</template>
<script>
import NavbarView from '@/components/Admin/Navbar/Navbar.vue'

export default {
    name: 'SidebarView',
    components: {
        NavbarView

    },
    data() {
        return {
            drawer: true,
            rail: true,
            items: [
                { text: 'Sản phẩm', icon: 'mdi-shape', link: '/admin/sanpham', title: 'Danh sách sản phẩm' },
                { text: 'User', icon: 'mdi-account-supervisor-outline', link: '/admin/user', title: 'Danh sách người dùng' }
            ]
        }
    },
    methods: {
        Action(title) {
            this.$store.dispatch('Action', title);
        }
    }
}
</script>
<style scoped>
@media only screen and (max-width: 60%) {
    .ml-5 {
        margin-left: 10px;
        /* Adjust as needed */
    }
}
</style>