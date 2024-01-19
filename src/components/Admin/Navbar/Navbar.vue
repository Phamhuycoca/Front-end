<template>
    <v-app-bar :elevation="0" rounded scroll-behavior="elevate">
        <v-app-bar-title class="font-weight-bold ma-8 text-h5">Danh sách sản phẩm</v-app-bar-title>
        <template v-slot:append>
            <v-badge content="6" color="red" class="ma-4">
                <v-icon icon="mdi-bell-outline"></v-icon>
            </v-badge>
            <div style="position: relative;height: auto;" class="mr-5 ">
                <v-avatar size="40px">
                    <v-img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"></v-img>
                </v-avatar>
                <v-badge dot color="green" style="position: absolute; bottom: 8px; !important">
                </v-badge>
            </div>
        </template>
    </v-app-bar>
</template>

<script>
export default {
    name: 'NavbarView'
}
</script>

<style></style>