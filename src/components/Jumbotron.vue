<template>
    
  <div class="jumbotron jumbotron-fluid">
    <video autoplay muted loop id="myVideo">
        <source src="/img/burger.mp4" type="video/mp4">
    </video>

    <div class="content">
        <h1 class="py-2">Dal tavolo dello chef al tuo!</h1>
        <p class="py-3 lh-lg fs-5">Da anni lavoriamo sodo per capire cosa vogliono i clienti e per offrire una proposta adatta a loro sia a livello geografico, sia individuale: dagli studenti ai professionisti, passando per le famiglie, e dai centri delle città ai paesi di periferia, grandi e piccoli. Tutti noi ci sediamo a tavola e l’offerta di Deliveboo rispecchia i gusti delle persone ovunque si trovino.</p>
        <router-link to="home"><button class="mb-5" to="home" id="myBtn">Segli il tuo ristorante</button></router-link>
    </div>
 </div>
</template>

<script>
export default {
    name: "Jumbotron"
}
</script>

<style>
    * {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial;
  font-size: 17px;
}

#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%; 
  min-height: 100%;
}

.content {
  position: fixed;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
}

#myBtn {
  width: 200px;
  font-size: 18px;
  padding: 10px;
  border: none;
  background: #000;
  color: #fff;
  cursor: pointer;
}

#myBtn:hover {
  background: orange;
  color: black;
}
</style>