import React, { Component } from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { ApartmentContext } from "../context";
import StyledHero from "../components/StyledHero";

class SingleApartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug
    };
  }

  static contextType = ApartmentContext;

  render() {
    const { getApartment } = this.context;
    const apartment = getApartment(this.state.slug);
    if (!apartment) {
      return (
        <div className="error">
          <h3>no such apartment in our database</h3>
          <Link to="/apartments" className="btn-primary">
            Back to apartments
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = apartment;
    return (
      <>
        <StyledHero className="single-apartment-heroImg" img={images[0]}>
          <Banner title={`${name} apartment`}>
            <Link to="/apartments" className="btn-primary">
              Back to apartments
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-apartment">
          <div className="single-apartment-images">
            {images.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-apartment-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>Price: €{price}</h6>
              <h6>Size: {size}m²</h6>
              <h6>
                Capacity:{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="apartment-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}

export default SingleApartment;
