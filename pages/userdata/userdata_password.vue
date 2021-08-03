<template>
  <div>
    <!-- 第1筆資料 -->
    <div class="mt-3 pa-4 dis-shadow v-card-border">
      <v-form>
        <v-container>
          <div
            class="grey--text text--darken-1"
            style="font-size: 14px; margin-bottom: 24px"
          >
            在成功變更密碼後，需重新登入。
          </div>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="輸入目前密碼"
                placeholder="請輸入舊密碼以確認身份"
                v-model="oldPwd"
                outlined
                :append-icon="isShowOldPwd ? 'mdi-eye' : 'mdi-eye-off'"
                :type="isShowOldPwd ? 'text' : 'password'"
                @click:append="isShowOldPwd = !isShowOldPwd"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                label="請輸入新密碼"
                placeholder="密碼 8-16 英文或數字"
                v-model="newPwd"
                :rules="[rules.pwdCounter]"
                outlined
                :append-icon="isShowNewPwd ? 'mdi-eye' : 'mdi-eye-off'"
                :type="isShowNewPwd ? 'text' : 'password'"
                @click:append="isShowNewPwd = !isShowNewPwd"
              ></v-text-field>
            </v-col>
          </v-row>

          <div style="text-align: right">
            <v-btn class="ma-2" color="primary" :disabled="isDisabled"
              >儲存</v-btn
            >
          </div>
        </v-container>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldPwd: "",
      newPwd: "",
      isShowOldPwd: false,
      isShowNewPwd: false,
      isDisabled: true,
      rules: {
        pwdCounter: (value) => {
          const pattern = /^[a-z0-9]{8,16}$/;
          return pattern.test(value) || "密碼 8-16 英文或數字";
        },
      },
    };
  },
  watch: {
    oldPwd: function (newValue) {
      var isDisabled = false;
      if (newValue == "" || this.newPwd == "") isDisabled = true;
      this.isDisabled = isDisabled;
    },
    newPwd: function (newValue) {
      var isDisabled = false;
      if (newValue == "" || this.oldPwd == "") isDisabled = true;
      this.isDisabled = isDisabled;
    },
  },
};
</script>