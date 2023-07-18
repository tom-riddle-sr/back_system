<template>
    <v-col class="d-flex flex-column  align-center goods_container" cols="9">
        <v-container>
            <v-row>
                <v-col class=" d-flex justify-end me-2 me-15">
                    <v-btn prepend-icon="mdi-plus-circle" variant="outlined" class="bg-primary"
                        @click="open_add_goods">新增訂單</v-btn>
                </v-col>
            </v-row>
            <v-row class=" d-flex flex-column justify-center mx-5 me-15">
                <component :is="add_goods_switch" @close="close_add_goods" @item_update="item_update"></component>
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
                        <v-btn class="mx-2" prepend-icon="mdi-pencil-circle" variant="tonal" color="success"
                            size="x-small">編輯</v-btn>
                        <v-btn class="mx-2" prepend-icon="mdi-delete-circle" variant="tonal" color="error"
                            size="x-small">刪除</v-btn>
                    </v-col>
                </v-row>


            </v-row>

        </v-container>
    </v-col>
</template>
  
<script>
import add_goods from "./add_goods.vue";
export default {
    created() {
        var goods_data_arr = JSON.parse(localStorage.getItem('goods_data_arr')) || {
            goods_list: []
        }

        this.items = goods_data_arr.goods_list.reverse()
    },
    data: () => ({
        items: null,
        add_goods_switch: null,
    }),
    components: {
        add_goods
    },
    methods: {
        open_add_goods() {
            this.add_goods_switch = add_goods
        },
        close_add_goods() {
            this.add_goods_switch = null

        },
        item_update() {
            var goods_data_arr = JSON.parse(localStorage.getItem('goods_data_arr')) || {
                goods_list: []
            }
            this.items = goods_data_arr.goods_list.reverse()
        }
    }
}
</script>
<style>
.goods_container {
    position: relative;
}
</style>