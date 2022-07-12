import {LazyStyle} from "../theming/types";
import {useEffect} from "react";

export function useStyles(styles: LazyStyle): void {
    useEffect(() => {
        styles.use();
        return () => styles.unuse();
    }, [styles]);
}