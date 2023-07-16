<template>
    <v-container fluid>
        <v-row>
            <v-col class="full-height" cols="3">
                <v-card>
                    <v-layout>
                        <v-navigation-drawer style="width: 25%;">
                            <v-list>
                                <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                                    :title="title" :subtitle="email"></v-list-item>
                            </v-list>

                            <v-divider></v-divider>

                            <v-list density="compact" nav>
                                <v-list-item prepend-icon="mdi-home" title="首頁" value="home"></v-list-item>
                                <v-list-item prepend-icon="mdi-cart" title="訂單資訊" value="cart"></v-list-item>
                                <v-list-item prepend-icon="mdi-account-circle" title="用戶資訊" value="member"></v-list-item>
                            </v-list>
                        </v-navigation-drawer>
                    </v-layout>
                </v-card>
            </v-col>
            <v-col class="full-height d-flex align-center justify-center margin" cols="9">
                <v-container fluid>
                    <v-row>
                        <v-col><v-card title="今日訂單總金額" text="$183920" variant="tonal"></v-card></v-col>
                        <v-col><v-card title="本周訂單總金額" text="$183920" variant="tonal"></v-card></v-col>
                        <v-col><v-card title="本月訂單總金額" text="$183920" variant="tonal"></v-card></v-col>
                    </v-row>
                    <v-row>
                        <v-col><v-card title="今日訂單總銷量" text="$183920" variant="tonal"></v-card></v-col>
                        <v-col><v-card title="本周訂單總銷量" text="$183920" variant="tonal"></v-card></v-col>
                        <v-col><v-card title="本月訂單總銷量" text="$183920" variant="tonal"></v-card></v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="8"><v-card title="月銷量折線圖" text="..." variant="tonal"></v-card></v-col>
                        <v-col cols="4"><v-card title="商品月銷售種類圓餅圖" text="..." variant="tonal"></v-card></v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>

export default {
    data: () => ({
        title: "Loti",
        email: "sandra_a88@gmailcom"
    })
}


</script>
<style>
.full-height {
    height: 100vh;
}
</style>


