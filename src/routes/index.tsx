import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Gradient from "~/components/gradient/gradient";
import style from "./index.css?inline";

export default component$(() => {
  useStylesScoped$(style);
  return (
    <>
      <header class="gradient">
        <Gradient />
      </header>
      <main class="content">
        <div>
          <p>Consulting for frontend development and UX design</p>
          <p>
            <a href="m&#97;i&#108;to&#58;simon&#64;&#111;n&#111;v%6F%2&#69;se">
              sim&#111;n&#64;&#111;novo&#46;&#115;&#101;
            </a>
            <span class="delimitor"></span>
            <a href="tel:+46707751610">+46 (0)707 75 16 10</a>
            <span class="delimitor"></span>
            <a href="https://simphax.com" target="_blank">
              Portfolio
            </a>
          </p>
        </div>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Onovo AB",
  meta: [
    {
      name: "description",
      content:
        "Onovo interactions utför konsulting inom frontend och UX design",
    },
  ],
};
