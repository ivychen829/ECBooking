<template>
  <div>
    <v-container class="v-container-sm">
      <h2 class="pt-6" align="center">
        <v-icon color="primary" x-large>icon-success</v-icon>
        購買成功！謝謝您！<a href="">查看預約記錄</a>
      </h2>
      <v-divider class="my-6 primary"></v-divider>

      <div class="py-6">
        <v-row align="center">
          <v-col cols="12" sm="4" md="4" class="px-6">
            <v-img
              src="/image4.png"
              alt="course"
              height="150"
              justify="center"
              class="v-img__radius"
            />
          </v-col>
          <v-col
            cols="12"
            sm="8"
            md="8"
            class="px-6 v-expansion-title-width"
            style="position: relative"
          >
            <div class="ti-line-height" color="black">
              <div class="headline">{延展瑜伽}</div>
              <div>
                <span>訂購時間</span>
                <span class="grey--text text--darken-1"
                  >{2021/03/11 07:28}</span
                >
              </div>
              <div>
                <span>預約編號</span>
                <span class="grey--text text--darken-1"
                  >{B202103111620166}</span
                >
              </div>
              <div>
                <span>付款金額</span>
                <span class="grey--text text--darken-1"
                  >{小班定期團課 套票 1 堂}</span
                >
              </div>
            </div>

            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="ma-2 rounded-pill btn-bg--opacity"
                  outlined
                  tile
                  color="grey"
                  v-bind="attrs"
                  v-on="on"
                  @click="loader = 'loading'"
                  absolute
                  top
                  right
                >
                  <v-icon left>icon-date</v-icon>
                  加入行事曆
                </v-btn>
              </template>
              <v-list class="v-sub-hover">
                <v-list-item v-for="(btn, index) in subItems" :key="index">
                  <v-list-item-title>
                    <img :src="btn.image" />
                    {{ btn.title }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
      </div>

      <v-divider class="my-6 primary"></v-divider>

      <!-- images link -->
      <div class="py-6" align="center">
        <v-row align="center">
          <v-col
            cols="12"
            sm="4"
            md="4"
            class="px-6"
            style="position: relative"
          >
            <div class="v-card-border pt-12 pb-6">
              <v-img
                src="/notification.svg"
                alt="course"
                width="60"
                style="position: absolute; top: -20px; left: 40%"
              />
              <b>訂閱 LINE Notify</b>
              <div>上課提醒/相關通知不會漏</div>
            </div>
          </v-col>
          <v-col cols="12" sm="4" md="4" class="px-6">
            <div class="v-card-border pt-12 pb-6" style="position: relative">
              <v-img
                src="/line.svg"
                alt="course"
                width="60"
                style="position: absolute; top: -30px; left: 40%"
              />
              <b>加入官方 LINE 好友</b>
              <div>疑難雜症私給我</div>
            </div>
          </v-col>
          <v-col cols="12" sm="4" md="4" class="px-6">
            <div class="v-card-border pt-12 pb-6" style="position: relative">
              <v-img
                src="/facebook.svg"
                alt="course"
                width="60"
                style="position: absolute; top: -30px; left: 40%"
              />
              <b>前往 Facebook 點讚</b>
              <div>關注最新優惠/動態分享</div>
            </div>
          </v-col>
          <v-col cols="12" class="my-6">
            <h2>下載我們的專屬 App</h2>
            <span class="grey--text text--darken-1"
              >推薦使用 App 預約、查持有票券，更快更方便！</span
            >
            <div class="mt-6">
              <v-img
                src="/apple.png"
                alt="apple"
                width="183"
                class="d-inline-block mx-2"
              />
              <v-img
                src="/google.png"
                alt="google"
                width="183"
                class="d-inline-block mx-2"
              />
            </div>
          </v-col>
        </v-row>
      </div>

      <v-divider class="my-6 primary"></v-divider>

      <!-- 購買人資料 -->
      <div class="ti-line-height v-expansion-title-width" color="black">
        <div class="title my-3">購買人資料</div>
        <div>
          <span>會員帳號</span>
          <span class="grey--text text--darken-1">{0922345678}</span>
        </div>
        <div>
          <span>會員姓名</span>
          <span class="grey--text text--darken-1">{魏麗莎}</span>
        </div>
        <div>
          <span>E-mail</span>
          <span class="grey--text text--darken-1">{lisa@mail.com}</span>
        </div>
        <v-btn height="40" outlined class="primary--text btn-bg--opacity mt-6">
          通知信件已寄至您的電子信箱
        </v-btn>
      </div>

      <v-divider class="my-6"></v-divider>

      <!-- 商品明細 -->
      <div class="ti-line-height v-expansion-title-width" color="black">
        <div class="title my-3">商品明細</div>
        <div>
          <span>商品類型</span>
          <span class="grey--text text--darken-1">{課程預約}</span>
        </div>
        <div>
          <span>課程名稱</span>
          <span class="grey--text text--darken-1">{延展瑜伽}</span>
        </div>
        <div>
          <span>日期時間</span>
          <span class="grey--text text--darken-1"
            >{2021/03/11 星期四 16:00-17:00}</span
          >
        </div>
        <div>
          <span>授課老師</span>
          <span class="grey--text text--darken-1">{Linda}</span>
        </div>
        <div>
          <span>授課地點</span>
          <span class="grey--text text--darken-1">{速約運動中心}</span>
        </div>
        <div>
          <span>會館地址</span>
          <span class="grey--text text--darken-1"
            >{台北市忠孝中路四段325號8樓} {大安館} {A307}</span
          >
        </div>
        <div>
          <span>預約人數</span>
          <span class="grey--text text--darken-1">{1}人</span>
        </div>
        <div>
          <span>付款方式</span>
          <span class="grey--text text--darken-1">{一次付清/票券付款}</span>
        </div>
      </div>

      <v-divider class="my-6"></v-divider>

      <!-- 課程簽到 -->
      <div class="ti-line-height" color="black">
        <v-list-item class="px-0">
          <v-list-item-content>
            <div class="title mb-2">課程簽到</div>
            <div class="grey--text text--darken-1">
              課程當日
              <span class="primary--text">{2020/03/11} 開放線上簽到</span>
            </div>
          </v-list-item-content>

          <v-list-item-action>
            <v-dialog persistent v-model="checkInDialog" max-width="650px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="ma-2" color="primary" v-bind="attrs" v-on="on"
                  >線上簽到</v-btn
                >
              </template>
              <CheckInDialog
                @isCloseDialogStream="isCloseDialogListener"
              ></CheckInDialog>
            </v-dialog>
          </v-list-item-action>
        </v-list-item>

        <v-divider class="my-6"></v-divider>

        <v-list-item class="px-0">
          <v-list-item-content>
            <div class="title mb-2">取消預約</div>
            <div class="grey--text text--darken-1">
              此課程
              <span class="primary--text"
                >{2021/3/11 14:00} 之後不可取消預約</span
              >
              <div class="mt-2">
                取消預約將退還您的票券額度，若您是現金購買預約課程，請與我們聯繫
              </div>
            </div>
          </v-list-item-content>

          <v-list-item-action>
            <v-dialog persistent v-model="checkOutDialog" max-width="650px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="ma-2"
                  outlined
                  color="primary"
                  v-bind="attrs"
                  v-on="on"
                  >取消預約</v-btn
                >
              </template>
              <CheckOutDialog
                @isCloseDialogStream="isCloseDialogListener"
                :type="type"
              ></CheckOutDialog>
            </v-dialog>
          </v-list-item-action>
        </v-list-item>
      </div>

      <v-divider class="my-6 primary"></v-divider>
    </v-container>

    <Footer />
  </div>
</template>

<script>
import CheckInDialog from "~/components/dialog/check_in_dialog.vue";
import CheckOutDialog from "~/components/dialog/check_out_dialog.vue";
import Footer from "~/layouts/footer.vue";

export default {
  data() {
    return {
      checkInDialog: false,
      checkOutDialog: false,
      type: "success",
      subItems: [
        { title: "Apple", image: "/apple.svg" },
        { title: "Google", image: "/google.svg" },
        { title: "Outlook", image: "/outlook.svg" },
        { title: "Yahoo", image: "/yahoo.svg" },
      ],
    };
  },
  components: {
    CheckInDialog,
    CheckOutDialog,
    Footer,
  },
  methods: {
    isCloseDialogListener(isClose) {
      if (isClose) {
        this.checkInDialog = false;
        this.checkOutDialog = false;
      }
      Object.assign(this.$data, this.$options.data.call(this));
    },
  },
};
</script>

<style scoped>
.v-list-item.v-list-item--active .v-list-item__title {
  color: #91c423;
}
.sticky-header {
  position: sticky;
  top: var(--toolbarHeight);
}
</style>
