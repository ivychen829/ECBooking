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

    <!-- 選購 -->
    <div>
      <v-expansion-panels>
        <v-expansion-panel class="theme--null theme--unborder">
          <v-expansion-panel-header
            color="grey lighten-3"
            class="js-panel-header px-8"
            @click="updatePanelExpandIcon()"
            >延展瑜珈，1人上課需花費<v-icon
              v-model="classAngle"
              :class="classAngle"
              style="position: absolute; right: 45px"
            >
            </v-icon
          ></v-expansion-panel-header>
          <v-expansion-panel-content color="grey lighten-3 body-2">
            <div>
              3點 : 小班團課/點數<span class="pl-2 grey--text"
                >[您的票劵剩餘9點]</span
              >
            </div>
            <div>
              3點 : 中班團課/點數
              <span class="pl-2 grey--text">[您的票劵剩餘1點]</span>
            </div>
            <div>
              3點 : 課程贈送劵/優惠劵點數
              <span class="pl-2 grey--text">[您沒有此票劵]</span>
            </div>
            <div>
              3點 : 進階專用/套票
              <span class="pl-2 grey--text">[您沒有此票劵]</span>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <v-container class="px-8 pt-6 v-max-scroll">
        <v-row>
          <v-col
            v-for="(item, index) in itemsPlan"
            :key="index"
            cols="12"
            md="6"
            sm="12"
            class="pa-2"
          >
            <div
              class="mx-auto mx-full-width v-card-border pa-0 overflow-hidden"
              max-width="220"
            >
              <v-img
                class="white--text align-end"
                height="123.75px"
                src="/image25.png"
              >
                <span class="primary pa-1 float-left caption v-card-tag">
                  限量400份
                </span>
              </v-img>
              <v-card-title class="pb-6"> {{ item.title }} </v-card-title>
              <v-card-subtitle class="pb-0 text-caption">
                票劵期限 {{ item.deadline }}
              </v-card-subtitle>
              <v-card-text v-if="item.point > 0"
                >中班團課: {{ item.point }} 點</v-card-text
              >
              <v-card-text v-if="item.class > 0"
                >進階專用:每月 {{ item.class }} 堂</v-card-text
              >

              <div class="pa-4 mx-footer">
                一次付清 <s>1,750</s>
                <span class="mx-line">$ <b class="title">1,500</b></span>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <v-card-title class="px-7">
        <v-btn
          height="40"
          color="primary"
          block
          @click="submit()"
        >
          購買方案
        </v-btn>
      </v-card-title>
      
    </div>
  </v-card>
</template>

<script>
import FindPlanBDialog from "./find_a_planB_dialog.vue";
export default {
  data: () => ({
    findPlanBDialog: false,
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
  components: {
    FindPlanBDialog,
  },
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
    isCloseDialogListener(isClose) {
      if (isClose) {
        this.findPlanBDialog = false;
      }
    },
  },
};
</script>

<style scoped>
</style>

