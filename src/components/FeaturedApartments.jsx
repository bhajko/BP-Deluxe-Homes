import React, { Component } from "react";
import { ApartmentContext } from "../context";

export default class FeaturedApartments extends Component {
  static contextType = ApartmentContext;
  render() {
    const value = this.context;
    return <div>{value}</div>;
  }
}
