<template>
  <v-card>
    <!-- success -->
    <div v-show="dialogType === 'success'">
      <div class="pt-4 px-6">
        <v-btn icon class="float-right" @click="close()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <v-card-title class="text-h5 px-10">
        <h4>您確定要取消預約嗎？</h4>
      </v-card-title>
      <div class="px-10 grey--text text--darken-1">
        <p>取消預約將退還您的票卷額度，確定取消預約以下課程？</p>
      </div>
      <div class="v-bg-gray pl-10 grey--text text--darken-1">
        <div>大安館 Linda</div>
        <div>延伸瑜伽 2020/03/11 星期四 16:00-17:00</div>
      </div>

      <v-card-actions class="pa-6">
        <v-spacer></v-spacer>
        <v-btn color="gray" text @click="close()"> 放棄 </v-btn>
        <v-btn color="primary" text @click="close()">
          確定取消
        </v-btn>
      </v-card-actions>
    </div>

    <!-- failed -->
    <div v-show="dialogType === 'failed'">
      <div class="pt-4 px-6">
        <v-btn icon class="float-right" @click="close()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <v-card-title class="text-h5 px-10">
        <h4>很抱歉，取消預約請與我們聯繫</h4>
      </v-card-title>
      <div class="px-10 grey--text text--darken-1">
        <p>
          您的預約課程是以「線上金流付款」，取消預約需進行註銷或退款程序，請先與我們聯繫，感謝！
        </p>
      </div>
      <v-container class="px-10">
        <v-row>
          <v-col cols="12" sm="5">
            <v-img
              src="/map.png"
              alt="請掃描QR Code"
              width="300"
              justify="center"
            ></v-img>
          </v-col>

          <v-col cols="12" sm="7">
            <div class="my-2"><b>大安館</b></div>
            <v-list-item class="pa-0">
              <v-list-item-content class="py-2">
                <v-list-item-title class="grey--text text--darken-1">
                  <v-icon class="mr-2">icon-map</v-icon>
                  台北市大安區敦化南路二段77號1樓
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item class="pa-0">
              <v-list-item-content class="py-2">
                <v-list-item-title class="grey--text text--darken-1">
                  <v-icon class="mr-2">icon-phone</v-icon>
                  02-8712-2837
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item class="pa-0">
              <v-list-item-content class="py-2">
                <v-list-item-title class="grey--text text--darken-1">
                  <v-icon class="mr-2">icon-time</v-icon>
                  營業中 09:00-18:00
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-container>

      <v-card-actions class="pa-6"> </v-card-actions>
    </div>

    <!-- Illegal -->
    <div v-show="dialogType === 'illegal'">
      <div class="pt-4 px-6">
        <v-btn icon class="float-right" @click="close()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <v-card-title class="text-h5 px-10">
        <h4>已簽到，無法取消</h4>
      </v-card-title>
      <div class="px-10 grey--text text--darken-1">
        <p>若需其他協助，請聯絡店家</p>
      </div>
      <v-container class="px-10">
        <v-row>
          <v-col cols="12" sm="5">
            <v-img
              src="/map.png"
              alt="請掃描QR Code"
              width="300"
              justify="center"
            ></v-img>
          </v-col>

          <v-col cols="12" sm="7">
            <div class="my-2"><b>大安館</b></div>
            <v-list-item class="pa-0">
              <v-list-item-content class="py-2">
                <v-list-item-title class="grey--text text--darken-1">
                  <v-icon class="mr-2">icon-map</v-icon>
                  台北市大安區敦化南路二段77號1樓
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item class="pa-0">
              <v-list-item-content class="py-2">
                <v-list-item-title class="grey--text text--darken-1">
                  <v-icon class="mr-2">icon-phone</v-icon>
                  02-8712-2837
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item class="pa-0">
              <v-list-item-content class="py-2">
                <v-list-item-title class="grey--text text--darken-1">
                  <v-icon class="mr-2">icon-time</v-icon>
                  營業中 09:00-18:00
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
      </v-container>

      <v-card-actions class="pa-6"> </v-card-actions>
    </div>
  </v-card>
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
      Object.assign(this.$data, this.$options.data.call(this));
    },
  },
};
</script>