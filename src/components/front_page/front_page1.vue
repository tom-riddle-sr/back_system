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
                                @click="switch_form1"></v-list-item>
                            <v-list-item prepend-icon="mdi-cart" title="訂單資訊" value="goods"
                                @click="switch_goods"></v-list-item>
                            <v-list-item prepend-icon="mdi-account" title="會員資訊" value="member"
                                @click="switch_member"></v-list-item>
                        </v-list>
                    </v-navigation-drawer>
                </v-layout>
            </v-card>


        </v-col>

        <component :is="current_component"></component>



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
        var user_data = JSON.parse(localStorage.getItem('identity')) || [];
        this.title = user_data.name
    },
    data: () => ({
        title: null,
        current_component: form1
    }),
    components: {
        form1,
        goods,
        member
    },
    methods: {
        switch_form1() {
            this.current_component = form1
        },
        switch_member() {
            this.current_component = member
        },
        switch_goods() {
            this.current_component = goods
        }
    }
}
</script>
<style>
.full-height {
    height: 100vh;
}
</style>