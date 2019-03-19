class ToDoAPp {
    constructor() {

        this.removeCode = new RemoveTask();
        this.addCod = new AddTask();
        this.deleteAll = new RemoveAllTask();
        this.addInput = document.querySelector('.writeTask');
        this.addBtn = document.querySelector('.add');
        this.addBtn.addEventListener('click', this.addingTask.bind(this));
        this.addInput.addEventListener('keypress', this.addingTaskKey.bind(this));
    }
    removingAll() {
        this.deleteAll.removeAll();

    }
    addingTaskKey(e) {
        if (e.keyCode === 13) {
            this.addingTask()
        }
    }
    addingTask() {
        this.addCod.createTask()
        this.removingTask()
    }
    removingTask() {
        this.removeCode.removeTask()
    }
}
class AddTask {
    constructor() {
        this.taskList = document.querySelector('.all');
        this.addInput = document.querySelector('.writeTask');
    }
    createTask() {
        if (this.addInput.value === "") {
            alert('wprowadź zadanie');
            return;
        }
        this.li = document.createElement('li')
        this.li.classList.add('task');
        this.taskList.appendChild(this.li);
        this.li.innerHTML = this.addInput.value + '<a class="removeTask"><i class="fas fa-times"></i></a>';
        this.addInput.value = "";
    }
    addingNumberTask() {
        return this.li
    }
}
class RemoveTask {
    constructor() {
        this.counter = document.querySelector('.counter');
    }
    removeTask() {
        this.iconDelate = document.querySelectorAll('.removeTask')
        this.checkNumberTask()
        this.iconDelate.forEach(element => element.addEventListener('click', () => {
            element.parentNode.remove();
            this.checkNumberTask()
            this.removeTask()
        }))
    }
    checkNumberTask() {
        this.counter.textContent = this.iconDelate.length;
    }
}
class RemoveAllTask {
    constructor() {
        this.counter = document.querySelector('.counter');
        this.taskList = document.querySelector('.all');
        document.querySelector(".remove").addEventListener('click', this.removeAll.bind(this))
    }
    removeAll() {
        this.counter.textContent = "0"
        this.taskList.innerHTML = ''
    }
}


const adding = new ToDoAPp()