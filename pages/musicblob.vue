<template>
    <TresCanvas window-size :clear-color="'#0c1a30'">
        <TresPerspectiveCamera :position="[11, 1, 1]" />
        <OrbitControls />
        <GlobalAudio :src="exampleAudio" ref="audioRef" />
        <Suspense>
            <MusicBlobModel v-model="audioRef" />
        </Suspense>
        <TresDirectionalLight :position="[1, 1, 1]" />
        <TresAmbientLight :intensity="1" />
    </TresCanvas>
</template>

<script lang="ts" setup>
import { GlobalAudio } from "@tresjs/cientos";

const audioRef = shallowRef<typeof GlobalAudio>()
const exampleAudio = ref<string>("/Beats.mp3");

</script>

<style></style>