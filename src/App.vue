<template>
  <Todos />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Todos from "./components/Todos.vue";

@Options({
  components: {
    Todos,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Oleo Script Swash Caps", cursive;
  text-align: center;
  color: rgb(214, 18, 126);
  margin-top: 60px;

  #myVideo {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
  }
}
</style>
