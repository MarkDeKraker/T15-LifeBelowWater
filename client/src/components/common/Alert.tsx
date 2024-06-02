import { useEffect } from 'react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';

import { useAlert } from '../../context/AlertContext';

function Alert() {
  const { alerts, removeAlert } = useAlert();

  useEffect(() => {
    // Deze setup gaat ervan uit dat removeAlert de alert verwijdert na een ingestelde tijd.
    alerts.forEach((alert) => {
      const timer = setTimeout(() => {
        removeAlert(alert.id);
      }, 5000); // Elke alert verdwijnt na 5 seconden
      return () => clearTimeout(timer);
    });
  }, [alerts, removeAlert]);

  return (
    <div className="fixed left-0 right-0 m-auto transform max-w-sm w-full top-2">
      <AnimatePresence initial={false}>
        {alerts.map((alert, index) => (
          <motion.div
            layout
            key={alert.id}
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{
              opacity: 0,
              y: -50,
              scale: 0.65,
              transition: { duration: 0.5 },
            }}
            className="shadow-lg rounded-lg overflow-hidden my-2"
            style={{ zIndex: 1500 - index }}
          >
            <div
              className={`flex items-center justify-between p-4 bg-white border-l-4 ${
                alert.type === "success" ? "border-green-500" : "border-red-500"
              }`}
            >
              <p className="text-sm font-medium text-gray-800">
                {alert.message}
              </p>
              <button
                onClick={() => removeAlert(alert.id)}
                className="text-gray-800"
              >
                &times;
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default Alert;
