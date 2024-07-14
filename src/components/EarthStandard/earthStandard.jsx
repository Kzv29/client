import React from 'react';
import './earthStandard.css';
import atelier from '../../assets/images/atiler.png';
import customGift from '../../assets/images/custom_gift.png';
import corporateGift from '../../assets/images/corporate_gift.png';



export default function earthStandard() {
  
    const sections = [
      {
        title: 'custom craft',
        description: 'Giving a sustainable form to your creative vision',
        image: customGift, 
      },
      {
        title: 'atelier',
        description: 'A sustainable production unit to craft your next eco-conscious collection',
        image: atelier, 
      },
      {
        title: 'corporate gifting',
        description: 'When conscious working translates to conscious gifting',
        image: corporateGift, 
      },
    ];
  
    return (
      <><h1>Living up to earth-standard</h1>
        <div className="earth-standard-container">
          
          <div className="earth-standard-grid">
            {sections.map((section, index) => (
              <div
                className={`earth-standard-item ${index === 2 ? "stretch" : ""}`}
                key={index}
              >
                <div className="card">
                  <img src={section.image} alt={section.title} />
                  <h2 class="top-left">{section.title}</h2>
                  <p   className='description'>{section.description}</p>
                </div>

                <div className="plus-icon" >+</div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
    
  
  
}


// import React from 'react';
// import './earthStandard.css';
// import atelier from '../../assets/images/atiler.png'
// import customGift from  '../../assets/images/custom_gift.png'
// import corporateGift from '../../assets/images/corporate_gift.png'
// const EarthStandard = () => {
//   const sections = [
//     {
//       title: 'custom craft',
//       description: 'Giving a sustainable form to your creative vision',
//       image: customGift, 
//     },
//     {
//       title: 'atelier',
//       description: 'A sustainable production unit to craft your next eco-conscious collection',
//       image: atelier, 
//     },
//     {
//       title: 'corporate gifting',
//       description: 'When conscious working translates to conscious gifting',
//       image:corporateGift ,
//     },
//   ];

//   return (
    
//     <div className="earth-standard-container">
  

//       <h1>Living up to earth-standard</h1>
//       <div className="earth-standard-grid">
//         {sections.map((section, index) => (
//           <div className="earth-standard-item" key={index}>
//             <img src={section.image} alt="" srcset="" />
           
//               <h2>{section.title}</h2>
//               <p>{section.description}</p>
          
//             <div className="plus-icon">+</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EarthStandard;
