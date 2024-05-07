<template>
    <div class="title">
      <h1>GSAP + Lenis Starter</h1>
      <p style="text-align: center;">A simple boilerplate project that includes a pre-loader and <a href="https://lenis.darkroom.engineering">Lenis Scroll</a></p>
      <p>Imagery sourced from <a href="https://unsplash.com">Unsplash</a></p>
    </div>

 
    
    <div class="img-grid">
        <img src="assets/img/img1.jpg">
        <img src="assets/img/img2.jpg">
        <img src="assets/img/img3.jpg">
        <img src="assets/img/img4.jpg">
        <img src="assets/img/img5.jpg">
        <img src="assets/img/img6.jpg">
    </div>

</template>
  

  <style>
  h1 {
    font-size: 170px;
    margin: .25em 0 0 0;
  }

  a {
    text-decoration: underline;
    color: #000;
  }

  a:hover {
    text-decoration: none;
    color: #000;
  }

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 0 1em 0;
  }

  .img-full img{
    max-width: 100vw;
  }

  .img-grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    justify-content: center;
    justify-items: center;
  }

  @media screen and (max-width: 1600px) {

    h1 {
    font-size: 100px;
    margin: .25em 0 0 0;
  }
  .img-grid {
    grid-template-columns: 1fr 1fr;
}
  }

@media screen and (max-width: 1000px) {

h1 {
font-size: 60px;
margin: .25em 0 0 0;
}
.img-grid {
grid-template-columns: 1fr 1fr;
}
}

@media screen and (max-width: 600px) {

h1 {
font-size: 30px;
margin: .25em 0 0 0;
}
.img-grid {
grid-template-columns:1fr;
padding: 20px;
}
}
</style>