<template>
    <div class="add_goods_container d-flex justify-center align-center">
        <v-card class="mx-auto px-5 d-flex flex-column" max-width="344" width="30%" title="新增">

            <v-text-field v-model="goods" color="primary" label="品名" placeholder="Enter goods"
                variant="underlined"></v-text-field>
            <input type="number" style="color: gray;" v-model="price" placeholder="請輸入商品價格">
            <label for="date" class="mt-5">請輸入購買日期</label>
            <input id="date" type="date" style="color: gray;" v-model="date">
            <v-text-field v-model="buyer" color="primary" label="購買者" placeholder="Enter buyer"
                variant="underlined"></v-text-field>
            <v-card-actions class="d-flex justify-center">
                <v-btn color="success" variant="outlined" class="mx-4" size="small" @click="add_goods">
                    確認
                </v-btn>
                <v-btn color="success" variant="outlined" class="mx-4" size="small" @click="close_add_goods">
                    取消
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
export default {
    data: () => ({
        goods: null,
        price: null,
        date: null,
        buyer: null
    }),
    methods: {
        add_goods() {
            var goods_data_arr = JSON.parse(localStorage.getItem('goods_data_arr')) || {
                goods_list: []
            };

            var add_goods_list = {
                goods_id: goods_data_arr.goods_list.length + 1,
                name: this.goods,
                price: this.price,
                date: this.date,
                buyer: this.buyer,
                editing:false
            };

            goods_data_arr.goods_list.push(add_goods_list);
            localStorage.setItem('goods_data_arr', JSON.stringify(goods_data_arr));
            this.$emit('close');
            this.$emit('item_update');

        },

        close_add_goods() {
            this.$emit('close');
        }
    }
}
</script>
<style>
.add_goods_container {
    position: absolute;
    z-index: 2;
    width: 100%;
    left: 16%;
    top: 8%;
}
</style>