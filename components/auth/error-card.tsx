import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { CardWrapper } from "./card-wrapper";

export const ErrorCard = () => {
  return (
    <CardWrapper
      backButtonHref="/auth/login"
      backButtonLabel="Back to Login"
      headerLabel="Error!"
    >
      <div className="text-destructive flex justify-center items-center font-semibold">
        <ExclamationTriangleIcon className={"w-5 h-5 mr-2"} />
        Oops! Something went Wrong!
      </div>
    </CardWrapper>
  );
};
