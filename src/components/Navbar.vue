<template>
  <header class="navbar" :class="colorClass">
    <div class="flex">
      <router-link class="logo" to="/">
        <lottie-player
          src="https://assets5.lottiefiles.com/packages/lf20_lx6oh1np.json"
          background="transparent"
          speed="1"
          loop
          autoplay
          id="icon"
        ></lottie-player>
        <img id="font" src="../assets/font.svg" alt="Webscroll Logo Font" />
      </router-link>
      <div class="links">
        <ul>
          <li class="hover" @click="link('#about')">
            <a class="link-1" href="#">{{ $t("nav.about") }}</a>
            <a class="link-2" href="#">{{ $t("nav.about") }}</a>
          </li>
          <li class="hover" @click="link('#projects')">
            <a class="link-1" href="#">{{ $t("nav.project") }}</a>
            <a class="link-2" href="#">{{ $t("nav.project") }}</a>
          </li>
          <li class="hover" @click="$router.push('/contact')">
            <a class="link-1" href="">{{ $t("nav.contact") }}</a>
            <a class="link-2" href="">{{ $t("nav.contact") }}</a>
          </li>
          <li id="placeholder"></li>
        </ul>
        <div class="language-container">
          <Language :colorClass="colorClass" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Language from "./Language.vue";

export default {
  name: "Navbar",
  props: ["colorClass"],
  components: {
    Language,
  },
  methods: {
    link(element) {
      this.$emit("scroll-event", element);
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100px;
  z-index: 10;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.5) 100%
  );
  .flex {
    position: relative;
    width: 80%;
    height: 100%;
    margin: 0 10%;
    display: flex;
    justify-content: space-between;
  }

  .logo {
    position: relative;
    height: 100%;
    cursor: pointer;

    #icon {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
      height: 2.8em;
      width: 2.8em;
    }

    #font {
      position: absolute;
      left: 3.2em;
      top: 50%;
      transform: translate(0, -50%);
      height: 2.2em;
      transition: 0.5s;
    }
  }

  .links {
    position: relative;
    font-size: 1.2em;
    font-weight: 500;

    @media only screen and (max-width: 992px) {
      display: none;
    }

    .language-container {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      right: 0;
    }

    ul {
      list-style: none;
      color: #e4e4e4;
      padding: 0;
      margin: 0;
      display: inline-block;
      position: relative;
      top: 50%;
      transform: translate(0, -50%);
      height: 1.6em;

      li {
        position: relative;
        padding: 0;
        display: inline-block;
        margin: 0 1em;
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
        height: 1.6em;
        cursor: pointer;

        a {
          color: #e4e4e4;
          text-decoration: none;
          transition-duration: 0.4s;
          position: relative;
        }
      }

      #placeholder {
        width: 2.5em;
      }

      .hover {
        height: 1.6em;
        width: auto;
        transition: transform 0.5s ease;
        overflow: hidden;

        a {
          display: block;
          transition: 0.5s;

          &:hover {
            color: #fff;
          }
        }

        .link-1 {
          transform-origin: right center;
        }

        .link-2 {
          position: absolute;
          top: 0;
          transform: translate(0, 2.1em) rotate(20deg);
          transform-origin: left center;
        }

        &:hover {
          .link-1 {
            transform: translate(0, -2.1em) rotate(20deg);
          }
          .link-2 {
            top: 0;
            transform: translate(0, 0) rotate(0deg);
          }
        }
      }
    }
  }
}

.purple {
  background: none !important;
  a {
    color: #5d5cab !important;
  }

  #font {
    filter: brightness(0) saturate(100%) invert(40%) sepia(12%) saturate(2408%)
      hue-rotate(202deg) brightness(90%) contrast(89%);
  }

  .hover {
    a:hover {
      color: #605eca !important;
    }
  }
}
</style>