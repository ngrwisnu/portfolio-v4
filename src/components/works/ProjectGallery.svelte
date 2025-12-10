<script lang="ts">
  const { images } = $props();
</script>

<ul class="flex flex-col gap-4">
  {#each images as image (image)}
    <li class="flex max-h-[620px] w-full justify-center bg-[#F5F5F5]">
      <img
        src={`/assets/images/${image}`}
        alt="gallery"
        loading="lazy"
        class="gallery object-contain"
      />
    </li>
  {/each}
</ul>
