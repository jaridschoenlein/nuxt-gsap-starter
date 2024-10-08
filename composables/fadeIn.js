import { gsap } from 'gsap';


export const fadeIn = () => {


    const elementsToFadeIn = document.querySelectorAll('.fade-in');

 
    gsap.to(elementsToFadeIn, {
      delay: 3,
      opacity: 1,
      duration: .65, 
      stagger: 0.5, 
      ease: 'power2.out' 
    });
  

}