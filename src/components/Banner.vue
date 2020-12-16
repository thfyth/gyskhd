<template>
    <div class="main">
        <img class="banner-top" src="../assets/img/supplier/banner.png" alt="" srcset="">
    </div>
</template>

<script>
let vm;
export default {
    name:"banner",
    data() {
        return {
            query: {},
        };
    },
    created() {
    vm = this;
    },
    components: {},
    methods: {},
};
</script>

<style lang="less">
    .banner-top{
        width: 100%;
    }
</style>