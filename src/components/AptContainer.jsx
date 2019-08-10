import React from "react";
import AptFilter from "./AptFilter";
import AptList from "./AptList";
import { withAptConsumser } from "../context";
import Loading from "./Loading";

function AptContainer({ context }) {
  const { loading, sortedApartments, apartments } = context;

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <AptFilter apartments={apartments} />
      <AptList apartments={sortedApartments} />
    </div>
  );
}

export default withAptConsumser(AptContainer);
