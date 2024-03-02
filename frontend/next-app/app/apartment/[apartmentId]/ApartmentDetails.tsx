"use client";

interface ApartmentDetailsProps {
  apartment: any;
}

const ApartmentDetails: React.FC<ApartmentDetailsProps> = ({ apartment }) => {
  console.log("apartment inside", apartment);
  return (
    <div className="d-flex flex-column flex-fill align-items-center mt-5">
      <div>{apartment.title}</div>
      <div>{apartment.area}</div>
      <div>{apartment.startPrice}</div>
      <div>{apartment.description}</div>
    </div>
  );
};

export default ApartmentDetails;
