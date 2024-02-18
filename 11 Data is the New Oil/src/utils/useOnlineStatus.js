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
    <div className="flex h-[60vh] justify-center items-center m-4">
      <div className="p-6 rounded-lg flex flex-col bg-stone-200 max-w-2xl">
        <h1 className="m-0">You are offline</h1>
        <p className="m-0">Check your internet and try again later.</p>
      </div>
    </div>
  );
};
