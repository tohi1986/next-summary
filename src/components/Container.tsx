
import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto w-full max-w-6xl px-2 sm:px-3 md:px-4 lg:px-6">
      {children}
    </div>
  );
}
