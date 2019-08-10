import React, { Component } from "react";
import items from "./data";

const ApartmentContext = React.createContext();

class ApartmentProvider extends Component {
  state = {
    apartments: [],
    sortedApartments: [],
    featuredApartments: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 600,
    minSize: 0,
    maxSize: 1000,
    breakfast: false,
    pets: false
  };

  componentDidMount() {
    let apartments = this.formatData(items);
    let featuredApartments = apartments.filter(
      apartment => apartment.featured === true
    );
    let maxPrice = Math.max(...apartments.map(item => item.price));
    let maxSize = Math.max(...apartments.map(item => item.size));
    this.setState({
      apartments,
      featuredApartments,
      sortedApartments: apartments,
      loading: false,
      price: maxPrice,
      size: maxSize
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let apartment = { ...item.fields, images, id };
      return apartment;
    });
    return tempItems;
  }

  getApartment = slug => {
    let tempApartments = [...this.state.apartments];
    const apartment = tempApartments.find(apartment => apartment.slug === slug);
    return apartment;
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value
      },
      this.filterApartments
    );
  };

  filterApartments = () => {
    let {
      apartments,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;

    // all the apartments
    let tempApts = [...apartments];

    // transform values
    capacity = parseInt(capacity);
    price = parseInt(price);

    // filter by type
    if (type !== "all") {
      tempApts = tempApts.filter(apt => apt.type === type);
    }

    // filter by capacity
    if (capacity !== 1) {
      tempApts = tempApts.filter(apt => apt.capacity >= capacity);
    }

    // filter by price
    tempApts = tempApts.filter(apt => apt.price < price);

    // filter by size
    tempApts = tempApts.filter(
      apt => apt.size >= minSize && apt.size <= maxSize
    );

    // filter by breakfast
    if (breakfast) {
      tempApts = tempApts.filter(apt => apt.breakfast === true);
    }

    // filter by pets
    if (pets) {
      tempApts = tempApts.filter(apt => apt.pets === true);
    }

    this.setState({
      sortedApartments: tempApts
    });
  };

  render() {
    return (
      <ApartmentContext.Provider
        value={{
          ...this.state,
          getApartment: this.getApartment,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </ApartmentContext.Provider>
    );
  }
}

const ApartmentConsumer = ApartmentContext.Consumer;

export function withAptConsumser(Component) {
  return function ConsumerWrapper(props) {
    return (
      <ApartmentConsumer>
        {value => <Component {...props} context={value} />}
      </ApartmentConsumer>
    );
  };
}

export { ApartmentProvider, ApartmentConsumer, ApartmentContext };
