"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AddDeleteEdit() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  const addItem = () => {
    if (!text.trim()) return;

    // Edit mode
    if (editId !== null) {
      setItems(
        items.map((item) =>
          item.id === editId ? { ...item, text: text } : item
        )
      );
      setEditId(null);
      setText("");
      return;
    }

    // Add mode
    const newItem = {
      id: Date.now(),
      text,
    };

    setItems([...items, newItem]);
    setText("");
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const editItem = (item) => {
    setText(item.text);
    setEditId(item.id);
  };

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <h1 className="text-xl font-bold">Add / Edit / Delete Example</h1>

      {/* Input */}
      <div className="flex gap-3">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="Type something"
        />
        <button
          onClick={addItem}
          className="px-4 py-2 bg-black text-white rounded"
        >
          {editId ? "Update" : "Add"}
        </button>
      </div>

      {/* Items list */}
      <div className="space-y-3">
        <AnimatePresence>
          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.2 }}
              className="flex justify-between items-center border p-3 rounded"
            >
              <span>{item.text}</span>

              <div className="flex gap-2">
                <button
                  onClick={() => editItem(item)}
                  className="px-3 py-1 bg-blue-600 text-white rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteItem(item.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
