
import { useState } from "react";
import { ToastContext } from "./ToastContext";

export function ToastProvider({ children }) {

  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });

    setTimeout(() => {
      setToast(null);
    }, 2500);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {toast && (
        (() => {
          const alertClass = {
            success: "alert-success",
            error: "alert-error",
            warning: "alert-warning",
            info: "alert-info",
          }[toast.type] || "alert-success";

          return (
            <div className="toast toast-top toast-end z-50">
              <div className={`alert ${alertClass} shadow-lg`}>
                <span>{toast.message}</span>
              </div>
            </div>
          );
        })()
      )}
    </ToastContext.Provider>
  );
}