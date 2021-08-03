<template>
  <div>
    <v-img height="125px" src="/yoga.png" class="v-img__opacity">
      <v-container class="fill-height v-container-sm">
        <v-row align="center">
          <v-col cols="12" sm="12" style="position: relative" justify-center>
            <nuxt-link to="/" class="v-underline"
              ><v-icon color="black">icon-back</v-icon>
              <h1 class="font-weight-regular d-inline text-middle black--text">
                延展瑜伽
              </h1>
            </nuxt-link>
            <v-btn
              class="rounded-pill btn-theme"
              outlined
              tile
              @click="loader = 'loading'"
              absolute
              right
            >
              <v-icon medium>icon-send</v-icon>
              <span>分享課程</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
    <div class="bg--white bg--sticky"></div>

    <v-container class="v-container-sm" style="margin-top: -60px">
      <v-row>
        <v-col cols="12" sm="12">
          <v-sheet min-height="70vh" rounded="lg" class="alpha">
            <!--  -->
            <v-tabs class="alpha tab-sticky">
              <div class="bg--white"></div>
              <v-tab fixed-header>
                <b class="black--text">預約課程</b>
              </v-tab>

              <v-tab fixed-header>
                <b class="black--text">介紹</b>
              </v-tab>

              <v-tab-item>
                <BookingCourse></BookingCourse
                ><!-- 引入的內容 -->
              </v-tab-item>

              <v-tab-item>
                <BookingAbout></BookingAbout
                ><!-- 引入的內容 -->
              </v-tab-item>
            </v-tabs>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>

    <Footer />
  </div>
</template>

<script>
import BookingCourse from "./booking/booking_course.vue";
import BookingAbout from "./booking/booking_about.vue";
import Footer from "~/layouts/footer.vue";

export default {
  components: {
    BookingCourse,
    BookingAbout,
    Footer,
    headersSquare() {
      return [
        {
          text: "n",
          align: "right",
          class: "sticky-header title grey lighten-3",
          sortable: false,
          value: "n",
        },
        {
          text: "n²",
          align: "right",
          class: "sticky-header title grey lighten-3",
          sortable: false,
          value: "n2",
        },
      ];
    },
  },
};
</script>

<style scoped>
.v-list-item.v-list-item--active .v-list-item__title {
  color: #91c423;
}
.sticky-header {
  position: sticky;
  top: var(--toolbarHeight);
}
</style>
