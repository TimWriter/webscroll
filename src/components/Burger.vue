<template>
  <div id="burger" :class="colorClass" tabindex="1">
      <div>
       <span></span>
        <span></span>
        <span></span>   
      </div>
  </div>
</template>

<script>
export default {
props: ["colorClass"],
}
</script>

<style lang="scss" scoped>
#burger{
    position: fixed;
    right: 10%;
    top: 25px;
    width: 50px;
    height: 50px;
    z-index: 100;
    cursor: pointer;
    transition-duration: .2s;

    @media only screen and (min-width: 993px) {
        display: none;
    }

    @media only screen and (max-width: 600px) {
        right: 5%;
        top: 15px;
    }

    div{
        position: relative;
        width: 44%;
        height: 38%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display:flex;
        flex-direction: column;
        justify-content: space-between;
    }

    span{
        display: block;
        position: relative;
        width: 100%;
        height: 3px;
        background-color: #fff;
    }
}

.hidden{
    opacity: 0;
    transform: translate(0, -20px);
}
</style>