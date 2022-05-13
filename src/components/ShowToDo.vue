<template>
  <div class="task-wrapper">
    <span>{{ task.task }}</span>
    <div class="icon-wrapper">
      <div class="checkarea" @click="handleChecked">
        <i v-if="task.isDone" class="fa fa-solid fa-check" id="check"></i>
      </div>
      <div v-if="task.isDone">
        <i
          :class="['fa fa-solid fa-heart', { marked: task.heartChecked }]"
          @click="handleHeart"
        ></i>
        <i
          :class="['fa fa-solid fa-thumbs-down', { marked: task.thumbChecked }]"
          @click="handleThumb"
        ></i>
      </div>
      <i
        id="trash"
        class="fa fa-trash"
        aria-hidden="true"
        @click="handleDelete"
      ></i>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { ToDo } from "../models/ToDo";
import { Prop } from "vue-property-decorator";

export default class ShowToDo extends Vue {
  @Prop() task!: ToDo;

  handleDelete() {
    this.$emit("deleteTask", this.task);
  }
  handleChecked() {
    this.$emit("handleChecked", this.task);
  }
  handleHeart() {
    this.$emit("handleHeart", this.task);
  }
  handleThumb() {
    this.$emit("handleThumb", this.task);
  }
}
</script>

<style scoped lang="scss">
.task-wrapper {
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  .icon-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .checkarea {
      display: flex;
      justify-content: center;
      width: 12px;
      height: 12px;
      border-radius: 2px;
      border: 1px solid rgb(218, 42, 139);
      background-color: white;
      margin-right: 10px;
    }
    #check {
      color: rgb(218, 42, 139);
      margin: 0;
      font-size: 9pt;
    }

    i {
      margin: 5px;
      color: rgb(238, 173, 205);
    }

    .marked {
      color: rgb(218, 42, 139);
    }

    #trash {
      margin-bottom: 8px;
      color: rgb(218, 42, 139);
    }
  }
}
</style>
