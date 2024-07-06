import { LuTent } from "react-icons/lu";
import { Button } from "../ui/button";
import Link from "next/link";

const Logo = () => {
  return (
    <Button asChild size='icon'>
      <Link href='/' className='w-6 h-6'>
        <LuTent />
      </Link>
    </Button>
  );
};
export default Logo;
