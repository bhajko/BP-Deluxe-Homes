import React from "react";
import Apartment from "./Apartment";

export default function AptList({ apartments }) {
  if (apartments.length === 0) {
    return (
      <div className="empty-search">
        <h3>No apartments matched your criteria.</h3>
      </div>
    );
  }
  return (
    <section className="apartmentslist">
      <div className="apartmentslist-center">
        {apartments.map(item => {
          return <Apartment key={item.id} apartment={item} />;
        })}
      </div>
    </section>
  );
}
