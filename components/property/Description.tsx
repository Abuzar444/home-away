"use client";

import { useState } from "react";
import Title from "./Title";
import { Button } from "../ui/button";

const Description = ({ description }: { description: string }) => {
  const [isFullDescriptionShown, setIsFullDescriptionShown] = useState(false);
  const words = description.split(" ");
  const isLongDescription = words.length > 100;

  const toggleDescription = () => {
    setIsFullDescriptionShown(!isFullDescriptionShown);
  };

  const displayDescription =
    isLongDescription && !isFullDescriptionShown
      ? words.slice(0, 100).join(" ") + "..."
      : description;

  return (
    <article className='mt-4'>
      <Title text='Description' />
      <p className='text-muted-foreground font-light leading-loose'>
        {displayDescription}
      </p>
      <p>
        {isLongDescription && (
          <Button variant='link' className='pl-0' onClick={toggleDescription}>
            {isFullDescriptionShown ? "show less" : "show more"}
          </Button>
        )}
      </p>
    </article>
  );
};
export default Description;