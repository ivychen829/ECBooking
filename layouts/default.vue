<template>
  <v-app>
    <Header
      :title="title"
      @clickedOptionStream="showClickedOptionListener"
      @updateRightDrawerStream="setRightDrawerListener"
    ></Header>

    <v-main class="v-bg-main-color" justify="center">
      <nuxt />
    </v-main>

    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      fixed
      width="350"
      class="v-media-mdimenu"
    >
      <v-list color="transparent">
        <div class="my-4">
          <!-- @click.native="right = !right" -->

          <v-btn icon class="d-inline-block mr-2 ml-4">
            <img src="/facebook.svg" alt="facebook" width="100" height="35" />
          </v-btn>
          <v-btn icon class="d-inline-block mr-2">
            <img src="/youtube.svg" alt="Vuetify.js" width="100" height="35" />
          </v-btn>
          <v-btn icon class="d-inline-block mr-2">
            <img src="/star.svg" alt="line" width="100" height="35" />
          </v-btn>
          <v-btn icon class="d-inline-block mr-2">
            <img src="/book.svg" alt="instagram" width="100" height="35" />
          </v-btn>

          <v-btn icon class="float-right mr-2" @click="close()">
            <v-icon class="" color="black">mdi-close</v-icon>
          </v-btn>
        </div>

        <v-divider class="my-2 mx-4"></v-divider>

        <v-list-item link color="grey lighten-4" to="">
          <v-list-item-icon>
            <v-icon>icon-user</v-icon>
          </v-list-item-icon>

          <v-list-item-title>登入/註冊</v-list-item-title>
        </v-list-item>

        <v-divider class="my-2 mx-4"></v-divider>

        <div class="ma-4 mt-6">
          <b class="title">Hello! 魏麗莎</b>
        </div>

        <v-list-item link color="grey lighten-4" to="/member">
          <v-list-item-icon>
            <v-icon color="primary">icon-reservation</v-icon>
          </v-list-item-icon>

          <v-list-item-title>預約記錄</v-list-item-title>
        </v-list-item>

        <v-list-item link color="grey lighten-4" to="/myticket">
          <v-list-item-icon>
            <v-icon color="primary">icon-pass</v-icon>
          </v-list-item-icon>

          <v-list-item-title>我的票券</v-list-item-title>
        </v-list-item>

        <v-list-item link color="grey lighten-4" to="/mypassport">
          <v-list-item-icon>
            <v-icon color="primary">icon-ticket</v-icon>
          </v-list-item-icon>

          <v-list-item-title>我的通行卡</v-list-item-title>
        </v-list-item>

        <v-list-item
          link
          color="grey lighten-4"
          to=""
          @click="updateNotification()"
        >
          <v-list-item-icon>
            <v-icon :color="notificationColor">icon-notification</v-icon>
          </v-list-item-icon>

          <v-list-item-title>{{ notificationTitle }}</v-list-item-title>
        </v-list-item>

        <v-divider class="my-2 mx-4"></v-divider>

        <!-- 找課程 -->
        <v-list-group :value="true" prepend-icon="icon-course">
          <template v-slot:activator>
            <v-list-item-title>找課程</v-list-item-title>
          </template>

          <v-list-group :value="true" no-action sub-group prepend-icon=" ">
            <template v-slot:activator>
              <v-list-item-title
                class="grey--text text--darken-1"
                @click="clickOption('allclass')"
                >全部課程</v-list-item-title
              >
            </template>
          </v-list-group>

          <v-list-group :value="true" no-action sub-group prepend-icon=" ">
            <template v-slot:activator>
              <v-list-item-title
                class="grey--text text--darken-1"
                @click="clickOption('group')"
                >團體課程</v-list-item-title
              >
            </template>
          </v-list-group>

          <v-list-group :value="true" no-action sub-group prepend-icon=" ">
            <template v-slot:activator>
              <v-list-item-title
                class="grey--text text--darken-1"
                @click="clickOption('class')"
                >期班</v-list-item-title
              >
            </template>
          </v-list-group>
        </v-list-group>

        <!-- 找方案 -->
        <v-list-group :value="true" prepend-icon="icon-shop">
          <template v-slot:activator>
            <v-list-item-title>找方案</v-list-item-title>
          </template>

          <v-list-group no-action sub-group prepend-icon=" ">
            <template v-slot:activator>
              <v-list-item-title
                class="grey--text text--darken-1"
                @click="clickOption('allfunction')"
                >全部方案</v-list-item-title
              >
            </template>
          </v-list-group>

          <v-list-group no-action sub-group prepend-icon=" ">
            <template v-slot:activator>
              <v-list-item-title
                class="grey--text text--darken-1"
                @click="clickOption('stored')"
                >儲值票券</v-list-item-title
              >
            </template>
          </v-list-group>

          <v-list-group no-action sub-group prepend-icon=" ">
            <template v-slot:activator>
              <v-list-item-title
                class="grey--text text--darken-1"
                @click="clickOption('passport')"
                >通行卡</v-list-item-title
              >
            </template>
          </v-list-group>
        </v-list-group>

        <v-list-item
          link
          color="grey lighten-4"
          to=""
          @click="clickBtn('show_place_info')"
        >
          <v-list-item-icon>
            <v-icon color="primary">icon-info</v-icon>
          </v-list-item-icon>

          <v-list-item-title>店家資訊</v-list-item-title>
        </v-list-item>

        <v-list-item
          link
          color="grey lighten-4"
          to=""
          @click="clickBtn('show_download_app')"
        >
          <v-list-item-icon>
            <v-icon color="primary">icon-mobile</v-icon>
          </v-list-item-icon>

          <v-list-item-title>下載 App</v-list-item-title>
        </v-list-item>

        <v-divider class="my-2 mx-4"></v-divider>

        <v-list-item link color="grey lighten-4" to="">
          <v-list-item-icon>
            <v-icon>icon-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-title>會員登出</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-dialog v-model="downloadAppDialog" max-width="450px">
      <DownloadAppDialog></DownloadAppDialog>
    </v-dialog>

    <v-dialog
      persistent
      v-model="placeInfoAllDialog"
      scrollable
      max-width="650px"
    >
      <PlaceInfoAllDialog
        @isCloseDialogStream="isCloseDialogListener"
      ></PlaceInfoAllDialog>
    </v-dialog>
  </v-app>
</template>

<script>
import Header from "~/layouts/header.vue";
import DownloadAppDialog from "~/components/dialog/download_app_dialog.vue";
import PlaceInfoAllDialog from "~/components/dialog/place_info_all_dialog.vue";

export default {
  data() {
    return {
      drawer: false,
      fixed: false,
      right: true,
      rightDrawer: false,
      title: "Example blog post",
      fromChildData: "",
      downloadAppDialog: false,
      placeInfoAllDialog: false,
      isNotification: false,
      notificationTitle: "訂閱通知",
      notificationColor: "primary",
      downloadAppDialog: false,
      placeInfoAllDialog: false,
    };
  },
  methods: {
    close() {
      this.rightDrawer = false;
    },
    showClickedOptionListener(data) {
      this.fromChildData = data;
    },
    setRightDrawerListener(state) {
      this.rightDrawer = state;
    },
    clickOption(type) {
      this.$store.commit("SET_CURRENT_TYPE", type);
      this.$router.push("/");
    },
    updateNotification() {
      this.isNotification = !this.isNotification;
      this.notificationTitle = this.isNotification ? "已訂閱通知" : "訂閱通知";
      this.notificationColor = this.isNotification ? "" : "primary";
    },
    clickBtn(action) {
      if (action === "") return;
      if (action === "show_download_app")
        this.downloadAppDialog = !this.downloadAppDialog;
      if (action === "show_place_info")
        this.placeInfoAllDialog = !this.placeInfoAllDialog;
    },
    isCloseDialogListener(isClose, action) {
      if (isClose) {
        if (action === "show_download_app") this.downloadAppDialog = false;
        if (action === "show_place_info") this.placeInfoAllDialog = false;
      }
    },
  },
  components: {
    Header,
    DownloadAppDialog,
    PlaceInfoAllDialog,
  },
};
</script>
