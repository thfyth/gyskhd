<template>
    <div class="main">
        <banner></banner>
        <div class="ban-box">
            <router-view />
        </div>
    </div>
</template>

<script>
let vm;
import banner from '@/components/Banner'
export default {
    data() {
        return {
            query: {},
        };
    },
    created() {
        vm = this;
    },
    components: {
        banner
    },
    methods: {},
};
</script>

<style lang="less">
    .ban-box{
        margin-top: 50px;
    }
</style>