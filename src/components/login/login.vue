<template>
    <div class="container d-flex justify-center align-center ">
        <div class="mx-auto px-5">
            <v-card class="px-5" max-width="344" title="登入">
                <v-text-field v-model="account" color="primary" label="帳號" placeholder="Enter your account"
                    variant="underlined" :rules="requiredRule"></v-text-field>

                <v-text-field v-model="password" color="primary" label="密碼" placeholder="Enter your password"
                    variant="underlined" :rules="requiredRule"></v-text-field>

                <v-card-actions class="d-flex justify-center">
                    <v-card-actions class="d-flex justify-center">
                        <v-dialog v-model="dialog" width="30%">
                            <template v-slot:activator="{ props }">
                                <v-btn @click="check_identity" color="success" variant="outlined" class="mx-4" size="small">
                                    登入
                                </v-btn>
                            </template>

                            <v-card>
                                <v-card-text class="text-center">
                                    {{ dialog_text }}
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn v-if="button_switch1" color="success" block @click="enter_front_page1">確認</v-btn>
                                    <v-btn v-if="button_switch2" color="success" block @click="close_block">取消</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-card-actions>
                    <v-btn @click="register_function" color="success" variant="outlined" class="mx-4" size="small">
                        註冊
                    </v-btn>
                </v-card-actions>
            </v-card>

        </div>
    </div>
</template>
<script>
import register from "./register.vue"

export default {
    data: () => ({
        account: null,
        password: null,
        disappear: false,
        register_switch: false,
        dialog: false,
        dialog_text: "",
        button_switch1: false,
        button_switch2: false,
    }),
    components: {
        register
    },
    methods: {

        check_identity() {
            this.dialog = true
            var stored_data = JSON.parse(localStorage.getItem('user_data_arr')) || [];
    
            var found = false;
            stored_data.some(item => {
                if (item.account === this.account && item.password === this.password) {
                    
                    var identity = stored_data.find(item => item.account === this.account);
                    localStorage.setItem('identity', JSON.stringify(identity));

                    this.dialog_text = "登入成功";
                    this.button_switch1 = true; 
                    this.button_switch2 = false;
                    found = true;
                    return true; 
                }
            });
            if (!found) {
                this.dialog_text = "輸入錯誤，請重試";
                this.button_switch2 = true;
                this.button_switch1 = false;
            }
        },

        register_function() {
            this.$router.push('/register');

        },
        close_block() {
            this.dialog = false
        },
        enter_front_page1() {
            this.$router.push('./front_page1')
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