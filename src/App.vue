<template>
  <div id="app">
    <Navbar :colorClass="navcolor" @scroll-event="scrollTo" />
    <div id="scroll-container">
      <div class="scroll-content">
        <router-view @scroll-event="scrollTo" />
      </div>
      <div class="scrollbar-track scrollbar-track-x">
        <div class="scrollbar-thumb scrollbar-thumb-x"></div>
      </div>
      <div class="scrollbar-track scrollbar-track-y">
        <div class="scrollbar-thumb scrollbar-thumb-y"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      scrollBar: "",
      navcolor: "",
      device: "",
      damping: 0.15,
      maxOverscroll: 100,
      dampOverscroll: 0.3,
    };
  },
  mounted() {
    let that = this;
    function getDevice() {
      let width = document.querySelector("#app").clientWidth;
      if (width > 450 && width < 2000) {
        that.device = "desktop-hd";
      }
      if (window.screen.availWidth > 2000) {
        that.device = "desktop-wqhd";
        that.damping = 0.06;
        that.maxOverscroll = 300;
        that.dampOverscroll = 0.1;
      }
      if (
        width < 450 ||
        "ontouchstart" in window ||
        navigator.msMaxTouchPoints
      ) {
        that.device = "mobile";
      }
    }

    getDevice();

    if (this.device != "mobile") {
      const overscrollOptions = {
        enable: true,
        effect: "bounce",
        damping: this.dampOverscroll,
        maxOverscroll: this.maxOverscroll,
      };
      const options = {
        damping: this.damping,
        thumbMinSize: 15,
        renderByPixels: true,
        alwaysShowTracks: false,
        continuousScrolling: true,
      };
      class DisableScrollPlugin extends ScrollbarPlugin {
        static pluginName = "disableScroll";

        static defaultOptions = {
          direction: null,
        };

        transformDelta(delta) {
          if (this.options.direction) {
            delta[this.options.direction] = 0;
          }

          return { ...delta };
        }
      }

      Scrollbar.use(OverscrollPlugin, DisableScrollPlugin);

      this.scrollBar = Scrollbar.init(
        document.querySelector("#scroll-container"),
        {
          ...options,
          plugins: {
            overscroll: {
              ...overscrollOptions,
            },
            disableScroll: { direction: "x" },
          },
        }
      );
    }

    //Change color on About
    if (this.$route.name == "Site") {
      this.aboutChangeColor();
    }
  },
  methods: {
    scrollTo(element) {
      console.log(element);
      if (this.$route.name == "Site") {
        let element_offset = document.querySelector(element).offsetTop;
        if (this.device != "mobile") {
          this.scrollBar.scrollTo(0, element_offset - 80, 800);
        } else {
          window.scrollTo({
            top: element_offset - 80,
            left: 0,
            behavior: "smooth",
          });
        }
      } else {
        this.$router.push("/");
      }
    },

    aboutChangeColor() {
      let about = document.querySelector("#services");
      let element_offset = about.offsetTop * 0.95;
      let element_height = about.offsetHeight;
      if (this.device != "mobile") {
        this.scrollBar.addListener(() => {
          if (this.scrollBar.offset.y >= element_offset) {
            this.navcolor = "purple";
          } else if (this.navcolor == "purple") {
            this.navcolor = "";
          }
          if (this.scrollBar.offset.y >= element_offset + element_height) {
            this.navcolor = "";
          }
        });
      } else {
        document.addEventListener("scroll", () => {
          if (window.scrollY >= element_offset) {
            this.navcolor = "purple";
          } else if (this.navcolor == "purple") {
            this.navcolor = "";
          }
          if (window.scrollY >= element_offset + element_height) {
            this.navcolor = "";
          }
        });
      }
    },
  },
  watch: {
    $route() {
      if (this.device != "mobile") {
        this.scrollBar.scrollTo(0, 0, 0);
      } else {
        window.scrollTo({
          top: 0,
          left: 0,
        });
      }
      window.addEventListener("load", function () {
        if (this.$route.name == "Site") {
          this.aboutChangeColor();
        }
      });
    },
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background-color: #000;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

#scroll-container {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  scroll-behavior: smooth;

  @media only screen and (max-width: 450px) {
    height: 100%;
  }
}

.scrollbar-track {
  background-color: rgba(0, 0, 0, 0.479) !important;
}

.scrollbar-thumb {
  background-color: #e4e4e4 !important;

  &:hover {
    background-color: #ffffff !important;
  }
}
</style>