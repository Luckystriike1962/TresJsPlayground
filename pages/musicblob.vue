<template>

    <TresCanvas window-size :clear-color="'#0c1a30'">
        <TresPerspectiveCamera :position="[11,1,1]"/>
        <OrbitControls/>
        <GlobalAudio :src="exampleAudio" ref="audioRef"/>
            <TresGridHelper :args="[10, 10, 0x444444, 'teal']" />
            <Suspense>
                <MusicBlobModel :v-model="audioRef.value"/>
            </Suspense>
            <TresDirectionalLight :position="[1, 1, 1]" />
            <TresAmbientLight :intensity="1" />
    </TresCanvas>
</template>

<script lang="ts" setup>
import type { ShallowRef } from "vue";

const sphereRef: ShallowRef<TresInstance | null> = shallowRef(null)
const audioRef: ShallowRef<TresInstance | null> = shallowRef(null)
const exampleAudio = ref("/Beats.mp3");

</script>

<style></style>