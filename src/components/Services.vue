<template>
  <div id="services-component">
    <div class="header">
      <div class="select" v-for="(item, index) in $t('site.services.cards')" :key="index"
        v-bind:class="index == selected ? 'active' : ''" @click="select(index)">
        <div class="center">
          <lottie-player class="icon" :src="item.lottie" background="transparent" speed="1" loop autoplay>
          </lottie-player>
          <h5 v-if="index == selected" v-bind:class="index == selectedName ? 'transition' : ''">{{ item.title }}</h5>
        </div>
      </div>
    </div>
    <div class="content">
      <div v-for="(item, index) in $t('site.services.cards')" :key="index">
        <ul v-if="index == selected">
          <li>{{ item.sub1}}</li>
          <li>{{ item.sub2}}</li>
          <li>{{ item.sub3}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: 1,
        selectedName: 1,
      };
    },
    methods: {
      select(index) {
        this.selected = index;
        setTimeout(() => {
          this.selectedName = index;
        }, 0)
      },
    },
  };
</script>

<style lang="scss" scoped>
  #services-component {
    position: relative;
    width: 100%;

    @media only screen and (min-width: 992px) {
      display: none;
    }

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
      cursor: pointer;

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
          width: 0;
          transition-duration: .4s;
          opacity: 0;
        }

        .transition {
          width: auto;
          opacity: 1;
        }
      }
    }

    .active {
      width: 56%;
      background-color: #fff;
    }

    .content {
      position: relative;
      top: -1px;
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