<script setup>
import { ref } from 'vue';
const dialog = ref(false);
import { useForm } from 'vee-validate';
import * as yup from 'yup';
const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
const props = defineProps(['close']);
const emit = defineEmits();

const { errors, handleSubmit,resetForm, defineField } = useForm({
    validationSchema: yup.object({
        name: yup.string().required('Vui lòng nhập tên người dùng'),
        email: yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
        ngaysinh: yup.string().required('Vui lòng nhập ngày sinh'),
        avatar: yup.string().required('Vui lòng nhập avatar'),
        sodienthoai: yup.string().matches(regexPhoneNumber,'Số điện thoại không hợp lệ'),
    }),
});
const [name, nameAttrs] = defineField('name');
const [email, emailAttrs] = defineField('email');
const [ngaysinh, ngaysinhAttrs] = defineField('ngaysinh');
const [avatar, avatarAttrs] = defineField('avatar');
const [sodienthoai, sodienthoaiAttrs] = defineField('sodienthoai');

const handleClose = () => {
    resetForm();
    emit('close');
};

const createNewUser = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2));
    resetForm();
});
</script>

<template>
    <v-dialog max-width="500px" v-model="dialog">
        <v-card>
            <v-card-title style="font-weight: bold;">
                <h4>Tạo mới người dùng</h4>
            </v-card-title>
            <v-container style="background-color: rgb(247, 247, 247);">
                <v-row>
                    <v-col cols="12" style="font-size: 13px;">
                        <div class="d-flex mb-2">
                            <p>Tên người dùng</p>
                            <span class="ml-1" style="color: blue;">*</span>
                        </div>
                        <v-text-field style="background-color: white;" label="Nhập tên người dùng" density="compact" :error-messages="errors.name" required
                            v-model="name" v-bind="nameAttrs" single-line hide-details variant="outlined"></v-text-field>
                        <div v-show="errors.name" class="mt-2" style="color: red;">{{
                            errors.name
                        }}</div>
                    </v-col>
                    <v-col cols="12" style="font-size: 13px;">
                        <div class="d-flex mb-2">
                            <p>Email</p>
                            <span class="ml-1" style="color: blue;">*</span>
                        </div>
                        <v-text-field style="background-color: white;" label="Nhập email" density="compact" single-line :error-messages="errors.email"
                            v-model="email" v-bind="emailAttrs" hide-details variant="outlined"></v-text-field>
                        <div v-show="errors.email" class="mt-2" style="color: red;">{{
                            errors.email
                        }}</div>
                    </v-col>
                    <v-col cols="12" style="font-size: 13px;">
                        <div class="d-flex mb-2">
                            <p>Ngày sinh</p>
                            <span class="ml-1" style="color: blue;">*</span>
                        </div>
                        <v-text-field style="background-color: white;" type="date" density="compact" single-line
                            v-model="ngaysinh" v-bind="ngaysinhAttrs" hide-details variant="outlined" :error-messages="errors.ngaysinh"></v-text-field>
                        <div v-show="errors.ngaysinh" class="mt-2" style="color: red;">{{
                            errors.ngaysinh
                        }}</div>
                    </v-col>
                    <v-col cols="12" style="font-size: 13px;">
                        <p>Số điện thoại</p>
                        <v-text-field style="background-color: white;" label="Nhập số điện thoại" density="compact" v-model="sodienthoai" v-bind="sodienthoaiAttrs"
                            single-line hide-details variant="outlined"></v-text-field>
                            <div v-show="errors.sodienthoai" class="mt-2" style="color: red;">{{
                            errors.sodienthoai
                        }}</div>
                    </v-col>
                    <v-col cols="12" style="font-size: 13px;">
                        <div class="d-flex mb-2">
                            <p>Avatar</p>
                            <span class="ml-1" style="color: blue;">*</span>
                        </div>
                        <v-text-field label="Nhập link ảnh avatar" style="background-color: white;" density="compact"
                            v-model="avatar" v-bind="avatarAttrs" hide-details :error-messages="errors.avatar"
                            variant="outlined"></v-text-field>
                        <div v-show="errors.avatar" class="mt-2" style="color: red;">{{
                            errors.avatar
                        }}</div>
                    </v-col>
                </v-row>
            </v-container>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="handleClose" text="Hủy" style="border: 1px solid #ccc;" width="70"></v-btn>
                <v-btn @click="createNewUser" text="Tạo mới" color="white" class="mr-2" style="background-color: #0F60FF;"
                    width="110"></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<style></style>