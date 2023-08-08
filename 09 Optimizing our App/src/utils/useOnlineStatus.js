import { useEffect, useState } from "react";
export const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export const OfflineComponent = () => {
  return (
    <div className="offline-wrapper">
      <div className="offline">
        <h1>You are offline</h1>
        <p>Check your internet and try again later.</p>
      </div>
    </div>
  );
};
