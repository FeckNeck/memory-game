<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useGameStore } from '../store';
import CaseVue from './Case.vue';

const store = useGameStore()
const { grid, size } = storeToRefs(store)

</script>

<template>
    <main class="grid-container" :class="size == 4 ? 'x4' : 'x6'">
        <CaseVue v-for="(numb, i) in grid" :caseNumber="numb" :index="i">
            {{ numb }}
        </CaseVue>
    </main>
</template>

<style scoped>
.grid-container {
    display: grid;
    gap: 1rem;
}

.x4 {
    grid-template-columns: repeat(4, 1fr);
}

.x6 {
    grid-template-columns: repeat(6, 1fr);
}
</style>