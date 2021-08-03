<template>
  <div>
    <v-container class="v-container-sm">
      <h1 class="pt-6" align="center">Hello! 新朋友，請填寫購買資訊</h1>
      <div align="center" class="pt-6 grey--text">
        您尚未加入會員，付款完成後，購買紀錄將存至您的 {BookFast} 註冊帳號
        {0922345678}。<br />
        若想使用其他帳號購買商品，請回上一步重新填寫手機號碼喔！
      </div>

      <!-- 商品明細 -->
      <div class="my-6">
        <v-container class="fill-height">
          <v-row align="center">
            <v-expansion-panels>
              <v-expansion-panel class="theme--unborder">
                <v-expansion-panel-header class="title">
                  商品明細
                </v-expansion-panel-header>

                <v-expansion-panel-content class="v-expansion-title-width">
                  <div class="ti-line-height">
                    <div>
                      <span>商品類型</span>
                      <span class="grey--text text--darken-1">課程預約</span>
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
                      <span class="grey--text text--darken-1"
                        >{速約運動中心} {大安館} {A307}</span
                      >
                    </div>
                    <div>
                      <span>會館地址</span>
                      <span class="grey--text text--darken-1"
                        >{台北市忠孝中路四段325號8樓}</span
                      >
                    </div>
                    <div>
                      <span>預約人數</span>
                      <span class="grey--text text--darken-1">{1} 人</span>
                    </div>
                    <div>
                      <span>付款方式</span>
                      <span class="grey--text text--darken-1"
                        >{一次付清/票券付款}</span
                      >
                    </div>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-row>
        </v-container>
      </div>

      <!-- 購買人資料 -->
      <div class="my-6">
        <v-container class="fill-height">
          <v-row class="v-card-border" align="center">
            <div class="pa-4"><h3>購買人資料</h3></div>
            <v-col cols="12" sm="12" class="px-6">
              <v-text-field
                label="手機號碼"
                placeholder="請輸入手機號碼"
                v-model="userPhone"
                :rules="[rules.phoneCounter]"
                outlined
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="12" class="px-6">
              <v-text-field
                label="姓名(必填)"
                placeholder="請輸入姓名"
                v-model="userName"
                :rules="[rules.required, rules.nameCounter]"
                outlined
              ></v-text-field>
            </v-col>

            <v-col cols="12" class="px-6">
              <v-text-field
                label="E-mail"
                placeholder="lisa@mail.com"
                v-model="userEmail"
                :rules="[rules.required, rules.emailCounter]"
                hint="請填寫有效email以接收本次交易/發票資訊 "
                persistent-hint
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <!-- 會員資料 -->
      <div class="my-6">
        <v-container class="fill-height">
          <v-row class="v-card-border" align="center">
            <div class="pa-4">
              <h3>會員資料</h3>
              <div class="mt-4 grey--text body-2">
                感謝您成為新會員！會員資料是作為預約/簽到時核對身份用，需完成填寫才可繼續使用預約服務，請照實填寫避免影響您的權益，謝謝您。
              </div>
            </div>

            <v-col cols="12" sm="12" class="px-6">
              <div class="mt-4 grey--text text--darken-1 caption">
                性別(必填)
              </div>
              <v-radio-group row class="mt-1">
                <v-radio label="男" value="1"></v-radio>
                <v-radio label="女" value="0"></v-radio>
              </v-radio-group>
            </v-col>

            <v-col cols="12" sm="12" class="px-6">
              <v-menu
                ref="memberBirth"
                v-model="memberBirth"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="dateFormatted"
                    hint="MM/DD/YYYY format"
                    persistent-hint
                    v-bind="attrs"
                    @blur="date = parseDate(dateFormatted)"
                    v-on="on"
                    label="生日(必填)"
                    placeholder="請選擇生日"
                    outlined
                    class="input-null"
                    append-icon="icon-date"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  no-title
                  @input="memberBirth = false"
                ></v-date-picker>
              </v-menu>
            </v-col>

            <v-col cols="12" sm="4" class="pl-6">
              <v-select
                :items="memberCity"
                label="地址(必填)"
                placeholder="請選擇縣市"
                outlined
              ></v-select>
            </v-col>
            <v-col cols="12" sm="8" class="pr-6">
              <v-text-field
                label="地址(必填)"
                placeholder="請輸入地址"
                outlined
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="12" class="px-6">
              <v-text-field
                label="緊急聯絡人"
                placeholder="最多16個中文字"
                v-model="emergencyContactName"
                :rules="[rules.nameCounter]"
                outlined
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="12" class="px-6">
              <v-text-field
                label="緊急聯絡人電話"
                placeholder="可輸入數字、+、-、#"
                v-model="emergencyContactPhone"
                :rules="[rules.phoneCounter]"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <!-- 發票資料 -->
      <div class="my-6">
        <v-container class="fill-height">
          <v-row class="v-card-border" align="center">
            <div class="pa-4"><h3>發票資料</h3></div>
            <v-col cols="12" sm="12" class="px-6">
              <v-select
                :items="items"
                label="選擇開立方式"
                hint="發票託管無開立紙本發票，中獎以email通知"
                persistent-hint
                dense
                outlined
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <!-- 付款資訊 -->
      <div class="my-6">
        <v-container class="fill-height">
          <v-row class="v-card-border" align="center">
            <div class="pa-4"><h3>付款資訊</h3></div>
            <v-col cols="12" sm="12" class="px-6">
              <div class="my-1 grey--text">信用卡</div>
              <div>
                <v-img src="/card.png" alt="信用卡" width="100" class="my-1" />
              </div>
            </v-col>
            <v-col cols="12" sm="12" class="px-6">
              <div class="my-1 grey--text">付款方式</div>
              <div>{一次付清 350 元}</div>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <!-- 我同意 -->
      <div class="my-6">
        <v-container class="fill-height">
          <v-row class="v-card-border" align="center">
            <div class="pa-4"><h3>付款資訊</h3></div>
            <v-col cols="12" sm="12" class="px-6 v-checkbox-inline">
              <v-checkbox
                label="我已閱讀並同意"
                color="success"
                hide-details
                class="mt-0 pt-0"
              ></v-checkbox>
              <span>
                <a href="javascript:void(0);">電子合約</a>
              </span>
            </v-col>
          </v-row>
        </v-container>
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
            to="booking_disabled"
          >
            回上一步
          </v-btn>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-btn
            height="40"
            depressed
            color="primary"
            cols="12"
            block
            to="/success"
          >
            確認購買
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <Footer />
  </div>
</template>

<script>
import Footer from "~/layouts/footer.vue";

export default {
  data() {
    return {
      items: ["代存電子發票", "代存電子發票2", "代存電子發票3"],
      userPhone: "",
      userName: "",
      userEmail: "",
      date: new Date().toISOString().substr(0, 10),
      memberBirth: false,
      dateFormatted: "",
      memberCity: ["foo", "bar", "fizz", "buzz"],
      emergencyContactName: "",
      emergencyContactPhone: "",
      rules: {
        required: (value) => !!value || "Required.",
        emailCounter: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
        nameCounter: (value) => {
          const pattern = /^[\u4e00-\u9fa5]{1,16}|[a-z0-9]{1,32}$/;
          return pattern.test(value) || "不能超過16中文字 (32個英數字)";
        },
        phoneCounter: (value) => {
          const patternNumberOnly = /^[0-9+\-#]*$/;
          if (!patternNumberOnly.test(value)) return "格式錯誤";
          const patternNumberSize = /^[0-9+\-#]{5,32}$/;
          if (!patternNumberSize.test(value)) return "請輸入5-32個數字";
          return true;
        },
      },
    };
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },
  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    },
  },
  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
  },
  components: {
    Footer,
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
