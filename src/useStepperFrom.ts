import { ReactNode, useState } from "react";

const useStepperFrom = (steps: ReactNode[]) => {
  const [currIdx, setcurrIdx] = useState<number>(0);
  const next = () => {
    if (currIdx >= steps.length - 1) return steps.length - 1;
    return setcurrIdx((curr: number) => curr + 1);
  };
  const prev = () => {
    if (currIdx === 0) return 0;
    return setcurrIdx((curr: number) => curr - 1);
  };
  return {
    currIdx,
    steps,
    step: steps[currIdx],
    next,
    prev,
    isFristPage: currIdx === 0,
    isLastPage: currIdx + 1 === steps.length,
  };
};
export default useStepperFrom;
