<template>
    <div class="item-wrap">
        <input  
          type="checkbox"
          class="toggle"
          v-model="item.completed"
        />
        <div :class="['item-content', item.completed?'item-destroy':'']">{{ item.content }}</div>
        <button 
            class="destroy" 
            @click="destroy"
        >X</button> 
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    methods: {
        destroy() { //父组件有能力处理子组件的请求
            this.$emit("del", this.item.idx);
        }
    }
}
</script>
 

<style>
.item-wrap {
    box-sizing: border-box;
    width: 80%;
    max-width: 500px;
    height: 36px;
    /* padding: 8px 20px 8px 20px; */
    border-radius: 18px;
    background:white;
    font-size: 12px;
    display: flex;
     
}
.item-content {
    width: 100%;
    height: 36px;
    box-sizing: border-box;
    line-height: 36px;
    overflow: hidden;
}
input.toggle{
    display: black;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    margin-top: 8px;
    border: none;
    outline: none;
}
.item-destroy {
    color: rgb(184, 177, 177); 
    text-decoration: line-through
}
.destroy{
    background: transparent;
    width: 20px;
    height: 20px;
    text-align: center; 
    margin-top: 8px;
    border: none;
}
</style>

