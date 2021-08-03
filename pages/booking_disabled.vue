<template>
  <div>
    <v-img height="125px" src="/yoga.png" class="v-img__opacity">
      <v-container class="fill-height v-container-sm">
        <v-row align="center">
          <v-col cols="12" sm="12" style="position: relative" justify-center>
            <nuxt-link to="/" class="v-underline"
              ><v-icon color="black">icon-back</v-icon>
              <h1 class="font-weight-regular d-inline text-middle black--text">
                延展瑜伽
              </h1>
            </nuxt-link>
            <v-btn
              class="rounded-pill btn-theme"
              outlined
              tile
              @click="loader = 'loading'"
              absolute
              right
            >
              <v-icon medium>icon-send</v-icon>
              <span>分享課程</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
    <div class="bg--white bg--sticky"></div>

    <v-container class="v-container-sm" style="margin-top: -60px">
      <v-row>
        <v-col cols="12" sm="12">
          <v-sheet min-height="70vh" rounded="lg" class="alpha">
            <!--  -->
            <div id="about"></div>
            <v-tabs class="alpha tab-sticky v-tab-sticky">
              <div class="bg--white"></div>
              <v-tab fixed-header to="#about" class="v-underline">
                <a
                  href="javascript: void(0)"
                  class="v-underline black--text subtitle-1 font-weight-bold"
                  >介紹</a
                >
              </v-tab>

              <v-tab fixed-header to="#reclass" class="v-underline">
                <a
                  href="javascript: void(0)"
                  class="v-underline black--text subtitle-1 font-weight-bold"
                  >預約課程</a
                >
              </v-tab>
            </v-tabs>

            <v-card-text>
              <h3 color="primary" class="pt-6 theme--text">
                單堂售課&nbsp;$&nbsp;<b class="headline font-weight-medium"
                  >350</b
                >
                <span class="subtitle-2">起</span>&nbsp;/&nbsp;可用票卷付款
              </h3>

              <v-row class="pt-10">
                <v-col cols="12" sm="6" md="6">
                  <v-img
                    src="/image4.png"
                    height="225"
                    class="v-img__radius"
                  ></v-img>
                </v-col>

                <v-col cols="12" sm="6" md="6" class="body-1" justify-center>
                  瑜珈是在群體之中講求個體獨立的練習，
                  從進教室開始直到課程結束為止， 試著維持獨立而沉靜的狀態，
                  不要轉移自己的注意力，也不要打擾旁邊的人。提早到教室，時間充裕好輕鬆，利用這段時間沉澱自己、調整呼吸，並為課程做好準備。瑜珈是在群體之中講求個體獨立的練習，
                  從進教室開始直到課程結束為止， 試著維持獨立而沉靜的狀態，
                  不要轉移自己的注意力，也不要打擾旁邊的人。
                </v-col>
              </v-row>

              <div id="reclass"></div>

              <div class="order my-12">
                <span class="w-line"></span>
                <span class="txt mx-2 body-1">往下預約課程嚕!</span>
                <span class="w-line"></span>
              </div>

              <div>
                <div class="my-10">
                  <h3 class="my-3">老師</h3>
                  <v-btn class="ma-1 btn-theme" outlined color="primary"
                    >Amanda</v-btn
                  >
                  <v-btn class="ma-1 btn-theme" outlined>Allen 陳教練</v-btn>
                  <v-btn class="ma-1 btn-theme" outlined>陳小玉</v-btn>
                </div>

                <div class="my-10">
                  <h3 class="my-3">上課日期</h3>
                  <div
                    class="v-card-border d-inline-block pt-6 v-media-block"
                    align="center"
                  >
                    <v-date-picker
                      class="pic-notitle"
                      v-model="picker"
                      :first-day-of-week="0"
                      locale="sv-se"
                    ></v-date-picker>
                    <v-date-picker
                      class="pic-notitle v-media-hide"
                      v-model="picker"
                      :first-day-of-week="1"
                      locale="sv-se"
                    ></v-date-picker>
                  </div>
                </div>

                <div class="my-10">
                  <h3 class="my-3">上課時間</h3>
                  <v-btn class="ma-1 btn-theme" outlined color="primary"
                    >上午 09:30</v-btn
                  >
                  <v-btn class="ma-1 btn-theme" outlined color="gray"
                    >上午 11:30</v-btn
                  >
                  <v-btn class="ma-1 btn-theme" outlined color="gray" disabled
                    >下午 13:30<span>&nbsp;|&nbsp;額滿</span></v-btn
                  >
                  <v-btn class="ma-1 btn-theme" outlined color="gray" disabled
                    >下午 16:00<span>&nbsp;|&nbsp;停課</span></v-btn
                  >
                </div>

                <!-- 課程預約 -->
                <div class="my-6">
                  <v-container class="fill-height">
                    <v-row class="v-card-border" align="center">
                      <v-col
                        cols="12"
                        sm="3"
                        md="2"
                        align="center"
                        justify-center
                      >
                        <b class="title v-media-inline">課程預約</b>
                        <div class="title font-weight-light v-media-inline">
                          商品內容
                        </div>
                      </v-col>

                      <v-divider vertical class=""></v-divider>

                      <v-col
                        cols="12"
                        sm="9"
                        md="10"
                        class="pl-6 v-expansion-title-width"
                      >
                        <div class="ti-line-height">
                          <div>
                            <span>課程名稱</span>
                            <span class="grey--text text--darken-1"
                              >{延展瑜伽}</span
                            >
                          </div>
                          <div>
                            <span>課程時間</span>
                            <span class="grey--text text--darken-1"
                              >{2021/03/11(四)09:30-10:30}</span
                            >
                          </div>
                          <div>
                            <span>授課老師</span>
                            <span class="grey--text text--darken-1"
                              >{Linda}</span
                            >
                          </div>
                          <div>
                            <span>授課地點</span>
                            <span class="grey--text text--darken-1"
                              >{速約運動中心}{大安館}{A307}</span
                            >
                          </div>
                          <div>
                            <span>會館地址</span>
                            <span class="grey--text text--darken-1"
                              >{台北市忠孝中路四段325號8樓}</span
                            >
                          </div>
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </div>

                <!-- 預約人數 -->
                <div class="my-6">
                  <v-container class="fill-height">
                    <v-row class="v-card-border" align="center">
                      <v-col
                        cols="12"
                        sm="3"
                        md="2"
                        align="center"
                        justify-center
                      >
                        <b class="title v-media-inline">預約人數</b>
                        <div class="title font-weight-light v-media-inline">
                          付款方式
                        </div>
                      </v-col>

                      <v-divider vertical class=""></v-divider>

                      <v-col cols="12" sm="9" md="10" class="pl-6">
                        <div class="ti-line-height">
                          <div>
                            <!-- 已登入 -->
                            <div>
                              <span>開放名額</span>
                              <span class="grey--text text--darken-1"
                                >剩餘{10}人/滿班{20}人</span
                              >
                            </div>
                            <div class="v-max-scroll my-4">
                              <v-btn
                                class="ma-1 btn-theme py-2"
                                color="primary"
                                outlined
                                >預約 1人</v-btn
                              >
                              <v-btn class="ma-1 btn-theme py-2" outlined
                                >2人</v-btn
                              >
                              <v-btn class="ma-1 btn-theme py-2" outlined
                                >3人</v-btn
                              >
                              <v-btn
                                class="ma-1 btn-theme py-2 grey--text"
                                outlined
                                >更多</v-btn
                              >
                            </div>
                            <div class="my-2 body-2 grey--text text--darken-1">
                              預約人數滿 {5}
                              人即達最低開課標準，若因預約人數未達標準，將提前通知課程取消，付款金額
                              (或票券額度) 將退還給您。
                            </div>
                          </div>

                          <div class="my-2" hidden="hide-delimiters">
                            <!-- 已額滿 -->
                            <div>
                              <v-icon color="primary" x-large
                                >icon-inform</v-icon
                              >
                              <strong
                                >Oh...課程已額滿了，若有<a href="">空位通知</a
                                >您？</strong
                              >
                            </div>
                            <v-btn class="ma-1 btn-theme" outlined
                              >有空位通知我</v-btn
                            >
                          </div>

                          <div class="my-2" hidden="hide-delimiters">
                            <!-- 未開放 -->
                            <div>
                              <v-icon color="primary" x-large
                                >icon-inform</v-icon
                              >
                              <strong
                                >課程未開放預約，有興趣請<a href=""
                                  >與我們聯繫</a
                                ></strong
                              >
                            </div>
                          </div>

                          <v-divider class="my-2"></v-divider>

                          <div>
                            <b>付款方式</b>
                            <v-card flat class="mt-6">
                              <v-radio-group column>
                                <v-radio value="radio-7">
                                  <template v-slot:label>
                                    <div>線上刷卡<a>350元</a></div>
                                  </template>
                                </v-radio>
                              </v-radio-group>
                              <div>
                                <v-icon color="primary" x-large
                                  >icon-inform</v-icon
                                >
                                <b class=""
                                  >使用以下票劵付款請先<nuxt-link
                                    to="/purchase_new"
                                    ><a>登入會員</a></nuxt-link
                                  >喔！</b
                                >
                              </div>
                              <v-radio-group column>
                                <v-radio
                                  label="小班團課 點數 3 點"
                                  value="radio-1"
                                ></v-radio>
                                <v-radio
                                  label="小班定期團課 套票 1 堂"
                                  value="radio-2"
                                  disabled
                                ></v-radio>
                                <v-radio
                                  label="課程贈送券 優惠券點數 2 點"
                                  value="radio-5"
                                  disabled
                                ></v-radio>
                                <v-radio
                                  label="進階專用 套票 1 堂"
                                  value="radio-6"
                                  disabled
                                ></v-radio>
                              </v-radio-group>
                              <div>
                                <v-icon color="primary" x-large
                                  >icon-inform</v-icon
                                >
                                <b>沒有票劵或餘額不足 ? </b>
                                <v-dialog
                                  persistent
                                  v-model="findPlanDialog"
                                  max-width="560px"
                                  scrollable
                                  ><template v-slot:activator="{ on, attrs }"
                                    ><span
                                      v-on="on"
                                      v-bind="attrs"
                                      style="cursor: pointer"
                                      class="primary--text"
                                      >立即找方案</span
                                    ></template
                                  >
                                  <FindPlanDialog
                                    @isCloseDialogStream="isCloseDialogListener"
                                  ></FindPlanDialog>
                                </v-dialog>
                              </div>
                            </v-card>
                          </div>
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </div>

                <!-- 購買請填 -->
                <div class="my-6">
                  <v-container class="fill-height">
                    <v-row class="v-card-border" align="center">
                      <v-col
                        cols="12"
                        sm="3"
                        md="2"
                        align="center"
                        justify-center
                      >
                        <b class="title v-media-inline">購買請填</b>
                        <div class="title font-weight-light v-media-inline">
                          手機號碼
                        </div>
                      </v-col>

                      <v-divider vertical class=""></v-divider>

                      <v-col
                        cols="12"
                        sm="9"
                        md="10"
                        class="pl-6 v-expansion-title-width"
                        justify-center
                      >
                        <v-text-field
                          class="v-font-lg"
                          inputmode="tel"
                          maxlength="10"
                          placeholder="0900 000 000"
                          hide-details="auto"
                        ></v-text-field>

                        <v-alert prominent text class="mt-4" color="info">
                          將使用這個帳號預約課程，請確認號碼是否正確喔！
                        </v-alert>
                      </v-col>
                    </v-row>
                  </v-container>
                </div>

                <div align="center" class="ma-6">
                  一次付清 <span>{350}</span>元
                </div>
                <v-row align="center" justify="space-around" class="my-6">
                  <v-col cols="12" sm="6" md="6">
                    <v-btn
                      height="40"
                      depressed
                      block
                      outlined
                      color="gray"
                      class="grey--text"
                    >
                      看看其他課程
                    </v-btn>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-btn
                      height="40"
                      depressed
                      color="primary"
                      cols="12"
                      block
                      to="/purchase"
                    >
                      確認必填資訊，立即購買
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-card-text>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>

    <Footer />
  </div>
</template>

<script>
import BookingCourse from "./booking/booking_course.vue";
import BookingAbout from "./booking/booking_about.vue";
import FindPlanDialog from "~/components/dialog/find_a_plan_dialog.vue";
import Footer from "~/layouts/footer.vue";

export default {
  data() {
    return {
      findPlanDialog: false,
      picker: new Date().toISOString().substr(0, 10),
    };
  },
  components: {
    BookingCourse,
    BookingAbout,
    FindPlanDialog,
    Footer,
    headersSquare() {
      return [
        {
          text: "n",
          align: "right",
          class: "sticky-header title grey lighten-3",
          sortable: false,
          value: "n",
        },
        {
          text: "n²",
          align: "right",
          class: "sticky-header title grey lighten-3",
          sortable: false,
          value: "n2",
        },
      ];
    },
  },
  methods: {
    isCloseDialogListener(isClose) {
      if (isClose) {
        this.findPlanDialog = false;
      }
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
