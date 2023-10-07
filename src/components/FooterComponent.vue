<template>
  <footer class="footer w-100">
    <b-container>
      <p class="text-center small mb-0 py-1 text-black">
        © {{ currentYear }} - Todos direitos reservados
      </p>
    </b-container>
  </footer>
</template>

<script>
import { BContainer } from 'bootstrap-vue'

export default {
  name: 'FooterComponent',

  components: {
    BContainer,
  },

  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  },
}
</script>

<style lang="scss" scoped>
.footer {
  background: #FFC700;
  bottom: 0;
  left: 0;
  position: absolute;
}
</style>
