
<template>
    
    <TresCanvas window-size :clear-color="'gray'">
        <CanvasContext/>

    <TresGridHelper :args="[10, 10, 0x444444, 'teal']" />
        <TresMesh>
            <TresSphereGeometry ref="sphereRef"></TresSphereGeometry>
            <TresMeshStandardMaterial :color="'red'"/>
        </TresMesh>
        <TresDirectionalLight :position="[1,1,1]"/>
        <TresAmbientLight :intensity="10"/>
    </TresCanvas>
</template>

<script lang="ts" setup>
import type { ShallowRef } from "vue";

const sphereRef: ShallowRef<TresInstance | null> = shallowRef(null)


</script>

<style>

</style>