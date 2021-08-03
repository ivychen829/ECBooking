<template>
  <div>
    <!-- 第1筆資料 -->
    <v-expansion-panels class="py-3">
      <v-expansion-panel>
        <v-expansion-panel-header expand-icon="mdi-menu-down">
          <v-list-item class="px-0">
            <v-list-item-content>
              <v-list-item-title>
                <span class="out-broder">1人</span>
                延伸瑜伽
              </v-list-item-title>

              <v-list-item-subtitle class="v-sub-head pt-3">
                <p>大安館 Linda</p>
                <p>2021/03/11(四) 16:00-17:00</p>
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-menu offset-y>
                <template v-slot:activator="{ on: menu, attrs: attMenu }">
                  <v-btn class="ma-2 rounded-pill" outlined tile color="grey">
                    預約會員專屬按鈕
                  </v-btn>
                  <v-tooltip bottom>
                    <template
                      v-slot:activator="{ on: tooltip, attrs: attTooltip }"
                    >
                      <v-btn
                        class="ma-2 rounded-pill"
                        outlined
                        tile
                        icon
                        color="grey lighten-1"
                        v-bind="{ ...attMenu, ...attTooltip }"
                        v-on="{ ...menu, ...tooltip }"
                        @click="loader = 'loading'"
                      >
                        <v-icon color="grey text--darken-3" small>icon-reservation</v-icon>
                      </v-btn>
                    </template>
                    <span>加入行事曆</span>
                  </v-tooltip>
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
            </v-list-item-action>
          </v-list-item>
        </v-expansion-panel-header>

        <v-expansion-panel-content class="v-expansion-title-width">
          <v-divider class="my-2"></v-divider>

          <v-list-item class="px-0">
            <v-list-item-content>
              <v-list-item-title class="black--text"
                >課程簽到</v-list-item-title
              >
              <v-list-item-subtitle
                >將於課程當日
                <span>2020/03/11開放線上簽到</span>
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-dialog persistent v-model="checkInDialog1" max-width="650px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="ma-2" color="primary" v-bind="attrs" v-on="on"
                    >線上簽到</v-btn
                  >
                </template>
                <CheckInDialog
                  @isCloseDialogStream="isCloseDialogListener"
                  :type="type1"
                  :count="count1"
                ></CheckInDialog>
              </v-dialog>
            </v-list-item-action>
          </v-list-item>

          <v-divider class="my-2"></v-divider>
          <div class="ti-line-height">
            <div>
              <span>訂購時間</span>
              <span class="grey--text text--darken-1">2021/03/11 07:28</span>
            </div>
            <div>
              <span>預約編號</span>
              <span class="grey--text text--darken-1">B202103111620166</span>
            </div>
            <div>
              <span>授課地點</span>
              <span class="grey--text text--darken-1"
                >速約運動中心 大安館 A307</span
              >
            </div>
            <div>
              <span>會館地址</span>
              <v-dialog persistent v-model="placeInfoDialog" max-width="650px">
                <template v-slot:activator="{ on: dialog, attrs: attDialog }">
                  <v-tooltip bottom>
                    <template
                      v-slot:activator="{ on: tooltip, attrs: attTooltip }"
                    >
                      <span
                        class="grey--text text--darken-1"
                        v-bind="{ ...attTooltip, ...attDialog }"
                        v-on="{ ...tooltip, ...dialog }"
                      >
                        <a class="grey--text text--darken-1">台北市忠孝中路四段325巷8號</a>
                      </span>
                    </template>
                    <span>查看會館資訊</span>
                  </v-tooltip>
                </template>
                <PlaceInfoDialog
                  @isCloseDialogStream="isCloseDialogListener"
                ></PlaceInfoDialog>
              </v-dialog>
            </div>
            <div>
              <span>預約人數</span>
              <span class="grey--text text--darken-1">1人</span>
            </div>
            <div>
              <span>付款方式</span>
              <span class="grey--text text--darken-1">票券付款</span>
            </div>
            <div>
              <span>付款金額</span>
              <span class="grey--text text--darken-1"
                >小班定期團課 套票1堂</span
              >
            </div>
          </div>

          <v-divider class="my-2"></v-divider>

          <v-list-item class="px-0">
            <v-list-item-content>
              <v-list-item-subtitle
                >此課程 2021/03/11 14:00 之後不可取消預約</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >取消後將退還預約時的票劵，若您是刷卡購買課程，請聯繫我們取消</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-action>
              <v-dialog persistent v-model="checkOutDialog1" max-width="650px">
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
                  :type="type4"
                ></CheckOutDialog>
              </v-dialog>
            </v-list-item-action>
          </v-list-item>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <!-- 第2筆資料 -->
    <v-expansion-panels class="py-3">
      <v-expansion-panel>
        <v-expansion-panel-header expand-icon="mdi-menu-down">
          <v-list-item class="px-0">
            <v-list-item-content>
              <v-list-item-title>
                <span class="out-broder">1人</span>
                吃的健康講堂(含午餐)
              </v-list-item-title>

              <v-list-item-subtitle class="v-sub-head pt-3">
                <p>忠孝館 王醫生團隊</p>
                <p>2021/03/13(六) 16:00-17:00</p>
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-menu offset-y>
                <template v-slot:activator="{ on: menu, attrs: attMenu }">
                  <v-btn class="ma-2 rounded-pill" outlined tile color="primary">
                    線上視訊課網址
                  </v-btn>
                  <v-tooltip bottom>
                    <template
                      v-slot:activator="{ on: tooltip, attrs: attTooltip }"
                    >
                      <v-btn
                        class="ma-2 rounded-pill"
                        outlined
                        tile
                        icon
                        color="grey lighten-1"
                        v-bind="{ ...attMenu, ...attTooltip }"
                        v-on="{ ...menu, ...tooltip }"
                        @click="loader = 'loading'"
                      >
                        <v-icon color="grey text--darken-3" small>icon-reservation</v-icon>
                      </v-btn>
                    </template>
                    <span>加入行事曆</span>
                  </v-tooltip>
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
            </v-list-item-action>
          </v-list-item>
        </v-expansion-panel-header>

        <v-expansion-panel-content class="v-expansion-title-width">
          <v-divider class="my-2"></v-divider>

          <v-list-item class="px-0">
            <v-list-item-content>
              <v-list-item-title class="black--text"
                >課程簽到</v-list-item-title
              >
              <v-list-item-subtitle
                >將於課程當日
                <span>2020/03/11開放線上簽到</span>
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-dialog persistent v-model="checkInDialog2" max-width="650px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="ma-2" color="primary" v-bind="attrs" v-on="on"
                    >線上簽到</v-btn
                  >
                </template>
                <CheckInDialog
                  @isCloseDialogStream="isCloseDialogListener"
                  :type="type2"
                  :count="count2"
                ></CheckInDialog>
              </v-dialog>
            </v-list-item-action>
          </v-list-item>

          <v-divider class="my-2"></v-divider>
          <div class="ti-line-height">
            <div>
              <span>訂購時間</span>
              <span class="grey--text text--darken-1">2021/03/11 07:28</span>
            </div>
            <div>
              <span>預約編號</span>
              <span class="grey--text text--darken-1">B202103111620166</span>
            </div>
            <div>
              <span>授課地點</span>
              <span class="grey--text text--darken-1"
                >速約運動中心 大安館 A307</span
              >
            </div>
            <div>
              <span>會館地址</span>
              <v-dialog persistent v-model="placeInfoDialog" max-width="650px">
                <template v-slot:activator="{ on: dialog, attrs: attDialog }">
                  <v-tooltip bottom>
                    <template
                      v-slot:activator="{ on: tooltip, attrs: attTooltip }"
                    >
                      <span
                        class="grey--text text--darken-1"
                        v-bind="{ ...attTooltip, ...attDialog }"
                        v-on="{ ...tooltip, ...dialog }"
                      >
                        <a class="grey--text text--darken-1">台北市忠孝中路四段325巷8號</a>
                      </span>
                    </template>
                    <span>查看會館資訊</span>
                  </v-tooltip>
                </template>
                <PlaceInfoDialog
                  @isCloseDialogStream="isCloseDialogListener"
                ></PlaceInfoDialog>
              </v-dialog>
            </div>
            <div>
              <span>預約人數</span>
              <span class="grey--text text--darken-1">5人</span>
            </div>
            <div>
              <span>付款方式</span>
              <span class="grey--text text--darken-1">票券付款</span>
            </div>
            <div>
              <span>付款金額</span>
              <span class="grey--text text--darken-1"
                >小班定期團課 套票1堂</span
              >
            </div>
          </div>

          <v-divider class="my-2"></v-divider>

          <v-list-item class="px-0">
            <v-list-item-content>
              <v-list-item-subtitle
                >此課程 2021/03/11 14:00 之後不可取消預約</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >取消後將退還預約時的票劵，若您是刷卡購買課程，請聯繫我們取消</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-action>
              <v-dialog persistent v-model="checkOutDialog2" max-width="650px">
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
                  :type="type5"
                ></CheckOutDialog>
              </v-dialog>
            </v-list-item-action>
          </v-list-item>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <!-- 第3筆資料 -->
    <v-expansion-panels class="py-3">
      <v-expansion-panel>
        <v-expansion-panel-header expand-icon="mdi-menu-down">
          <v-list-item class="px-0">
            <v-list-item-content>
              <v-list-item-title>
                <span class="out-broder">1人</span>
                延伸瑜伽
              </v-list-item-title>

              <v-list-item-subtitle class="v-sub-head pt-3">
                <p>大安館 Linda</p>
                <p>2021/03/11(四) 16:00-17:00</p>
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-menu offset-y>
                <template v-slot:activator="{ on: menu, attrs: attMenu }">
                  <v-btn class="ma-2 rounded-pill" outlined tile color="primary">
                    請於17:50前進入視訊課
                  </v-btn>
                  <v-tooltip bottom>
                    <template
                      v-slot:activator="{ on: tooltip, attrs: attTooltip }"
                    >
                      <v-btn
                        class="ma-2 rounded-pill"
                        outlined
                        tile
                        icon
                        color="grey lighten-1"
                        v-bind="{ ...attMenu, ...attTooltip }"
                        v-on="{ ...menu, ...tooltip }"
                        @click="loader = 'loading'"
                      >
                        <v-icon color="grey text--darken-3" small>icon-reservation</v-icon>
                      </v-btn>
                    </template>
                    <span>加入行事曆</span>
                  </v-tooltip>
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
            </v-list-item-action>
          </v-list-item>
        </v-expansion-panel-header>

        <v-expansion-panel-content class="v-expansion-title-width">
          <v-divider class="my-2"></v-divider>

          <v-list-item class="px-0">
            <v-list-item-content>
              <v-list-item-title class="black--text"
                >課程簽到</v-list-item-title
              >
              <v-list-item-subtitle
                >將於課程當日
                <span>2020/03/11開放線上簽到</span>
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-dialog persistent v-model="checkInDialog3" max-width="650px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="ma-2" color="primary" v-bind="attrs" v-on="on"
                    >線上簽到</v-btn
                  >
                </template>
                <CheckInDialog
                  @isCloseDialogStream="isCloseDialogListener"
                  :type="type3"
                  :count="count2"
                ></CheckInDialog>
              </v-dialog>
            </v-list-item-action>
          </v-list-item>

          <v-divider class="my-2"></v-divider>
          <div class="ti-line-height">
            <div>
              <span>訂購時間</span>
              <span class="grey--text text--darken-1">2021/03/11 07:28</span>
            </div>
            <div>
              <span>預約編號</span>
              <span class="grey--text text--darken-1">B202103111620166</span>
            </div>
            <div>
              <span>授課地點</span>
              <span class="grey--text text--darken-1"
                >速約運動中心 大安館 A307</span
              >
            </div>
            <div>
              <span>會館地址</span>
              <v-dialog persistent v-model="placeInfoDialog" max-width="650px">
                <template v-slot:activator="{ on: dialog, attrs: attDialog }">
                  <v-tooltip bottom>
                    <template
                      v-slot:activator="{ on: tooltip, attrs: attTooltip }"
                    >
                      <span
                        class="grey--text text--darken-1"
                        v-bind="{ ...attTooltip, ...attDialog }"
                        v-on="{ ...tooltip, ...dialog }"
                      >
                        <a class="grey--text text--darken-1">台北市忠孝中路四段325巷8號</a>
                      </span>
                    </template>
                    <span>查看會館資訊</span>
                  </v-tooltip>
                </template>
                <PlaceInfoDialog
                  @isCloseDialogStream="isCloseDialogListener"
                ></PlaceInfoDialog>
              </v-dialog>
            </div>
            <div>
              <span>預約人數</span>
              <span class="grey--text text--darken-1">5人</span>
            </div>
            <div>
              <span>付款方式</span>
              <span class="grey--text text--darken-1">票券付款</span>
            </div>
            <div>
              <span>付款金額</span>
              <span class="grey--text text--darken-1"
                >小班定期團課 套票1堂</span
              >
            </div>
          </div>

          <v-divider class="my-2"></v-divider>

          <v-list-item class="px-0">
            <v-list-item-content>
              <v-list-item-subtitle
                >此課程 2021/03/11 14:00 之後不可取消預約</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >取消後將退還預約時的票劵，若您是刷卡購買課程，請聯繫我們取消</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-action>
              <v-dialog persistent v-model="checkOutDialog3" max-width="650px">
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
                  :type="type6"
                ></CheckOutDialog>
              </v-dialog>
            </v-list-item-action>
          </v-list-item>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <!-- <div v-for="{num, string} in extraContent" :key="num">{{num}} : {{ string }}</div> -->
  </div>
</template>

<script>
import PlaceInfoDialog from "~/components/dialog/place_info_dialog.vue";
import CheckInDialog from "~/components/dialog/check_in_dialog.vue";
import CheckOutDialog from "~/components/dialog/check_out_dialog.vue";

export default {
  data() {
    return {
      count1: 1,
      count2: 5,
      type1: "single",
      type2: "multiple",
      type3: "friends",
      type4: "success",
      type5: "failed",
      type6: "illegal",
      placeInfoDialog: false,
      checkInDialog1: false,
      checkInDialog2: false,
      checkInDialog3: false,
      checkOutDialog1: false,
      checkOutDialog2: false,
      checkOutDialog3: false,
      subItems: [
        { title: "Apple", image: "/apple.svg" },
        { title: "Google", image: "/google.svg" },
        { title: "Outlook", image: "/outlook.svg" },
        { title: "Yahoo", image: "/yahoo.svg" },
      ],
    };
  },
  components: {
    PlaceInfoDialog,
    CheckInDialog,
    CheckOutDialog,
  },
  methods: {
    isCloseDialogListener(isClose) {
      if (isClose) {
        this.placeInfoDialog = false;
        this.checkInDialog1 = false;
        this.checkInDialog2 = false;
        this.checkInDialog3 = false;
        this.checkOutDialog1 = false;
        this.checkOutDialog2 = false;
        this.checkOutDialog3 = false;
      }
      Object.assign(this.$data, this.$options.data.call(this));
    },
  },
};
</script>