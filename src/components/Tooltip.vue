<template>
  <div class="tooltip">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-info-circle"
      viewBox="0 0 16 16"
    >
      <path
        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
      />
      <path
        d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
      />
    </svg>
    <div class="tip">
      <span>
        {{ text }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style lang="scss" scoped>
.tooltip {
  position: relative;
  display: inline-block;
  padding: .2em;

  svg {
    cursor: pointer;
  }

  .tip {
    position: absolute;
    font-size: 0.6em;
    width: 20em;
    top: 0;
    left: 0;
    transform: translate(-50%, -120%) scale(0.8);
    background-color: #e4e4e4;
    user-select: none;
    color: #000;
    padding: 0.5em 0;
    border-radius: 1em;
    transition-duration: 0.4s;
    opacity: 0;
    pointer-events: none;
  }

  &:hover {
    .tip {
      opacity: 1;
      transform: translate(-50%, -120%) scale(1);
    }
  }

  &:active {
    .tip {
      opacity: 1;
      transform: translate(-50%, -120%) scale(1);
    }
  }
}
</style>