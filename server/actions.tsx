"use server";

import { signIn } from "@/lib/auth/auth";

export const SingInWithGoogle = async () => await signIn("google");
