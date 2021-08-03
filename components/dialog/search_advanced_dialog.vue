<template>
  <v-card>
    <v-card-title class="text-h5 px-8">
      進階篩選&ensp;|&ensp;<span class="body-1">{{ currentItem }}</span>
      <v-spacer></v-spacer>
      <v-btn icon class="float-right" @click="close('', '')">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>

    <v-divider class="my-2"></v-divider>

    <v-container v-if="searchType === 'teacher'">
      <div class="container mx-auto v-max-scroll" elevation="12">
        <!-- 上什麼課 -->
        <v-expansion-panels class="v-border-bottom">
          <v-expansion-panel class="theme--unborder">
            <v-expansion-panel-header class="title">
              上什麼課？
              <span
                v-if="currentClass === ''"
                class="grey--text text--lighten-1 text-right"
                >選擇課程(單選)</span
              >
              <span v-else class="primary--text text-right">{{
                currentClass
              }}</span>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <v-chip
                class="ma-2 pa-4 py-5"
                color="grey"
                label
                outlined
                @click="updateSelectedClass('吃的健康講堂(含午餐)')"
                >吃的健康講堂(含午餐)</v-chip
              >
              <v-chip
                class="ma-2 pa-4 py-5"
                color="grey"
                label
                outlined
                @click="updateSelectedClass('睡的安穩講堂(含宵夜)')"
                >睡的安穩講堂(含宵夜)</v-chip
              >
              <v-chip
                class="ma-2 pa-4 py-5"
                color="grey"
                label
                outlined
                @click="updateSelectedClass('週末晨操(含早餐)')"
                >週末晨操(含早餐)</v-chip
              >
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

        <v-divider class="my-2 mx-6"></v-divider>

        <!-- 哪天有空 -->
        <v-expansion-panels class="v-border-bottom">
          <v-expansion-panel class="theme--unborder">
            <v-expansion-panel-header class="title">
              哪天有空？
              <span
                v-if="currentDate === ''"
                class="grey--text text--lighten-1 text-right"
                >選擇日期(可複選)</span
              >
              <span v-else class="primary--text text-right">{{
                currentDate
              }}</span>
            </v-expansion-panel-header>

            <v-expansion-panel-content align="center">
              <div class="v-card-border d-inline-block pt-6">
                <v-date-picker
                  class="pic-notitle"
                  v-model="dates"
                  :first-day-of-week="0"
                  locale="sv-se"
                  multiple
                ></v-date-picker>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

        <v-divider class="my-2 mx-6"></v-divider>

        <!-- 指定時段 -->
        <v-expansion-panels class="v-border-bottom">
          <v-expansion-panel class="theme--unborder">
            <v-expansion-panel-header class="title">
              指定時段？
              <span class="primary--text text-right"
                >{{ itemsTime[range[0]] }} - {{ itemsTime[range[1]] }}</span
              >
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <v-range-slider
                v-model="range"
                :max="max"
                :min="min"
                step="1"
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
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </v-container>
    <v-container v-if="searchType === 'course'">
      <div class="container mx-auto v-max-scroll" elevation="12">
        <!-- 哪天有空 -->
        <v-expansion-panels class="v-border-bottom">
          <v-expansion-panel class="theme--unborder">
            <v-expansion-panel-header class="title">
              哪天有空？
              <span
                v-if="currentDate === ''"
                class="grey--text text--lighten-1 text-right"
                >選擇日期(可複選)</span
              >
              <span v-else class="primary--text text-right">{{
                currentDate
              }}</span>
            </v-expansion-panel-header>

            <v-expansion-panel-content align="center">
              <div class="v-card-border d-inline-block pt-6">
                <v-date-picker
                  class="pic-notitle"
                  v-model="dates"
                  :first-day-of-week="0"
                  locale="sv-se"
                  multiple
                ></v-date-picker>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

        <v-divider class="my-2 mx-6"></v-divider>

        <!-- 指定時段 -->
        <v-expansion-panels class="v-border-bottom">
          <v-expansion-panel class="theme--unborder">
            <v-expansion-panel-header class="title">
              指定時段？
              <span class="primary--text text-right"
                >{{ itemsTime[range[0]] }} - {{ itemsTime[range[1]] }}</span
              >
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <v-range-slider
                v-model="range"
                :max="max"
                :min="min"
                step="1"
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
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </v-container>
    <v-container v-if="searchType === 'time'">
      <div class="container mx-auto v-max-scroll" elevation="12">
        <!-- 上什麼課 -->
        <v-expansion-panels class="v-border-bottom">
          <v-expansion-panel class="theme--unborder">
            <v-expansion-panel-header class="title">
              上什麼課？
              <span
                v-if="currentClass === ''"
                class="grey--text text--lighten-1 text-right"
                >選擇課程(單選)</span
              >
              <span v-else class="primary--text text-right">{{
                currentClass
              }}</span>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <v-chip
                class="ma-2 pa-4 py-5"
                color="grey"
                label
                outlined
                @click="updateSelectedClass('吃的健康講堂(含午餐)')"
                >吃的健康講堂(含午餐)</v-chip
              >
              <v-chip
                class="ma-2 pa-4 py-5"
                color="grey"
                label
                outlined
                @click="updateSelectedClass('睡的安穩講堂(含宵夜)')"
                >睡的安穩講堂(含宵夜)</v-chip
              >
              <v-chip
                class="ma-2 pa-4 py-5"
                color="grey"
                label
                outlined
                @click="updateSelectedClass('週末晨操(含早餐)')"
                >週末晨操(含早餐)</v-chip
              >
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

        <v-divider class="my-2 mx-6"></v-divider>

        <!-- 哪天有空 -->
        <v-expansion-panels class="v-border-bottom">
          <v-expansion-panel class="theme--unborder">
            <v-expansion-panel-header class="title">
              哪天有空？
              <span
                v-if="currentDate === ''"
                class="grey--text text--lighten-1 text-right"
                >選擇日期(可複選)</span
              >
              <span v-else class="primary--text text-right">{{
                currentDate
              }}</span>
            </v-expansion-panel-header>

            <v-expansion-panel-content align="center">
              <div class="v-card-border d-inline-block pt-6">
                <v-date-picker
                  class="pic-notitle"
                  v-model="dates"
                  :first-day-of-week="0"
                  locale="sv-se"
                  multiple
                ></v-date-picker>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

        <v-divider class="my-2 mx-6"></v-divider>

        <!-- 指定老師 -->
        <v-expansion-panels class="v-border-bottom">
          <v-expansion-panel class="theme--unborder">
            <v-expansion-panel-header class="title">
              指定老師？
              <span
                v-if="currentTeacher === ''"
                class="grey--text text--lighten-1 text-right"
                >選擇老師(單選)</span
              >
              <span v-else class="primary--text text-right">{{
                currentTeacher
              }}</span>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <v-chip
                class="ma-2 pa-4 py-5"
                color="grey"
                label
                outlined
                @click="updateSelectedTeacher('Amanda')"
                >Amanda</v-chip
              >
              <v-chip
                class="ma-2 pa-4 py-5"
                color="grey"
                label
                outlined
                @click="updateSelectedTeacher('Allen陳教練')"
                >Allen陳教練</v-chip
              >
              <v-chip
                class="ma-2 pa-4 py-5"
                color="grey"
                label
                outlined
                @click="updateSelectedTeacher('Catty')"
                >Catty</v-chip
              >
              <v-chip
                class="ma-2 pa-4 py-5"
                color="grey"
                label
                outlined
                @click="updateSelectedTeacher('Ray')"
                >Ray</v-chip
              >
              <v-chip
                class="ma-2 pa-4 py-5"
                color="grey"
                label
                outlined
                @click="updateSelectedTeacher('Joe')"
                >Joe</v-chip
              >
              <v-chip
                class="ma-2 pa-4 py-5"
                color="grey"
                label
                outlined
                @click="updateSelectedTeacher('Willson林老師')"
                >Willson林老師</v-chip
              >
              <v-chip
                class="ma-2 pa-4 py-5"
                color="grey"
                label
                outlined
                @click="updateSelectedTeacher('Ken')"
                >Ken</v-chip
              >
              <v-chip
                class="ma-2 pa-4 py-5"
                color="grey"
                label
                outlined
                @click="updateSelectedTeacher('王先生')"
                >王先生</v-chip
              >
              <v-chip
                class="ma-2 pa-4 py-5"
                color="grey"
                label
                outlined
                @click="updateSelectedTeacher('CattyYen')"
                >CattyYen</v-chip
              >
              <v-chip
                class="ma-2 pa-4 py-5"
                color="grey"
                label
                outlined
                @click="updateSelectedTeacher('Linda')"
                >Linda</v-chip
              >
              <v-chip
                class="ma-2 pa-4 py-5"
                color="grey"
                label
                outlined
                @click="updateSelectedTeacher('DorisLin')"
                >DorisLin</v-chip
              >
              <v-chip
                class="ma-2 pa-4 py-5"
                color="grey"
                label
                outlined
                @click="updateSelectedTeacher('張老師')"
                >張老師</v-chip
              >
              <v-chip
                class="ma-2 pa-4 py-5"
                color="grey"
                label
                outlined
                @click="updateSelectedTeacher('Peggy')"
                >Peggy</v-chip
              >
              <v-chip
                class="ma-2 pa-4 py-5"
                color="grey"
                label
                outlined
                @click="updateSelectedTeacher('Willson林老師')"
                >Willson林老師</v-chip
              >
              <v-chip
                class="ma-2 pa-4 py-5"
                color="grey"
                label
                outlined
                @click="updateSelectedTeacher('Willson林老師')"
                >Willson林老師</v-chip
              >
              <v-chip
                class="ma-2 pa-4 py-5"
                color="grey"
                label
                outlined
                @click="updateSelectedTeacher('Ken')"
                >Ken</v-chip
              >
              <v-chip
                class="ma-2 pa-4 py-5"
                color="grey"
                label
                outlined
                @click="updateSelectedTeacher('王先生')"
                >王先生</v-chip
              >
              <v-chip
                class="ma-2 pa-4 py-5"
                color="grey"
                label
                outlined
                @click="updateSelectedTeacher('CattyYen')"
                >CattyYen</v-chip
              >
              <v-chip
                class="ma-2 pa-4 py-5"
                color="grey"
                label
                outlined
                @click="updateSelectedTeacher('王醫師團隊')"
                >王醫師團隊</v-chip
              >
              <v-chip
                class="ma-2 pa-4 py-5"
                color="grey"
                label
                outlined
                @click="updateSelectedTeacher('Amanda')"
                >Amanda</v-chip
              >
              <v-chip
                class="ma-2 pa-4 py-5"
                color="grey"
                label
                outlined
                @click="updateSelectedTeacher('林教練')"
                >林教練</v-chip
              >
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </v-container>
    <v-divider class="my-2"></v-divider>
    <v-card-title class="px-8">
      <span class="font-weight-regular text-md-body-1">目前有</span>
      <span class="primary--text ml-4 font-weight-regular text-md-body-1"
        >n</span
      >
      <span
        style="padding-left: 16px"
        class="font-weight-regular text-md-body-1"
        >個結果</span
      >
      <v-spacer></v-spacer>
      <v-btn class="ma-2 float-right" color="primary" @click="close('', '')">確定</v-btn>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: ["searchItem", "searchType"],
  data() {
    return {
      picker: new Date().toISOString().substr(0, 10),
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
      currentItem: this.searchItem,
      currentType: this.searchType,
      dates: [],
      tempDates: [],
      currentDate: "",
      currentClass: "",
      currentTeacher: "",
    };
  },
  methods: {
    reset() {
      Object.assign(this.$data, this.$options.data.call(this));
    },
    close(item, type) {
      this.$emit("isCloseDialogStream", true, item, type);
      this.reset();
    },
    formatDate(dateList) {
      if (dateList.length === 0) {
        this.currentDate = "";
        return null;
      }

      this.tempDates = [];
      dateList.forEach((date) => {
        const [year, month, day] = date.split("-");
        this.tempDates.push(`${month}/${day}`);
      });

      this.tempDates = this.tempDates.sort((a, b) => {
        if (a > b) {
          return 1;
        } else if (a < b) {
          return -1;
        } else {
          return 0;
        }
      });

      this.currentDate = this.tempDates.join(",");
    },
    updateSelectedClass(item) {
      this.currentClass = item;
    },
    updateSelectedTeacher(item) {
      this.currentTeacher = item;
    },
  },
  watch: {
    dates: function (newValue) {
      this.formatDate(newValue);
    },
  },
};
</script>