<template>
  <div id="contact-send">
    <Background :height="'110vh'" />
    <div class="container">
      <h1>{{ $t("contact.sent") }}</h1>
      <div class="gif">
        <img
          src="https://media2.giphy.com/media/d8v55gXkiNj3y/giphy.webp?cid=dda24d50369b6aeabf75e8bfe49a22b9aeafaee7073c464e&rid=giphy.webp&ct=g"
          alt="Woman falling from chair"
        />
      </div>
    </div>
    <Footer :background="false" />
  </div>
</template>

<script>
import Background from "../components/Background.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Contact-Send",
  components: {
    Background,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
#contact-send {
  position: absolute;
  width: 100vw;
  height: auto;
  font-family: Poppins, sans-serif;

  .container {
    position: relative;
    width: 80%;
    height: auto;
    margin: 15em 10%;
    text-align: center;
    color: #fff;

    @media only screen and (max-width: 400px) {
      margin: 10em 10%;
    }

    h1 {
      @media only screen and (max-width: 400px) {
        font-size: 1.6em;
      }
    }

    .gif {
      margin: 5em 0;
      img {
        width: 20vw;
        border: 10px solid #5d5cab;
        box-shadow: 10px 10px 0px rgb(19, 19, 19);

        @media only screen and (max-width: 992px) {
          width: 40vw;
        }

        @media only screen and (max-width: 400px) {
          width: 60vw;
          border: 6px solid #5d5cab;
        }
      }
    }
  }

  .footer {
    position: absolute;
    top: 110vh;
  }
}
</style>