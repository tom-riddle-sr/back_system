<template>
    <v-col class="full-height d-flex flex-column  justify-center " cols="9">

        <v-container class="" fluid>
            <v-row class="me-13">
                <v-col><v-card class="bg-primary" title="本日訂單總金額" variant="tonal">
                        <p class="ms-2" style="font-size: 200%;">{{ day }}</p>
                    </v-card></v-col>
                <v-col><v-card class="bg-primary" title="7日內訂單總金額" variant="tonal">
                        <p class="ms-2" style="font-size: 200%;">{{ week }}</p>
                    </v-card></v-col>
                <v-col><v-card class="bg-primary" title="30日內訂單總金額" variant="tonal">
                        <p class="ms-2" style="font-size: 200%;">{{ month }}</p>
                    </v-card></v-col>
            </v-row>
            <v-row class="me-13">
                <v-col><v-card class="bg-primary" title="本日訂單總銷量" variant="tonal">
                        <p class="ms-2" style="font-size: 200%;">{{ day_length }}</p>
                    </v-card></v-col>
                <v-col><v-card class="bg-primary" title="7日內訂單總銷量" variant="tonal">
                        <p class="ms-2" style="font-size: 200%;">{{ week_length }}</p>
                    </v-card></v-col>
                <v-col><v-card class="bg-primary" title="30日內訂單總銷量" variant="tonal">
                        <p class="ms-2" style="font-size: 300%;">{{ month_length }}</p>
                    </v-card></v-col>
            </v-row>

        </v-container>
    </v-col>
</template>
<script>


export default {
    created() {
        //今日
        var today = new Date();
        var formattedDate = formatDate(today)

        var goods_data_arr = JSON.parse(localStorage.getItem('goods_data_arr')) || []
        var identity = JSON.parse(localStorage.getItem('identity')) || []
        var founded_goods_data_arr = goods_data_arr.find(item => item.user_id === identity.user_id)
        var founded_goods_data_index = goods_data_arr.findIndex(item => item.user_id === identity.user_id);
        var finded_goods_data_arr = founded_goods_data_arr.goods_list.filter(item => item.user_id === identity.user_id)
        var day = founded_goods_data_arr.goods_list.filter(item => {
            return item.date === formattedDate;
        });
        this.day_length = day.length
        if (day <1) {
            this.day = "本日無進帳項目"
        } else {
            var day_price = day.reduce((acc, current) => acc + current.price, 0);
            this.day = "$" + day_price

        }

         // 7日
        var lastWeek = new Date(today);
        lastWeek.setDate(lastWeek.getDate() - 6);
        var week_date_list = [];
        var week_before_day = new Date(lastWeek);
        while (week_before_day <= today) {
            week_date_list.push(formatDate(week_before_day));
            week_before_day.setDate(week_before_day.getDate() + 1);
        }
        if (week_date_list <1) {
            this.week = "7日內無進帳項目"
        } else {
            var week = founded_goods_data_arr.goods_list.filter(item => week_date_list.includes(item.date))
            this.week_length = week.length
            if (week != 0) {
                var week_price = week.reduce((acc, current) => acc + current.price, 0);
                this.week = "$" + week_price
            } else {
                this.week = "7日內無進帳項目"

            }
        }
        // // 30日
        var lastMonth = new Date(today);
        lastMonth.setDate(lastWeek.getDate() - 23);
        var month_date_list = [];
        var month_before_day = new Date(lastMonth);
        while (month_before_day <= today) {
            month_date_list.push(formatDate(month_before_day));
            month_before_day.setDate(month_before_day.getDate() + 1);
        }
        if (month_date_list == []) {
            this.month = "30日內無進帳項目"
        } else {
            var month = founded_goods_data_arr.goods_list.filter(item => month_date_list.includes(item.date))
            this.month_length = month.length
            if (month <1) {
                var month_price = month.reduce((acc, current) => acc + current.price, 0);
                this.month = "$" + month_price
            } else {
                this.month = "30日內無進帳項目"

            }
        }


        function formatDate(date) {
            var year = date.getFullYear();
            var month = (date.getMonth() + 1).toString().padStart(2, '0');
            var day = date.getDate().toString().padStart(2, '0');
            return `${year}-${month}-${day}`;
        }


    },
    data: () => ({
        day: null,
        day_length: null,
        week: null,
        week_length: null,
        month: null,
        month_length: null

    }),
    methods: {

    }
}
</script>