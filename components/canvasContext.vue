<template>

</template>

<script lang="ts" setup>
</script>
<script lang="ts" setup>
import { useTresContext } from '@tresjs/core'
import * as THREE from "three"

let textures_skybox = [
  "/background.png",
  "/background.png",
  "/background.png",
  "/background.png",
  "/background.png",
  "/background.png"
];

const {scene} = useTresContext()
scene.value.background = new THREE.CubeTextureLoader().load(
    textures_skybox
  );
</script>