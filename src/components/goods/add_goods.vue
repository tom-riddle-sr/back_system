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
                <v-btn color="success" variant="outlined" class="mx-4" size="small">
                    確認
                </v-btn>
                <v-btn color="success" variant="outlined" class="mx-4" size="small">
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
}
</script>
<style>
.add_goods_container {
    position: absolute;
    z-index: 2;
    width: 100%;
    left: 21%;
    top: 10%;
}
</style>