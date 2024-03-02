import ApartmentCard from "./components/Apartments/ApartmentCard";

interface Apartment {
  _id: string;
  referenceNumber: number;
  title: string;
  description: string;
  area: string;
  startPrice: string;
}

export default async function Home() {
  const res = await fetch("http://localhost:9090/apartments/getApartments");
  const fetchedData = await res.json();
  const apartments: Apartment[] = fetchedData.apartments;
  console.log("apartments", apartments);

  return (
    <div className="container text-center">
      <div className="row align-items-start gap-2 justify-content-center mt-5">
        {apartments.map((apartment) => (
          <ApartmentCard key={apartment["_id"]} apartment={apartment} />
        ))}
      </div>
    </div>
  );
}
