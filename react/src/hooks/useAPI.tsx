import { baseURLAPI, globalErrorMessage } from "@lib/config/global-variable";
import useGlobalStore from "@store";
import { TObject } from "@types";
import axios from "axios";

interface TParamsApiClient {
    baseUrl?: string;
    method?: "get" | "post" | "put" | "post";
    bareerToken?: string;
    endpoint: string;
    payload?: TObject
}

const useAPI = () => {
    const { setAlertConfig, setIsLoading } = useGlobalStore()

    const apiClient = async (params: TParamsApiClient): Promise<{ data: TObject | null; success: boolean; message: string; }> => {
        const { baseUrl, method = "get", bareerToken, endpoint, payload } = params
        try {

            setIsLoading(true)

            axios.defaults.baseURL = baseUrl || baseURLAPI
            axios.defaults.headers.common['Authorization'] = bareerToken ? `Bearer ${bareerToken}` : null
            axios.defaults.method = method

            const response = await axios({
                withCredentials: !!bareerToken,
                url: endpoint,
                data: payload
            })

            setAlertConfig({
                show: true,
                message: 'Successfully get data',
                type: "success"
            })

            return {
                success: true,
                data: response.data,
                message: 'Success get data'
            }
        } catch (error: any) {
            // console.log("error message: ", error?.message)
            // console.log("error messag api: ", error?.response)

            setAlertConfig({
                show: true,
                message: globalErrorMessage,
                type: "error"
            })
            return {
                success: false,
                data: null,
                message: ''
            }
        } finally {
            setIsLoading(false)
        }

    }

    return {
        apiClient
    }
}

export default useAPI