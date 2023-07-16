<template>
    <v-row class="full-height">
        <v-col cols="4" class=" full-height">
            <v-card>
                <v-layout>
                    <v-navigation-drawer permanent>
                        <template v-slot:prepend>
                            <v-list-item lines="two" prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
                                :title="title" :subtitle="email"></v-list-item>
                        </template>

                        <v-divider></v-divider>

                        <v-list density="compact" nav>
                            <v-list-item prepend-icon="mdi-home" title="首頁" value="form1"></v-list-item>
                            <v-list-item prepend-icon="mdi-cart" title="訂單資訊" value="goods"></v-list-item>
                            <v-list-item prepend-icon="mdi-account" title="會員資訊" value="member"></v-list-item>
                        </v-list>
                    </v-navigation-drawer>
                </v-layout>
            </v-card>


        </v-col>
  
            <!-- <form1/> -->
            <!-- <goods/> -->
            <member/>
      


    </v-row>
</template>
<script>
import form1 from "./form1.vue"
import goods from "../goods/goods.vue"
import member from "../member/member.vue"

export default {
    data: () => ({
        title: "Loti",
        email: "sandra_a88@gmailcom"
    }),
    components:{
        form1,
        goods,
        member
    }
}
</script>
<style>
.full-height {
    height: 100vh;
}
</style>