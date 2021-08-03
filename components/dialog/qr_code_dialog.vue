<template>
  <v-container>
    <div
      v-show="dialogType === 'scanned'"
      class="dis-shadow v-card-border"
      fill-height
    >
      <div class="pt-6 px-6">
        <span class="text-h5">請掃描QR Code</span>
        <v-btn icon class="float-right" @click="close()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>

      <v-container fluid class="pa-16">
        <v-layout justify-center align-center>
          <v-flex shrink>
            <v-img
              src="/qrCode.svg"
              alt="請掃描QR Code"
              width="300"
              justify="center"
            >
              <v-btn icon>
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <v-card v-show="dialogType === 'scanner'">
      <div class="pt-4 px-6">
        <v-btn icon class="float-right" @click="close()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <v-card-title class="text-h5 px-10">
        <h4>Hello! 魏麗莎&emsp;&emsp;</h4>
        <h4>請用我們的專屬App掃碼進出場</h4>
      </v-card-title>
      <div class="px-10 grey--text text--darken-1">
        <p>邀請您下載登入我們的品牌App，使用通行卡掃碼進出更方便快速！</p>
      </div>

      <v-card-actions class="pa-6">
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="close()"> 立即開啟/登入 App </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["type"],
  data() {
    return {
      dialogType: this.type,
    };
  },
  methods: {
    close() {
      this.$emit("isCloseDialogStream", true);
    },
  },
};
</script>