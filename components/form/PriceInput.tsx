import { Input } from "../ui/input";
import { Label } from "../ui/label";

type PriceInputProps = {
  defaultValue?: number;
};

const PriceInput = ({ defaultValue }: PriceInputProps) => {
  const name = "price";
  return (
    <div>
      <Label htmlFor={name}>Price ($)</Label>
      <Input
        type='number'
        name={name}
        min={0}
        defaultValue={defaultValue || 100}
      />
    </div>
  );
};
export default PriceInput;
