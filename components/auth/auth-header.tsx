import { GoShieldLock } from "react-icons/go";

interface HeaderProps {
  label: string;
  title: string;
}

export const AuthHeader = ({ title, label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <div className="flex items-center gap-x-2">
        <GoShieldLock size={30} className="text-violet-700" />
        <h1 className="text-3xl font-medium">{title}</h1>
      </div>

      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
