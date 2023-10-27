const testimonial_card = document.querySelector(".testimonial_card");
const wrapp_testimonial_cards = document.querySelector(".wrapp_testimonial_cards");
const wrapp_testimonials = document.querySelector(".wrapp_testimonials");


const testimonial_card1 = testimonial_card.cloneNode(true);
const testimonial_card2 = testimonial_card.cloneNode(true);

wrapp_testimonial_cards.appendChild(testimonial_card1);
wrapp_testimonial_cards.appendChild(testimonial_card2);

const nav = document.querySelector(".nav");
const body = document.getElementsByName("body");

window.addEventListener("scroll",(event)=>{
    // nav.style.cssText="background:red";

    const scrollThreshold = 100;

    if(window.scrollY > scrollThreshold){
        nav.style.cssText=`
            background-color:#f75842;
        `;
    }
    else{
        nav.style.cssText=`background:#1f2641;`;
    }
});
