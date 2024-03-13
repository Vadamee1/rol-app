import { MessageInterface } from "@/interfaces/common/message"
import { toast } from "react-toastify"

export const HandleToast = ({text, severity}: MessageInterface) => {
  console.log('toast')
  if (severity === "error") {
    toast.error(text)
  }
  toast.success(text)
}