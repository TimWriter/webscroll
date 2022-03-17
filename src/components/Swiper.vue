<template>
  <div class="swiper">
    <div class="images">
      <img
        class="image"
        :style="{ top: top + 'px' }"
        src="../assets/test.png"
        alt=""
      />
    </div>
    <Button
      class="projects"
      :text="$t('nav.project').toUpperCase()"
      :size="'8'"
      :sizeHover="'9'"
      :fontSize="'1em'"
      @button-click="link('#projects')"
    />
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  title: "Swiper",
  components: {
    Button,
  },
  data() {
    return {
      viewport_height: "",
      image_height: "",
      img: "",
      ratio: "",
      top: 30,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    link(element) {
      this.$emit("scroll-event", element);
    },
    handleScroll() {
      this.img = document.querySelectorAll(".images .image")[0];
      this.image_height = this.img.clientHeight;
      this.viewport_height = document.documentElement.clientHeight;
      this.ratio = this.image_height / this.viewport_height;
      this.top = 30 - (this.ratio / 3) * window.scrollY;
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  .images {
    position: relative;
    height: 100%;
    width: 80%;
    height: 21vw;
    clip-path: inset(30px 30px 30px 30px round 100px 45px 100px 60px);
    transform: translate(30px, -30px);

    @media only screen and (max-width: 1600px) {
      width: 90%;
      height: 23vw;
      clip-path: inset(30px 30px 0px 30px round 80px 35px 80px 50px);
    }

    @media only screen and (max-width: 992px) {
      transform: translate(0, -30px);
      height: 35vw;
      clip-path: inset(30px 30px 0px 30px round 100px 55px 100px 70px);
    }

    @media only screen and (max-width: 600px) {
      top: 5vw;
      width: 100%;
      height: 55vw;
      clip-path: inset(30px 10px 10px 10px round 100px 55px 100px 70px);
    }

    @media only screen and (max-width: 400px) {
      top: 0;
      height: 60vw;
    }

    img {
      position: absolute;
      right: 0;
      top: 30px;
      width: 100%;
      height: auto;
    }
  }

  .projects {
    position: absolute;
    top: 17vw;
    left: 30%;
    transform: translate(-50%, -50%);

    @media only screen and (max-width: 1600px) {
      top: 18vw;
      left: 23%;
      font-size: 1vw;
    }

    @media only screen and (max-width: 1200px) {
      left: 25%;
    }

    @media only screen and (max-width: 992px) {
      left: 17%;
      top: 30vw;
      font-size: 1.8vw;
    }

    @media only screen and (max-width: 600px) {
      left: 8%;
      top: 50vw;
      font-size: 1em;
    }

    @media only screen and (max-width: 400px) {
      left: 12%;
      top: 46vw;
      font-size: 0.8em;
    }
  }
}
</style>