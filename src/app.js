import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      tasks: [
        {name: "Take out the trash", priority: 'low'},
        {name: "Beat Tim at Street Fighter", priority: 'high'},
        {name: "Do my Code Clan homework", priority: 'high'}
      ],
      newTask: "",
      newPriority: ""
    },
    methods: {
      saveNewTask: function(){
        this.tasks.push({
          name: this.newTask,
          priority: this.newPriority
        })
        this.newTask =""
      }
    }
  })
})
