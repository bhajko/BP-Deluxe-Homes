import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";

export default function Apartment({ apartment }) {
  const { name, slug, images, price } = apartment;
  return (
    <article className="apartment">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single apartment" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/apartments/${slug}`} className="btn-primary apartment-link">
          Info
        </Link>
      </div>
      <p className="apartment-info">{name}</p>
    </article>
  );
}

Apartment.propTypes = {
  apartment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
