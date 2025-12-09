<script lang="ts">
  import { Send } from "@lucide/svelte";
  import TechStack from "./TechStack.svelte";

  let { title, description, imgUrl, stack, slug, externalLink } = $props();
</script>

<div
  class="flex w-full max-w-[437px] flex-col justify-between rounded-md border border-[#F2F2F2] p-2"
>
  <div class="flex w-full flex-col gap-4">
    <div
      class="flex h-[200px] w-full items-end justify-center overflow-hidden rounded-md bg-[#1C1D21]"
    >
      <div class="relative h-4/5 w-1/2 max-w-[270px]">
        <div
          class="absolute bottom-2.5 -left-5 h-[108px] w-[108px] rounded-full bg-[#1667E1] blur-2xl"
        ></div>
        <div
          class="absolute -top-5 right-2.5 h-[108px] w-[108px] rounded-full bg-[#4D16E1] blur-2xl"
        ></div>
      </div>
      <img
        src={`/assets/images/${imgUrl}`}
        alt={title}
        width={270}
        height={250}
        class="thumbnail absolute z-50"
      />
    </div>
    <div class="text-xl font-medium">{title}</div>
    <div class="text-base font-normal text-slate-500">
      {description}
    </div>
    <TechStack {stack} />
  </div>

  <div
    class="mt-6 flex w-full items-center justify-end gap-4 text-sm font-medium"
  >
    <a href={`/works/${slug}`}>Read more</a>
    <a href={externalLink} class="relative p-[3px]">
      <div
        class="absolute inset-0 rounded-lg bg-linear-to-r from-indigo-500 to-purple-500"
      ></div>
      <div
        class="group relative flex h-full w-full items-center justify-center gap-1 rounded-[6px] bg-black px-8 py-2 text-sm font-medium text-white transition duration-200 hover:bg-transparent"
      >
        Live demo
        <Send />
      </div>
    </a>
  </div>
</div>
