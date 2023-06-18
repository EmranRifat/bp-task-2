import React from 'react';
import great from '../Assets/great.png'
import { Link } from 'react-router-dom';
const GreatReview = () => {
   
    return (
      <div>
          <div className='pt-10 md:flex space-x-10'>
        <div className='md:w-1/2 space-y-8'>
        <div>
                <div>

                   <div className='md:flex space-x-5 py-4'>
                   <img style={{borderRadius:'50%'}} className='w-14 h-12'  src={great} alt="" />
                  <div>
                  <h1 className='font-bold text-xl'>Natasha</h1>
                   <p className='text-gray-500 text-sm'>May 2023</p>
                  </div>
                   </div>
                </div>
                    <h1 className='text-gray-600'>Great location and a wonderful host, couldn't ask for more</h1>
            </div>
            <div>
                <div>

                   <div className='md:flex space-x-5 py-4'>
                   <img style={{borderRadius:'50%'}} className='w-14 h-12'  src={great} alt="" />
                  <div>
                  <h1 className='font-bold text-xl'>Saskia</h1>
                   <p className='text-gray-500 text-sm'>May 2023</p>
                  </div>
                   </div>
                </div>
                    <h1 className='text-gray-600'>Sagrario is a superhost! She is very kind, helpful and friendly. She gives you advice about activities in Valencia.The apartment is great, clean and in the middle of the historic center. I loved staying here! I definitely want to go back!Great location and a wonderful host, couldn't ask for more</h1>
            </div>
            <div>
                <div>

                   <div className='md:flex space-x-5 py-4'>
                   <img style={{borderRadius:'50%'}} className='w-14 h-12'  src={great} alt="" />
                  <div>
                  <h1 className='font-bold text-xl'>Clara </h1>
                   <p className='text-gray-500 text-sm'>May 2023</p>
                  </div>
                   </div>
                </div>
                    <h1 className='text-gray-600'>She was really kind. Gracias Sagrario!
</h1>
            </div>
        </div>
        
        
        
        
        
        <div className='md:w-1/2 space-y-8'>
        <div>
                <div>

                   <div className='md:flex space-x-5 py-4'>
                   <img style={{borderRadius:'50%'}} className='w-14 h-12'  src={great} alt="" />
                  <div>
                  <h1 className='font-bold text-xl'>Martin</h1>
                   <p className='text-gray-500 text-sm'>May 2023</p>
                  </div>
                   </div>
                </div>
                    <h1 className='text-gray-600'>I had a Great Time Staying at Sagrario’s place! Her apartment is perfectly located in the centre of el Carmen. Her information on festivities and the area were one of a kind. I can only recommend you to stay at her’s.
Muchas gracias Sagrario!</h1>
            </div>
            <div>
                <div>

                   <div className='md:flex space-x-5 py-4'>
                   <img style={{borderRadius:'50%'}} className='w-14 h-12'  src={great} alt="" />
                  <div>
                  <h1 className='font-bold text-xl'>Merel
</h1>
                   <p className='text-gray-500 text-sm'>May 2023</p>
                  </div>
                   </div>
                </div>
                    <h1 className='text-gray-600'>I loved staying with Sagrario. She is an incredible host. She’s friendly, always responds quickly and she made me feel at home. She gave me more than enough recommendations for bars, restaurants and museums. All the recommendations I tried out were a succes! I’ll definitely stay here again next time I’m in Valencia!</h1>
            </div>
            <div>
                <div>

                   <div className='md:flex space-x-5 py-4'>
                   <img style={{borderRadius:'50%'}} className='w-14 h-12'  src={great} alt="" />
                  <div>
                  <h1 className='font-bold text-xl'>Beeen </h1>
                   <p className='text-gray-500 text-sm'>May 2023</p>
                  </div>
                   </div>
                </div>
                    <h1 className='text-gray-600'>Best bnb host! Very helpful whenever you need recommendations, very welcoming and makes you feel at home. Everything was perfect!She was really kind. Gracias Sagrario!
</h1>
            </div>
        </div>

        </div>
        <Link to="/comingsoon" className="btn btn-outline mt-8">Show all 171 reviews</Link>
        <div className='divider'></div>

      </div>
    );
};

export default GreatReview;