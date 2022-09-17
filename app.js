var CardData = [
    {
      title: "Supervisor",
      subtitle: " Monitors activity to identify project roadblocks  ",
      image: "./images/icon-supervisor.svg",
      borderTop:"cardteal"
    },
 
  {
    
    title: "Team Builder",
    subtitle:
      " Scans our talent network to create the optimal team for your project",
    image: "./images/icon-calculator.svg",
    borderTop:"cardred"
    
  },

  {
      title: "Calculator",
      subtitle:
      " Uses data from past projects to provide better delivery estimates",
      image: "./images/icon-calculator.svg",
      borderTop:"cardblue",
      center: "center"
    },
    {
      title: "Karma",
      subtitle: " Regularly evaluates our talent to ensure quality",
      image: "./images/icon-karma.svg",
      borderTop:"cardyellow"
    },
];

const cardMap = document.querySelector(".card-container");
CardData.forEach(card =>{
    cardMap.innerHTML+=
    `  <div  class="parent ${card.borderTop} " >
    <div class="child">
       <h3>${card.title}</h3>
             <p class="subtitle">${card.subtitle}</p>
             
                <img src=${card.image} alt="image"/> 
   </div>
    </div>`;
})
