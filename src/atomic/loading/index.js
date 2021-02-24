import { Dots, LoadingDots } from "./style";

const LoadingBars = () => {
  return (
    <LoadingDots className="loading-dots">
      <Dots />
      <Dots />
      <Dots />
    </LoadingDots>
  );
};

export default LoadingBars;
