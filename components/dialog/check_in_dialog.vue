<template>
  <v-card>
    <div class="pt-4 px-6">
      <v-btn icon class="float-right" @click="close()">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    <v-card-title class="text-h5 px-10">
      <h4>Hello! 魏麗莎&emsp;&emsp;</h4>
      <h4 class="d-contents">很高興見到您，確定簽到以下課程？</h4>
    </v-card-title>
    <div
      v-show="dialogType === 'multiple'"
      class="px-10 grey--text text--darken-1"
    >
      <p>{{ manualCount }} 人尚未簽到，請選擇本次簽到人數</p>
      <form class="my-4">
        <div
          class="value-button"
          id="decrease"
          @click="decreaseValue()"
          value="Decrease Value"
        >
          <v-icon class="primary--text">mdi-minus</v-icon>
        </div>
        <input type="number" id="number" :value="manualCount" />
        <div
          class="value-button"
          id="increase"
          @click="increaseValue()"
          value="Increase Value"
        >
          <v-icon>mdi-plus</v-icon>
        </div>
      </form>
    </div>
    <div
      v-show="dialogType === 'friends'"
      class="px-10 grey--text text--darken-1"
    >
      <p>5 人尚未簽到，請勾選本次簽到名單</p>
      <v-container fluid>
        <v-row>
          <v-col cols="12" sm="4" md="4">
            <v-checkbox
              v-model="selected"
              label="您本人"
              value="1"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="selected"
              label="您本人"
              value="2"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-checkbox
              v-model="selected"
              label="魏爸爸"
              value="3"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="selected"
              label="魏媽媽"
              value="4"
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col cols="12" sm="4" md="4">
            <v-checkbox
              v-model="selected"
              label="大女兒Abby"
              value="5"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="v-bg-gray pl-10 grey--text text--darken-1">
      <div>大安館 Linda</div>
      <div>延伸瑜伽 2020/03/11 星期四 16:00-17:00</div>
    </div>

    <v-card-actions class="pa-6">
      <v-spacer></v-spacer>
      <v-btn color="gray" text @click="close()"> 放棄 </v-btn>
      <v-dialog persistent v-model="checkInFailedDialog" max-width="650px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-show="userCount === 1"
            color="primary"
            text
            v-on="on"
            v-bind="attrs"
          >
            本人簽到
          </v-btn>
        </template>
        <CheckInFailedDialog
          @isCloseDialogStream="isCloseDialogListener"
        ></CheckInFailedDialog>
      </v-dialog>
      <v-btn v-show="userCount > 1" color="primary" text @click="close()">
        確定簽到{{ manualCount }}人
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import CheckInFailedDialog from "~/components/dialog/check_in_failed_dialog.vue";

export default {
  props: ["type", "count"],
  data() {
    return {
      dialogType: this.type,
      userCount: this.count,
      selected: [],
      checkInFailedDialog: false,
      manualCount: 0,
    };
  },
  methods: {
    close() {
      this.$emit("isCloseDialogStream", true);
      Object.assign(this.$data, this.$options.data.call(this));
    },
    increaseValue() {
      var value = parseInt(document.getElementById("number").value, 10);
      value = isNaN(value) ? 0 : value;
      value++;
      this.manualCount = value;
    },
    decreaseValue() {
      var value = parseInt(document.getElementById("number").value, 10);
      value = isNaN(value) ? 0 : value;
      value < 1 ? (value = 1) : "";
      value--;
      this.manualCount = value;
    },
    isCloseDialogListener(isClose) {
      if (isClose) {
        this.checkInFailedDialog = false;
      }
    },
  },
  components: {
    CheckInFailedDialog,
  },
  watch: {
    selected: function(newValue) {
      this.manualCount = newValue.length;
    }
  }
};
</script>