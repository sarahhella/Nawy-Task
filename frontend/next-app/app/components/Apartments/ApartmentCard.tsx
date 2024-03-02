"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ApartmentCardProps {
  apartment: any;
}

const ApartmentCard: React.FC<ApartmentCardProps> = ({ apartment }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/apartment/${apartment["_id"]}`)}
      className="border border-2 col-4 rounded-1"
      style={{ background: "#FCFCFF" }}
    >
      <div className="d-flex flex-column gap-4 m-3">
        <div>
          {/* <Image
            src={data.images[0].image}
            width="200"
            height="200"
            alt="nawy logo"
          /> */}
        </div>
        <div>{apartment.title}</div>
        <div>
          <strong>Start Price: </strong>
          <span>{apartment.startPrice}</span>
        </div>
        <div>
          <strong>Area: </strong>
          <span>{apartment.area}</span>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;
