<template>
    <div class="app">
        <div class="test-area"
             v-theme:color="0"
             v-theme:background="12">
            11111
        </div>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component
    export default class MyComponent extends Vue {
        handleToggleBtnClick() {
            this.$theme.color('1');
        }
    }
</script>
<style lang="scss" scope>
    .app {
        .test-area {
            width: 1200px;
            height: 860px;
        }
    }
</style>
