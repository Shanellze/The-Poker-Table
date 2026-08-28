import {
    createContext,
    useContext,
    useMemo,
    useState,
    type ReactNode,
} from "react";

type AudioSettingsContextValue = {
  musicVolume: number;
  setMusicVolume: (value: number) => void;
  sfxVolume: number;
  setSfxVolume: (value: number) => void;
};

const AudioSettingsContext = createContext<AudioSettingsContextValue | null>(
  null,
);

const clampVolume = (value: number) => Math.min(1, Math.max(0, value));

export function AudioSettingsProvider({ children }: { children: ReactNode }) {
  const [musicVolumeValue, setMusicVolumeValue] = useState(0.3);
  const [sfxVolumeValue, setSfxVolumeValue] = useState(0.3);

  const value = useMemo<AudioSettingsContextValue>(
    () => ({
      musicVolume: musicVolumeValue,
      setMusicVolume: (nextValue) => {
        setMusicVolumeValue(clampVolume(nextValue));
      },
      sfxVolume: sfxVolumeValue,
      setSfxVolume: (nextValue) => {
        setSfxVolumeValue(clampVolume(nextValue));
      },
    }),
    [musicVolumeValue, sfxVolumeValue],
  );

  return (
    <AudioSettingsContext.Provider value={value}>
      {children}
    </AudioSettingsContext.Provider>
  );
}

export function useAudioSettings() {
  const context = useContext(AudioSettingsContext);
  if (!context) {
    throw new Error(
      "useAudioSettings must be used within AudioSettingsProvider",
    );
  }

  return context;
}
