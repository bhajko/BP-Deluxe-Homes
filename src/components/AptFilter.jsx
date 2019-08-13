import React, { useContext } from "react";
import { ApartmentContext } from "../context";
import Title from "../components/Title";
import styled from "styled-components";

const FilterContainer = styled.section`
  padding: 5rem 0;
`;

const FilterForm = styled.form`
  width: 60vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(202px, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 40px;
  @media screen and (min-width: 776px) {
    width: 70vw;
  }
  @media screen and (min-width: 992px) {
    width: 95vw;
    max-width: 1170px;
  }
`;

const FormGroup = styled.div`
  text-transform: capitalize;
  label {
    display: block;
    letter-spacing: ${props => props.theme.mainSpacing};
    margin-bottom: 0.5rem;
  }
  select {
    width: 100%;
    background: transparent;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 3px;
    background: #fafafa;
    padding: 5px 8px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    option {
      cursor: pointer;
    }
  }
  input {
    width: 100%;
    background: transparent;
    font-size: 1rem;
  }
  input[type="range"] {
    height: 34px;
    -webkit-appearance: none;
    width: 100%;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    background: #bbb;
    border-radius: 3px;
    border: 0px solid #010101;
  }
  input[type="range"]::-webkit-slider-thumb {
    height: 20px;
    width: 20px;
    border-radius: 15px;
    background: #bf9b30;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -8px;
  }
`;

const SizeInputs = styled.div`
  display: flex;
  input {
    width: 50%;
    margin-right: 0.3rem;
    border: 1px solid #ccc;
    border-radius: 3px;
    background: #fafafa;
    padding: 5px 8px;
  }
`;

const CustomCB = styled.div`
  font-size: 16px;
  line-height: 20px;
  input[type="checkbox"] {
    display: none;
  }
  input:checked ~ label:before {
    content: "\2714";
    color: #bf9b30;
  }
  label {
    cursor: pointer;
  }
  label:before {
    display: inline-block;
    width: 20px;
    margin-right: 5px;
    content: "\00a0";
    text-align: center;
    background: #eee;
  }
  label:hover::before {
    background: #bbb;
  }
  input:checked ~ label:before {
    content: "\2714";
    color: #bf9b30;
  }
`;

// get all uniquie values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

export default function AptFilter({ apartments }) {
  const context = useContext(ApartmentContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  // get unique types
  let types = getUnique(apartments, "type");

  // add all
  types = ["all", ...types];

  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUnique(apartments, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <FilterContainer>
      <Title title="search apartments" />
      <FilterForm>
        {/** select type */}
        <FormGroup>
          <label htmlFor="type">Type</label>
          <select name="type" id="type" value={type} onChange={handleChange}>
            {types}
          </select>
        </FormGroup>
        {/** end of select type */}
        {/** guests */}
        <FormGroup>
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            onChange={handleChange}
          >
            {people}
          </select>
        </FormGroup>
        {/** end of guests */}
        {/** apt price*/}
        <FormGroup>
          <label htmlFor="price">Price €{price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </FormGroup>
        {/** end of apt price*/}
        {/** size */}
        <FormGroup>
          <label htmlFor="size">Size</label>
          <SizeInputs>
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
            />
          </SizeInputs>
        </FormGroup>
        {/** end of size */}
        {/** extras */}
        <FormGroup>
          <div className="custom-sq">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="custom-sq">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </FormGroup>
        {/** end of extras */}
      </FilterForm>
    </FilterContainer>
  );
}
