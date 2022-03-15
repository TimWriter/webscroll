<template>
  <div class="footer" v-bind:class="[background >= 1 ? 'background' : '']">
    <div class="logo"></div>
    <a href="" class="imprint">{{ $t("footer.imprint") }}</a>
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
  height: auto;
  color: #e4e4e4;
  display: flex;
  justify-content: space-between;
  height: 10em;
  border-top: 1px solid rgba(255, 255, 255, 0.281);

  a {
    margin: auto 0;
    color: #e4e4e4;
    transition-duration: 0.2s;

    &:hover {
      color: #fff;
    }
  }

  .copyright {
    margin: auto 0;
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