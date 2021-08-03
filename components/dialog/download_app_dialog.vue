<template>
  <v-card>
    <!-- <div class="pt-4 px-6">
      <v-btn icon class="float-right">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div> -->

    <v-container class="pa-10 mx-auto align-center ">
      <div class="text-center mb-6">
        <h2>下載我們的專屬 App</h2>
        <span class="grey--text text--darken-1">推薦使用 App 預約、查持有票券，更快更方便！</span>
      </div>

      <v-row class="">
        <v-col cols="12" sm="5" md="5">
          <v-img
            src="/qrCode.svg"
            alt="請掃描QR Code"
            width="400"
            justify="center"
          />
        </v-col>
        <v-col cols="12" sm="7" md="7">
          <v-img
            src="/apple.png"
            alt="請掃描QR Code"
            justify="center"
            class="my-1"
          />
          <v-img
            src="/google.png"
            alt="請掃描QR Code"
            justify="center"
          />
        </v-col>
      </v-row>

    </v-container>
  </v-card>
</template>

<script>
</script>