<template>
  <div id="imprint">
    <Background class="bg" />
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
        <p id="privacy" v-html="$t('imprint.privacy_text')">
        </p>
      </div>
    </div>
    <Footer :background="false" />
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
};
</script>

<style lang="scss" scoped>
#imprint {
  position: relative;
  margin: 0;
  padding: 0;
  display: block;

  @media only screen and (max-width: 600px) {
            font-size: 12px;
      }

.bg{
  position: absolute;
  top: -120px;
  height: calc(100% + 120px);
}

  .container {
    position: relative;
    margin: 120px 0 100px 0;
    left: 0;
    width: 100%;
    color: #fff;
    white-space: pre-line;
    text-align: center;

    .content {
      width: 40%;
      margin: 0 auto;

      @media only screen and (max-width: 1200px) {
            width: 60%;
      }

      @media only screen and (max-width: 992px) {
            width: 80%;
      }

      #privacy {
        text-align: justify;
      }
    }

    h1 {
      font-size: 2.6em;
      margin: 0;
    }

    h2 {
      font-size: 2.2em;
      margin: 3em 0 0 0;
    }
  }
}
</style>