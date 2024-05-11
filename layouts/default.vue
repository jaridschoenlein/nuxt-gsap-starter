<script setup>
import Loader from '../components/loader.vue';
import Footer from '~/components/footer.vue';


onMounted(() => {
  useSmoothScroll();
});



</script>

<template>
  <div>
    <Loader />
    <slot />

    <Footer />
</div>

  </template>

<style>

body {
	font-family: 'Poppins';
	background-color: #f3f3f3;
	color: rgb(7, 7, 7);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

a {
    text-decoration: underline;
    color: #000;
  }

  a:hover {
    text-decoration: none;
    color: #000;
  }

/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  Typographic tweaks!
  3. Add accessible line-height
  4. Improve text rendering
*/

/*
  5. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  6. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  7. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
  padding: 10px 0;
}
/*
  8. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}

</style>
  
  