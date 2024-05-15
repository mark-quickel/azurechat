"use client";

import { Button } from "@/features/ui/button";
import { LoadingIndicator } from "@/features/ui/loading";
import { MessageCirclePlus } from "lucide-react";
import { useFormStatus } from "react-dom";

export const NewChat = (props: { IconOnly: boolean; }) => {
  const { pending } = useFormStatus();
  const buttonText: string = (props.IconOnly === false) ? "New Chat" : "";
  return (
    <Button
      aria-disabled={pending}
      size={"default"}
      className={(props.IconOnly === false) ? "flex gap-2" : "px-0 w-12 justify-center items-center"}
      variant={(props.IconOnly === false) ? "outline" : "link"}
    >
      {pending ? <LoadingIndicator isLoading={pending} /> : <MessageCirclePlus />}
      {(props.IconOnly === false) ? "New Chat" : ""}
    </Button>
  );
};
