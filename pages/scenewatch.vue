<template>
    <TresCanvas window-size :clear-color="'gray'" ref="canvasRef">
        <OrbitControls/>
        <TresGridHelper :args="[10, 10, 0x444444, 'teal']" />
        <TresMesh>
            <TresSphereGeometry ref="sphereRef"></TresSphereGeometry>
            <TresMeshStandardMaterial :color="'red'" />
        </TresMesh>
        <TresDirectionalLight :position="[1, 1, 1]" />
        <TresAmbientLight :intensity="10" />
    </TresCanvas>
</template>

<script lang="ts" setup>
// https://cientos.tresjs.org/guide/staging/environment.html#texture-reference:~:text=%3C-,Environment,-%3Afiles%3D
import type { ShallowRef } from "vue";
import * as THREE from 'three'
import { OrbitControls } from "@tresjs/cientos";

const canvasRef = ref();
const sphereRef: ShallowRef<TresInstance | null> = shallowRef(null)
let textures_skybox = [
    "/background.png",
    "/background.png",
    "/background.png",
    "/background.png",
    "/background.png",
    "/background.png"
];

watch(canvasRef, (value) => {
    if (!value.context?.scene) {
        console.error("context or scene is null", value.context)
        return;
    }

    value.context.scene.value.background = new THREE.CubeTextureLoader().load(
        textures_skybox
    );
});


</script>

<style></style>