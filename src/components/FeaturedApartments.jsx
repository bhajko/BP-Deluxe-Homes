import React, { Component } from "react";
import { ApartmentContext } from "../context";
import Title from "../components/Title";
import Loading from "./Loading";
import Apartment from "../components/Apartment";

export default class FeaturedApartments extends Component {
  static contextType = ApartmentContext;
  render() {
    let { loading, featuredApartments: apartments } = this.context;
    apartments = apartments.map(apartment => {
      return <Apartment key={apartment.id} apartment={apartment} />;
    });

    return (
      <section className="featured-apartments">
        <Title title="Latest apartments" />
        <div className="featured-apartments-center">
          {loading ? <Loading /> : apartments}
        </div>
      </section>
    );
  }
}
