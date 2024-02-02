"use client";

import { BeatLoader } from "react-spinners";
import { CardWrapper } from "./card-wrapper";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { newVerification } from "@/actions/new-verification";
import { FormSuccess } from "../form-success";
import { FormError } from "../form-error";
import { redirect } from "next/navigation";

export const NewVerificationForm = () => {
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const newToken = searchParams.get("token");


  const onSubmit = useCallback(() => {
    console.log(newToken);
    if (success || error) {
      return;
    }

    if (!newToken) {
      setError("Missing token!");
      return;
    }

    newVerification(newToken)
      .then((data) => {
        if(data.success) {
          setSuccess(data.success);
          redirect("/")
        }
        setError(data.error);
      })
      .catch((err) => {
        setError("Something went wrong");
        console.log(err);
      });
  }, [newToken, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel={"Verifying Your Email!"}
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="flex items-center w-full justify-center">
        {!success && !error && <BeatLoader />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};
