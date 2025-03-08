import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../api-client";
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm";
import { useAppContext } from "../contexts/AppContext";

const EditHotel = () => {
  const { hotelId } = useParams();
  const { showToast } = useAppContext();

  const { data: hotel } = useQuery({
    queryKey: ["fetchMyHotelById", hotelId],
    queryFn: () => {
      if (!hotelId) throw new Error("Hotel ID is required");
      return apiClient.fetchMyHotelById(hotelId);
    },
    enabled: !!hotelId,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (formData: FormData) => {
      const hotelId = formData.get("hotelId");
      if (!hotelId) {
        throw new Error("Hotel ID is required");
      }

      return apiClient.updateMyHotelById(formData);
    },
    onSuccess: () => {
      showToast({ message: "Hotel Saved!", type: "SUCCESS" });
    },
    onError: (error: Error) => {
      showToast({
        message: error.message || "Error Saving Hotel",
        type: "ERROR",
      });
    },
  });

  const handleSave = (hotelFormData: FormData) => {
    mutate(hotelFormData);
  };

  return (
    <ManageHotelForm hotel={hotel} onSave={handleSave} isLoading={isPending} />
  );
};

export default EditHotel;
