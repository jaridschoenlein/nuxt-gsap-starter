import { gsap } from 'gsap';
  
export const siteLoad = () => {

    const loadingContainer = document.querySelectorAll('.loading-container');
    const imgOneFadeIn = document.querySelectorAll('#img-1');
    const imgTwoFadeIn = document.querySelectorAll('#img-2');
    const imgThreeFadeIn = document.querySelectorAll('#img-3');
    const loadBox = document.querySelectorAll('.load-box');

  
    gsap.to(loadingContainer, {
      delay: 2.5, // Wait for 2 seconds before starting the animation
      duration: .5,
      translateY: "-100%",
      easing: "easeOutExpo",

    });

    gsap.to(imgOneFadeIn, {
      delay: 0, // Wait for 2 seconds before starting the animation
      opacity: 1,
      duration: .25, // Duration of the fade-in animation
      stagger: 0.2, // Stagger the animations for a smoother effect (optional)
      ease: 'power2.out', // Easing function for the animation (optional)

    });

    gsap.to(imgTwoFadeIn, {
        delay: .5, // Wait for 2 seconds before starting the animation
      opacity: 1,
      duration: .25, // Duration of the fade-in animation
      stagger: 0.2, // Stagger the animations for a smoother effect (optional)
      ease: 'power2.out', // Easing function for the animation (optional)

    });

    gsap.to(imgThreeFadeIn, {
        delay: 1, // Wait for 2 seconds before starting the animation
      opacity: 1,
      duration: .25, // Duration of the fade-in animation
      stagger: 0.2, // Stagger the animations for a smoother effect (optional)
      ease: 'power2.out', // Easing function for the animation (optional)

    });

    gsap.to(loadBox, {
      delay: 2, // Wait for 2 seconds before starting the animation
      duration: .5,
      translateY: "-100%",
      easing: "easeOutExpo",

    });
  
}