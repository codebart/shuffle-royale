import React, {ChangeEvent, useCallback, useEffect, useRef, useState} from "react";
import {Input} from "./Input";

export type TriStateCheckboxProps = {
    onChange(value: boolean | null): void;
}

export const TriStateCheckbox = ({onChange}: TriStateCheckboxProps) => {
    const [state, setState] = useState<boolean | null>(null);
    const ref = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
        if (ref.current) {
            ref.current.indeterminate = true;
        }
    }, [ref]);
    const onCustomChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        if (state === true) {
            setState(false);
            event.currentTarget.indeterminate = false;
            event.currentTarget.checked = false;
            onChange(false);
        } else if (state === false) {
            setState(null);
            event.currentTarget.indeterminate = true;
            event.currentTarget.checked = false;
            onChange(null);
        } else {
            setState(true);
            event.currentTarget.indeterminate = false;
            event.currentTarget.checked = true;
            onChange(true);
        }
    }, [ref, state, setState, onChange]);
    return <Input onChange={onCustomChange} ref={ref} type={'checkbox'}/>
}