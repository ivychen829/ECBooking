<template>
  <div>
    <!-- 第1筆資料 -->
    <v-expansion-panels class="py-3">
      <v-expansion-panel>
        <v-expansion-panel-header expand-icon="mdi-menu-down">
          <v-list-item class="px-0">
            <v-list-item-content>
              <v-list-item-title>
                <span class="out-broder">定期</span>
                一年運動包方案
              </v-list-item-title>

              <v-list-item-subtitle class="v-sub-head pt-3">
                <p>2020/08/15 生效，2021/08/14 到期</p>
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-dialog persistent v-model="qrCodeDialog1" width="600" min-height="550">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="ma-2 rounded-pill"
                    outlined
                    tile
                    style="color: #ffffff; background: #91c423"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon left>icon-qrcode</v-icon>
                    掃描進場
                  </v-btn>
                </template>
                <QrcodeDialog
                  @isCloseDialogStream="isCloseDialogListener"
                  :type = "type1"
                ></QrcodeDialog>
              </v-dialog>
            </v-list-item-action>
          </v-list-item>
        </v-expansion-panel-header>

        <v-expansion-panel-content class="v-expansion-title-width">
          <v-divider class="my-2"></v-divider>
          <div class="ti-line-height">
            <div>
              <span>方案名稱</span>
              <span class="grey--text text--darken-1">一年運動包方案</span>
            </div>
            <div>
              <span>加值編號</span>
              <span class="grey--text text--darken-1">P20200815010166</span>
            </div>
            <div>
              <span>使用時間</span>
              <span class="grey--text text--darken-1"
                >2020/08/15 - 2021/08/14</span
              >
            </div>
            <div>
              <span>通行會館</span>
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
                        <span v-for="(place, index) in itemsPlace" :key="index">
                          <a class="grey--text text--darken-1"> {{ place }}</a>
                          <span v-if="index < itemsPlace.length - 1"> / </span>
                        </span>
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
              <span>購買時間</span>
              <span class="grey--text text--darken-1">2020/08/15 09:33</span>
            </div>
            <div>
              <span>付款方式</span>
              <span class="grey--text text--darken-1"
                >線上定期定額 (每月扣款)</span
              >
            </div>
            <div>
              <span>方案總計</span>
              <span class="grey--text text--darken-1"
                >7,200 元 (每期 600 元)</span
              >
            </div>
            <div>
              <span>期數</span>
              <span class="grey--text text--darken-1">第 8 期 / 共 12 期</span>
            </div>
            <div>
              <span>下期扣款</span>
              <span class="grey--text text--darken-1">2021/04/15</span>
            </div>
            <div>
              <span>扣款失敗</span>
              <span
                class="grey--text text--darken-1"
                style="color: red !important"
                >第 8 期</span
              >
            </div>
            <div>
              <span>未付款項</span>
              <span
                class="grey--text text--darken-1"
                style="color: red !important"
                >600 元</span
              >
            </div>
          </div>

          <v-divider class="my-2"></v-divider>

          <v-list-item class="px-0">
            <v-list-item-content>
              <v-list-item-title class="black--text"
                >更換扣款信用卡</v-list-item-title
              >
              <v-list-item-subtitle>
                <span
                  >更換扣款信用卡需進行線上信用卡授權。完成後，將綁定更新之信用卡進行後續扣款。</span
                >
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn class="ma-2" outlined color="primary">換卡扣款</v-btn>
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
                <span class="out-broder">定期</span>
                晨泳特訓
              </v-list-item-title>

              <v-list-item-subtitle class="v-sub-head pt-3">
                <p>2021/03/01 生效，2021/05/31 到期</p>
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-dialog persistent v-model="qrCodeDialog2" width="600" min-height="550">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="ma-2 rounded-pill"
                    outlined
                    tile
                    style="color: #ffffff; background: #91c423"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon left>icon-qrcode</v-icon>
                    掃描進場
                  </v-btn>
                </template>
                <QrcodeDialog
                  @isCloseDialogStream="isCloseDialogListener"
                  :type = "type2"
                ></QrcodeDialog>
              </v-dialog>
            </v-list-item-action>
          </v-list-item>
        </v-expansion-panel-header>

        <v-expansion-panel-content class="v-expansion-title-width">
          <v-divider class="my-2"></v-divider>
          <div class="ti-line-height">
            <div>
              <span>方案名稱</span>
              <span class="grey--text text--darken-1">一年運動包方案</span>
            </div>
            <div>
              <span>加值編號</span>
              <span class="grey--text text--darken-1">P20200815010166</span>
            </div>
            <div>
              <span>使用時間</span>
              <span class="grey--text text--darken-1"
                >2020/08/15 - 2021/08/14</span
              >
            </div>
            <div>
              <span>通行會館</span>
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
                        <span v-for="(place, index) in itemsPlace" :key="index">
                          <a class="grey--text text--darken-1"> {{ place }}</a>
                          <span v-if="index < itemsPlace.length - 1"> / </span>
                        </span>
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
              <span>購買時間</span>
              <span class="grey--text text--darken-1">2020/08/15 09:33</span>
            </div>
            <div>
              <span>付款方式</span>
              <span class="grey--text text--darken-1"
                >線上定期定額 (每月扣款)</span
              >
            </div>
            <div>
              <span>方案總計</span>
              <span class="grey--text text--darken-1"
                >7,200 元 (每期 600 元)</span
              >
            </div>
            <div>
              <span>期數</span>
              <span class="grey--text text--darken-1">第 8 期 / 共 12 期</span>
            </div>
            <div>
              <span>下期扣款</span>
              <span class="grey--text text--darken-1">2021/04/15</span>
            </div>
            <div>
              <span>扣款失敗</span>
              <span
                class="grey--text text--darken-1"
                style="color: red !important"
                >第 8 期</span
              >
            </div>
            <div>
              <span>未付款項</span>
              <span
                class="grey--text text--darken-1"
                style="color: red !important"
                >600 元</span
              >
            </div>
          </div>

          <v-divider class="my-2"></v-divider>

          <v-list-item class="px-0">
            <v-list-item-content>
              <v-list-item-title class="black--text"
                >更換扣款信用卡</v-list-item-title
              >
              <v-list-item-subtitle>
                <span
                  >更換扣款信用卡需進行線上信用卡授權。完成後，將綁定更新之信用卡進行後續扣款。</span
                >
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn class="ma-2" outlined color="primary">換卡扣款</v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import PlaceInfoDialog from "~/components/dialog/place_info_dialog.vue";
import QrcodeDialog from "~/components/dialog/qr_code_dialog.vue";

export default {
  data() {
    return {
      itemsPlace: ["大安館", "中安館", "忠孝館", "市民大道館", "市民小道館"],
      placeInfoDialog: false,
      qrCodeDialog1: false,
      qrCodeDialog2: false,
      type1: "scanned",
      type2: "scanner",
    };
  },
  components: {
    PlaceInfoDialog,
    QrcodeDialog,
  },
  methods: {
    isCloseDialogListener(isClose) {
      if (isClose) {
        this.placeInfoDialog = false;
        this.qrCodeDialog1 = false;
        this.qrCodeDialog2 = false;
      }
    },
  },
};
</script>