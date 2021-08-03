<template>
  <div style="background-color: whitesmoke">
    <v-row>
      <v-col cols="12" sm="12">
        <v-container>
          <v-row>
            <v-col class="mt-2" cols="12">
              <div>
                <!-- <v-breadcrumbs :items="items"></v-breadcrumbs> -->
                <v-breadcrumbs :items="items" large class="pl-0">
                  <template v-slot:divider>
                    <v-icon>mdi-chevron-right</v-icon>
                  </template>
                </v-breadcrumbs>
              </div>
              <strong class="">共 36 筆團體課程</strong>
              <div class="mt-4 search-bar large">
                <div class="d-inline-block">
                  <v-select :items="itemsdrop" label="所有會館" solo></v-select>
                </div>
                <div class="d-inline-block">
                  <!-- 一般搜尋 bar -->
                  <v-container v-if="searchItem === ''" v-model="searchItem">
                    <div class="filter-bar">
                      <v-icon color="black" class="px-2">icon-search</v-icon>
                      <v-dialog
                        persistent
                        v-model="searchDialog"
                        max-width="550px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <a
                            href="#0"
                            v-on="on"
                            v-bind="attrs"
                            class="text-decoration-none px-3"
                            @click="searchType = 'teacher'"
                            >找老師</a
                          >
                        </template>
                        <SearchDialog
                          @isCloseDialogStream="isCloseDialogListener"
                          :type="searchType"
                        ></SearchDialog>
                      </v-dialog>
                      |
                      <v-dialog
                        persistent
                        v-model="searchDialog"
                        max-width="550px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <a
                            href="#0"
                            v-on="on"
                            v-bind="attrs"
                            class="text-decoration-none px-3"
                            @click="searchType = 'course'"
                            >找課程</a
                          >
                        </template>
                        <SearchDialog
                          @isCloseDialogStream="isCloseDialogListener"
                          :type="searchType"
                        ></SearchDialog>
                      </v-dialog>
                      |
                      <v-dialog
                        persistent
                        v-model="searchDialog"
                        max-width="550px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <a
                            href="#0"
                            v-on="on"
                            v-bind="attrs"
                            class="text-decoration-none px-3"
                            @click="searchType = 'time'"
                            >開課時段</a
                          >
                        </template>
                        <SearchDialog
                          @isCloseDialogStream="isCloseDialogListener"
                          :type="searchType"
                        ></SearchDialog>
                      </v-dialog>
                    </div>
                  </v-container>

                  <!-- 進階搜尋 bar -->
                  <v-container v-else v-model="searchItem">
                    <div class="filter-bar">
                      <v-icon color="black" class="px-2">icon-search</v-icon>
                      <a href="#0" class="text-decoration-none mr-2">{{
                        searchItem
                      }}</a>
                      <v-icon
                        color="grey"
                        class="px-2"
                        @click="clearSearchItem()"
                        >icon-clean</v-icon
                      >
                      <span class="v-line"></span>
                      <v-dialog v-model="searchAdvancedDialog" max-width="550">
                        <template v-slot:activator="{ on, attrs }">
                          <a
                            href="#0"
                            v-on="on"
                            v-bind="attrs"
                            class="text-decoration-none primary--text"
                          >
                            <v-icon color="primary" class="px-2"
                              >icon-filter</v-icon
                            >進階篩選
                          </a>
                        </template>
                        <SearchAdvancedDialog
                          @isCloseDialogStream="isCloseDialogListener"
                          :searchItem="searchItem"
                          :searchType="searchType"
                        ></SearchAdvancedDialog>
                      </v-dialog>
                    </div>
                  </v-container>
                </div>
              </div>
            </v-col>

            <v-col
              v-for="j in 8"
              :key="`1${j}`"
              cols="12"
              md="3"
              sm="12"
              class="pa-2"
            >
              <v-card
                class="mx-auto mx-full-width v-underline img-hover-zoom"
                max-width="260"
                to="/booking_disabled"
              >
                <v-img
                  class="white--text align-end"
                  height="230px"
                  :src="displayClass.imgSrc"
                >
                </v-img>
                <v-card-title class="pb-6"> 踏青瑜伽 </v-card-title>
                <v-card-subtitle class="pb-0 text-caption">
                  最近課程
                </v-card-subtitle>

                <v-card-text class="font-weight-regular">
                  <div>大安館 Jane</div>
                  <div>2021/03/13 (六) 09:30-12:30</div>
                </v-card-text>

                <div class="pa-4 mx-footer">
                  單堂售價
                  <span class="mx-line">$ <b>650</b></span>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <div class="text-center my-8">
          <v-pagination :length="5"></v-pagination>
        </div>
      </v-col>
    </v-row>

    <Footer />
  </div>
</template>

<script>
import SearchAdvancedDialog from "~/components/dialog/search_advanced_dialog.vue";
import SearchDialog from "~/components/dialog/search_dialog.vue";
import Footer from "~/layouts/footer.vue";

export default {
  data() {
    return {
      paramsType: this.$route.params.type,
      searchAdvancedDialog: false,
      searchDialog: false,
      searchType: "",
      itemsdrop: ["所有會館", "市民大道大道大道館", "國父紀念館", "忠孝館"],
      searchItem: "",

      items: [],

      displayClass: {},
    };
  },
  components: {
    SearchAdvancedDialog,
    SearchDialog,
    Footer,
  },
  methods: {
    isCloseDialogListener(isClose, item, type) {
      if (isClose) this.searchDialog = false;
      Object.assign(this.$data, this.$options.data.call(this));
      if (item != "") this.searchItem = item;
      if (type) this.searchType = type;
    },
    clearSearchItem() {
      this.searchItem = "";
    },
  },
  created() {
    var _type = this.$route.params.type;
    switch (_type) {
      case "group":
        this.displayClass = {
          imgSrc: "/image2.png",
        };
        this.items = [
          {
            text: "找課程",
            disabled: false,
            to: "/",
          },
          {
            text: "團體課程",
            disabled: true,
            to: "/",
          },
        ];
        break;
      case "class":
        this.displayClass = {
          imgSrc: "/image3.png",
        };
        this.items = [
          {
            text: "找課程",
            disabled: false,
            to: "/",
          },
          {
            text: "期班",
            disabled: true,
            to: "/",
          },
        ];
        break;
      case "stored":
        this.displayClass = {
          imgSrc: "/image5.png",
        };
        this.items = [
          {
            text: "找方案",
            disabled: false,
            to: "/",
          },
          {
            text: "儲值票劵",
            disabled: true,
            to: "/",
          },
        ];
        break;
      case "passport":
        this.displayClass = {
          imgSrc: "/image6.png",
        };
        this.items = [
          {
            text: "找方案",
            disabled: false,
            to: "/",
          },
          {
            text: "通行卡",
            disabled: true,
            to: "/",
          },
        ];
        break;
    }
    console.log("your type is: " + this.$route.params.type);
  },
};
</script>

<style scoped>
</style>
