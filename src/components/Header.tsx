
import UserMenu from "./UserMenu";
interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({onMenuClick}: HeaderProps) {
  return (
    <header className="bg-[#7b3cd3] text-white p-4 flex justify-between items-center">
      <UserMenu onMenuClick={onMenuClick} />
    </header>
  );
}
