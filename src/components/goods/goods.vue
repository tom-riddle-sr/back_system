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
                    <v-col class="d-flex align-center justify-center" cols="2">
                        <input v-model="edit_name" v-if="item.editing" :placeholder="item.name" type="text" class="border"
                            style="width: 80%; text-align: center;">
                        <span v-else>{{ item.name }}</span>
                    </v-col>
                    <v-col class="d-flex align-center justify-center" cols="2">
                        <input v-model="edit_price" v-if="item.editing" :placeholder="item.price" type="number"
                            class="border" style="width: 80%; text-align: center;">
                        <span v-else>{{ item.price }}</span>
                    </v-col>
                    <v-col class="d-flex align-center justify-center" cols="2">
                        <input v-model="edit_date" v-if="item.editing" :placeholder="item.date" type="date" class="border"
                            style="width: 80%; text-align: center;">
                        <span v-else>{{ item.date }}</span>
                    </v-col>
                    <v-col class="d-flex align-center justify-center" cols="2">
                        <input v-model="edit_buyer" v-if="item.editing" :placeholder="item.buyer" type="text" class="border"
                            style="width: 80%; text-align: center;">
                        <span v-else>{{ item.buyer }}</span>
                    </v-col>
                    <v-col class="d-flex align-center justify-center" cols="4">

                        <v-btn class="mx-2" prepend-icon="mdi-pencil-circle" variant="tonal" color="success" size="x-small">
                            <p @click="goods_edit_finish(item.goods_id, item.name, item.price, item.date, item.buyer)"
                                :id="item.goods_id" v-if="item.editing">完成</p>
                            <p @click="goods_edit" :id="item.goods_id" v-else>編輯</p>
                        </v-btn>
                        <v-btn class="mx-2" prepend-icon="mdi-delete-circle" variant="tonal" color="error" size="x-small">
                            <p v-if="item.editing" @click="cancel_edit_mode(item.goods_id)">取消</p>
                            <p v-else :id="item.goods_id" @click="delete_goods">刪除</p>
                        </v-btn>

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
        edit_name: null,
        edit_price: null,
        edit_date: null,
        edit_buyer: null,
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
        },
        goods_edit(event) {
            var goods_data_arr = JSON.parse(localStorage.getItem('goods_data_arr')) || {
                goods_list: []
            }
            goods_data_arr.goods_list[event.target.id - 1].editing = !goods_data_arr.goods_list[event.target.id - 1].editing;
            localStorage.setItem('goods_data_arr', JSON.stringify(goods_data_arr));
            this.items = goods_data_arr.goods_list.reverse()

        },
        goods_edit_finish(goods_id, name, price, date, buyer) {
            var goods_data_arr = JSON.parse(localStorage.getItem('goods_data_arr')) || {
                goods_list: []
            }

            this.edit_name != null ? goods_data_arr.goods_list[goods.id - 1].name = this.edit_name : name
            this.edit_price != null ? goods_data_arr.goods_list[goods.id - 1].price = this.edit_price : price
            this.edit_date != null ? edit_goods_data_arr.goods_list[goods.id - 1].date = this.edit_date : date
            this.edit_buyer != null ? edit_goods_data_arr.goods_list[goods.id - 1].buyer = this.edit_buyer : buyer
            goods_data_arr.goods_list[goods_id - 1].editing = !goods_data_arr.goods_list[goods_id - 1].editing;

            localStorage.setItem('goods_data_arr', JSON.stringify(goods_data_arr));
            var goods_data_arr = JSON.parse(localStorage.getItem('goods_data_arr')) || {
                goods_list: []
            }
            this.items = goods_data_arr.goods_list.reverse()
            this.edit_name = null
            this.edit_price = null
            this.edit_date = null
            this.edit_buyer = null
        },
        delete_goods(event) {
            var goods_data_arr = JSON.parse(localStorage.getItem('goods_data_arr')) || {
                goods_list: []
            }
            goods_data_arr.goods_list.splice(event.target.id - 1, 1);
            localStorage.setItem('goods_data_arr', JSON.stringify(goods_data_arr));
            this.items = goods_data_arr.goods_list.reverse()
        },
        cancel_edit_mode(goods_id) {
            var goods_data_arr = JSON.parse(localStorage.getItem('goods_data_arr')) || {
                goods_list: []
            }
            goods_data_arr.goods_list[goods_id - 1].editing = !goods_data_arr.goods_list[goods_id - 1].editing;
            localStorage.setItem('goods_data_arr', JSON.stringify(goods_data_arr));
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