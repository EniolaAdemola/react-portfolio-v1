import React from "react";
import "./testimonials.css";
import { testimonials } from "../../asssets/data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Testimonials = () => {
	return (
		<section id="testimoonials">
			<h5>Review from clients</h5>
			<h2>Testimonials</h2>

			<Swiper
				className="container testimonials__container"
				// install Swiper modules
				pagination={{ clickable: true }}
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
			>
				{testimonials.map(({ id, avatar, name, review }) => {
					return (
						<SwiperSlide className="testimonial" key={id}>
							<div className="client__avatar">
								<img src={avatar} alt={name} />
							</div>
							<h5 className="client__name">{name}</h5>
							<small className="client__review">{review}</small>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonials;
