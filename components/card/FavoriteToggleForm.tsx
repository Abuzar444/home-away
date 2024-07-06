"use client";
import { toggleFavoriteAction } from "@/utils/actions";
import { usePathname } from "next/navigation";
import FormContainer from "../form/FormContainer";
import { CardSubmitButton } from "../form/Buttons";

const FavoriteToggleForm = ({
  favoriteId,
  propertyId,
}: {
  favoriteId: string | null;
  propertyId: string;
}) => {
  const pathname = usePathname();
  const toggleAction = toggleFavoriteAction.bind(null, {
    propertyId,
    favoriteId,
    pathname,
  });
  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
};
export default FavoriteToggleForm;
