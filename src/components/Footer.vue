<template>
  <div class="footer" v-bind:class="[background >= 1 ? 'background' : '']">
    <div class="logo">
      <img src="../assets/logo_white.svg" alt="" />
    </div>
    <router-link class="imprint" to="/imprint">
      {{ $t("footer.imprint") }}
    </router-link>
    <div class="copyright">
      <p>
        {{ $t("footer.copyright1") }} <br />
        {{ $t("footer.copyright2") }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["background"],
};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  width: 80vw;
  padding: 0 10vw;
  color: #e4e4e4;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 10em;
  border-top: 1px solid rgba(255, 255, 255, 0.281);

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    height: 15em;
  }

  @media only screen and (max-width: 600px) {
          font-size: 12px;
  }

  .logo {
    width: 8em;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 992px) {
      width: 100%;
      margin: 2em 0 2em 0;
      img {
        height: 2em;
      }
    }
  }

  a {
    margin: auto 0;
    color: #e4e4e4;
    transition-duration: 0.2s;

    @media only screen and (max-width: 992px) {
      text-align: center;
      font-size: 0.8em;
    }

    &:hover {
      color: #fff;
    }
  }

  .copyright {
    margin: auto 0;
    @media only screen and (max-width: 992px) {
      text-align: center;
      font-size: 0.8em;
    }
  }
}

.background {
  background: rgb(72, 78, 156);
  background: linear-gradient(
    0deg,
    rgba(72, 78, 156, 1) 0%,
    rgba(114, 121, 213, 1) 100%
  );
}
</style>