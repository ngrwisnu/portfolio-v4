<script lang="ts">
  import { Send } from "@lucide/svelte";

  const { title, image, webLink } = $props();
</script>

<div class="flex flex-col items-center gap-12">
  <h2 class="text-3xl font-medium">{title}</h2>
  {#if webLink}
    <a href={webLink} class="relative p-[3px]">
      <div
        class="absolute inset-0 rounded-lg bg-linear-to-r from-indigo-500 to-purple-500"
      ></div>
      <div
        class="group relative flex h-full w-full items-center justify-center gap-1 rounded-[6px] bg-black px-8 py-2 text-sm font-medium text-white transition duration-200 hover:bg-transparent"
      >
        Live demo
        <Send size={14} />
      </div>
    </a>
  {/if}
  <figure class="flex max-h-[620px] w-full justify-center bg-[#F5F5F5]">
    <img
      src={`/assets/images/${image}`}
      alt="Jumbotron"
      class="jumbotron object-contain"
    />
  </figure>
</div>
