<template>
    <v-card>
      <v-card-title class="text-h5">
        BookFast運動中心
        <v-spacer></v-spacer>
        <v-btn icon class="float-right">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-divider class="my-2"></v-divider>
      <v-card-text class="text-center pb-0">會員登入</v-card-text>

      <div class="container mx-auto" elevation="12">
        <v-row class="px-12">
          <v-col
            cols="12"
            sm="12"
          >
            <div class="fieldset mb-6">
              <v-text-field class="pt-0" prepend-inner-icon="icon-accounts">
                <v-icon>icon-pass</v-icon>
              </v-text-field>
              <v-divider class="my-2"></v-divider>
              <v-text-field class="pt-0"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                prepend-inner-icon="icon-password"
                name="input-10-2"
                @click:append="show1 = !show1"
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
                  <a href="" class="float-right">忘記密碼</a>
                </div>
              </v-col>
            </v-row>

            <v-btn color="success" block>登入</v-btn>

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
            <a href="">立即註冊</a>
          </div>

          <div class="my-2">
            已是會館會員嗎？
            <a href="">驗證帳號</a>
          </div>
        </v-card-text>
      </div>
    </v-card>
</template>

<script>
  export default {
    data () {
      return {
        show1: false,
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
        },
      }
    },
  }
</script>