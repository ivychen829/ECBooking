<template>
  <v-card>
    <div class="pt-4 px-6">
      <v-btn icon class="float-right" @click="close()">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    <v-card-title class="text-h5 px-10">
      <h4>簽到失敗&emsp;&emsp;</h4>
    </v-card-title>
    <div class="px-10 grey--text text--darken-1">
      <p>勾選名單中有已簽到的紀錄，請點擊取消，刷新畫面後再重新嘗試。</p>
    </div>
    <v-card-actions class="pa-6"> </v-card-actions>
  </v-card>
</template>
<script>
export default {
  methods: {
    close() {
      this.$emit("isCloseDialogStream", true);
    },
  },
};
</script>