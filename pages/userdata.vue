<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="3">
        <div rounded="lg" min-height="268" class="sticky-top v-card-border en-shadow pt-5">
          <div class="text-center">
            <v-avatar color="grey lighten-2" size="56" class="my-3">
              <img src="~/static/avatar.svg" alt="avatar" />
            </v-avatar>
            <h3>魏麗莎</h3>
            <span class="grey--text text--darken-1">0922 345 678</span>
          </div>
          <!--  -->
          <v-list color="transparent">
            <v-divider class="my-2 mx-4"></v-divider>
            <v-list-item link color="grey lighten-4" class="v-underline" to="/member">
              <v-list-item-content>
                <v-list-item-title>
                  <i class="icon-reservation mr-1"></i>
                  預約記錄
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item link color="grey lighten-4" class="v-underline" to="/myticket">
              <v-list-item-content>
                <v-list-item-title>
                  <i class="icon-ticket mr-1"></i>
                  我的票券
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item link color="grey lighten-4" class="v-underline" to="/mypassport">
              <v-list-item-content>
                <v-list-item-title>
                  <i class="icon-pass mr-1"></i>
                  我的通行卡
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider class="my-2 mx-4"></v-divider>

            <v-list-item link color="grey lighten-4" class="v-underline" to="/userdata">
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
          <h1 class="font-weight-regular">會員資料</h1>
          <v-tabs class="alpha">
            <v-tab>
              <b class="black--text">個人資訊</b>
            </v-tab>

            <v-tab>
              <b class="black--text">修改密碼</b>
            </v-tab>

            <v-tab-item>
              <UserDataInfo></UserDataInfo
              ><!-- 引入的內容 -->
            </v-tab-item>

            <v-tab-item>
              <UserDataPass></UserDataPass
              ><!-- 引入的內容 -->
            </v-tab-item>
          </v-tabs>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserDataInfo from "./userdata/userdata_info.vue";
import UserDataPass from "./userdata/userdata_password.vue";

export default {
  components: {
    UserDataInfo,
    UserDataPass,
  },
};
</script>

<style scoped>
.v-list-item.v-list-item--active .v-list-item__title {
  color: #91c423;
}
</style>
