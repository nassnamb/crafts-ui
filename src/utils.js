import { notification } from 'antd';

export const success = (msg) => {
    notification['success']({
        placement: "topRight",
        duration: 10,
        top: 70,
        message: msg
    })
}

export const failure = (msg, desc) => {
    notification['error']({
        placement: "topRight",
        duration: 10,
        top: 70,
        message: msg,
        description: desc
    });
}

export const getErrorDetails = (error) => {
    const err = getErrorText(error);
    return (err&&': '+err || "");
}

export const getErrorText = (error) => {
    const data = error?.response?.data;
    const statusCode = data?.status || error?.response?.status || undefined;
    const statusText = data?.error ||  error?.response?.statusText || undefined;

    const result = data?.title && data.detail && (error.response.data.title + " (" + error.response.data.detail + ")") 
    || data?.title || (statusText && (statusCode ? statusText + " (" + statusCode + ")" : statusText)) 
    || data || (statusCode && "HTTP Code " + statusCode) || (error?.response || error);

    if(Object.prototype.toString.call(result) == 'Object object') return undefined;
    else return result;
}