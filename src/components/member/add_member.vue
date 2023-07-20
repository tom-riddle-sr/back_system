<template>
    <div class="add_member_container d-flex justify-center align-center">
        <v-card class="mx-auto px-5" max-width="344" width="33%" title="新增">

            <v-text-field v-model="name" color="primary" label="請輸入用戶名稱" variant="underlined"></v-text-field>
            <v-radio-group inline v-model="gender">
                <v-radio label="男" value="男"></v-radio>
                <v-radio label="女" value="女"></v-radio>
            </v-radio-group>
            <label for="birthday" class="mt-5">請輸入生日</label>
            <input id="birthday" type="date" style="color: gray;" v-model="birthday">
            <input type="number" style="color: gray; width: 100%;" v-model="frequency" class="mt-5" placeholder="請輸入購買次數">
            <v-card-actions class="d-flex justify-center">
                <v-btn color="success" variant="outlined" class="mx-4" size="small" @click="add_member">
                    確認
                </v-btn>
                <v-btn color="success" variant="outlined" class="mx-4" size="small" @click="close_add_member">
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
    methods: {
        add_member() {
            var member_data_arr = JSON.parse(localStorage.getItem('member_data_arr')) || []
            var identity = JSON.parse(localStorage.getItem('identity')) || []
            var founded_member_data_arr = member_data_arr.find(item => item.user_id === identity.user_id)
            var founded_member_data_index = member_data_arr.findIndex(item => item.user_id === identity.user_id);

            var add_member_list = {
                goods_id: founded_member_data_arr.member_list.length + 1,
                name: this.name,
                gender: this.gender,
                birthday: this.birthday,
                frequency: this.frequency,
                editing: false
            };

            member_data_arr[founded_member_data_index - 1].member_list.push(add_member_list)
            console.log(member_data_arr)
            localStorage.setItem('member_data_arr', JSON.stringify(member_data_arr));

            this.$emit('close');
            this.$emit('item_update');

        },
        close_add_member() {
            this.$emit('close');
        }
    }
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