import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// function OurHotPickedSection(){
//     return(<section id="section_3">
//     <h1 className="our_menu">Our Hot Picked Cakes</h1>
//     <div className="Our_Hot_Picked_Cakes">
//       <div className="Our_Hot_Picked_Cakescake_div">
//         <div className="Our_Hot_Picked_image1"></div>
//         <div className="Our_Hot_Picked_image2"></div>
//         <div className="Our_Hot_Picked_image3"></div>
//         <div className="Our_Hot_Picked_image4"></div>
//       </div>
//     </div>
//   </section>);
// }

// export default OurHotPickedSection;

function OurHotPickedSection() {
  return (
    
    <div>
    <h1 className="our_menu">Our Hot Picked Cakes</h1>
    <Swiper
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide><div className="Our_Hot_Picked_image1"></div></SwiperSlide>
    <SwiperSlide><div className="Our_Hot_Picked_image2"></div></SwiperSlide>
    <SwiperSlide><div className="Our_Hot_Picked_image3"></div></SwiperSlide>
    <SwiperSlide><div className="Our_Hot_Picked_image4"></div></SwiperSlide>
    <SwiperSlide><div className="Our_Hot_Picked_image1"></div></SwiperSlide>
    <SwiperSlide><div className="Our_Hot_Picked_image2"></div></SwiperSlide>
    <SwiperSlide><div className="Our_Hot_Picked_image3"></div></SwiperSlide>
    <SwiperSlide><div className="Our_Hot_Picked_image4"></div></SwiperSlide>
  </Swiper>
  </div>
  );
}

export default OurHotPickedSection;