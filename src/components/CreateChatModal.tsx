import { useState } from "react";
import { createChatGroup } from "@/lib/createChat"; // adjust import if needed
import { useAuth } from "@/context/AuthContext";

interface Props {
  onClose: () => void;
}

export default function CreateChatModal({ onClose }: Props) {
  const { user } = useAuth();
  const [groupName, setGroupName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!groupName.trim()) return;

    setLoading(true);
    try {
      if (user?.uid) {
        await createChatGroup(groupName, user.uid);
      } else {
        throw new Error("User ID is undefined");
      }
      onClose();
    } catch (err) {
      console.error("Error creating chat:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl w-full max-w-sm">
        <h3 className="text-lg font-semibold mb-4">Create New Chat</h3>
        <form onSubmit={handleCreate}>
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="Chat Group Name"
            className="w-full px-3 py-2 mb-4 rounded border dark:bg-gray-700 dark:text-white"
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded hover:bg-gray-400 dark:hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              {loading ? "Creating..." : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
