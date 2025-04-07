export default function Sidebar() {
    return (
      <aside className="w-64 bg-gray-100 border-r overflow-y-auto">
        <div className="p-4 font-semibold text-gray-600">Chats</div>

        <ul className="divide-y">
        {/* Sample contact list */}
        <li className="p-4 hover:bg-gray-200 cursor-pointer">
          <div className="font-medium">Jon Jones</div>
          <div className="text-sm text-gray-500">Hey, how’s it going?</div>
        </li>
        <li className="p-4 hover:bg-gray-200 cursor-pointer">
          <div className="font-medium">Tom Aspinall</div>
          <div className="text-sm text-gray-500">Are we meeting today?</div>
        </li>
      </ul>
      </aside>
    )
  }
  