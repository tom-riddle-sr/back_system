<template>
    <v-col class="member_container d-flex flex-column   align-center" cols="9">
        <v-container>
            <v-row>
                <v-col class=" d-flex justify-end me-15">
                    <v-btn prepend-icon="mdi-plus-circle" variant="outlined" class="bg-primary"
                        @click="open_add_member">新增會員</v-btn>
                </v-col>
            </v-row>
            <v-row class=" d-flex flex-column justify-center mx-5 me-15">
                <component :is="add_member_switch" @close="close_add_member" @item_update="item_update"></component>
                <v-row class="mt-5">
                    <v-col class=" border d-flex align-center justify-center bg-primary" style="padding: 0;"
                        cols="2">名稱</v-col>
                    <v-col class=" border d-flex align-center justify-center bg-primary" style="padding: 0;"
                        cols="2">性別</v-col>
                    <v-col class=" border d-flex align-center justify-center bg-primary px-2" style="padding: 0;"
                        cols="2">生日</v-col>
                    <v-col class=" border d-flex align-center justify-center bg-primary" style="padding: 0;"
                        cols="2">購買次數</v-col>
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
                        <v-radio-group inline v-model="edit_gender" v-if="item.editing">
                            <v-radio label="男" value="男"></v-radio>
                            <v-radio label="女" value="女"></v-radio>
                        </v-radio-group>
                        <span v-else>{{ item.gender }}</span>
                    </v-col>
                    <v-col class="d-flex align-center justify-center px-2" cols="2">
                        <input v-model="edit_birthday" v-if="item.editing" :placeholder="item.birthday" type="text"
                            class="border" style="width: 80%; text-align: center;">
                        <span v-else>{{ item.birthday }}</span>
                    </v-col>
                    <v-col class="d-flex align-center justify-center" cols="2">
                        <input v-model="edit_frequency" v-if="item.editing" :placeholder="item.frequency" type="text"
                            class="border" style="width: 80%; text-align: center;">
                        <span v-else>{{ item.frequency }}</span>
                    </v-col>
                    <v-col class="d-flex align-center justify-center" cols="4">
                        <v-btn class="mx-2" prepend-icon="mdi-pencil-circle" variant="tonal" color="success" size="x-small">
                            <p @click="member_edit_finish(item.member_id, item.name, item.gender, item.birthday, item.frequency)"
                                :id="item.member_id" v-if="item.editing">完成</p>
                            <p @click="member_edit" :id="item.member_id" v-else>編輯</p>
                        </v-btn>
                        <v-btn class="mx-2" prepend-icon="mdi-delete-circle" variant="tonal" color="error" size="x-small">
                            <p v-if="item.editing" @click="cancel_edit_mode(item.member_id)">取消</p>
                            <p v-else :id="item.member_id" @click="delete_member">刪除</p>
                        </v-btn>
                    </v-col>
                </v-row>


            </v-row>

        </v-container>
    </v-col>
</template>
  
<script>
import add_member from "./add_member.vue"
export default {
    created() {
        var member_data_arr = JSON.parse(localStorage.getItem('member_data_arr')) || []
        var identity = JSON.parse(localStorage.getItem('identity')) || []
        var founded_member_data_arr = member_data_arr.find(item => item.user_id === identity.user_id)
        this.items = founded_member_data_arr.member_list.reverse()
    },
    data: () => ({
        items: null,
        add_member_switch: null,
        edit_name: null,
        edit_gender: null,
        edit_birthday: null,
        edit_frequency: null,
    }),
    components: {
        add_member
    },

    methods: {
        open_add_member() {
            this.add_member_switch = add_member
        },
        close_add_member() {
            this.add_member_switch = null

        },
        item_update() {
            var member_data_arr = JSON.parse(localStorage.getItem('member_data_arr')) || []
            var identity = JSON.parse(localStorage.getItem('identity')) || []
            var founded_member_data_arr = member_data_arr.find(item => item.user_id === identity.user_id)
            this.items = founded_member_data_arr.member_list.reverse()
        },
        member_edit(event) {
            var member_data_arr = JSON.parse(localStorage.getItem('member_data_arr')) || []
            var identity = JSON.parse(localStorage.getItem('identity')) || []
            var founded_member_data_arr = member_data_arr.find(item => item.user_id === identity.user_id)
            var founded_member_data_index = member_data_arr.findIndex(item => item.user_id === identity.user_id);
            founded_member_data_arr.member_list[event.target.id - 1].editing = !founded_member_data_arr.member_list[event.target.id - 1].editing;
            member_data_arr[founded_member_data_index] = founded_member_data_arr
            localStorage.setItem('member_data_arr', JSON.stringify(member_data_arr));
            this.items = founded_member_data_arr.member_list.reverse()

        },
        member_edit_finish(member_id, name, price, date, buyer) {
            var member_data_arr = JSON.parse(localStorage.getItem('member_data_arr')) || []
            var identity = JSON.parse(localStorage.getItem('identity')) || []
            var founded_member_data_arr = member_data_arr.find(item => item.user_id === identity.user_id)
            var founded_member_data_index = member_data_arr.findIndex(item => item.user_id === identity.user_id);

            this.edit_name != null ? founded_member_data_arr.member_list[member_id - 1].name = this.edit_name : this.edit_name
            this.edit_gender != null ? founded_member_data_arr.member_list[member_id - 1].gender = this.edit_gender : this.edit_gender
            this.edit_birthday != null ? founded_member_data_arr.member_list[member_id - 1].birthday = this.edit_birthday : this.edit_birthday
            this.edit_frequency != null ? founded_member_data_arr.member_list[member_id - 1].frequency = this.edit_frequency : this.edit_frequency
            founded_member_data_arr.member_list[member_id - 1].editing = !founded_member_data_arr.member_list[member_id - 1].editing;

            member_data_arr[founded_member_data_index] = founded_member_data_arr
            localStorage.setItem('member_data_arr', JSON.stringify(member_data_arr));
            var member_data_arr = JSON.parse(localStorage.getItem('member_data_arr')) || []
            this.items = founded_member_data_arr.member_list.reverse()
            this.edit_name = null
            this.edit_gender = null
            this.edit_birthday = null
            this.edit_frequency = null
        },
        delete_member(event) {
            var member_data_arr = JSON.parse(localStorage.getItem('member_data_arr')) || []
            var identity = JSON.parse(localStorage.getItem('identity')) || []
            var founded_member_data_arr = member_data_arr.find(item => item.user_id === identity.user_id)
            var founded_member_data_index = member_data_arr.findIndex(item => item.user_id === identity.user_id);

            founded_member_data_arr.member_list.splice(event.target.id - 1, 1);
            member_data_arr[founded_member_data_index] = founded_member_data_arr
            localStorage.setItem('member_data_arr', JSON.stringify(member_data_arr));
            this.items = founded_member_data_arr.member_list.reverse()
        },
        cancel_edit_mode(member_id) {
            var member_data_arr = JSON.parse(localStorage.getItem('member_data_arr')) || []
            var identity = JSON.parse(localStorage.getItem('identity')) || []
            var founded_member_data_arr = member_data_arr.find(item => item.user_id === identity.user_id)
            var founded_member_data_index = member_data_arr.findIndex(item => item.user_id === identity.user_id);

            founded_member_data_arr.member_list[member_id - 1].editing = !founded_member_data_arr.member_list[member_id - 1].editing;
            member_data_arr[founded_member_data_index] = founded_member_data_arr
            localStorage.setItem('member_data_arr', JSON.stringify(member_data_arr));
            this.items = founded_member_data_arr.member_list.reverse()
        }

    }
}
</script>
<style>
.member_container {
    position: relative;
}
</style>