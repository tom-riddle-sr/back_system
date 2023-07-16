<template>
    <div class="add_member_container d-flex justify-center align-center">
        <v-card class="mx-auto px-5" max-width="344" width="33%" title="新增">

            <v-text-field v-model="name" color="primary" label="請輸入用戶名稱" variant="underlined"></v-text-field>
            <v-radio-group inline>
                <v-radio label="男" value="男" v-model="gender"></v-radio>
                <v-radio label="女" value="女" v-model="gender"></v-radio>
            </v-radio-group>
            <label for="birthday" class="mt-5">請輸入生日</label>
            <input id="birthday" type="date" style="color: gray;" v-model="birthday"> <input type="number" style="color: gray;"
                v-model="frequency" class="mt-5" placeholder="請輸入購買次數">
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
        name: null,
        gender: null,
        birthday: null,
        frequency: null,
    }),
}
</script>
<style>
.add_member_container {
    position: absolute;
    z-index: 2;
    width: 100%;
    left: 10.5%;
    top: 10%;
}
</style>