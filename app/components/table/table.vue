<template>
        <section>
            <input 
               id="input"
               type="text"
               placeholder="想做点什么了?"
               autofocus="autofocus"
               @keyup.enter="addTodoList"
            />
            
            <Item 
                v-for="item in todoList"
                :key="item.idx"
                :item="item"
                @del="deleteTodo"
            />
 
        </section>
</template>

<script>
import Item from "./item.vue";
let idx = 0;
export default {
    components: {
        Item
    },
    data () {
        return {
            todoList: [],
        }
    },
    methods: {
        addTodoList (e) {
            this.todoList.push({
               idx: idx++,
               content: e.target.value.trim(),
               completed: false
            });
            e.target.value = "";
        },
        deleteTodo (idx) {
            this.todoList.splice(this.todoList.findIndex((v) => v.idx===idx), 1);
        }
    }
}
</script>

<style>
section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
}
#input {
    box-sizing: border-box;
    width: 80%;
    max-width: 500px;
    height: 36px;
    padding: 8px 20px 8px 20px;
    border-radius: 18px;
    border: none;
    outline: none;
}
</style>
