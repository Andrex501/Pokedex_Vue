
import { defineStore } from 'pinia';


export const usepokeStore = defineStore('poke', {
  state: () => ({
    guardores: [],
    guardoid: null,
    guardoimagenes: null,
    guardonombres: null,
    guardoaltura: null,
    guardohp: null,
    guardopeso: null,
    guardoataque: null,
    guardodefensa: null,
    guardoataqueespecial: null,
    guardodefensaespecial: null,
    guardovelocidad: null,
    guardotipo: null
    
  })
});

export const catepoke = defineStore('catepoke', {
  state: () => ({
  categoria: null    
  })
});
