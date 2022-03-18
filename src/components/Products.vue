<template>
  <div id="products">
    <div class="header">
      <div
        class="select"
        v-for="(item, index) in $t('site.about.cards')"
        :key="index"
        v-bind:class="index == selected ? 'active' : ''"
        @click="select(index)"
      >
        <div class="center">
          <lottie-player
            class="icon"
            :src="item.lottie"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
          <Transition name="fade">
            <h5 v-if="index == selected">{{ item.title }}</h5>
          </Transition>
        </div>
      </div>
    </div>
    <div class="content">
      <ul>
        <li>{{ $t(`site.about.cards[$(selected) - 1].sub1`) }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 1,
    };
  },
  methods: {
    select(index) {
      this.selected = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: 0.5s;
  transition-delay: 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  display: none;
}
#products {
  position: relative;
  width: 100%;

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    transition-duration: 0.4s;
  }

  .select {
    position: relative;
    background-color: #f3f3f3;
    border-radius: 1em 1em 0 0;
    display: inline-block;
    width: 20%;
    height: 3em;
    transition-duration: 0.4s;

    .center {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: row;
      width: auto;
      justify-content: center;
      .icon {
        height: 2.2em;
        width: 2.2em;
      }

      h5 {
        margin: auto 0 auto 0.5em;
        font-weight: 600;
        font-size: 1em;
        width: auto;
      }
    }
  }

  .active {
    width: 56%;
    background-color: #fff;
  }

  .content {
    position: relative;
    width: 100%;
    background-color: #fff;
    padding: 2em 0;
    border-radius: 0 0 5vw 5vw;

    ul {
      margin: 0;
    }
  }
}
</style>