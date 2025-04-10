
import UserMenu from "./UserMenu";

export default function Header() {
  return (
    <header className="bg-[#7b3cd3] text-white p-4 flex justify-between items-center">
      <UserMenu />
    </header>
  );
}
