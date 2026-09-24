import React, { createContext, useContext, useState } from "react";

interface IVideoLoadContext {
  videoLoaded: boolean;
  setVideoLoaded: (value: boolean) => void;
}

const VideoLoadContext = createContext<IVideoLoadContext | undefined>(
  undefined
);

export const VideoLoadProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <VideoLoadContext.Provider value={{ videoLoaded, setVideoLoaded }}>
      {children}
    </VideoLoadContext.Provider>
  );
};

export const useVideoLoad = () => {
  const context = useContext(VideoLoadContext);
  if (!context) {
    throw new Error("useVideoLoad must be used within a VideoLoadProvider");
  }
  return context;
};
