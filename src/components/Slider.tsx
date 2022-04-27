import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useImperativeHandle,
  useState,
} from "react";
import ISwiper from "swiper";
import { Swiper, SwiperProps } from "swiper/react";

type Props = {
  speed?: number;
} & SwiperProps;

export type SliderRefType = {
  prev: (speed?: number) => void;
  next: (speed?: number) => void;
};

const Slider: ForwardRefRenderFunction<SliderRefType, Props> = (
  { children, onSwiper, speed = 500, ...props },
  ref
) => {
  const [swiperController, setSwiperController] = useState<
    ISwiper | undefined
  >();
  const handleGetSwiper = useCallback(
    (e: ISwiper) => {
      onSwiper && onSwiper(e);
      setSwiperController(e);
    },
    [onSwiper]
  );

  const prev = useCallback(
    (cusomSpeed?: number) => {
      swiperController?.slidePrev(cusomSpeed || speed);
    },
    [swiperController]
  );
  const next = useCallback(
    (cusomSpeed?: number) => {
      swiperController?.slideNext(cusomSpeed || speed);
    },
    [swiperController]
  );

  // Pass prev and next function outside
  useImperativeHandle(
    ref,
    () => {
      return {
        prev,
        next,
      };
    },
    [onSwiper, swiperController]
  );

  return (
    <Swiper onSwiper={handleGetSwiper} {...props}>
      {children}
    </Swiper>
  );
};

export default forwardRef(Slider);
