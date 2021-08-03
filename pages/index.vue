<template>
  <div>
    <div class="v-bg-main-color">
      <v-img height="240px" src="/Rectangle.png">
        <div class="mx-auto search-bar">
          <v-row align="center" class="text-center">
            <v-col cols="12" sm="12" md="12" class="mt-16 text-center">
              <div class="white--text">
                <v-icon class="white--text pr-2" large>icon-course</v-icon>
                <strong class="headline font-weight-bold text-middle"
                  >找課程</strong
                >
              </div>
            </v-col>

            <v-col class="d-flex" cols="4" sm="4" md="4">
              <v-select :items="itemsdrop" label="所有會館" solo></v-select>
            </v-col>
            <v-col class="d-flex" cols="8" sm="8" md="8">
              <!-- 一般搜尋 bar -->
              <v-container
                v-if="searchItem === ''"
                v-model="searchItem"
                width="100%"
                style="width: 100%"
              >
                <div class="filter-bar">
                  <v-icon color="black" class="px-2">icon-search</v-icon>
                  <v-dialog
                    persistent
                    v-model="searchDialog1"
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
                    v-model="searchDialog2"
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
                    v-model="searchDialog3"
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
                  <v-icon color="grey" class="px-2" @click="clearSearchItem()"
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
                        <v-icon color="primary" class="px-2">icon-filter</v-icon
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
            </v-col>
          </v-row>
        </div>
      </v-img>

      <div
        justify-content
        class="mx-auto v-sliders v-bg-main-color"
        align="center"
      >
        <div class="v-slide-width">
          <div class="slide">
            <!-- HTML 中綁定 @click 事件 -->
            <div class="slide-ctrl">
              <div class="slide-prev" @click="slideCtrl(-1)">
                <v-icon medium class="">mdi-chevron-left</v-icon>
              </div>
              <div class="slide-next" @click="slideCtrl(1)">
                <v-icon medium class="">mdi-chevron-right</v-icon>
              </div>
            </div>
            <transition-group name="flip-list" tag="ul" class="slide-list">
              <li v-for="item in slideData" :key="item.id">
                <article class="slide-article">
                  <v-img
                    width="300"
                    height="350"
                    :src="welfare[item.ref].src"
                  ></v-img>
                </article>
              </li>
            </transition-group>
          </div>
        </div>
      </div>

      <!-- For mobile Carousels -->
      <div
        justify-content
        class="mx-auto v-sliders-mobile v-bg-main-color"
        align="center"
      >
        <template>
          <v-carousel :show-arrows="false" height="300">
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item"
            ></v-carousel-item>
          </v-carousel>
        </template>
      </div>
    </div>

    <AllClass />

    <Footer />
  </div>
</template>

<script>
import AllClass from "~/layouts/class/all_class.vue";
import SearchAdvancedDialog from "~/components/dialog/search_advanced_dialog.vue";
import SearchDialog from "~/components/dialog/search_dialog.vue";
import Footer from "~/layouts/footer.vue";

export default {
  name: "Slide",
  data() {
    return {
      searchAdvancedDialog: false,
      searchDialog1: false,
      searchDialog2: false,
      searchDialog3: false,
      searchType: "",
      items: [
        "/sild1.png",
        "/sild2.png",
        "/sild3.png",
        "/Rectangle.png",
        "/Rectangle.png",
      ],
      itemsdrop: ["所有會館", "市民大道大道大道館", "國父紀念館", "忠孝館"],
      searchItems: ["找老師", "找課程", "找開課時段"],
      /* 預計產生的物件格式 */
      slideDate: [
        {
          id: 0,
          ref: 0,
        },
      ],
      /*
      slideData: 輪播要跑的擴展資料
      welfare: 原本的資料
      */
      slideData: [],
      welfare: [
        { src: "/sild1.png" },
        { src: "/sild2.png" },
        { src: "/sild3.png" },
        { src: "/Rectangle.png" },
        { src: "/sild1.png" },
        { src: "/sild2.png" },
      ],
      clickWait: false,
      timer: {},
      searchItem: "",
    };
  },
  components: {
    AllClass,
    SearchAdvancedDialog,
    SearchDialog,
    Footer,
  },
  methods: {
    isCloseDialogListener(isClose, item, type) {
      if (isClose) {
        this.searchDialog1 = false;
        this.searchDialog2 = false;
        this.searchDialog3 = false;
      }
      Object.assign(this.$data, this.$options.data.call(this));
      if (item != "") this.searchItem = item;
      if (type) this.searchType = type;
    },
    clearSearchItem() {
      this.searchItem = "";
    },
    slideCtrl(slidesToShow = 1) {
      if (this.clickWait) {
        return;
      }
      this.stopTime();
      this.clickWait = true;
      if (slidesToShow > 0) {
        const shiftItem = this.slideData.shift();
        this.slideData.push(shiftItem);
        this.setTime();
        return;
      }
      if (slidesToShow < 0) {
        const shiftItem = this.slideData.pop();
        this.slideData.unshift(shiftItem);
        this.setTime();
      }
    },
    setTime() {
      this.timer = setTimeout(() => {
        this.clickWait = false;
      }, 500);
    },
    stopTime() {
      clearInterval(this.timer);
    },
  },
  mounted() {
    /* 將原始資料擴展 */
    for (let i = 0; i < this.welfare.length * 2; i++) {
      let obj = {};
      obj.id = i;
      obj.ref = i % this.welfare.length;
      this.slideData.push(obj);
    }
  },
};
</script>


