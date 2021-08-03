<template>
  <div class="dis-shadow v-card-border">
    <v-card-title class="text-h5 px-8">
      店家資訊
      <v-spacer></v-spacer>
      <v-btn icon class="float-right" @click="close()">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>

    <v-divider class="my-2"></v-divider>

    <v-container>
      <v-row>
        <v-col cols="12" sm="1">
          <!-- <v-img
            src="/map.png"
            alt="請掃描QR Code"
            width="300"
            justify="center"
          ></v-img> -->
        </v-col>

        <v-col cols="12" sm="11">
          <div class="my-2"><b>大安館</b></div>
          <v-list-item class="pa-0">
            <v-list-item-content class="py-2">
              <v-list-item-title class="grey--text text--darken-1">
                <v-icon class="mr-2">icon-map</v-icon>
                台北市大安區敦化南路二段77號1樓
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item class="pa-0">
            <v-list-item-content class="py-2">
              <v-list-item-title class="grey--text text--darken-1">
                <v-icon class="mr-2">icon-phone</v-icon>
                02-8712-2837
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-expansion-panels>
            <v-expansion-panel class="theme--null theme--unborder">
              <v-expansion-panel-header @click="updatePanelExpandIcon()">
                <v-list-item class="pa-0">
                  <v-list-item-content class="py-2">
                    <v-list-item-title class="grey--text text--darken-1">
                      <v-icon class="mr-2">icon-time</v-icon>
                      營業中 09:00-18:00
                    </v-list-item-title>
                    <template v-slot:actions>
                      <v-icon left>mdi-menu-down</v-icon>
                    </template>
                  </v-list-item-content>
                </v-list-item>
              </v-expansion-panel-header>

              <v-expansion-panel-content class="v-expansion-title-width">
                <v-list-item class="px-3">
                  <v-list-item-content>
                    <v-list-item-title class="grey--text"
                      >星期一&emsp;09:00 - 18:00</v-list-item-title
                    >
                    <v-list-item-title class="grey--text"
                      >星期二&emsp;09:00 - 18:00</v-list-item-title
                    >
                    <v-list-item-title class="primary--text"
                      >星期三&emsp;09:00 - 18:00</v-list-item-title
                    >
                    <v-list-item-title class="grey--text"
                      >星期四&emsp;09:00 - 18:00</v-list-item-title
                    >
                    <v-list-item-title class="grey--text"
                      >星期五&emsp;09:00 - 18:00</v-list-item-title
                    >
                    <v-list-item-title class="grey--text"
                      >星期六&emsp;09:00 - 18:00</v-list-item-title
                    >
                    <v-list-item-title class="grey--text"
                      >星期日&emsp;公休</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("isCloseDialogStream", true);
    },
    updatePanelExpandIcon() {
      this.classAngle =
        this.classAngle === "icon-angle_up"
          ? "icon-angle_down"
          : "icon-angle_up";
    },
  },
};
</script>>

<style scoped>
.v-expansion-panel:not(:first-child)::after {
  border-top: none;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.2s border-color cubic-bezier(0.4, 0, 0.2, 1),
    0.2s opacity cubic-bezier(0.4, 0, 0.2, 1);
}
.v-expansion-panel-header {
  align-items: center;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  display: flex;
  font-size: 0.9375rem;
  line-height: 1;
  min-height: 48px;
  outline: none;
  padding: initial;
  position: relative;
  transition: 0.3s min-height cubic-bezier(0.25, 0.8, 0.5, 1);
  width: 100%;
}
</style>