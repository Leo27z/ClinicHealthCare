import Image from "next/image";
import { Button } from "./ui/button"; // Pastikan Button memiliki 'className' dan 'disabled' props

interface ButtonProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

const SubmitButton = ({
  isLoading,
  className,
  children,
  disabled,
}: ButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isLoading || disabled} // Tombol akan dinonaktifkan ketika isLoading true
      className={className ?? "shad-primary-btn w-full"} // Gunakan default class jika tidak ada className
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src="/assets/icons/loader.svg"
            alt="loader"
            width={24}
            height={24}
            className="animate-spin"
          />
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
