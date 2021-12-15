function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
};

export const {width, height} = getWindowDimensions();
export * from "./apiClient";
export * from "./config";
export * from "./utils";
export * from "./colors"
export * from "./sortingOptions";
export * from "./storage";
export * from "./persistAtom";
export * from "./effects"
export const DISABLED_ADS=true;
