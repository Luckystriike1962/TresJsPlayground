
<template>
    
    <TresCanvas window-size :clear-color="'gray'">
        <TresMesh>
            <TresSphereGeometry ref="sphereRef"></TresSphereGeometry>
            <TresMeshStandardMaterial :color="'red'"/>
        </TresMesh>
        <TresDirectionalLight :position="[1,1,1]"/>
    </TresCanvas>
</template>

<script lang="ts" setup>
import type { ShallowRef } from "vue";

const sphereRef: ShallowRef<TresInstance | null> = shallowRef(null)


</script>

<style>

</style>