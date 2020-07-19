<template>
    <div class="ml-3">
        <h1 class="has-text-weight-bold is-size-2 mb-3">ToDoリスト</h1>
        <div class="mb-4">
            <label for="all" class="mr-3"><input type="radio" id="all" name="status" value="すべて">すべて</label>
            <label for="working" class="mr-3"><input type="radio" id="working" name="status" value="作業中">作業中</label>
            <label for="completed"><input type="radio" id="completed" name="status" value="完了">完了</label>
        </div>

        <table class="mb-4">
            <tr><th>ID</th><th>コメント</th><th>状態</th></tr>
            <tr v-for="(task, key) in tasks" :key="key">
                <td>{{key + 1}}</td>
                <td>{{task}}</td>
                <td><button>作業中</button></td>
                <td><button>削除</button></td>
            </tr>
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
        }
    },
    methods: {
        addTask: function(){
            this.tasks.push(this.input);
            this.input = "";
        }
    }
}
</script>