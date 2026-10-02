import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 md:px-8 lg:px-12">
      {children}
    </div>
  );
}