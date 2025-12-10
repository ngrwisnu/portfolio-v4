<script lang="ts">
  import ProjectGallery from "./ProjectGallery.svelte";

  const { images } = $props();

  let filteredImages = $derived(images.filter((i: string) => i.includes("wr")));
</script>

<div class="flex w-full flex-col gap-24">
  <div>
    <h5 class="mb-1">
      <strong>Sketch & Wireframe</strong>
    </h5>
    <ul class="grid auto-rows-[400px] grid-cols-1 gap-4 md:grid-cols-2">
      {#each filteredImages as i (i)}
        <li
          class={[
            "relative overflow-hidden bg-[#f7f7f7]",
            i.includes("3") && "md:col-span-2",
            i.includes("4") && "md:row-span-4",
          ]}
        >
          <img
            src={`/assets/images/${i}`}
            alt="gallery"
            class="gallery object-contain"
          />
        </li>
      {/each}
    </ul>
  </div>
  <div>
    <h5 class="mb-1">
      <strong>Mockup</strong>
    </h5>
    <ProjectGallery
      images={images.filter((image: string) => image.includes("mock"))}
    />
  </div>
</div>
