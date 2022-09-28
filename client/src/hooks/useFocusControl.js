import { useState , useRef} from "react";

export default function useFocusControl () {
  const [showData, setShowData] = useState(false);
  const [displayData, setDisplayData] = useState(false)
  const showTimeOut = useRef();
  const hideTimeout = useRef();
  const timeouts = [hideTimeout, showTimeOut]

  const clearTimeOuts = () => {
    timeouts.forEach(timeout => {
      clearTimeout(timeout.current)
      timeout.current = null
    })
  }

  const hide = () => {
    if (!showData) return;

    clearTimeOuts();

    showTimeOut.current = setTimeout(() => {
      setShowData(false);
    }, 0);

    hideTimeout.current = setTimeout(() => {
      setDisplayData(false)
    }, 500)
  };

  const show = () => {
    if (showData) return;
    
    clearTimeOuts();

    hideTimeout.current = setTimeout(() => {
      setDisplayData(true)
    }, 0)

    showTimeOut.current = setTimeout(() => {
      setShowData(true);
    }, 0);
  };

  return {show, hide, showData, clearTimeOuts, showTimeOut, displayData, hideTimeout};
}
