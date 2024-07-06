"use client";
import { useState } from "react";
import { Card, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { LuMinus, LuPlus } from "react-icons/lu";

const CounterInput = ({
  detail,
  defaultValue,
}: {
  detail: string;
  defaultValue?: number;
}) => {
  const [count, setCount] = useState(defaultValue || 0);

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    setCount((prev) => {
      if (prev === 0) {
        return prev;
      }
      return prev - 1;
    });
  };

  return (
    <Card className='mb-2'>
      <input type='hidden' name={detail} value={count} />
      <CardHeader className='flex flex-col gap-5'>
        <div className='flex items-center justify-between flex-wrap'>
          <div className='flex flex-col'>
            <h2 className='font-medium capitalize'>{detail}</h2>
            <p className='text-muted-foreground text-sm'>
              Specify number of {detail}
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <Button
              variant='outline'
              size='icon'
              type='button'
              onClick={decrease}
            >
              <LuMinus className='size-5 text-primary' />
            </Button>
            <span className='text-xl font-bold w-5 text-center'>{count}</span>
            <Button
              variant='outline'
              size='icon'
              type='button'
              onClick={increase}
            >
              <LuPlus className='size-5 text-primary' />
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default CounterInput;
