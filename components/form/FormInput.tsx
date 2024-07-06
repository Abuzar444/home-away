import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

const FormInput = ({
  name,
  type,
  label,
  defaultValue,
  placeholder,
}: FormProps) => {
  return (
    <div className='mb-2'>
      <Label htmlFor={name}>{label || name}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    </div>
  );
};
export default FormInput;
