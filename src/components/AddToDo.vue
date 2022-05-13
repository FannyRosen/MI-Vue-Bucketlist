<template>
  <form @submit.prevent="handleClick">
    <input v-model="task" type="text" placeholder="Add flavour" />
    <button type="submit">Add</button>
  </form>
</template>

<script lang="ts">
import { ToDo } from "@/models/ToDo";
import { Vue } from "vue-class-component";

export default class AddToDo extends Vue {
  task = "";
  isDone = false;

  handleClick() {
    this.$emit("addTask", new ToDo(this.task));
    this.task = "";
  }
}
</script>

<style scoped lang="scss">
form {
  margin-top: 20px;

  input {
    width: 180px;
    outline: none;
    border-radius: 4px;
    padding: 5px;
    font-family: "Oleo Script Swash Caps", cursive;
    color: rgb(223, 52, 146);

    &:focus {
      border: 1px solid rgb(223, 52, 146);
    }
  }
  button {
    color: rgb(223, 52, 146);
    font-family: "Oleo Script Swash Caps", cursive;
    margin: 10px;
    margin-left: 30px;
  }
}
</style>
