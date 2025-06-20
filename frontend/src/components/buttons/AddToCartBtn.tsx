import { useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface AddToCartBtnProps {
  onClickHandler?: () => void; // The ? makes it optional
}

const AddToCartBtn = ({ onClickHandler }: AddToCartBtnProps) => {
  const { isSignedIn, user } = useUser();
  const router=useRouter()

  const handleClick = () => {
    if (!isSignedIn) {
      console.log("you are not logged in");
      router.push('/sign-in')
    }
  };

  return (
    <div>
      <Button
        className="w-full bg-nepal-red hover:bg-nepal-crimson transition-colors"
        size="sm"
        onClick={handleClick}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCartBtn;
