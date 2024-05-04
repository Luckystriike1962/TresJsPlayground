<template>
    <TresCanvas window-size :clear-color="'gray'">
        <!-- Set background in context -->
        <Environment :files="textures_skybox" background/>
        <TresGridHelper :args="[10, 10, 0x444444, 'teal']" />
        <TresMesh>
            <TresSphereGeometry ref="sphereRef"></TresSphereGeometry>
            <TresMeshStandardMaterial :color="'red'" :env-map="envMap" />
        </TresMesh>
        <TresDirectionalLight :position="[1, 1, 1]" />
        <TresAmbientLight :intensity="10" />
    </TresCanvas>
</template>

<script lang="ts" setup>
// https://cientos.tresjs.org/guide/staging/environment.html#texture-reference:~:text=%3C-,Environment,-%3Afiles%3D

import type { ShallowRef } from "vue";

const sphereRef: ShallowRef<TresInstance | null> = shallowRef(null)


let textures_skybox = ref(['/px.png','/nx.png','/py.png','/ny.png','/pz.png','/nz.png']);

</script>

<style></style>