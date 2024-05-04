<template>
</template>

<script lang="ts" setup>
</script>
<script lang="ts" setup>
// https://docs.tresjs.org/api/composables.html#properties-of-context:~:text=of%20your%20scene-,scene,-The%20scene.

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