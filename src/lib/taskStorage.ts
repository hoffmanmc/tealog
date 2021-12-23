import type {Task} from "../types/tasks";
import {Writable, writable, get} from "svelte/store";

class StorageHelper {
  taskList: Writable<Task[]> = writable([]);
  
  constructor() {
    this.loadTaskList();
    this.taskList.subscribe(() => {
        this.saveTaskList();
    });
  } 

  addTask(newTask: Task) {
    this.taskList.update(taskList => {
      taskList.unshift(newTask);
      return taskList;
    });
  }

  deleteTask(id: string){
    this.taskList.update(taskList => {
      taskList = taskList.filter(task => task.id !== id);
      return taskList;
    })
  };

  saveTaskList() {
    localStorage.setItem('tasks', JSON.stringify(get(this.taskList)));
  }

  loadTaskList() {
    let loadedListString = localStorage.getItem('tasks')
    if (!loadedListString) return;
    this.taskList.update(taskList => {
      taskList = JSON.parse(loadedListString);
      return taskList;
    });
  }

  clearTaskList() {
    this.taskList.update(taskList => {
      taskList = [];
      return taskList;
    });
  };
}

const storageHelper = new StorageHelper();
export {storageHelper};
