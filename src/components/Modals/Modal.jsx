"use client";
import { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import style from "./modal.module.css";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({
  isModalOpen,
  onClose,
  children,
  title = "",
  width = "50%",
  showCloseBtn = false,
  bgColor = "#FFFFFF",
  rounded = "20px",
}) {
  const modalRef = useRef(null);

  // Handle clicks outside modal
  useEffect(() => {
    function handleClickOutside(event) {
      if (showCloseBtn) return;
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`; // Compensate for scrollbar
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isModalOpen, onClose]);

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-[99999] flex w-full items-center justify-center bg-[#11111160]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className={`sm:w-auto overflow-hidden ${style.widthFull}`}
            style={{ width, backgroundColor: bgColor, borderRadius: rounded }}
          >
            <motion.div
              ref={modalRef}
              className={`relative max-h-[90vh] overflow-y-auto px-5 md:px-10 py-5`}
              style={{ scrollbarWidth: "thin" }}
              initial={{ scale: 0.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.1, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`flex items-center justify-between ${
                  title !== "" ? "pb-3" : ""
                }`}
              >
                <div className="text-lg font-semibold md:text-2xl">{title}</div>
                <div
                  onClick={onClose}
                  className={`group ${
                    showCloseBtn ? "absolute" : "hidden"
                  } right-2 top-3 h-8 w-8 cursor-pointer rounded-full font-semibold text-red transition duration-300`}
                >
                  <IoClose size={30} className="group-hover:text-red-500" />
                </div>
              </div>
              <div
                className={`child ${style.hideScrollbar} w-full overflow-x-auto overflow-y-auto`}
              >
                <div>{children}</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
