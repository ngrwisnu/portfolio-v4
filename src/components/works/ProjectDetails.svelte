<script lang="ts">
  import type { WorksType } from "@/data/works";
  import ProjectJumbotron from "./ProjectJumbotron.svelte";
  import ProjectDescription from "./ProjectDescription.svelte";
  import ProjectGallery from "./ProjectGallery.svelte";
  import BlackHoneyGallery from "./BlackHoneyGallery.svelte";
  import { details } from "./BlackHoneyDetails.svelte";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMount } from "svelte";

  const {
    work,
  }: {
    work: WorksType;
  } = $props();

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".jumbotron", {
      scale: 0.95,
      duration: 1,
    });
  });

  onMount(() => {
    const images: HTMLImageElement[] = gsap.utils.toArray(".gallery");

    images.forEach((image) => {
      gsap.from(image, {
        scrollTrigger: {
          trigger: image,
          start: "top bottom",
        },
        opacity: 0,
        y: 100,
        duration: 1,
      });
    });
  });
</script>

<section id="project-detail" class="w-full px-4 dark:text-white">
  <div class="container-content py-9 md:py-24">
    <div class="flex flex-col gap-24">
      <ProjectJumbotron
        title={work.title}
        image={work.imgUrls[1]}
        webLink={work.linkExternal}
      />

      {#if work.slug === "black-honey"}
        <ProjectDescription
          description={work.description}
          designedBy={work.designedBy}
          role={work.myRole}
          techs={work.technologies}
          {details}
        />
      {:else}
        <ProjectDescription
          description={work.description}
          designedBy={work.designedBy}
          role={work.myRole}
          techs={work.technologies}
        />
      {/if}

      <div>
        {#if work.slug === "black-honey"}
          <BlackHoneyGallery images={work.imgUrls} />
        {:else}
          <ProjectGallery images={work.imgUrls.slice(2)} />
        {/if}
      </div>
    </div>
  </div>
</section>
