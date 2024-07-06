import FavoriteToggleButton from "@/components/card/FavoriteToggleButton";
import PropertyRating from "@/components/card/PropertyRating";
import Amenities from "@/components/property/Amenities";
import BookingCalender from "@/components/property/booking/BookingCalender";
import BreadCrumbs from "@/components/property/BreadCrumbs";
import Description from "@/components/property/Description";
import ImageContainer from "@/components/property/ImageContainer";
import PropertyDetails from "@/components/property/PropertyDetails";
import ShareButton from "@/components/property/ShareButton";
import UserInfo from "@/components/property/UserInfo";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchPropertyDetails } from "@/utils/actions";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

const PropertyDetailsPage = async ({ params }: { params: { id: string } }) => {
  const property = await fetchPropertyDetails(params.id);
  if (!property) redirect("/");
  const firstName = property.profile.firstName;
  const profileImage = property.profile.profileImage;
  const { baths, bedrooms, beds, guests } = property;
  const details = { baths, bedrooms, beds, guests };

  const DynamicMap = dynamic(
    () => import("@/components/property/PropertyMap"),
    {
      ssr: false,
      loading: () => <Skeleton className='size-[40]' />,
    }
  );

  return (
    <section>
      <BreadCrumbs name={property.name} />
      <header className='flex justify-between items-center mt-4'>
        <h1 className='text-4xl font-bold'>{property.tagline}</h1>
        <div className='flex justify-between items-center gap-x-4'>
          <ShareButton propertyId={property.id} name={property.name} />
          <FavoriteToggleButton propertyId={property.id} />
        </div>
      </header>
      <ImageContainer mainImage={property.image} name={property.name} />
      <div className='lg:grid lg:grid-cols-12 gap-x-12 mt-12'>
        <div className='lg:col-span-8'>
          <div className='flex gap-x-4 items-center'>
            <h1 className='text-xl font-bold'>{property.name}</h1>
            <PropertyRating inPage propertyId={property.id} />
          </div>
          <PropertyDetails details={details} />
          <UserInfo profile={{ firstName, profileImage }} />
          <Separator />
          <Description description={property.description} />
          <Amenities amenities={property.amenities} />
          <div className='mb-5'>
            <DynamicMap countryCode={property.country} />
          </div>
        </div>
        <div className='lg:col-span-4 flex flex-col-4'>
          <BookingCalender />
        </div>
      </div>
    </section>
  );
};
export default PropertyDetailsPage;
