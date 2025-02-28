import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });

    const getFetch = async () => {
        setState({ ...state, isLoading: true });

        try {
            const resp = await fetch(url);
            const imageUrl = resp.url;
            setState({
                data: imageUrl,
                isLoading: false,
                hasError: null,
            });
        } catch (error) {
            setState({
                data: null,
                isLoading: false,
                hasError: error.message,
            });
        }
    };

    useEffect(() => {
        getFetch();
    }, [url]);

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
};
