import { secureStorage } from "@lib/utils/secure-storage";
import uiSlice, { TUISlice } from "@store/ui/uiSlice";
import { create } from "zustand";
import { createJSONStorage, persist } from 'zustand/middleware';


const useGlobalStore = create<TUISlice>()(
    persist(
        (...a) => ({
            ...uiSlice(...a)
        }),
        {
            name: 'storage-code-base-100', 
            storage: createJSONStorage(() => secureStorage) 
        }
    )
)

export default useGlobalStore