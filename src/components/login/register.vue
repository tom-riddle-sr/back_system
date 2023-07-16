<template>
    <div class="container d-flex justify-center align-center">

        <v-card class="mx-auto px-5" max-width="344" title="註冊">

            <v-text-field v-model="name" color="primary" label="名字" placeholder="Enter your name"
                variant="underlined"></v-text-field>

            <v-text-field v-model="account" color="primary" label="帳號" placeholder="Enter your account"
                variant="underlined"></v-text-field>

            <v-text-field v-model="password" color="primary" label="密碼" placeholder="Enter your password"
                variant="underlined"></v-text-field>

            <v-card-actions class="d-flex justify-center">
                <v-btn color="success" variant="outlined" class="mx-4" size="small">
                    註冊
                </v-btn>
                <v-btn color="success" variant="outlined" class="mx-4" size="small">
                    取消
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
export default {
    data: () => ({
        name: null,
        account: null,
        password: null,
        terms: false,
    }),
}
</script>
<style>
.container {
    height: 100vh;
}
</style>