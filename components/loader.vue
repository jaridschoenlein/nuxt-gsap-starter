<template>
	<div ref="loadingContainer" class="loading-container">
		<img ref="imgOneFadeIn" class="img" src="assets/img/img4.jpg">
        <img ref="imgTwoFadeIn" class="img" src="assets/img/img5.jpg">
		<img ref="imgThreeFadeIn" class="img" src="assets/img/img6.jpg">
    <div ref="loadBox" class="load-box"></div>
	</div>
  </template>
  
  <script>
  import { gsap } from 'gsap';
  
  export default {
  mounted() {
    gsap.to(this.$refs.loadingContainer, {
      delay: 2.5, // Wait for 2 seconds before starting the animation
      duration: .5,
      translateY: "-100%",
      easing: "easeOutExpo",

    });

    gsap.to(this.$refs.imgOneFadeIn, {
      delay: 0, // Wait for 2 seconds before starting the animation
      opacity: 1,
      duration: .25, // Duration of the fade-in animation
      stagger: 0.2, // Stagger the animations for a smoother effect (optional)
      ease: 'power2.out', // Easing function for the animation (optional)

    });

    gsap.to(this.$refs.imgTwoFadeIn, {
        delay: .5, // Wait for 2 seconds before starting the animation
      opacity: 1,
      duration: .25, // Duration of the fade-in animation
      stagger: 0.2, // Stagger the animations for a smoother effect (optional)
      ease: 'power2.out', // Easing function for the animation (optional)

    });

    gsap.to(this.$refs.imgThreeFadeIn, {
        delay: 1, // Wait for 2 seconds before starting the animation
      opacity: 1,
      duration: .25, // Duration of the fade-in animation
      stagger: 0.2, // Stagger the animations for a smoother effect (optional)
      ease: 'power2.out', // Easing function for the animation (optional)

    });

    gsap.to(this.$refs.loadBox, {
      delay: 2, // Wait for 2 seconds before starting the animation
      duration: .5,
      translateY: "-80%",
      easing: "easeOutExpo",

    });
  }
}
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
  bottom: -50%;
  left: 0;
  width: 100%;
  height: 900px;
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