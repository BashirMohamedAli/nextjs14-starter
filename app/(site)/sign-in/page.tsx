"use client";

import { Button } from "@/components/ui/button";
import { FaGithub, FaGoogle, FaSpinner } from "react-icons/fa";
import { useTransition } from "react";
import { SingInWithGoogle } from "@/server/actions";
import Error from "@/components/error";
import { useSearchParams } from "next/navigation";

export default function SignInPage() {
  const [isPending, startTransition] = useTransition();

  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const onSubmit = () => {
    startTransition(() => {
      SingInWithGoogle();
    });
  };
  return (
    <div className="mx-auto flex h-[90vh] max-w-sm flex-col items-center justify-center space-y-6">

      <div className="space-y-4">
        <Button
          onClick={onSubmit}
          className="w-full"
          variant="outline"
          type="submit"
          aria-disabled={isPending}
          disabled={isPending}
        >
          {isPending ? (
            <FaSpinner className="mr-2 size-5 animate-spin" />
          ) : (
            <FaGoogle className="mr-2 size-5" />
          )}
          Sign in with Google
        </Button>
      </div>

      {error && <Error error={error} />}
    </div>
  );
}
