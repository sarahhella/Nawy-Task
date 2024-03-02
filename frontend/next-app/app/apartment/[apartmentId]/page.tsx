"useClient";
import { useEffect } from "react";
import ApartmentDetails from "./ApartmentDetails";

interface IParams {
  apartmentId?: string;
}

const Apartment = ({ params }: { params: IParams }) => {
  useEffect(() => {
    const fetchApartment = async (apartmentId: string) => {
      try {
        const res = await fetch(
          `http://localhost:9090/apartments/getApartment/${apartmentId}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch apartment details");
        }
        const data = await res.json();
        console.log("apartment", data.apartment);
        return data.apartment;
      } catch (error) {
        console.error("Error fetching apartment details:", error);
      }
    };

    const fetchData = async () => {
      if (params.apartmentId) {
        const apartmentData = await fetchApartment(params.apartmentId);
        renderApartmentDetails(apartmentData);
      }
    };

    fetchData();
  }, [params.apartmentId]);

  const renderApartmentDetails = (apartmentData: any) => {
    return <ApartmentDetails apartment={apartmentData} />;
  };

  return null;
};

export default Apartment;
