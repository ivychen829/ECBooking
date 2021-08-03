<template>
  <v-card>
    <v-card-title class="text-h5 px-8">
      設定搜尋條件
      <v-spacer></v-spacer>
      <v-btn icon class="float-right" @click="close('', '')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      align-with-title
    >
      <v-tab
        v-for="(item, index) in items"
        :key="index"
        @click="updateSearchType(item.type)"
      >
        {{ item.title }}
      </v-tab>
    </v-tabs>

    <!-- Search Type teacher -->
    <div
      v-if="searchType === 'teacher'"
      class="container mx-auto v-max-scroll px-6"
      elevation="12"
    >
      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('Amanda')"
        >Amanda</v-chip
      >
      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('Allen陳教練')"
        >Allen陳教練</v-chip
      >
      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('Catty')"
        >Catty</v-chip
      >
      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('Ray')"
        >Ray</v-chip
      >
      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('Joe')"
        >Joe</v-chip
      >
      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('張老師')"
        >張老師</v-chip
      >
      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('Paggy')"
        >Paggy</v-chip
      >
      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('Wilson林老師')"
        >Wilson林老師</v-chip
      >
      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('CattyYen')"
        >CattyYen</v-chip
      >
      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('王醫生團隊')"
        >王醫生團隊</v-chip
      >
      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('Mike')"
        >Mike</v-chip
      >
      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('Jone')"
        >Jone</v-chip
      >
      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('DorisLin')"
        >DorisLin</v-chip
      >

      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('Amanda')"
        >Amanda</v-chip
      >
      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('Allen陳教練')"
        >Allen陳教練</v-chip
      >
      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('Catty')"
        >Catty</v-chip
      >
      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('Ray')"
        >Ray</v-chip
      >
      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('Joe')"
        >Joe</v-chip
      >
      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('張老師')"
        >張老師</v-chip
      >
      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('Paggy')"
        >Paggy</v-chip
      >
      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('Wilson林老師')"
        >Wilson林老師</v-chip
      >
      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('CattyYen')"
        >CattyYen</v-chip
      >
      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('王醫生團隊')"
        >王醫生團隊</v-chip
      >
      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('Mike')"
        >Mike</v-chip
      >
      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('Jone')"
        >Jone</v-chip
      >
      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('DorisLin')"
        >DorisLin</v-chip
      >
      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('Amanda')"
        >Amanda</v-chip
      >
      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('Allen陳教練')"
        >Allen陳教練</v-chip
      >
      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('Catty')"
        >Catty</v-chip
      >
      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('Ray')"
        >Ray</v-chip
      >
      <v-chip
        class="ma-2 pa-4 py-5"
        color="grey"
        label
        outlined
        @click="updateSelectedItem('Joe')"
        >Joe</v-chip
      >
    </div>

    <!-- Search Type course -->
    <div
      v-if="searchType === 'course'"
      class="container mx-auto v-max-scroll px-6"
      elevation="12"
    >
      <v-container v-model="selected">
        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('手扭到瑜珈')"
          >手扭到瑜珈</v-chip
        >
        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('腹肌訓練班')"
          >腹肌訓練班</v-chip
        >
        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('熱瑜珈')"
          >熱瑜珈</v-chip
        >
        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('雙人瑜珈(體驗課)')"
          >雙人瑜珈(體驗課)</v-chip
        >
        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('雙人瑜珈')"
          >雙人瑜珈</v-chip
        >
        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('吃得健康講座(含午餐)')"
          >吃得健康講座(含午餐)</v-chip
        >
        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('熱瑜珈')"
          >熱瑜珈</v-chip
        >
        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('極限體能訓練')"
          >極限體能訓練</v-chip
        >
        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('延展瑜珈')"
          >延展瑜珈</v-chip
        >
        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('腹肌訓練班')"
          >腹肌訓練班</v-chip
        >
        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('踏青瑜珈')"
          >踏青瑜珈</v-chip
        >
        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('踏青瑜珈')"
          >踏青瑜珈</v-chip
        >
        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('極限體能訓練')"
          >極限體能訓練</v-chip
        >

        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('雙人瑜珈(體驗課)')"
          >雙人瑜珈(體驗課)</v-chip
        >
        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('熱瑜珈')"
          >熱瑜珈</v-chip
        >
        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('吃得健康講座(含午餐)')"
          >吃得健康講座(含午餐)</v-chip
        >
        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('延展瑜珈')"
          >延展瑜珈</v-chip
        >
        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('腹肌訓練班')"
          >腹肌訓練班</v-chip
        >
        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('極限體能訓練')"
          >極限體能訓練</v-chip
        >
        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('踏青瑜珈')"
          >踏青瑜珈</v-chip
        >
        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('延展瑜珈')"
          >延展瑜珈</v-chip
        >
        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('熱瑜珈')"
          >熱瑜珈</v-chip
        >
        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('極限體能訓練(強力班)')"
          >極限體能訓練(強力班)</v-chip
        >
        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('熱瑜珈')"
          >熱瑜珈</v-chip
        >
        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('熱瑜珈')"
          >熱瑜珈</v-chip
        >
        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('吃得健康講座(含午餐)')"
          >吃得健康講座(含午餐)</v-chip
        >
        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('雙人瑜珈')"
          >雙人瑜珈</v-chip
        >
        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('延展瑜珈')"
          >延展瑜珈</v-chip
        >
        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('熱瑜珈')"
          >熱瑜珈</v-chip
        >
        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('手扭到瑜珈')"
          >手扭到瑜珈</v-chip
        >
        <v-chip
          class="ma-2 pa-4 py-5"
          color="grey"
          label
          outlined
          @click="updateSelectedItem('腹肌訓練班')"
          >腹肌訓練班</v-chip
        >
      </v-container>
    </div>

    <!-- Search Type time -->
    <div
      v-if="searchType === 'time'"
      class="container mx-auto v-max-scroll px-6"
      elevation="12"
    >
      <v-card flat color="transparent">
        <v-card-text>
          <v-row>
            <v-col class="px-4">
              <v-range-slider
                v-model="range"
                step="1"
                :max="max"
                :min="min"
                hide-details
                class="align-center"
              >
                <template v-slot:prepend>
                  {{ itemsTime[range[0]] }}
                </template>
                <template v-slot:append>
                  {{ itemsTime[range[1]] }}
                </template>
              </v-range-slider>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>

    <v-divider class="my-2"></v-divider>
    <v-card-title class="px-8" v-if="searchType === 'time'">
      <span class="font-weight-regular text-md-body-1">已選</span>
      <span class="primary--text ml-4 font-weight-regular text-md-body-1"
        >{{ itemsTime[range[0]] }} - {{ itemsTime[range[1]] }}</span
      >
      <v-spacer></v-spacer>
      <v-btn class="ma-2 float-right" color="primary" @click="doSearch()"
        >搜尋</v-btn
      >
    </v-card-title>

    <v-card-title class="px-8" v-else>
      <span v-if="selected != ''" class="font-weight-regular text-md-body-1"
        >已選</span
      >
      <span class="primary--text ml-4 font-weight-regular text-md-body-1">{{
        selected
      }}</span>
      <v-spacer></v-spacer>
      <v-btn class="ma-2 float-right" color="primary" @click="doSearch()"
        >搜尋</v-btn
      >
    </v-card-title>
  </v-card>
</template>
<script>
export default {
  props: ["type"],
  data() {
    return {
      tab: null,
      searchType: this.type,
      items: [
        { title: "找老師", type: "teacher" },
        { title: "找課程", type: "course" },
        { title: "找開課時段", type: "time" },
      ],
      text: "Lorem ipsu",
      min: 0,
      max: 24,
      range: [0, 24],
      itemsTime: [
        "00:00",
        "01:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
        "24:00",
      ],
      selected: "",
      finalSelected: "",
    };
  },
  methods: {
    updateSearchType(type) {
      this.selected = "";
      this.searchType = type;
    },
    reset() {
      Object.assign(this.$data, this.$options.data.call(this));
    },
    close(selected, type) {
      this.$emit("isCloseDialogStream", true, selected, type);
      this.reset();
    },
    updateSelectedItem(item) {
      this.selected = item;
    },
    doSearch() {
      if (this.searchType === "teacher" || this.searchType === "course")
        this.finalSelected = this.selected;
      if (this.searchType === "time")
        this.finalSelected = `${this.itemsTime[this.range[0]]} - ${
          this.itemsTime[this.range[1]]
        }`;
      this.close(this.finalSelected, this.searchType);
    },
  },
  watch: {
    type: function (newValue) {
      this.$data.searchType = newValue;
    },
  },
};
</script>
