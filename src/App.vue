<template>
  <div id="app">
    <div id="my-scrollbar">
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
  import Scrollbar from 'smooth-scrollbar';
  import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
  export default {
    data() {
      return{
        scrollBar: '',
      }
    },
    mounted() {
      const overscrollOptions = {
        enable: true,
        effect: 'bounce',
        damping: 0.2,
        maxOverscroll: 100,
      };
      const options = {
        damping: 0.2,
        thumbMinSize: 15,
        renderByPixels: true,
        alwaysShowTracks: false,
        continuousScrolling: true,
      };

      Scrollbar.use(OverscrollPlugin);

      this.scrollBar = Scrollbar.init(
        document.querySelector('#my-scrollbar'), {
        ...options, 
        plugins: {
          overscroll: { ...overscrollOptions }
        }
        });
    },
    methods: {
      scrollTo(offset){
        this.scrollBar.scrollTo(0, offset, 800);
      }
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    background-color: #000;
    font-family: Poppins, sans-serif;
    font-size: 16px;
  }

  #my-scrollbar{
    width: 100vw;
    height: 100vh;
  }

  .scrollbar-track{
    background-color: rgba(0, 0, 0, 0.479) !important;
  }

  .scrollbar-thumb{
    background-color: #E4E4E4 !important;
    &:hover{
      background-color: #FFFFFF !important;
    }
  }
</style>