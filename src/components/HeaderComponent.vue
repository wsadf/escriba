<template>
  <header :class="`header ${defaultCssClass}`">
    <b-container class="py-xl-5 py-lg-4 py-md-3 py-sm-2">
      <h1 class="py-5">{{ defaultMsg }}</h1>
    </b-container>
  </header>
</template>

<script>
import { BContainer } from 'bootstrap-vue'

export default {
  name: 'HeaderComponent',

  components: {
    BContainer
  },

  props: {
    msg: {
      type: String,
      default: ''
    },
    cssClassName: {
      type: String,
      default: ''
    }
  },

  computed: {
    defaultCssClass() {
      if (!this.cssClassName) return 'bg-primary text-black';
      return this.cssClassName;
    },

    defaultMsg() {
      if (!this.msg) return 'Cadastro Escriba';
      return this.msg;
    }
  },
}
</script>

<style lang="scss">
.header {
  background-image: url('../assets/banner.jpg');
  background-size: cover; /* Ajuste conforme necessário */
  background-position: center center; /* Ajuste conforme necessário */
  color: white;
}
</style>