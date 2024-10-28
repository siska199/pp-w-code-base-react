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
  message?: {
    success?: string;
    error?: string;
  };
}

const useAPI = () => {
  const { setAlertConfig, setIsLoading } = useGlobalStore();
  const [progress, setProgress] = useState(0);
  const cancelTokenRef = useRef<CancelTokenSource | null>(null);

  const apiClient = async (params: TParamsApiClient): Promise<{ data: TObject | null; success: boolean; message: string }> => {
    setIsLoading(true);
    const { baseUrl, method = "get", bareerToken, endpoint, isForm = false, payload, message } = params;
    try {
      cancelTokenRef.current = axios.CancelToken.source();
      const response = await axios({
        baseURL: baseUrl || baseURLAPI,
        url: endpoint,
        method: !isEmptyValue(payload) ? "post" : method,
        headers: {
          Authorization: bareerToken ? `Bearer ${bareerToken}` : null,
          "Content-Type": isForm ? "multipart/form-data" : "application/json",
        },
        withCredentials: !!bareerToken,
        cancelToken: cancelTokenRef.current.token,
        data: payload,
        onUploadProgress: (event) => {
          setProgress(Math.round((100 * event.loaded) / (event?.total || 100)));
        },
      });

      setAlertConfig({
        show: true,
        message: message?.success || "Successfully",
        type: "success",
        withIcon: true,
      });

      return {
        success: true,
        data: response.data,
        message: "Success",
      };
    } catch (error: any) {
      // console.log("error message: ", error?.message)
      // console.log("error messag api: ", error?.response)

      setAlertConfig({
        show: true,
        message: message?.error || globalErrorMessage,
        type: "error",
        withIcon: true,
      });
      return {
        success: false,
        data: null,
        message: "error",
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
