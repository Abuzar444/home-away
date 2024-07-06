import { auth } from "@clerk/nextjs/server";
import { CardSignInButton } from "../form/Buttons";
import { fetchFavoritesId } from "@/utils/actions";
import FavoriteToggleForm from "./FavoriteToggleForm";

const FavoriteToggleButton = async ({ propertyId }: { propertyId: string }) => {
  const { userId } = auth();
  if (!userId) return <CardSignInButton />;
  const favoriteId = await fetchFavoritesId({ propertyId });
  return <FavoriteToggleForm favoriteId={favoriteId} propertyId={propertyId} />;
};
export default FavoriteToggleButton;
