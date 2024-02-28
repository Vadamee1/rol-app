import { redirect } from "next/navigation";
import { PATHHOME } from "@/constants/paths/home";

export default function Root() {
  redirect(PATHHOME)
}
