import { defineStore } from "pinia";

export const useGameStore = defineStore("game", {
  state: () => ({
    size: 4,
    moves: 0,
    sec: 0,
    min: 0,
    grid: Array<number>(),
    guesses: Array<number>(),
    indexes: Array<number>(),
    visiblity: Array<boolean>(),
  }),
  getters: {
    isVisible: (state) => (index: number) => state.visiblity[index],
  },
  actions: {
    playTurn(guess: number, index: number) {
      if (!this.indexes.includes(index) && !this.isVisible(index)) {
        this.guesses.push(guess);
        this.indexes.push(index);
        this.visiblity[index] = true;
        if (this.guesses.length == 2) {
          this.moves++;
          if (this.guesses[0] !== this.guesses[1]) {
            setTimeout(() => {
              this.visiblity[this.indexes[0]] = false;
              this.visiblity[this.indexes[1]] = false;
              this.guesses = [];
              this.indexes = [];
            }, 1000);
          } else {
            this.guesses = [];
            this.indexes = [];
          }
        }
      }
    },
    initGrid() {
      const gridSize = this.size * this.size;
      let randomPosition: number;
      let number = 0;
      this.visiblity = new Array(gridSize).fill(false);
      this.grid = new Array(gridSize).fill(0);
      for (let i = 0; i < gridSize; i++) {
        if (number == 10) number = 0;
        if (i % 2 == 0) number++;
        do {
          randomPosition = Math.floor(Math.random() * gridSize);
        } while (this.grid[randomPosition] != 0);
        this.grid[randomPosition] = number;
      }
    },
    restartGame() {
      this.moves = 0;
      this.sec = 0;
      this.min = 0;
      this.guesses = new Array<number>();
      this.indexes = new Array<number>();
    },
    setSize() {
      this.size = this.size == 4 ? 6 : 4;
    },
  },
});
