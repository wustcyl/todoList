<template>
    <div class="app">
        <div class="position wrap"></div>
        <div class="position main">
            <Header />
            <Table />
            <Footer />
        </div>
    </div>
</template>

<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
import Table from "./components/table/table.vue";
export default {
    components : {
        Header, Footer, Table
    },
    data() {
        return {
            name: "cyl"
        }
    }
}
</script>
<style>
.app{
    width: 100%;
    height: 100%;
}
.position {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
}
.wrap {
    background: rgba(99, 90, 90, 0.7)
}
 
</style>
