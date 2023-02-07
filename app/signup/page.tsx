"use client";
import { useSearchParams } from "next/navigation";

export default function SignUp() {
  const searchParams = useSearchParams();
  const message: string | null = searchParams.get("message");
  return (
    <div>
      SignUp ({message})
    </div>
  );
}
