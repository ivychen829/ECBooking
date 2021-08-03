<template>
  <v-card>
    <v-card-title class="text-h5 px-8">
      選購票劵方案，繼續預約
      <v-spacer></v-spacer>
      <v-btn icon class="float-right" @click="close()">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-divider></v-divider>

    <!-- 商品頁 付款方式 -->
    <div class="grey lighten-4 pa-6">
      <div class="display-1">中班團客(大戶券)</div>
      <div class="primary--text py-4 title">
        售價$
        <b class="headline">4,800</b>
      </div>
      <span class="caption grey--text"
        >兒度或裡西其取計城意刻內加線慢學關最空門望用巴民沒的、民等今時寫時不麼就，拉流校臺生西的第去一留一在物續像的部使讀二沒似雨，長到聲時思得根久時北仍所指受花人制計到。以生那策行，那經對排！用臺什學味外。言就生。</span
      >
      <!-- 商品價格 -->
      <div class="my-4">
        <v-container class="fill-height">
          <v-row class="v-card-border" align="center">
            <v-col cols="12" sm="4" md="4" align="center" justify-center>
              <b class="title">商品價格</b>
              <div class="title font-weight-light">付款方法</div>
            </v-col>

            <v-divider vertical class=""></v-divider>

            <v-col cols="12" sm="8" md="8" class="pl-6 v-expansion-title-width">
              <div class="ti-line-height">
                <div>
                  <span>付款方式</span>
                  <span class="grey--text text--darken-1">
                    <v-radio-group
                      class="d-inline-block"
                      width="40%"
                      style="width: 70%"
                    >
                      <v-radio label="一次付清" value="radio-1"></v-radio>
                      <v-radio
                        label="零卡分期一次付清"
                        value="radio-2"
                        disabled
                      ></v-radio>
                      <v-radio
                        label="零卡分期：3期 (3%手續費)"
                        value="radio-3"
                        disabled
                      ></v-radio>
                    </v-radio-group>
                  </span>
                </div>
                <div>
                  <span>售價</span>
                  <span class="grey--text text--darken-1">{4800}元</span>
                </div>
                <div>
                  <span>付款金額</span>
                  <span class="primary--text text--darken-1">{4800}元</span>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    classAngle: "icon-angle_down",
    itemsPlan: [
      {
        title: "中班團課(小資劵)",
        deadline: "30日",
        point: 5,
        class: 0,
        price: 1750,
        sale: 1500,
      },
      {
        title: "中班團課(大戶劵)",
        deadline: "30日",
        point: 20,
        class: 0,
        price: 7000,
        sale: 4800,
      },
      {
        title: "進階團課(月套劵)",
        deadline: "6個月",
        point: 0,
        class: 4,
        price: 1750,
        sale: 1500,
      },
      {
        title: "進階課程(月套劵)",
        deadline: "6個月",
        point: 0,
        class: 4,
        price: 1750,
        sale: 1500,
      },
    ],
  }),
  methods: {
    submit() {
      this.close();
    },
    close() {
      this.$emit("isCloseDialogStream", true);
    },
    updatePanelExpandIcon() {
      this.classAngle =
        this.classAngle === "icon-angle_up"
          ? "icon-angle_down"
          : "icon-angle_up";
    },
  },
};
</script>

<style scoped>
</style>

