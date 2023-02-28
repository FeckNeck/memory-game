<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import { useGameStore } from '../store';

const store = useGameStore()
const { moves, sec, min } = storeToRefs(store)

let mil = 0

onMounted(() => setInterval(timer, 10))

function timer() {
    mil += 10;
    if (mil == 1000) {
        mil = 0;
        sec.value++;
        if (sec.value == 60) {
            sec.value = 0;
            min.value++;
            if (min.value == 60) {
                min.value = 0;
            }
        }
    }
}
</script>
<template>
    <footer>
        <div class="game-info">
            <p>Time :</p>
            <p>{{ min }}:{{ sec }}</p>
        </div>
        <div class="game-info">
            <p>Moves :</p>
            <p>{{ moves }}</p>
        </div>
    </footer>
</template>

<style scoped>
footer {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
}

footer .game-info {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.game-info {
    padding: 1rem;
    background-color: var(--ternary);
    border: 1px solid var(--secondary);
    border-radius: 0.25rem;
}
</style>