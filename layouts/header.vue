<template>
  <v-app-bar fixed app>
    <nuxt-link to="/"
      ><img src="/BookFast_logo.png" alt="BookFast Logo"
    /></nuxt-link>
    <v-spacer></v-spacer>

    <div class="v-media-menu">
      <v-menu
        v-for="(tool, index) in toolbar"
        :key="index"
        offset-y
        open-on-hover
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            text
            @click="clickBtn(tool.action)"
            :class="tool.class"
          >
            <i :class="tool.icon"></i>
            {{ tool.title }}
          </v-btn>
        </template>
        <v-list v-if="tool.btns.length > 0" class="v-sub-hover">
          <v-list-item
            v-for="(btn, index) in tool.btns"
            :key="index"
            :to="btn.to"
            class="v-underline"
          >
            <v-list-item-title @click="clickOption(btn.type)">
              <i :class="btn.icon"></i>
              {{ btn.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <v-dialog persistent v-model="loginDialog" max-width="450px">
      <LoginDialog @isCloseDialogStream="isCloseDialogListener"></LoginDialog>
    </v-dialog>

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

    <div class="v-media-menu">
      <v-btn icon width="35" height="35">
        <img src="/facebook.svg" alt="facebook" class="" />
      </v-btn>

      <v-btn icon width="35" height="35">
        <img src="/youtube.svg" alt="youtube" class="" />
      </v-btn>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon width="35" height="35" v-bind="attrs" v-on="on">
            <img src="/star.svg" alt="star" class="" />
          </v-btn>
        </template>
        <span>{自訂按鈕名稱}</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon width="35" height="35" v-bind="attrs" v-on="on">
            <img src="/book.svg" alt="book" class="" />
          </v-btn>
        </template>
        <span>{自訂按鈕名稱}</span>
      </v-tooltip>
    </div>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon dark v-bind="attrs" v-on="on" class="v-media-mdimenu">
          <v-icon color="black" style="font-size: 22px">icon-user</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn
      icon
      @click.stop="updateRightDrawer((rightDrawer = !rightDrawer))"
      class="v-media-mdimenu mx-2"
    >
      <v-icon color="black">mdi-menu</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import LoginDialog from "~/components/dialog/login_dialog.vue";
import DownloadAppDialog from "~/components/dialog/download_app_dialog.vue";
import PlaceInfoAllDialog from "~/components/dialog/place_info_all_dialog.vue";

export default {
  props: ["title"],
  data() {
    return {
      drawer: false,
      fixed: false,
      right: true,
      rightDrawer: false,
      loginDialog: false,
      downloadAppDialog: false,
      placeInfoAllDialog: false,
      // title: "Vuetify.js",
      links: ["Dashboard", "Messages", "Profile", "Updates"],
      toolbar: [
        {
          title: "找課程",
          icon: "icon-course",
          btns: [
            { title: "全部課程", icon: "", type: "allclass", to: "" },
            { title: "團體課程", icon: "", type: "group", to: "" },
            { title: "期班", icon: "", type: "class", to: "" },
          ],
          action: "",
          class: "",
        },
        {
          title: "找方案",
          icon: "icon-shop",
          btns: [
            { title: "全部方案", icon: "", type: "allfunction", to: "" },
            { title: "儲值票劵", icon: "", type: "stored", to: "" },
            { title: "通行卡", icon: "", type: "passport", to: "" },
          ],
          action: "",
          class: "",
        },
        {
          title: "店家資訊",
          icon: "icon-info",
          btns: [],
          action: "show_place_info",
          class: "",
        },
        {
          title: "下載APP",
          icon: "icon-mobile",
          btns: [{ type: "allfunction" }],
          action: "show_download_app",
          class: "hover-div",
        },
        {
          title: "登入/註冊",
          icon: "",
          btns: [],
          action: "user_login",
          class: "btn-outline",
        },
        {
          title: "Hi 魏麗莎",
          icon: "icon-user",
          class: "btn-fit",
          btns: [
            {
              title: "預約記錄",
              icon: "icon-reservation",
              type: "",
              to: "/member",
            },
            {
              title: "我的票券",
              icon: "icon-ticket",
              type: "",
              to: "/myticket",
            },
            {
              title: "我的通行卡",
              icon: "icon-pass",
              type: "",
              to: "/mypassport",
            },
            {
              title: "已訂閱通知",
              icon: "icon-notification",
              type: "",
              to: "/myticket",
            },
            {
              title: "會員資料",
              icon: "icon-edit",
              type: "",
              to: "/userdata",
            },
            { title: "登出", icon: "icon-logout", type: "", to: "" },
          ],
          action: "",
          class: "",
        },
      ],
      items: [
        {
          title: "預約記錄",
          icon: "icon-reservation",
          type: "",
          to: "/member",
        },
        {
          title: "我的票券",
          icon: "icon-ticket",
          type: "",
          to: "/myticket",
        },
        {
          title: "我的通行卡",
          icon: "icon-pass",
          type: "",
          to: "/mypassport",
        },
        {
          title: "已訂閱通知",
          icon: "icon-notification",
          type: "",
          to: "",
        },
        {
          title: "會員資料",
          icon: "icon-edit",
          type: "",
          to: "/userdata",
        },
        { title: "登出", icon: "icon-logout", type: "", to: "" },
      ],
    };
  },
  methods: {
    clickBtn(action) {
      if (action === "") return;
      if (action === "show_download_app")
        this.downloadAppDialog = !this.downloadAppDialog;
      if (action === "show_place_info")
        this.placeInfoAllDialog = !this.placeInfoAllDialog;
      if (action === "user_login") this.loginDialog = !this.loginDialog;
    },
    clickOption(type) {
      if (type === "") return;
      this.$store.commit("SET_CURRENT_TYPE", type);
      this.$router.push("/");
    },
    updateRightDrawer(state) {
      this.$emit("updateRightDrawerStream", state);
    },
    isCloseDialogListener(isClose, action) {
      if (isClose) {
        if (action === "show_download_app") this.downloadAppDialog = false;
        if (action === "show_place_info") this.placeInfoAllDialog = false;
        if (action === "user_login") this.loginDialog = false;
      }
    },
    myEventHandler(e) {
      // your code for handling resize...
      let innerWidth = e.currentTarget.innerWidth
        ? e.currentTarget.innerWidth
        : 451;
      if (innerWidth <= 450) {
        var testarray = document.getElementsByClassName("v-dialog--active");
        if (
          testarray.length > 0 &&
          !testarray[0].classList.contains("v-dialog--fullscreen")
        ) {
          testarray[0].classList.add("v-dialog--fullscreen");
        }
      }
      if (innerWidth > 450) {
        var testarray = document.getElementsByClassName("v-dialog--active");
        if (
          testarray.length > 0 &&
          testarray[0].classList.contains("v-dialog--fullscreen")
        ) {
          testarray[0].classList.remove("v-dialog--fullscreen");
        }
      }
    },
  },
  components: {
    LoginDialog,
    DownloadAppDialog,
    PlaceInfoAllDialog,
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
};
</script>
