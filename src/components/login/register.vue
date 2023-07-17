<template>
    <div class="container d-flex justify-center align-center">

        <v-card class="mx-auto px-5" max-width="344" title="註冊">

            <v-text-field v-model="name" color="primary" label="名字" placeholder="Enter your name" variant="underlined"
                :rules="requiredRule"></v-text-field>

            <v-text-field v-model="account" color="primary" label="帳號" placeholder="Enter your account" variant="underlined"
                :rules="requiredRule"></v-text-field>

            <v-text-field v-model="password" color="primary" label="密碼" placeholder="Enter your password"
                variant="underlined" :rules="requiredRule"></v-text-field>

            <v-card-actions class="d-flex justify-center">
                <v-dialog v-model="dialog" width="30%">
                    <template v-slot:activator="{ props }">
                        <v-btn @click="store_data" v-bind="props" color="success" variant="outlined" class="mx-4"
                            size="small">
                            註冊
                        </v-btn>
                    </template>

                    <v-card>
                        <v-card-text class="text-center">
                            {{ dialog_text }}
                        </v-card-text>
                        <v-card-actions>
                            <v-btn v-if="button_switch1" color="success" block @click="close_block">確認</v-btn>
                            <v-btn v-if="button_switch2" color="success" block @click="back_to_login">回登入</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>

                <v-btn color="success" @click="cancel" variant="outlined" class="mx-4" size="small">
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
        dialog: false,
        dialog_text: "",
        button_switch1: false,
        button_switch2: false,



    }),
    methods: {
        store_data() {
            var data = {
                name: this.name,
                account: this.account,
                password: this.password
            };

            var arr = JSON.parse(localStorage.getItem('arr')) || [];
            if (data.name == null && data.account == null && data.password == null) {
                this.dialog_text = "請輸入所有問題"
                this.button_switch1 = true
                this.button_switch2 = false
            } else {
                this.dialog_text = "註冊完成"
                this.button_switch2 = true
                this.button_switch1 = false

                arr.push(data);
                localStorage.setItem('arr', JSON.stringify(arr));

            }


        },
        close_block() {
            this.dialog = false
        },
        back_to_login() {
            this.$router.push('/');
        },
        cancel() {
            this.$router.push('/');

        }
    },
    computed: {
        requiredRule() {
            return [
                (v) => !!v || '必填項'
            ];
        }
    }
}
</script>
<style>
.container {
    height: 100vh;
}
</style>