<template>
    <div class="app">
        <div class="test-area"
             v-theme:shadow
             v-theme:background="18">
            <ul>
                <li v-for="i in 6"
                    :key="i"
                    v-theme:color=""
                    v-theme:color.hover="400">{{i}}</li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component
    export default class MyComponent extends Vue {
        handleToggleBtnClick() {

        }
    }
</script>
<style lang="scss" scope>
    .app {
        .test-area {
            width: 1200px;
            height: 860px;
            ul {
                list-style: none;
                li {
                    line-height: 48px;
                }
            }
        }
    }
</style>
