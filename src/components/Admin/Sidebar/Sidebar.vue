<template>
    <div>
        <v-navigation-drawer app width="300">
            <v-list>
                <div class="d-flex justify-space-between align-center">
                    <v-img src="@/assets/logo.jpg" :width="100" contain height="50" class="ml-5" />
                    <v-spacer></v-spacer>
                    <v-icon class="mr-2">mdi-logout</v-icon>
                </div>
                <v-list-subheader class="text-uppercase ml-3">Quản lý sản phẩm</v-list-subheader>
                <v-divider></v-divider>
                <v-list-item v-for="(item, i) in items" :key="i" :value="item" :to="item.link" class="ma-2"
                    style="border-radius: 10px;">
                    <template v-slot:prepend>
                        <v-icon :icon="item.icon"></v-icon>
                    </template>
                    <v-list-item-title v-text="item.text" value="rounded-xl"></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer> 
        <NavbarView />
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
            items: [
                { text: 'Sản phẩm', icon: 'mdi-shape', link: '/admin/sanpham' },
                { text: 'User', icon: 'mdi-account-supervisor-outline', link: '/admin/user' }
            ]
        }
    }
}
</script>