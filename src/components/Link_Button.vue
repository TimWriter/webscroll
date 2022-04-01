<template>
       <router-link class="link-button" :class="{ center: center }" :to="to">
            <slot></slot>
        </router-link>
</template>

<script>
export default {
props: ['to', 'center']
}
</script>

<style lang="scss" scoped>
.link-button {
      position: relative;
      display: inline-block;
      width: auto;
      overflow: hidden;
      font-size: 1em;
      color: #fff;
      background-color: #5c5aa4;
      padding: 1em 1.5em;
      text-decoration: none;
      font-weight: 600;
      border-radius: .4em;
      cursor: pointer;
      transition-duration: .4s;
      white-space: nowrap;

      &:hover {
        box-shadow: 10px 10px 0px #000;

        &::after {
          left: 150%;
          transition-duration: 1s;
        }
      }

      &::after {
        position: absolute;
        content: '';
        left: -50%;
        top: -50%;
        height: 200%;
        width: 30%;
        background-color: #ffffff28;
        transform: rotate(20deg);
      }
    }

    .center {
      left: 50%;
      transform: translate(-50%, 0);
    }
</style>