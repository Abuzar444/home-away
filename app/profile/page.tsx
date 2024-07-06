import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageContainer from "@/components/form/ImageContainer";
import {
  fetchProfile,
  updateProfileAction,
  updateProfileImageAction,
} from "@/utils/actions";

const ProfilePage = async () => {
  const profile = await fetchProfile();
  return (
    <section>
      <h1 className='text-2xl font-semibold my-8 capitalize'>user profile</h1>
      <ImageContainer
        image={profile.profileImage}
        name={profile.username}
        action={updateProfileImageAction}
        text='Update profile Image'
      />
      <FormContainer action={updateProfileAction}>
        <div className='grid gap-4 md:grid-cols-2 mt-4'>
          <FormInput
            type='text'
            name='firstName'
            label='First Name'
            defaultValue={profile.firstName}
          />
          <FormInput
            type='text'
            name='lastName'
            label='Last Name'
            defaultValue={profile.lastName}
          />
          <FormInput
            type='text'
            name='username'
            label='username'
            defaultValue={profile.username}
          />
        </div>
        <SubmitButton text='update profile' />
      </FormContainer>
    </section>
  );
};
export default ProfilePage;
