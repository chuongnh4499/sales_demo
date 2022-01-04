import nProgress from "nprogress";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export const ProgressBar = () => {
    const location = useLocation();
    
    useEffect(() => {
        nProgress.start();
        nProgress.done();
        
    }, [location]);

    return <></>;
};
