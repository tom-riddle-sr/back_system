<template>
    <v-row class="full-height">
        <v-col cols="3" class=" full-height">
            <v-card>
                <v-layout>
                    <v-navigation-drawer permanent>
                        <template v-slot:prepend>
                            <v-list-item lines="two" prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
                                :title="title" ></v-list-item>
                        </template>

                        <v-divider></v-divider>

                        <v-list density="compact" nav>
                            <v-list-item prepend-icon="mdi-home" title="首頁" value="form1"
                                @click="form1_switch"></v-list-item>
                            <v-list-item prepend-icon="mdi-cart" title="訂單資訊" value="goods"
                                @click="goods_switch"></v-list-item>
                            <v-list-item prepend-icon="mdi-account" title="會員資訊" value="member"
                                @click="member_switch"></v-list-item>
                        </v-list>
                    </v-navigation-drawer>
                </v-layout>
            </v-card>


        </v-col>
        <component :is="currentComponent" class="full-height" />



    </v-row>
</template>
<script>
import { markRaw } from 'vue';
import form1 from "./form1.vue"
import goods from "../goods/goods.vue"
import member from "../member/member.vue"

var rawForm1 = markRaw(form1);


export default {
    created() {
        var identity = JSON.parse(localStorage.getItem('identity')) || [];
        this.title = identity.name

    },
    data: () => ({
        title: null,
        form1: true,
        goods: false,
        member: false,
        currentComponent: form1
    }),
    components: {
        form1: rawForm1,
        goods,
        member
    },
    methods: {
        form1_switch() {
            this.currentComponent = form1
        },
        goods_switch() {
            this.currentComponent = goods

        },
        member_switch() {
            this.currentComponent = member

        }
    }
}
</script>
<style>
.full-height {
    height: 100vh;
}
</style>