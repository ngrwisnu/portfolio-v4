<script lang="ts">
  import data from "@/data/works";
  import SelectedWork from "./SelectedWork.svelte";
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  let reversedData = $derived(data.reverse());

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    gsap.fromTo(
      ".thumbnail",
      {
        scale: 0.95,
      },
      {
        scrollTrigger: {
          trigger: ".thumbnail",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        scale: 1.1,
        ease: "power3.out",
      },
    );
  });
</script>

<section id="works" class="mt-20 min-h-screen w-full px-4 dark:text-white">
  <div class="container-content flex flex-col gap-10">
    <div
      class="max-w-8xl flex w-full items-center justify-center text-[32px] font-bold"
    >
      <h2>
        <span class="text-list-400">Works</span> You Can See
      </h2>
    </div>
    <div
      class="flex w-full flex-col gap-10 max-md:items-center md:flex-row md:justify-evenly"
    >
      {#each reversedData as work (work.slug)}
        {#if work.isSelected}
          <SelectedWork
            title={work.title}
            description={work.description}
            imgUrl={work.imgUrls[0]}
            stack={work.stack}
            slug={work.slug}
            externalLink={work.linkExternal}
          />
        {/if}
      {/each}
    </div>
    <div class="flex items-center justify-center">
      <a
        href="/works"
        class="relative inline-flex h-11 overflow-hidden rounded-lg p-0.5 transition-all delay-150 ease-in hover:-translate-y-1 hover:scale-105"
      >
        <span
          class="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        ></span>
        <span
          class="inline-flex h-full w-full cursor-pointer items-center justify-center gap-1 rounded-md bg-white px-2 py-1 text-sm font-medium text-slate-950 backdrop-blur-3xl dark:bg-slate-950 dark:text-white"
        >
          More Works
        </span>
      </a>
    </div>
  </div>
</section>
