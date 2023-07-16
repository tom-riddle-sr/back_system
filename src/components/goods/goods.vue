<template>
    <v-col class="d-flex flex-column  justify-center align-center goods_container" cols="8">
        <v-container >
            <v-row>
                <v-col class=" d-flex justify-end me-2">
                    <v-btn prepend-icon="mdi-plus-circle" variant="outlined" class="bg-primary">新增訂單</v-btn>
                </v-col>
            </v-row>
            <v-row class=" d-flex flex-column justify-center mx-5">
                <add_goods/>
                <v-row class="mt-5">
                    <v-col class=" border d-flex align-center justify-center bg-primary" style="padding: 0;"
                        cols="2">品名</v-col>
                    <v-col class=" border d-flex align-center justify-center bg-primary" style="padding: 0;"
                        cols="2">價錢</v-col>
                    <v-col class=" border d-flex align-center justify-center bg-primary" style="padding: 0;"
                        cols="2">購買日期</v-col>
                    <v-col class=" border d-flex align-center justify-center bg-primary" style="padding: 0;"
                        cols="2">購買者</v-col>
                    <v-col class=" border d-flex align-center justify-center bg-primary" style="padding: 0;"
                        cols="4">動作</v-col>
                </v-row>
                <v-row class="border" v-for="item in items">
                    <v-col class="d-flex align-center justify-center" cols="2">{{ item.name }}</v-col>
                    <v-col class="d-flex align-center justify-center" cols="2">{{ item.price }}</v-col>
                    <v-col class="d-flex align-center justify-center" cols="2">{{ item.date }}</v-col>
                    <v-col class="d-flex align-center justify-center" cols="2">{{ item.buyer }}</v-col>
                    <v-col class="d-flex align-center justify-center" cols="4">
                        <v-btn class="mx-2" prepend-icon="mdi-pencil-circle" variant="tonal" color="success" size="x-small">編輯</v-btn>
                        <v-btn class="mx-2" prepend-icon="mdi-delete-circle" variant="tonal" color="error" size="x-small">刪除</v-btn>
                    </v-col>
                </v-row>


            </v-row>

        </v-container>
    </v-col>
</template>
  
<script>
import add_goods from "./add_goods.vue";
export default {
    data: () => ({
        items: [{
            id: 1,
            name: "Apple",
            price: 20000,
            date: "06/19/2023",
            buyer: "周曉琪"
        }, {
            id: 2,
            name: "SamSung",
            price: 18463,
            date: "07/19/2023",
            buyer: "嚴程宇"
        }, {
            id: 3,
            name: "Oppo",
            price: 13029,
            date: "10/01/2023",
            buyer: "周曉琪"
        }, {
            id: 4,
            name: "Sony",
            price: 26000,
            date: "11/21/2023",
            buyer: "嚴程宇"
        }, {
            id: 5,
            name: "Pixel",
            price: 13000,
            date: "11/22/2023",
            buyer: "丁衝"
        }]
    }),
    components:{
        add_goods
    }
}
</script>
<style>
.goods_container{
    position: relative;
}

</style>