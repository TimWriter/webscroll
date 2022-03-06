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
  import Scrollbar from 'smooth-scrollbar';
  import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
  import Navbar from './components/Navbar.vue';
  export default {
    components: {
      Navbar
    },
    data() {
      return {
        scrollBar: '',
        navcolor: '',
      }
    },
    mounted() {
      const overscrollOptions = {
        enable: true,
        effect: 'bounce',
        damping: 0.15,
        maxOverscroll: 100,
      };
      const options = {
        damping: 0.15,
        thumbMinSize: 15,
        renderByPixels: true,
        alwaysShowTracks: false,
        continuousScrolling: true,
      };

      Scrollbar.use(OverscrollPlugin);

      this.scrollBar = Scrollbar.init(
        document.querySelector('#scroll-container'), {
          ...options,
          plugins: {
            overscroll: {
              ...overscrollOptions
            }
          }
        });

      //Change color on About
      if(this.$route.name == 'Site'){
        let about = document.querySelector('#about')
        let element_offset = about.offsetTop * 0.95;
        let element_height = about.offsetHeight;
        this.scrollBar.addListener(() =>{
          if(this.scrollBar.offset.y >= element_offset){
            this.navcolor = 'purple';
          } else if (this.navcolor == 'purple'){
            this.navcolor = '';
          }
          if(this.scrollBar.offset.y >= (element_offset + element_height)){
            this.navcolor = '';
          }
        });
      }
    },
    methods: {
      scrollTo(element) {
        let element_offset = document.querySelector(element).offsetTop;
        this.scrollBar.scrollTo(0, element_offset, 800);
      },
    },
    watch: {
      '$route' () {
        this.scrollBar.scrollTo(0, 0, 0);
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

  #scroll-container {
    width: 100vw;
    height: 100vh;
  }

  .scrollbar-track {
    background-color: rgba(0, 0, 0, 0.479) !important;
  }

  .scrollbar-thumb {
    background-color: #E4E4E4 !important;

    &:hover {
      background-color: #FFFFFF !important;
    }
  }
</style>