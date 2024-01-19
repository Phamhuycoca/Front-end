<template>
    <v-app>
        <SidebarView />
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
import SidebarView from '@/components/Admin/Sidebar/Sidebar.vue'
export default {
    name: 'AdminView',
    components: {
        SidebarView,
    }
}
</script>

<style></style>