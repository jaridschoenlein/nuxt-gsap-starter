<template>
	<div ref="loadingContainer" class="loading-container">
		<img ref="imgOneFadeIn" id="img-1" class="img" src="assets/img/img4.jpg">
        <img ref="imgTwoFadeIn" id="img-2" class="img" src="assets/img/img5.jpg">
		<img ref="imgThreeFadeIn" id="img-3" class="img" src="assets/img/img6.jpg">
    <div ref="loadBox" class="load-box"></div>
	</div>
  </template>
  
  <script setup>
  onMounted(() => {
  siteLoad();
});

  </script>
  
  <style scoped>
  .loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #171717;
  color: #171717;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;

  }
  .load-box {
    position: fixed;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #171717;

  }
 

  .img {
    position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  max-width: 300px;
  }

  </style>