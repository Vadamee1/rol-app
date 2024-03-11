import { MessageInterface } from "@/interfaces/common/message"
import { toast } from "react-toastify"

export const HandleToast = ({text, severity}: MessageInterface) => {
  if (severity === "error") {
    toast.error(text)
  }
  toast.success(text)
}