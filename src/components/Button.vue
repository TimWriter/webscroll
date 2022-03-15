<template>
  <button class="reuseable-button" :style="cssVars">
    <div class="text-container" v-if="!sending">
      <span>{{ text }}</span>
      <span>{{ text }}</span>
    </div>
    <lottie-player
      src="https://assets7.lottiefiles.com/private_files/lf30_lndg7fhf.json"
      background="transparent"
      speed="1"
      loop
      autoplay
      id="sending"
      v-if="sending"
    ></lottie-player>
  </button>
</template>

<script>
export default {
  props: ["size", "sizeHover", "fontSize", "text", "sending"],
  data() {
    return {};
  },
  computed: {
    cssVars() {
      return {
        "--size": this.size + "em",
        "--sizeHover": this.sizeHover + "em",
        "--fontSize": this.fontSize,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.reuseable-button {
  position: relative;
  background-color: #e4e4e4;
  width: var(--size);
  height: var(--size);
  font-size: var(--fontSize);
  border-radius: 50%;
  transition-duration: 0.5s;
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;

  .text-container {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 20%;
    width: var(--size);
    transform: translate(-50%, -50%);
    text-align: center;
    overflow: hidden;
    user-select: none;

    span:nth-child(1) {
      position: absolute;
      left: 50%;
      top: 50%;
      transform-origin: right center;
      transform: translate(-50%, -50%) rotate(0deg);
      transition-duration: 0.5s;
    }
    span:nth-child(2) {
      position: absolute;
      left: 50%;
      top: 50%;
      transform-origin: left center;
      transform: translate(-50%, 80%) rotate(20deg);
      transition-duration: 0.5s;
    }
  }

  #sending {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }

  &:hover {
    background-color: #fff;

    width: var(--sizeHover);
    height: var(--sizeHover);
    transform: translate(-0.5em, -0.5em);

    span:nth-child(1) {
      transform: translate(-50%, -160%) rotate(20deg) !important;
    }
    span:nth-child(2) {
      transform: translate(-50%, -50%) rotate(0deg);
    }
  }
}
</style>