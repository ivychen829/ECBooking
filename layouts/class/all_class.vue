<template>
  <v-main class="pb-12 v-bg-main-color" v-model="type">
    <v-container v-if="type === 'allclass'">
      <v-row>
        <v-col class="mt-2" cols="12">
          <strong class="float-left pt-4 headline font-weight-bold">團體課程</strong>
          <v-btn
            class="ma-1 btn-theme float-right"
            outlined
            @click="
              $router.push({ name: 'filterClass', params: { type: 'group' } })
            "
            >看全部</v-btn
          >
        </v-col>

        <v-col
          v-for="j in 8"
          :key="`1${j}`"
          cols="12"
          md="3"
          sm="12"
          class="pa-2 v-card-outline"
        >
          <v-card
            class="mx-auto mx-full-width v-underline img-hover-zoom"
            max-width="260"
            to="/booking_disabled"
          >
            <v-img
              class="white--text align-end"
              height="230px"
              src="/image2.png"
            >
            </v-img>
            <v-card-title class="pb-6"> 踏青瑜伽 </v-card-title>
            <v-card-subtitle class="pb-0 text-caption">
              最近課程
            </v-card-subtitle>

            <v-card-text class="font-weight-regular black--text">
              <div>大安館 Jane</div>
              <div>2021/03/13 (六) 09:30-12:30</div>
            </v-card-text>

            <div class="px-4 pb-3 mx-footer">
              <strong class="mx-line caption font-weight-bold">$</strong>
              <strong class="title font-weight-bold">650</strong>
            </div>
          </v-card>
        </v-col>

        <v-col class="mt-2" cols="12">
          <strong class="float-left pt-4 headline font-weight-bold">期班</strong>
          <v-btn
            class="ma-1 btn-theme float-right"
            outlined
            @click="
              $router.push({ name: 'filterClass', params: { type: 'class' } })
            "
            >看全部</v-btn
          >
        </v-col>

        <v-col
          v-for="j in 8"
          :key="`2${j}`"
          cols="12"
          md="3"
          sm="12"
          class="pa-2 v-card-outline"
        >
          <v-card
            class="mx-auto mx-full-width v-underline img-hover-zoom"
            max-width="260"
            to="/booking_disabled"
          >
            <v-img
              class="white--text align-end"
              height="230px"
              src="/image3.png"
            >
              <span class="red darken-3 pa-1 float-left caption v-card-tag">
                早鳥價已 -11%
              </span>
            </v-img>
            <v-card-title class="pb-6"> 踏青瑜伽 </v-card-title>
            <v-card-subtitle class="pb-0 text-caption">
              最近課程
            </v-card-subtitle>

            <v-card-text class="font-weight-regular black--text">
              <div>大安館 Jane</div>
              <div>2021/03/13 (六) 09:30-12:30</div>
            </v-card-text>

            <div class="pa-4 mx-footer">
              單堂售價
              <strong class="mx-line caption font-weight-bold">$</strong>
              <strong class="title font-weight-bold">650</strong>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="type === 'group'">
      <v-row>
        <v-col class="mt-2" cols="12">
          <strong>共 8 筆團體課程</strong>
        </v-col>
        <v-col
          v-for="j in 8"
          :key="`${j}`"
          cols="12"
          md="3"
          sm="12"
          class="pa-2 v-card-outline"
        >
          <v-card
            class="mx-auto mx-full-width v-underline img-hover-zoom"
            max-width="260"
            to="/booking_disabled"
          >
            <v-img
              class="white--text align-end"
              height="230px"
              src="/image2.png"
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
              <strong class="mx-line caption font-weight-bold">$</strong>
              <strong class="title font-weight-bold">650</strong>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="type === 'class'">
      <v-row>
        <v-col class="mt-2" cols="12">
          <strong>共 8 筆期班</strong>
        </v-col>
        <v-col
          v-for="j in 8"
          :key="`${j}`"
          cols="12"
          md="3"
          sm="12"
          class="pa-2 v-card-outline"
        >
          <v-card
            class="mx-auto mx-full-width v-underline img-hover-zoom"
            max-width="260"
            to="/booking_disabled"
          >
            <v-img
              class="white--text align-end"
              height="230px"
              src="/image3.png"
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
              <strong class="mx-line caption font-weight-bold">$</strong>
              <strong class="title font-weight-bold">650</strong>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="type === 'allfunction'">
      <v-row>
        <v-col class="mt-2" cols="12">
          <strong>儲存票劵</strong>
          <v-btn
            class="ma-1 btn-theme float-right"
            outlined
            @click="
              $router.push({ name: 'filterClass', params: { type: 'stored' } })
            "
            >看全部</v-btn
          >
        </v-col>

        <v-col
          v-for="j in 8"
          :key="`1${j}`"
          cols="12"
          md="3"
          sm="12"
          class="pa-2 v-card-outline"
        >
          <v-card
            class="mx-auto mx-full-width v-underline img-hover-zoom"
            max-width="260"
            to="/booking_disabled"
          >
            <v-img
              class="white--text align-end"
              height="230px"
              src="/image5.png"
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
              <strong class="mx-line caption font-weight-bold">$</strong>
              <strong class="title font-weight-bold">650</strong>
            </div>
          </v-card>
        </v-col>

        <v-col class="mt-2" cols="12">
          <strong>通行卡</strong>
          <v-btn
            class="ma-1 btn-theme float-right"
            outlined
            @click="
              $router.push({
                name: 'filterClass',
                params: { type: 'passport' },
              })
            "
            >看全部</v-btn
          >
        </v-col>

        <v-col
          v-for="j in 8"
          :key="`2${j}`"
          cols="12"
          md="3"
          sm="12"
          class="pa-2 v-card-outline"
        >
          <v-card
            class="mx-auto mx-full-width v-underline img-hover-zoom"
            max-width="260"
            to="/booking_disabled"
          >
            <v-img
              class="white--text align-end"
              height="230px"
              src="/image6.png"
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
              <strong class="mx-line caption font-weight-bold">$</strong>
              <strong class="title font-weight-bold">650</strong>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="type === 'stored'">
      <v-row>
        <v-col class="mt-2" cols="12">
          <strong>共 8 筆儲值票劵</strong>
        </v-col>
        <v-col
          v-for="j in 8"
          :key="`${j}`"
          cols="12"
          md="3"
          sm="12"
          class="pa-2 v-card-outline"
        >
          <v-card
            class="mx-auto mx-full-width v-underline img-hover-zoom"
            max-width="260"
            to="/booking_disabled"
          >
            <v-img
              class="white--text align-end"
              height="230px"
              src="/image5.png"
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
              <strong class="mx-line caption font-weight-bold">$</strong>
              <strong class="title font-weight-bold">650</strong>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="type === 'passport'">
      <v-row>
        <v-col class="mt-2" cols="12">
          <strong>共 8 筆通行卡</strong>
        </v-col>
        <v-col
          v-for="j in 8"
          :key="`${j}`"
          cols="12"
          md="3"
          sm="12"
          class="pa-2 v-card-outline"
        >
          <v-card
            class="mx-auto mx-full-width v-underline img-hover-zoom"
            max-width="260"
            to="/booking_disabled"
          >
            <v-img
              class="white--text align-end"
              height="230px"
              src="/image6.png"
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
              <strong class="mx-line caption font-weight-bold">$</strong>
              <strong class="title font-weight-bold">650</strong>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
export default {
  data() {
    return {
      type: "",
    };
  },
  created() {
    if (this.type === "") {
      this.type = "allclass";
    }
    this.$store.watch(this.$store.getters.getCurrentType, (n) => {
      if (this.type != n) {
        this.type = n;
        console.log("created:", n);
      }
    });
  },
};
</script>>