import React, { Component } from "react";
import Title from "./Title";
import {
  FaSearchLocation,
  FaGem,
  FaCocktail,
  FaPhoneVolume
} from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaGem />,
        title: "Luxurious homes",
        info: "Only new or recently renovated apartments in our portfolio."
      },
      {
        icon: <FaSearchLocation />,
        title: "Perfect loaction",
        info: "We will find the perfect loactaion based on your needs."
      },
      {
        icon: <FaCocktail />,
        title: "In the downtown",
        info: "Close to bars and restaurants where you can have some fun."
      },
      {
        icon: <FaPhoneVolume />,
        title: "24/7 service",
        info: "We are always available on one of our contacts if you need us."
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((service, index) => {
            return (
              <article key={index} className="service">
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
