export default function Sidebar() {
    return (
      <aside className="w-64 bg-gray-100 border-r border-[#b492e4] overflow-y-auto dark:bg-gray-800 ">
        <div className="p-4 font-semibold text-gray-600 dark:text-gray-100 border-b border-[#b492e4]">Chats</div>

        <ul className="divide-y">
        {/* Sample contact list */}
        <li className="p-4 hover:bg-[#b492e4] cursor-pointer">
          <div className="font-medium text-xl text-gray-600 dark:text-gray-100">Jon Jones</div>
          <div className="text-sm text-gray-500">Hey, how’s it going?</div>
        </li>
        <li className="p-4 hover:bg-[#b492e4] cursor-pointer">
          <div className="font-medium text-xl text-gray-600 dark:text-gray-100">Tom Aspinall</div>
          <div className="text-sm text-gray-500">Are we meeting today?</div>
        </li>
      </ul>
      </aside>
    )
  }
  