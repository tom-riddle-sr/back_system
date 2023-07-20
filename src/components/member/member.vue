<template>
    <v-col class="member_container d-flex flex-column  justify-center align-center" cols="8">
        <v-container>
            <v-row>
                <v-col class=" d-flex justify-end me-2">
                    <v-btn prepend-icon="mdi-plus-circle" variant="outlined" class="bg-primary">新增會員</v-btn>
                </v-col>
            </v-row>
            <v-row class=" d-flex flex-column justify-center mx-5">
                <add_member/>
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
                    <v-col class="d-flex align-center justify-center" cols="2">{{ item.name }}</v-col>
                    <v-col class="d-flex align-center justify-center" cols="2">{{ item.gender }}</v-col>
                    <v-col class="d-flex align-center justify-center px-2" cols="2">{{ item.birthday }}</v-col>
                    <v-col class="d-flex align-center justify-center" cols="2">{{ item.frequency }}</v-col>
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
import add_member from "./add_member.vue"
export default {
    data: () => ({
        items: [{
            id: 1,
            name: "周曉琪",
            gender: "女",
            birthday: "06/19/1935",
            frequency: "2"
        }, {
            id: 2,
            name: "陳祥彥",
            gender: "男",
            birthday: "07/19/1964",
            frequency: "0"
        }, {
            id: 3,
            name: "吳淑芬",
            gender: "女",
            birthday: "10/01/1987",
            frequency: "0"
        }, {
            id: 4,
            name: "嚴程宇",
            gender: "男",
            birthday: "11/21/2002",
            frequency: "2"
        }, {
            id: 5,
            name: "丁衝",
            gender: "男",
            birthday: "11/22/1993",
            frequency: "1"
        }]
    }),
    components:{
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
            var member_data_arr = JSON.parse(localStorage.getItem('member_data_arr')) || {
                member_list: []
            }
            this.items = member_data_arr.member_list.reverse()
        }, member_edit(event) {
            var member_data_arr = JSON.parse(localStorage.getItem('member_data_arr')) || {
                member_list: []
            }
            member_data_arr.member_list[event.target.id - 1].editing = !member_data_arr.member_list[event.target.id - 1].editing;
            localStorage.setItem('member_data_arr', JSON.stringify(member_data_arr));
            this.items = member_data_arr.member_list.reverse()

        },
        member_edit_finish(member_id, name, gender, birthday, frequency) {
            var member_data_arr = JSON.parse(localStorage.getItem('member_data_arr')) || {
                member_list: []
            }
            this.edit_name != null ? member_data_arr.member_list[member.id - 1].name = this.edit_name : name
            this.edit_gender != null ? member_data_arr.member_list[member.id - 1].gender = this.edit_birthday : gender
            this.edit_birthday != null ? member_data_arr.member_list[member.id - 1].birthday = this.edit_birthday : birthday
            this.edit_frequency != null ? member_data_arr.member_list[member.id - 1].frequency = this.edit_frequency : frequency

            member_data_arr.member_list[member_id - 1].editing = !member_data_arr.member_list[member_id - 1].editing;

            localStorage.setItem('member_data_arr', JSON.stringify(member_data_arr));
            var member_data_arr = JSON.parse(localStorage.getItem('member_data_arr')) || {
                member_list: []
            }
            this.items = member_data_arr.member_list.reverse()
            this.edit_name = null
            this.edit_gender = null
            this.edit_birthday = null
            this.edit_frequency = null
        },
        delete_member(event) {
            var member_data_arr = JSON.parse(localStorage.getItem('member_data_arr')) || {
                member_list: []
            }
            member_data_arr.member_list.splice(event.target.id - 1, 1);
            localStorage.setItem('member_data_arr', JSON.stringify(member_data_arr));
            this.items = member_data_arr.member_list.reverse()
        },
        cancel_edit_mode(member_id) {
            var member_data_arr = JSON.parse(localStorage.getItem('member_data_arr')) || {
                member_list: []
            }
            member_data_arr.member_list[member_id - 1].editing = !member_data_arr.member_list[member_id - 1].editing;
            localStorage.setItem('member_data_arr', JSON.stringify(member_data_arr));
            this.items = member_data_arr.member_list.reverse()
        }

    }
}
</script>
<style>
.member_container {
    position: relative;
}
</style>