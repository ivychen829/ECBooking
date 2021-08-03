<template>
  <v-card class="v-dialog-sty">
    <div class="v-dialog--header">
      <HeaderMenu></HeaderMenu>
    </div>

    <v-card-title class="text-h5">
      BookFast運動中心
      <v-spacer></v-spacer>
      <v-btn icon class="float-right" @click="close()">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>

    <v-divider></v-divider>

    <!-- Register Step 1 -->
    <v-container v-if="currentAction === 'register' && currentStep === 1">
      <div>
        <v-card-text class="text-center pb-0 font-weight-medium subtitle-1"
          >註冊新帳號</v-card-text
        >
        <v-card-text class="text-center pb-0 grey--text text--darken-1"
          >手機號碼將作為你的登入帳號</v-card-text
        >
        <div class="container mx-auto" elevation="12">
          <v-row class="px-5">
            <v-col cols="12" sm="12">
              <v-text-field
                placeholder="請輸入手機號碼"
                prepend-inner-icon="icon-accounts"
                outlined
                class="input-null"
              ></v-text-field>
              <div class="body-2 my-4 grey--text text--darken-1">
                我們將會以簡訊方式傳送首次使用的驗證碼給此手機。請確保手機收訊順暢，並暫時關閉阻擋廣告簡訊之功能，即可順利收到驗證碼。
              </div>
              <v-btn
                color="success"
                block
                @click="nextStep(currentAction, currentStep + 1)"
                >下一步</v-btn
              >

              <span class="divider line razor my-6" contenteditable>或</span>
              <v-btn class="btn-lineColor" block>
                <v-icon left>icon-line</v-icon>
                使用 LINE 登入或註冊
              </v-btn>
            </v-col>
          </v-row>

          <v-card-text class="text-center my-2">
            <div class="my-2">
              已經是會員了嗎？
              <a href="javascript:void(0);" @click="goToAction('login')"
                >立即登入</a
              >
            </div>
          </v-card-text>
        </div>
      </div>
    </v-container>

    <!-- Register Step 2 -->
    <v-container v-if="currentAction === 'register' && currentStep === 2">
      <div>
        <v-card-text class="text-center pb-0 font-weight-bold"
          ><h3>註冊新帳號</h3></v-card-text
        >
        <v-card-text class="text-center grey--text text--darken-1"
          >已將簡訊傳至 0922 345 678，請收取並輸入驗證碼</v-card-text
        >
        <div class="container mx-auto" elevation="12">
          <v-row class="px-5">
            <v-col cols="12" sm="12" class="pb-12">
              <v-text-field
                placeholder="請輸入驗證碼"
                prepend-inner-icon="icon-key"
                outlined
                class="input-null"
                suffix="02:59 後失效"
              ></v-text-field>
              <div class="body-2 my-4 grey--text text--darken-1"
                >若收訊環境不佳，或號碼被設定阻擋廣告簡訊，可能會無法收取驗證碼。
              </div>
              <v-btn
                color="success"
                block
                @click="nextStep(currentAction, currentStep + 1)"
                >下一步</v-btn
              >
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>

    <!-- Register Step 3 -->
    <v-container
      v-if="currentAction === 'register' && currentStep === 3"
      class="pa-0"
    >
      <v-card-text class="text-center pb-0 font-weight-bold"
        ><h3>註冊新帳號</h3></v-card-text
      >
      <v-card-text class="text-center px-10">
        <div>要完成啦！請設定密碼</div>
        會員資料是作為預約/簽到時核對身份用，需完成填寫才可使用預約服務，請照實填寫避免影響您的權益，謝謝您。
      </v-card-text>
      <div class="mx-auto" elevation="12">
        <v-row class="px-12">
          <v-col cols="12" sm="12" class="py-6">
            <v-text-field
              placeholder="密碼 8-16 英文或數字"
              prepend-inner-icon="icon-password"
              :append-icon="isShowPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="isShowPassword ? 'text' : 'password'"
              outlined
              @click:append="isShowPassword = !isShowPassword"
              class="input-null"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-divider class="my-2"></v-divider>

        <v-row class="px-12">
          <v-col cols="12" sm="12" class="py-6">
            <v-text-field
              label="姓名(必填)"
              placeholder="最多16個中文字"
              outlined
              class="input-null"
            ></v-text-field>

            <div class="mt-4 grey--text text--darken-1 caption">性別(必填)</div>
            <v-radio-group row class="mt-1">
              <v-radio label="男" value="1"></v-radio>
              <v-radio label="女" value="0"></v-radio>
            </v-radio-group>

            <v-menu
              ref="userBirth"
              v-model="userBirth"
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
                @input="userBirth = false"
              ></v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="12" sm="4" class="">
            <v-select
              :items="userCity"
              label="地址(必填)"
              placeholder="請選擇縣市"
              outlined
            ></v-select>
          </v-col>
          <v-col cols="12" sm="8" class="">
            <v-text-field
              label="地址(必填)"
              placeholder="請輸入地址"
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="12" class="pb-12 pt-0 v-checkbox-inline">
            <v-checkbox
              label="我已詳閱並同意"
              color="success"
              hide-details
              class="mt-0 pt-0"
            ></v-checkbox>
            <span>
              <a href="javascript:void(0);">服務條款</a> 及
              <a href="javascript:void(0);">隱私保護政策</a>
            </span>

            <v-btn color="success" block @click="submit()" class="mt-2"
              >填寫完成</v-btn
            >
          </v-col>
        </v-row>
      </div>
    </v-container>

    <!-- Login Step 1 -->
    <v-container v-if="currentAction === 'login' && currentStep === 1">
      <v-card-text class="text-center pb-0">會員登入</v-card-text>

      <div class="container mx-auto" elevation="12">
        <v-row class="px-12">
          <v-col cols="12" sm="12">
            <div class="fieldset mb-6">
              <v-text-field class="pt-0" prepend-inner-icon="icon-accounts">
                <v-icon>icon-pass</v-icon>
              </v-text-field>
              <v-divider class="my-2"></v-divider>
              <v-text-field
                class="pt-0"
                :append-icon="isShowPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="isShowPassword ? 'text' : 'password'"
                prepend-inner-icon="icon-password"
                name="input-10-2"
                @click:append="isShowPassword = !isShowPassword"
              ></v-text-field>
            </div>

            <v-row class="mb-4">
              <v-col cols="auto" class="mr-auto">
                <div>
                  <v-checkbox
                    label="記住帳號"
                    color="success"
                    hide-details
                    class="mt-0 pt-0"
                  ></v-checkbox>
                </div>
              </v-col>

              <v-col cols="auto">
                <div>
                  <a
                    href="javascript:void(0);"
                    @click="goToAction('forgetPwd')"
                    class="float-right"
                    >忘記密碼</a
                  >
                </div>
              </v-col>
            </v-row>

            <v-btn color="success" block @click="submit()">登入</v-btn>

            <span class="divider line razor my-6" contenteditable>或</span>

            <v-btn class="btn-lineColor" block>
              <v-icon left>icon-line</v-icon>
              使用 LINE 登入或註冊
            </v-btn>
          </v-col>
        </v-row>

        <v-card-text class="text-center my-2">
          <div class="my-2">
            還不是會員嗎？
            <a href="javascript:void(0);" @click="goToAction('register')"
              >立即註冊</a
            >
          </div>

          <div class="my-2">
            已是會館會員嗎？
            <a href="javascript:void(0);" @click="goToAction('verifyAcc')"
              >驗證帳號</a
            >
          </div>
        </v-card-text>
      </div>
    </v-container>

    <!-- Verify Step 1 -->
    <v-container v-if="currentAction === 'verifyAcc' && currentStep === 1">
      <div>
        <v-card-text class="text-center pb-0 font-weight-bold"
          ><h3>驗證帳號</h3></v-card-text
        >
        <v-card-text class="text-center pb-0"
          >此服務僅適用於已是會館會員，非會員請先註冊或洽客服人員</v-card-text
        >
        <div class="container mx-auto" elevation="12">
          <v-row class="px-12">
            <v-col cols="12" sm="12" class="pb-12">
              <v-text-field
                placeholder="請輸入手機號碼"
                prepend-inner-icon="icon-user"
                outlined
                class="input-null"
              ></v-text-field>
              <v-card-text
                >我們將會以簡訊方式傳送首次使用的驗證碼給此手機。請確保手機收訊順暢，並暫時關閉阻擋廣告簡訊之功能，即可順利收到驗證碼。
              </v-card-text>
              <v-btn
                color="success"
                block
                @click="nextStep(currentAction, currentStep + 1)"
                >下一步</v-btn
              >
              <v-card-text class="text-center my-2">
                <div class="my-2">
                  <a href="javascript:void(0);" @click="goToAction('register')"
                    >回到登入/註冊</a
                  >
                </div>
              </v-card-text>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>

    <!-- Verify Step 2 -->
    <v-container v-if="currentAction === 'verifyAcc' && currentStep === 2">
      <div>
        <v-card-text class="text-center pb-0 font-weight-bold"
          ><h3>驗證帳號</h3></v-card-text
        >
        <v-card-text class="text-center pb-0"
          >已將簡訊傳至 0922 345 678，請收取並輸入驗證碼</v-card-text
        >
        <div class="container mx-auto" elevation="12">
          <v-row class="px-12">
            <v-col cols="12" sm="12" class="pb-12">
              <v-text-field
                placeholder="請輸入驗證碼"
                prepend-inner-icon="icon-key"
                outlined
                class="input-null"
                suffix="02:59 後失效"
              ></v-text-field>
              <v-card-text
                >若收訊環境不佳，或號碼被設定阻擋廣告簡訊，可能會無法收取驗證碼。
              </v-card-text>
              <v-btn
                color="success"
                block
                @click="nextStep(currentAction, currentStep + 1)"
                >下一步</v-btn
              >
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>

    <!-- Verify Step 3 -->
    <v-container v-if="currentAction === 'verifyAcc' && currentStep === 3">
      <div>
        <v-card-text class="text-center pb-0 font-weight-bold"
          ><h3>驗證帳號</h3></v-card-text
        >
        <v-card-text class="text-center pb-0">要完成啦！請設定密碼</v-card-text>
        <div class="container mx-auto" elevation="12">
          <v-row class="px-12">
            <v-col cols="12" sm="12" class="pb-12">
              <v-text-field
                placeholder="密碼8~16英文或數字"
                :append-icon="isShowPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="isShowPassword ? 'text' : 'password'"
                prepend-inner-icon="icon-password"
                @click:append="isShowPassword = !isShowPassword"
              ></v-text-field>
              <v-card-text
                >我們將會以簡訊方式傳送首次使用的驗證碼給此手機。請確保手機收訊順暢，並暫時關閉阻擋廣告簡訊之功能，即可順利收到驗證碼。
              </v-card-text>
              <v-card-text class="text-center my-2">
                <div class="my-2 v-checkbox-inline">
                  <v-checkbox
                    label="我已詳閱並同意"
                    color="success"
                    hide-details
                    class="mt-0 pt-0"
                  ></v-checkbox>
                  <span>
                    <a href="javascript:void(0);">服務條款</a> 及
                    <a href="javascript:void(0);">隱私保護政策</a>
                  </span>
                </div>
              </v-card-text>

              <v-btn color="success" block @click="submit()">填寫完成</v-btn>
              <v-card-text class="text-center my-2"> </v-card-text>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>

    <!-- Forget Step 1 -->
    <v-container v-if="currentAction === 'forgetPwd' && currentStep === 1">
      <div>
        <v-card-text class="text-center pb-0 font-weight-bold"
          ><h3>重設密碼</h3></v-card-text
        >
        <v-card-text class="text-center pb-0"
          >請輸入你的手機號碼以確認身份</v-card-text
        >
        <div class="container mx-auto" elevation="12">
          <v-row class="px-12">
            <v-col cols="12" sm="12" class="pb-12">
              <v-text-field
                placeholder="請輸入手機號碼"
                prepend-inner-icon="icon-user"
                outlined
                class="input-null"
              ></v-text-field>
              <v-card-text
                >我們將會以簡訊方式傳送首次使用的驗證碼給此手機。請確保手機收訊順暢，並暫時關閉阻擋廣告簡訊之功能，即可順利收到驗證碼。
              </v-card-text>
              <v-btn
                color="success"
                block
                @click="nextStep(currentAction, currentStep + 1)"
                >下一步</v-btn
              >
              <v-card-text class="text-center my-2">
                <div class="my-2">
                  <a href="javascript:void(0);" @click="goToAction('register')"
                    >回到登入/註冊</a
                  >
                </div>
              </v-card-text>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>

    <!-- Forget Step 2 -->
    <v-container v-if="currentAction === 'forgetPwd' && currentStep === 2">
      <div>
        <v-card-text class="text-center pb-0 font-weight-bold"
          ><h3>重設密碼</h3></v-card-text
        >
        <v-card-text class="text-center pb-0"
          >已將簡訊傳至 0922 345 678，請收取並輸入驗證碼</v-card-text
        >
        <div class="container mx-auto" elevation="12">
          <v-row class="px-12">
            <v-col cols="12" sm="12" class="pb-12">
              <v-text-field
                placeholder="請輸入驗證碼"
                prepend-inner-icon="icon-key"
                outlined
                class="input-null"
                suffix="02:59 後失效"
              ></v-text-field>
              <v-card-text
                >若收訊環境不佳，或號碼被設定阻擋廣告簡訊，可能會無法收取驗證碼。
              </v-card-text>
              <v-btn
                color="success"
                block
                @click="nextStep(currentAction, currentStep + 1)"
                >下一步</v-btn
              >
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>

    <!-- Forget Step 3 -->
    <v-container v-if="currentAction === 'forgetPwd' && currentStep === 3">
      <div>
        <v-card-text class="text-center pb-0 font-weight-bold"
          ><h3>重設密碼</h3></v-card-text
        >
        <v-card-text class="text-center pb-0">要完成啦！請設定密碼</v-card-text>
        <div class="container mx-auto" elevation="12">
          <v-row class="px-12">
            <v-col cols="12" sm="12" class="pb-12">
              <v-text-field
                placeholder="密碼8~16英文或數字"
                :append-icon="isShowPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="isShowPassword ? 'text' : 'password'"
                prepend-inner-icon="icon-password"
                @click:append="isShowPassword = !isShowPassword"
              ></v-text-field>
              <v-card-text class="text-center my-2">
                <div class="my-2">
                  <v-checkbox
                    label="我已詳閱並同意"
                    color="success"
                    hide-details
                    class="mt-0 pt-0"
                  ></v-checkbox
                  ><a href="javascript:void(0);">服務條款</a> 及
                  <a href="javascript:void(0);">隱私保護政策</a>
                </div>
              </v-card-text>
              <v-btn color="success" block @click="submit()">填寫完成</v-btn>
              <v-card-text class="text-center my-2"> </v-card-text>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
  </v-card>
</template>

<script>
import HeaderMenu from "@/layouts/header.vue";
export default {
  components: {
    HeaderMenu,
  },
  data() {
    return {
      currentAction: "register",
      currentStep: 1,
      isShowPassword: false,
      date: new Date().toISOString().substr(0, 10),
      userBirth: false,
      dateFormatted: "",
      userCity: ["foo", "bar", "fizz", "buzz"],
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
    nextStep(action, step) {
      this.currentAction = action;
      this.currentStep = step;
    },
    goToAction(action) {
      this.currentAction = action;
      this.currentStep = 1;
    },
    reset() {
      Object.assign(this.$data,this.$options.data.call(this));
    },
    submit() {
      //do something
      this.close();
    },
    close() {
      this.$emit("isCloseDialogStream", true, "user_login");
      this.reset();
    },
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
};
</script>