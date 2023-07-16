<template>
    <v-card class="mx-auto px-5" max-width="344" width="20%" title="登入">
        <v-container>
            <v-text-field  v-model="account" color="primary" label="帳號" placeholder="Enter your account"
                variant="underlined"></v-text-field>

            <v-text-field  v-model="password" color="primary" label="密碼" placeholder="Enter your password"
                variant="underlined"></v-text-field>
        </v-container>
        <v-card-actions class="d-flex justify-center">
            <v-btn color="success" variant="outlined" class="mx-4">
                登入
            </v-btn>
            <v-btn color="success" variant="outlined" class="mx-4">
                註冊
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    data: () => ({
        account:null,
        password: null,
        terms: false,
    }),
}
</script>