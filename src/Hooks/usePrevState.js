import { useEffect, useRef } from "react";

const usePrevState = (state) => {
    const termRef = useRef();
      useEffect(() => {
    termRef.current = state;
  })
    return termRef.current
}

export default usePrevState;