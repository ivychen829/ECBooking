<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar dark color="#FFFFFF" absolute>
      <v-img
        width="100px"
        height="30px"
        contain
        :src="require('~/assets/images/BookFast_logo.png')"
      />

      <v-spacer></v-spacer>
      <v-item-group>
        <v-row>
          <v-hover >
            <v-img contain :src="require('~/assets/images/magnifier.svg')" />
            <v-btn color="#000000" small text> 找課程 </v-btn>
          </v-hover>

          <v-img contain :src="require('~/assets/images/bag.svg')" />
          <v-btn color="#000000" small text> 找方案 </v-btn>

          <v-img contain :src="require('~/assets/images/exclamation.svg')" />
          <v-btn color="#000000" small text> 場館資訊 </v-btn>

          <v-img contain :src="require('~/assets/images/cellphone.svg')" />
          <v-btn color="#000000" small text> 下載App </v-btn>

          <v-img contain :src="require('~/assets/images/user.svg')" />
          <v-btn color="#000000" small text> Hi 魏麗莎 </v-btn>
        </v-row>
      </v-item-group>

      <v-item-group>
        <v-container>
          <v-btn width="30px" height="30px" icon>
            <v-img contain :src="require('~/assets/images/facebook.svg')" />
          </v-btn>

          <v-btn width="30px" height="30px" icon>
            <v-img contain :src="require('~/assets/images/line.svg')" />
          </v-btn>

          <v-btn width="30px" height="30px" icon>
            <v-img contain :src="require('~/assets/images/ig.svg')" />
          </v-btn>

          <v-btn width="30px" height="30px" icon>
            <v-img contain :src="require('~/assets/images/youtube.svg')" />
          </v-btn>
        </v-container>
      </v-item-group>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer color="#EEEEEE" height="170px" :absolute="!fixed" app>
      <div
        style="
          margin: 0px auto;
          color: rgba(0, 0, 0, 0.56);
          font-family: SF Compact Text;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          font-height: 22px;
          text-align: center;
        "
      >
        <div id="copyright">
          <p>&copy; 2020 NewPOS TECH. CORP.All Rights Reserved.</p>
          <!-- class="fl_left" -->
          <p>
            <a target="_blank" href="https://www.google.com/" title="服務條款"
              >服務條款</a
            >
            &
            <a target="_blank" href="https://www.google.com/" title="隱私權政策"
              >隱私權政策</a
            >｜ Powered by
            <span style="text-decoration: underline">BookFastPOS</span
            >｜Version1.0
          </p>
          <!-- class="fl_right" -->
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
