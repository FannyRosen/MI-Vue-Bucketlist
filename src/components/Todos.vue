<template>
  <div class="wrapper">
    <video autoplay muted loop id="myVideo">
      <source src="icecream.mp4" type="video/mp4" />
    </video>
    <h1 class="headerStyle">Icecream Bucketlist</h1>
    <nav class="nav">
      <span style="cursor: default" @click="sortChecked">View Sampled</span>
      <span style="cursor: default" @click="sortUnchecked">Yet to sample</span>
    </nav>
    <AddToDo @addTask="handleAddTask($event)" />
    <ShowToDo
      v-for="(t, i) in todos"
      :key="i"
      :task="t"
      @deleteTask="handleDeleteTask($event)"
      @handleChecked="handleCheckedTask($event)"
      @handleHeart="handleCheckedHeart($event)"
      @handleThumb="handleCheckedThumb($event)"
    ></ShowToDo>
  </div>
</template>

<script lang="ts">
import { ToDo } from "@/models/ToDo";
import { Options, Vue } from "vue-class-component";
import ShowToDo from "../components/ShowToDo.vue";
import AddToDo from "../components/AddToDo.vue";

@Options({
  components: {
    ShowToDo,
    AddToDo,
  },
})
export default class Todos extends Vue {
  todos: ToDo[] = [];

  mounted() {
    this.todos = JSON.parse(localStorage.getItem("todos") || "[]");
  }

  handleAddTask(t: ToDo) {
    this.todos.push(t);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  handleDeleteTask(t: ToDo) {
    for (let i = 0; i < this.todos.length; i++)
      if (t.task == this.todos[i].task) this.todos.splice(i, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  handleCheckedTask(t: ToDo) {
    t.isDone = !t.isDone;
    t.heartChecked = false;
    t.thumbChecked = false;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  handleCheckedHeart(t: ToDo) {
    t.heartChecked = !t.heartChecked;
    t.thumbChecked = !t.heartChecked;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  handleCheckedThumb(t: ToDo) {
    t.thumbChecked = !t.thumbChecked;
    t.heartChecked = !t.thumbChecked;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  sortChecked() {
    this.todos.sort(function (a, b) {
      return a.isDone === b.isDone ? 0 : a.isDone ? -1 : 1;
    });
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  sortUnchecked() {
    this.todos.sort(function (a, b) {
      return b.isDone === a.isDone ? 0 : b.isDone ? -1 : 1;
    });
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
</script>

<style scoped lang="scss">
body {
  #myVideo {
    z-index: -20;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    background-color: rgb(175, 245, 239);
    border-radius: 10px;
    .headerStyle {
      color: rgb(218, 42, 139);
    }
    nav {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        margin: 10px;
      }
    }
  }
}
@media screen and (min-width: 600px) {
  .wrapper {
    width: 400px;

    .nav {
      display: flex;
      flex-direction: row;
    }
  }
}

@media screen and (min-width: 1200px) {
  .wrapper {
    width: 600px;
  }
}
</style>
