<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useGameStore } from '../store';

const store = useGameStore()
const { size } = storeToRefs(store)

const emit = defineEmits(['startGame'])

function restart() {
    store.restartGame();
    emit('startGame')
}
</script>

<template>
    <header>
        <button class="game-button" @click="restart()">Restart</button>
        <button class="game-button grid-size" @click="store.setSize(), restart()">
            {{ size }} x {{ size }}
        </button>
    </header>
</template>

<style>
header {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
}

.game-button {
    background-color: var(--teal);
    border-radius: 2rem;
    border-color: transparent;
    color: inherit;
    font-family: inherit;
    font-size: 1rem;
    padding: 1rem;
    transition: all ease;
    width: 100%;
}

.game-button:hover {
    cursor: pointer;
    filter: brightness(0.80);
}

@media (max-width: 640px) {
    .grid-size {
        display: none;
    }
}
</style>