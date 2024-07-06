"use client";

import { actionFunction } from "@/utils/types";
import Image from "next/image";
import { useState } from "react";
import { LuUser2 } from "react-icons/lu";
import { Button } from "../ui/button";
import FormContainer from "./FormContainer";
import ImageInput from "./ImageInput";
import { SubmitButton } from "./Buttons";

type ImageInputContainerProp = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

const ImageContainer = (props: ImageInputContainerProp) => {
  const { image, name, action, text } = props;
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);
  const userIcon = (
    <LuUser2 className='w-24 h-24 bg-primary rounded text-white mb-4' />
  );
  return (
    <div>
      {image ? (
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className='rounded object-cover mb-4 size-24'
        />
      ) : (
        userIcon
      )}
      <Button
        variant='outline'
        size='sm'
        onClick={() => setIsUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className='max-w-lg mt-4'>
          <FormContainer action={action}>
            {props.children}
            <ImageInput />
            <SubmitButton size='sm' />
          </FormContainer>
        </div>
      )}
    </div>
  );
};

export default ImageContainer;