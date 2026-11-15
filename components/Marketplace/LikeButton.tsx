import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

type LikeButtonProps = ComponentProps<typeof Button> & {
  like: boolean;
};

export function LikeButton({
  like,
  className,
  variant = "secondary",
  type = "button",
  ...buttonProps
}: LikeButtonProps) {
  return (
    <Button
      {...buttonProps}
      type={type}
      variant={variant}
      className={cn("", className)}
    >
      <Heart stroke="red" fill={like ? "red" : "none"} />
    </Button>
  );
}
