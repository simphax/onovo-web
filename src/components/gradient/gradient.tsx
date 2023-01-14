import {
  component$,
  useClientEffect$,
  useSignal,
  useStylesScoped$,
} from "@builder.io/qwik";
import { createScene } from "./scene";
import Logo from "./logo";
import styles from "./gradient.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  const canvasRef = useSignal<Element>();
  const gradientWrapperRef = useSignal<Element>();
  const gradientWidth = useSignal<number>(0);
  const gradientSceneCreated = useSignal<boolean>(false);

  useClientEffect$(
    () => {
      if (gradientWrapperRef.value) {
        const gradientWrapperBounds =
          gradientWrapperRef.value.getBoundingClientRect();
        console.log(gradientWrapperBounds);
        gradientWidth.value = gradientWrapperBounds.width;

        if (canvasRef.value) {
          const observer = new ResizeObserver(() => {
            if(!gradientSceneCreated.value && canvasRef.value?.getAttribute("width") != "0") {
              console.log("createScene");
              createScene(canvasRef.value);
              gradientSceneCreated.value = true;
            }
          });
          observer.observe(canvasRef.value);
        }
      }
    },
    {
      eagerness: "visible", // 'load' | 'visible' | 'idle'
    }
  );

  return (
    <div>
      <div class="gradient">
        <div class="gradient__gradient" ref={gradientWrapperRef}>
          <canvas
            width={gradientWidth.value}
            height={gradientWidth.value}
            ref={canvasRef}
          ></canvas>
        </div>

        <div class="gradient__logo">
          <Logo />
        </div>
      </div>
    </div>
  );
});
