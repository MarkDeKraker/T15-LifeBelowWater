import { useEffect } from 'react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';

import { useAlert } from '../../context/AlertContext';

function Alert() {
  const { alerts, removeAlert } = useAlert();

  useEffect(() => {
    alerts.forEach((alert, index) => {
      setTimeout(() => {
        removeAlert(alert.id);
      }, 5000 + 1000 * index);
    });

    // clear all timers when the component unmounts
    return () => {
      alerts.forEach((alert) => {
        return clearTimeout(Number(alert.id));
      });
    };
  }, [alerts, removeAlert]);

  return (
    <AnimatePresence>
      {alerts.map((alert, index) => (
        <motion.div
          key={alert.id}
          initial={{ opacity: 0, y: -50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.3 }}
          transition={{ duration: 0.2 }}
          className="fixed left-0 right-0 m-auto transform  max-w-sm w-full shadow-lg rounded-lg overflow-hidden"
          style={{ top: `${5 + index * 60}px`, zIndex: 1500 - index }}
        >
          <div
            className={`h-full flex bg-white ${
              alert.type === "success"
                ? "border-l-4 border-green-500"
                : "border-l-4 border-red-500"
            }`}
          >
            <div className="flex-grow p-4">
              <div className="text-sm font-medium text-gray-800">
                {alert.message}
              </div>
            </div>
            <button
              onClick={() => removeAlert(alert.id)}
              className="p-2 hover:bg-gray-100 text-gray-800"
            >
              <span className="text-xl">&times;</span>
            </button>
          </div>
        </motion.div>
      ))}
    </AnimatePresence>
  );
}

export default Alert;
