/* eslint-disable @typescript-eslint/ban-ts-comment */
import { StateCreator } from "zustand";
import { TAlertProps } from "@components/ui/Alert";

export interface TUISlice {
  isLoading: boolean;
  alertConfig: TAlertProps;

  setIsLoading: (stateModal: boolean) => void;
  setAlertConfig: (alertConfig: Partial<TAlertProps>) => void;
}

const uiSlice: StateCreator<TUISlice> = (set, get) => ({
  isLoading: false,
  alertConfig: {
    show: false,
    message: "",
    autoClose: true,
  },

  setIsLoading: (stateModal) => set({ isLoading: stateModal }),

  setAlertConfig: (alertConfig) => {
    set({
      // @ts-ignore
      alertConfig: {
        ...get()?.alertConfig,
        ...alertConfig,
      },
    });
  },
});

export default uiSlice;
