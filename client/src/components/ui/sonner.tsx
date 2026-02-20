import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      position="bottom-center"
      toastOptions={{
        style: {
          background: "#1a1a1a",
          color: "#e5e5e5",
          border: "1px solid rgba(255,255,255,0.08)",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
