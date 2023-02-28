<script setup lang="ts">
import { onMounted } from 'vue';
import Footer from './components/Footer.vue';
import GridVue from './components/Grid.vue';
import Header from './components/Header.vue';
import { useGameStore } from './store';

const { initGrid } = useGameStore()

onMounted(() => startGame());

function startGame() {
  initGrid();
}

</script>

<template>
  <div class="container">
    <div class="game">
      <Header @startGame="startGame()" />
      <GridVue />
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.container {
  align-items: center;
  display: flex;
  min-height: 100%;
  justify-content: center;
}

.game {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 1rem;
}
</style>
