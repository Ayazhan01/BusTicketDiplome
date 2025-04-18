import { useEffect } from "react";
import { CheckCircleIcon, ExclamationCircleIcon, InformationCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Notification({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = {
    success: "bg-green-100 border-green-400",
    error: "bg-red-100 border-red-400",
    info: "bg-blue-100 border-blue-400"
  };

  const textColor = {
    success: "text-green-700",
    error: "text-red-700",
    info: "text-blue-700"
  };

  const Icon = {
    success: CheckCircleIcon,
    error: ExclamationCircleIcon,
    info: InformationCircleIcon
  }[type];

  return (
    <div className={`fixed top-4 right-4 border-l-4 ${bgColor[type]} ${textColor[type]} p-4 shadow-lg max-w-xs z-50`}>
      <div className="flex items-start">
        <Icon className={`h-6 w-6 ${textColor[type]} mr-2 mt-0.5 flex-shrink-0`} />
        <div className="flex-1">
          <p className="text-sm font-medium">{message}</p>
        </div>
        <button onClick={onClose} className="ml-2 text-gray-500 hover:text-gray-700">
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}