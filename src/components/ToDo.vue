<template>
    <div class="ml-3">
        <h1 class="has-text-weight-bold is-size-2 mb-3">ToDoリスト</h1>
        <div class="mb-4">
            <label for="all" class="mr-3"><input type="radio" value="all" v-model="statusRadioButton">すべて</label>
            <label for="working" class="mr-3"><input type="radio" value="working" v-model="statusRadioButton">作業中</label>
            <label for="completed"><input type="radio" value="completed" v-model="statusRadioButton">完了</label>
        </div>

        <table class="mb-4">
            <thead>
                <tr><th>ID</th><th>コメント</th><th>状態</th></tr>
            </thead>
            <tbody>
                <tr v-for="task in computedTasks" :key="task.value">
                    <td>{{task.id}}</td>
                    <td>{{task.name}}</td>
                    <td><button @click="changeStatus(computedTasks.indexOf(task))">{{task.status}}</button></td>
                    <td><button @click="deleteTask(computedTasks.indexOf(task))">削除</button></td>
                </tr>
            </tbody>
        </table>

        <div>
            <h2 class="has-text-weight-bold is-size-4 mb-3">新規タスクの追加</h2>
            <input type="text" class="mr-3" v-model="input">
            <button @click="addTask">追加</button>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            input: '',
            tasks: [],
            statusRadioButton: 'all',
        }
    },
    methods: {
        addTask: function(){
            if(this.input === ''){
                return;
            }
            const todo = {
                name : this.input,
                isDone: false,
                status: '作業中',
            };

            this.tasks.push(todo);
            this.tasks.forEach((task, index) => {
                task.id = index + 1;
            });
            this.input = "";
        },
        deleteTask: function(index){
            this.tasks.splice(index, 1);
            this.tasks.forEach((task, index) => {
                task.id = index + 1;
            });
        },
        changeStatus: function(index){
            if(this.tasks[index].status === '作業中'){
                this.tasks[index].status = '完了';
                this.tasks[index].isDone = !this.tasks[index].isDone;
            } else{
                this.tasks[index].status = '作業中';
                this.tasks[index].isDone = !this.tasks[index].isDone;
            }
        },
    },
    computed: {
        computedTasks() {
            switch(this.statusRadioButton){
                case 'all':
                    return this.tasks;
                case 'working':
                    return this.tasks.filter(task => !task.isDone);
                case 'completed':
                    return this.tasks.filter(task => task.isDone);
                default:
                    return []
            }
        }
    },
}
</script>