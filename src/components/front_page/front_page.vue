<template>

        <v-layout>
            <div style="background-color: saddlebrown;">
            <v-row>            
                <v-col cols="2" >
                    <v-navigation-drawer expand-on-hover rail>
                        <v-list>
                            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" :title="title"
                                :subtitle="email"></v-list-item>
                        </v-list>

                        <v-divider></v-divider>

                        <v-list density="compact" nav>
                            <v-list-item prepend-icon="mdi-cart" title="訂單管理" value="cart"></v-list-item>
                            <v-list-item prepend-icon="mdi-account-circle" title="成員管理" value="member"></v-list-item>


                        </v-list>
                    </v-navigation-drawer>
                </v-col >
                <div style="background-color: aquamarine;">
                    <v-container fluid>
                <v-col cols="10">
                    <v-row>
                        <v-col><v-card title="Card title" text="..." variant="tonal"></v-card></v-col>
                        <v-col><v-card title="Card title" text="..." variant="tonal"></v-card></v-col>
                        <v-col><v-card title="Card title" text="..." variant="tonal"></v-card></v-col>

                    </v-row>
                    <v-row>
                        <v-col><v-card title="Card title" text="..." variant="tonal"></v-card></v-col>
                        <v-col><v-card title="Card title" text="..." variant="tonal"></v-card></v-col>
                        <v-col><v-card title="Card title" text="..." variant="tonal"></v-card></v-col>
                    </v-row>
                    <v-row>
                        <v-col><v-card title="Card title" text="..." variant="tonal"></v-card></v-col>
                        <v-col><v-card title="Card title" text="..." variant="tonal"></v-card></v-col>
                    </v-row>
                </v-col>
            </v-container>
            </div>
            </v-row>
        </div>
        </v-layout>

</template>
<script>

export default {
    data: () => ({
        title: "Loti",
        email: "sandra_a88@gmailcom"
    })
}


</script>