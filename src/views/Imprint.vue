<template>
  <div id="imprint">
    <Background :height="height + 'px'" />
    <div class="container">
      <div class="content">
        <h1>
          {{ $t("imprint.imprint") }}
        </h1>
        <p>
          {{ $t("imprint.imprint_text") }}
        </p>
        <h2>
          {{ $t("imprint.privacy") }}
        </h2>
        <p id="privacy">
          {{ $t("imprint.privacy_text") }}
        </p>
      </div>
    </div>
    <Footer v-bind:style="{ top: height + 'px' }" :background="true" />
  </div>
</template>

<script>
import Background from "../components/Background.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Imprint",
  components: {
    Background,
    Footer,
  },
  data() {
    return {
      height: 0,
    };
  },
  mounted() {
    //Background-height
    function setHeight(that) {
      let container = document.querySelector(".container");
      that.height =
        container.clientHeight * 1 +
        parseFloat(getComputedStyle(container).fontSize) * 20;
      if (that.height < window.innerHeight) {
        that.height = window.innerHeight;
      }
    }

    setHeight(this);

    let oldWidth = document.querySelector(".container").clientWidth;
    setInterval(() => {
      if (document.querySelector(".container").clientWidth != oldWidth) {
        oldWidth = document.querySelector(".container").clientWidth;
        setHeight(this);
      }
    }, 300);
  },
};
</script>

<style lang="scss" scoped>
#imprint {
  position: absolute;
  width: 100vw;
  height: auto;
  font-family: Poppins, sans-serif;

  .container {
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    color: #fff;
    white-space: pre-line;
    text-align: center;

    .content {
      width: 40%;
      margin: 0 auto;
      #privacy {
        text-align: justify;
      }
    }

    h1 {
      font-size: 2.6em;
    }

    h2 {
      font-size: 2.2em;
      margin: 3em 0 0 0;
    }
  }
}
</style>