<script lang="ts">
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import SkillsWrapper from "./SkillWrapper.svelte";

  import { onMount } from "svelte";

  const skills = {
    fe: [
      "javascript",
      "react",
      "next",
      "svelte/sveltekit",
      "astro",
      "sass",
      "tailwind",
      "bootstrap",
    ],
    be: ["express", "elysia", "nest"],
    others: [
      "ui/ux",
      "figma",
      "rest-api",
      "mongodb",
      "postgresql",
      "prisma",
      "typescript",
      "docker",
    ],
  };

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".skill-list", {
      scrollTrigger: {
        trigger: ".skill-list",
        start: "top bottom",
      },
      opacity: 0,
      duration: 0.8,
      y: 100,
      stagger: 0.18,
      ease: "power3.out",
    });
  });
</script>

<section
  class="flex w-full flex-col items-center gap-10 bg-neutral-900 px-4 py-[136px] text-neutral-100"
>
  <div
    class="max-w-8xl flex w-full items-center justify-center text-[32px] font-bold"
  >
    <h2>
      My Dev <span class="text-list-200">Arsenal</span>
    </h2>
  </div>
  <div
    id="skills-area"
    class="max-w-8xl flex w-full flex-col items-start gap-10 divide-y divide-neutral-100"
  >
    <SkillsWrapper skills={skills.fe} />
    <SkillsWrapper skills={skills.be} />
    <SkillsWrapper skills={skills.others} />
  </div>
</section>
