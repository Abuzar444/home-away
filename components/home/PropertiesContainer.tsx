import { fetchProperties } from "@/utils/actions";
import type { PropertyCardProps } from "@/utils/types";
import EmptyList from "./EmptyList";
import PropertiesList from "./PropertiesList";

const ProperitiesContainer = async ({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) => {
  const properties: PropertyCardProps[] = await fetchProperties({
    category,
    search,
  });
  if (properties.length === 0) {
    return (
      <EmptyList
        heading='No results'
        message='Try changing or removing filters...'
        btnText='clear property'
      />
    );
  }
  return <PropertiesList properties={properties} />;
};
export default ProperitiesContainer;
