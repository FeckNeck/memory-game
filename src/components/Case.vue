<script lang="ts" setup>
import { computed } from 'vue';
import { useGameStore } from '../store';
import { VueFlip } from 'vue-flip'

const { playTurn, isVisible } = useGameStore()

const props = defineProps<{
    caseNumber: number,
    index: number
}>()

const visible = computed(() => isVisible(props.index));

function play() {
    playTurn(props.caseNumber, props.index)
}


</script>

<template>
    <vue-flip width="6.25rem" height="6.25rem" class="card" v-model="visible" @click="play()">
        <template v-slot:front style="front">
            ?
        </template>
        <template v-slot:back class="back">
            <img :src="'./weapons/' + caseNumber + '.png'" class="weapon" />
        </template>
    </vue-flip>
</template>

<style>
.card {
    border-radius: 0.25rem;
    cursor: pointer;
    border: 2px solid var(--ternary);
}

.weapon {
    width: 50%;
}
</style>