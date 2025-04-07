export default function Header() {
  return (
    <header className="bg-[#7b3cd3] text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">Blip</h1>
      <div>
        <span className="text-sm px-4">Username</span>
        <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">
          Logout
        </button>
      </div>
    </header>
  );
}
