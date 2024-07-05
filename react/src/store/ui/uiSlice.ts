/* eslint-disable @typescript-eslint/ban-ts-comment */
import { StateCreator } from "zustand";
import { TAlertProps } from '@components/ui/Alert';

export interface TUISlice {
    isLoading: boolean;
    alertConfig: TAlertProps;

    handleToggleIsLoading: (stateModal: boolean) => void;
    handleAlertConfig: (alertConfig: TAlertProps) => void;
}

const uiSlice: StateCreator<TUISlice> = (set, get) => ({
    isLoading: false,
    alertConfig: {
        show: false,
        message: "",
        autoClose: true,
    },

    handleToggleIsLoading: (stateModal) => set({ isLoading: stateModal }),
    handleAlertConfig: (alertConfig) => {
        set({
            // @ts-ignore
            alertConfig: {
                ...get()?.alertConfig,
                ...alertConfig
            }
        })
    }
})

export default uiSlice