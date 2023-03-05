import Image from "next/image";

import type { CreateController } from "./controller";

interface ImagePreviewProps extends CreateController {
  className?: string;
}

export function ImagePreview(props: ImagePreviewProps) {
  return props.palette?.imageUrl ? (
    <div className="flex flex-col items-center justify-center w-full p-4">
      <Image
        src={props.palette?.imageUrl || "/images/placeholder.png"}
        height={800}
        width={800}
        alt={"user uploaded image"}
        placeholder="blur"
        blurDataURL={props.palette?.imageUrl || "/images/placeholder.png"}
      />
    </div>
  ) : null;
}
