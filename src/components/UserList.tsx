'use client'

import { useAuth } from "@/context/AuthContext";
import useUsers from "@/hooks/useUsers";
import { getOrCreateDirectMessageChat } from "@/lib/createDM";
import { useRouter } from "next/navigation";

export default function UserList() {
  const { user } = useAuth();
  const users = useUsers(user?.uid || "");
  const router = useRouter();

  const handleStartDM = async (otherUserId: string) => {
    if (!user) {
      console.error("User is not authenticated.");
      return;
    }
    const chatId = await getOrCreateDirectMessageChat(user.uid, otherUserId);
    router.push(`/chat/${chatId}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-3 text-purple-700 dark:text-purple-300">
        Users
      </h2>
      <ul className="space-y-2">
        {user?.uid &&
          users.map((u) => (
            <li
              key={u.uid}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white dark:bg-gray-800 px-3 py-2 rounded shadow"
            >
              <div className="flex-1 mb-2 sm:mb-0">
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  {u.displayName}
                </p>
                <p className="text-sm text-gray-500">{u.email}</p>
              </div>
              <button
                onClick={() => handleStartDM(u.uid)}
                className="text-sm bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 w-full sm:w-auto"
              >
                Chat
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
