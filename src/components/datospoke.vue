<template>
    <div>


        <div class="container-fluid">


<div style="height: 510px;" class="row">

<div  class="col-7">
    
<b style="font-size: 50px;">Datos del pokemon</b><br>

<b>ALTURA: {{ usodatos.guardoaltura }}</b><br>
<b>PESO: {{ usodatos.guardopeso }}KG</b><br><br>


<b >EXPERIENCIA: {{ usodatos.guardohp }}</b><br>
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
  <div  class="progress-bar"  v-bind:style="experiencia"></div>
</div><br>


<b >ATAQUE: {{ usodatos.guardoataque }}</b><br>
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
  <div  class="progress-bar"  v-bind:style="ataque"></div>
</div><br>


<b>DEFENSA: {{ usodatos.guardodefensa }}</b><br>
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
  <div  class="progress-bar"  v-bind:style="defensa"></div>
</div><br>


<b>ATAQUE ESPECIAL: {{ usodatos.guardoataqueespecial }}</b><br>
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
  <div  class="progress-bar"  v-bind:style="ataqueespecial"></div>
</div><br>

<b>DEFENSA ESPECIAL: {{ usodatos.guardodefensaespecial }}</b><br>
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
  <div  class="progress-bar"  v-bind:style="defensaespecial"></div>
</div><br>

<b>VELOCIDAD: {{ usodatos.guardovelocidad }}</b><br>
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
  <div  class="progress-bar"  v-bind:style="velocidad"></div>
</div><br>

<b>TIPO: {{ usodatos.guardotipo }}</b><br>


</div>
<div  class="col-4">

    <img
          class="imagentamaño"
          :src="usodatos.guardoimagenes"
          alt=""
        />

</div>
<div  class="col-1">

</div>


</div>

<div style="height: 200px;" class="row">

<div  class="col-4">
<b  class="datostamaño" >#{{ usodatos.guardoid }}</b>
</div>
<div  class="col-6">
<b  class="datostamaño" >{{ usodatos.guardonombres }}</b>
</div>
<div  class="col-2">

</div>


</div>

        </div>


    </div>
</template>


<script setup >
import {usepokeStore} from "../stores/user.js"
const usodatos= usepokeStore()
import {ref} from "vue"
let experiencia = ref()
experiencia.value = `width:${usodatos.guardohp}%`

let ataque = ref()
ataque.value = `width:${usodatos.guardoataque}%`

let defensa = ref()
defensa.value = `width:${usodatos.guardodefensa}%`

let ataqueespecial = ref()
ataqueespecial.value = `width:${usodatos.guardoataqueespecial}%`

let defensaespecial = ref()
defensaespecial.value = `width:${usodatos.guardodefensaespecial}%`

let velocidad = ref()
velocidad.value = `width:${usodatos.guardovelocidad}%`

</script>


<style>
b{

color: aliceblue;

}

.imagentamaño{
  height: 100%;
}

.datostamaño{
  font-size: 100px;
}


@media (max-width: 480px) {
  .imagentamaño{
  height: 20%;
}

.datostamaño{
  font-size: 0px;
}


}

</style>