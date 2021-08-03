<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="3">
        <div
          rounded="lg"
          min-height="268"
          class="sticky-top v-card-border en-shadow pt-5"
        >
          <div class="text-center">
            <v-avatar color="grey lighten-2" size="56" class="my-3">
              <img src="~/static/avatar.svg" alt="John" />
            </v-avatar>
            <h3>魏麗莎</h3>
            <span class="grey--text text--darken-1">0922 345 678</span>
          </div>
          <!--  -->
          <v-list color="transparent">
            <v-divider class="my-2 mx-4"></v-divider>
            <v-list-item 
              link
              color="grey lighten-4"
              to="/member"
              class="v-underline"
            >
              <v-list-item-content>
                <v-list-item-title>
                  <i class="icon-reservation mr-1"></i>
                  預約記錄
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item 
              link
              color="grey lighten-4"
              to="/myticket"
              class="v-underline"
            >
              <v-list-item-content>
                <v-list-item-title>
                  <i class="icon-ticket mr-1"></i>
                  我的票券
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              link
              color="grey lighten-4"
              to="/mypassport"
              class="v-underline"
            >
              <v-list-item-content>
                <v-list-item-title>
                  <i class="icon-pass mr-1"></i>
                  我的通行卡
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider class="my-2 mx-4"></v-divider>

            <v-list-item link color="grey lighten-4" to="" class="v-underline">
              <v-list-item-content>
                <v-list-item-title @click="updateNotification()">
                  <i
                    :style="'color:' + notificationColor"
                    class="icon-notification mr-1"
                  ></i>
                  {{ notificationTitle }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider class="my-2 mx-4"></v-divider>

            <v-list-item
              link
              color="grey lighten-4"
              to="/userdata"
              class="v-underline"
            >
              <v-list-item-content>
                <v-list-item-title>
                  <i class="icon-edit mr-1"></i>
                  會員資料
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </v-col>

      <v-col cols="12" sm="9">
        <v-sheet min-height="70vh" rounded="lg" class="alpha">
          <!--  -->
          <h1 class="font-weight-regular">我的通行卡</h1>
          <v-tabs class="alpha">
            <v-tab>
              <b class="black--text">啟用中</b>
              <span class="gray--text">(2)</span>
            </v-tab>

            <v-tab>
              <b class="black--text">未啟用</b>
              <span class="gray--text">(0)</span>
            </v-tab>

            <v-tab>
              <b class="black--text">已失效</b>
              <span class="gray--text">(3)</span>
            </v-tab>

            <v-tab-item>
              <MyPassEnabled></MyPassEnabled
              ><!-- 引入的內容 -->
            </v-tab-item>

            <v-tab-item>
              <MyPassDisabled></MyPassDisabled
              ><!-- 引入的內容 -->
              <template>
                <div class="text-center">
                  <v-pagination :length="5"></v-pagination>
                </div>
              </template>
            </v-tab-item>

            <v-tab-item>
              <MyPassDefunct></MyPassDefunct
              ><!-- 引入的內容 -->
            </v-tab-item>
          </v-tabs>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MyPassDefunct from "./mypassport/mypassport_defunct.vue";
import MyPassDisabled from "./mypassport/mypassport_disabled.vue";
import MyPassEnabled from "./mypassport/mypassport_enabled.vue";

export default {
  data() {
    return {
      isNotification: false,
      notificationTitle: "訂閱通知",
      notificationColor: "#91c423",
    };
  },
  methods: {
    updateNotification() {
      this.isNotification = !this.isNotification;
      this.notificationTitle = this.isNotification ? "已訂閱通知" : "訂閱通知";
      this.notificationColor = this.isNotification ? "" : "#91c423";
    },
  },
  components: {
    MyPassDefunct,
    MyPassDisabled,
    MyPassEnabled,
  },
};
</script>

<style scoped>
.v-list-item.v-list-item--active .v-list-item__title {
  color: #91c423;
}
</style>
