import { categories } from "@/utils/categories";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "../ui/select";

const name = "category";
const CategoriesInput = ({ defaultValue }: { defaultValue?: string }) => {
  return (
    <div className='mb-8'>
      <Label htmlFor={name} className='capitalize'>
        categories
      </Label>
      <Select
        defaultValue={defaultValue || categories[0].label}
        name={name}
        required
      >
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => {
            return (
              <SelectItem key={category.label} value={category.label}>
                <span className='flex items-center gap-2'>
                  <category.icon />
                  {category.label}
                </span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
export default CategoriesInput;
