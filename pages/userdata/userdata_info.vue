<template>
  <div>
    <div class="my-6 grey--text text--darken-1 body-2">
      會員資料是作為預約/簽到時核對身份用，需完成填寫才可使用預約服務，請照實填寫避免影響您的權益，謝謝您。
    </div>
    <!-- 第1筆資料 -->
    <div class="mt-3 pa-4 dis-shadow v-card-border">
      <v-list-item>
        <v-list-item-action>
          <v-list-item-title>帳號</v-list-item-title>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title class="grey--text text--darken-1"
            >0922345678</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-action>
          <v-list-item-title>姓名</v-list-item-title>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title class="grey--text text--darken-1"
            >魏麗莎</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-action>
          <v-list-item-title>性別</v-list-item-title>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title class="grey--text text--darken-1"
            >女</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-action>
          <v-list-item-title>生日</v-list-item-title>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title class="grey--text text--darken-1"
            >1990/10/10</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </div>

    <!-- 第2筆資料 -->
    <div class="mt-3 pa-4 dis-shadow v-card-border">
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="E-mail"
                placeholder="lisa@mail.com"
                v-model="email"
                :rules="[rules.required, rules.emailCounter]"
                outlined
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="4">
              <v-select
                :items="userCity"
                label="地址(必填)"
                placeholder="請選擇縣市"
                outlined
              ></v-select>
            </v-col>

            <v-col cols="12" sm="8">
              <v-text-field
                label="地址(必填)"
                placeholder="請輸入地址"
                outlined
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                label="緊急聯絡人"
                placeholder="最多16個中文字"
                v-model="name"
                :rules="[rules.required, rules.nameCounter]"
                outlined
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                label="緊急聯絡人電話"
                placeholder="可輸入數字、+、-、#"
                v-model="phone"
                :rules="[rules.required, rules.phoneCounter]"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>

          <div style="text-align: right">
            <v-btn class="ma-2" color="primary">儲存變更</v-btn>
          </div>
        </v-container>
      </v-form>
    </div>

    <div class="mt-3 pa-4 dis-shadow v-card-border">
      <div class="pa-4"><h3>同行者資料</h3></div>
      <v-list-item>
        <v-list-item-action>
          <v-list-item-title>姓名</v-list-item-title>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title class="grey--text text--darken-1"
            >Judy</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-action>
          <v-list-item-title>性別</v-list-item-title>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title class="grey--text text--darken-1"
            >女</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-action>
          <v-list-item-title>生日</v-list-item-title>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title class="grey--text text--darken-1"
            >1950/02/01</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>

      <v-divider class="my-2"></v-divider>

      <v-list-item>
        <v-list-item-action>
          <v-list-item-title>姓名</v-list-item-title>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title class="grey--text text--darken-1"
            >Robin</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-action>
          <v-list-item-title>性別</v-list-item-title>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title class="grey--text text--darken-1"
            >男</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-action>
          <v-list-item-title>生日</v-list-item-title>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title class="grey--text text--darken-1"
            >1950/02/01</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      name: "",
      phone: "",
      userCity: [
        "基隆市",
        "台北市",
        "新北市",
        "桃園縣",
        "新竹市",
        "新竹縣",
        "苗栗縣",
        "台中市",
        "彰化縣",
        "南投縣",
        "雲林縣",
        "嘉義市",
        "嘉義縣",
        "台南市",
        "高雄市",
        "屏東縣",
        "台東縣",
        "花蓮縣",
        "宜蘭縣",
        "澎湖縣",
        "金門縣",
        "連江縣",
      ],
      rules: {
        required: (value) => !!value || "Required.",
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
        emailCounter: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
};
</script>