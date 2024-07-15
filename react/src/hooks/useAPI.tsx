import { baseURLAPI, globalErrorMessage } from "@lib/config/global-variable";
import { isEmptyValue } from "@lib/utils/helper";
import useGlobalStore from "@store";
import { TObject } from "@types";
import axios, { CancelTokenSource } from "axios";
import { useRef, useState } from "react";

interface TParamsApiClient {
  baseUrl?: string;
  method?: "get" | "post" | "put" | "post";
  bareerToken?: string;
  endpoint: string;
  payload?: TObject;
  isForm?: boolean;
}

const useAPI = () => {
  const { setAlertConfig, setIsLoading } = useGlobalStore();
  const [progress, setProgress] = useState(0);
  const cancelTokenRef = useRef<CancelTokenSource | null>(null);

  const apiClient = async (params: TParamsApiClient): Promise<{ data: TObject | null; success: boolean; message: string }> => {
    const { baseUrl, method = "get", bareerToken, endpoint, isForm = false, payload } = params;
    try {
      setIsLoading(true);
      // Create a new CancelToken for each request
      cancelTokenRef.current = axios.CancelToken.source();

      axios.defaults.baseURL = baseUrl || baseURLAPI;
      axios.defaults.headers.common["Authorization"] = bareerToken ? `Bearer ${bareerToken}` : null;
      axios.defaults.method = !isEmptyValue(payload) ? "post" : method;
      axios.defaults.headers.common["Content-Type"] = isForm ? "multipart/form-data" : "application/json";

      const response = await axios({
        withCredentials: !!bareerToken,
        url: endpoint,
        data: payload,
        onUploadProgress: (event) => {
          setProgress(Math.round((100 * event.loaded) / (event?.total || 100)));
        },
        cancelToken: cancelTokenRef.current.token,
      });

      setAlertConfig({
        show: true,
        message: "Successfully get data",
        type: "success",
      });

      return {
        success: true,
        data: response.data,
        message: "Success get data",
      };
    } catch (error: any) {
      // console.log("error message: ", error?.message)
      // console.log("error messag api: ", error?.response)

      setAlertConfig({
        show: true,
        message: globalErrorMessage,
        type: "error",
      });
      return {
        success: false,
        data: null,
        message: "",
      };
    } finally {
      setIsLoading(false);
    }
  };

  const cancelRequest = () => {
    if (cancelTokenRef.current) {
      cancelTokenRef.current.cancel("Operation canceled by the user.");
    }
  };

  return {
    apiClient,
    progress,
    cancelRequest,
    setProgress,
  };
};

export default useAPI;
