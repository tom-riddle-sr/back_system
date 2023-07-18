<template>
    <div class="container d-flex justify-center align-center">

        <v-card class="mx-auto px-5" max-width="344" title="註冊">

            <v-text-field v-model="user_data.name" color="primary" label="名字" placeholder="Enter your name"
                variant="underlined" :rules="requiredRule"></v-text-field>

            <v-text-field v-model="user_data.account" color="primary" label="帳號" placeholder="Enter your account"
                variant="underlined" :rules="requiredRule"></v-text-field>

            <v-text-field v-model="user_data.password" color="primary" label="密碼" placeholder="Enter your password"
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
        dialog: false,
        dialog_text: "",
        button_switch1: false,
        button_switch2: false,

        user_data: {
            user_id: null,
            name: null,
            account: null,
            password: null,
        }


    }),
    methods: {
        store_data() {

            var user_data_arr = JSON.parse(localStorage.getItem('user_data_arr')) || [];
            if (this.user_data.name == null && this.user_data.account == null && this.user_data.password == null) {
                this.dialog_text = "請輸入所有問題"
                this.button_switch1 = true
                this.button_switch2 = false
            } else {
                this.dialog_text = "註冊完成"
                this.button_switch2 = true
                this.button_switch1 = false

                var id = user_data_arr.length + 1
                this.user_data.user_id = id

                user_data_arr.push(this.user_data);
                localStorage.setItem('user_data_arr', JSON.stringify(user_data_arr));

                var goods_data_arr = JSON.parse(localStorage.getItem('goods_data_arr')) || {};
                var goods_data = {
                    user_id: id,
                    goods_list: {
                        goods_id: null,
                        name: null,
                        price: null,
                        date: null,
                        buyer: null
                    }
                }
                localStorage.setItem('goods_data_arr', JSON.stringify(goods_data_arr));

                var member_data_arr = JSON.parse(localStorage.getItem('member_data_arr')) || [];
                var member_data = {
                    user_id: id,
                    member_list: {
                        member_id: null,
                        name: null,
                        gender: null,
                        birthday: null,
                        frequency: null
                    }
                }
                localStorage.setItem('member_data_arr', JSON.stringify(member_data_arr));

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