<template>

    <TresCanvas window-size :clear-color="'gray'">
        <TresPerspectiveCamera :position="[11,1,1]"/>
        <OrbitControls/>
            <TresGridHelper :args="[10, 10, 0x444444, 'teal']" />
            <Suspense>
                <MusicBlobModel />
            </Suspense>
            <TresDirectionalLight :position="[1, 1, 1]" />
            <TresAmbientLight :intensity="1" />
    </TresCanvas>
</template>

<script lang="ts" setup>
import type { ShallowRef } from "vue";

const sphereRef: ShallowRef<TresInstance | null> = shallowRef(null)


</script>

<style></style>