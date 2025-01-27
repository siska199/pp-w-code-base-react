<template>
    <div :class="{
        [`${customeClass?.container}`]: customeClass?.container,
        'd-flex flex-column border bg-secondary-10  gap-2': true,
    }" :style="{
        ...customeStyle?.container
    }">
        <div :style="{
            'width': '1.5rem',

            ...customeStyle?.div1
        }">
            1
        </div>
        <div>
            2
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue-next/dist/bootstrap-vue-next.css"
import "bootstrap-icons/font/bootstrap-icons.css"
defineProps({
    customeClass: {
        type: Object as PropType<{
            container: string;
        }>,
        required: false
    },
    customeStyle: {
        type: Object as PropType<{
            container?: object;
            div1?: object;
        }>,
        required: false
    }
})
</script>

<style scoped lang="scss">

</style>