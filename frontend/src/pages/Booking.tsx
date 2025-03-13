import { useQuery } from "@tanstack/react-query";
import * as apiClient from "../api-client";
import BookingForm from "../forms/BookingFrom/BookingForm";

const Booking = () => {
  const { data: currentUser } = useQuery({
    queryKey: ["fetchCurrentUser"],
    queryFn: apiClient.fetchCurrentUser,
  });

  console.log(currentUser?.email);

  return (
    <div className="grid md:grid-cols-[1fr_2fr]">
      <div className="bg-green-200">BOOKING DETAILS SUMMARY</div>
      {currentUser && <BookingForm currentUser={currentUser} />}
    </div>
  );
};

export default Booking;
