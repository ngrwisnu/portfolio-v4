<script lang="ts">
  import Icon from "./Icon.svelte";

  const { device, name, href, iconOnly = false } = $props();
</script>

<li
  class={[
    device === "mobile" && "flex h-12 w-12",
    device === "desktop" &&
      "p-4 text-neutral-300 transition-all duration-200 hover:text-white",
    name === "Resume" &&
      "rounded-full bg-linear-to-br from-indigo-500 to-purple-500",
  ]}
>
  <a
    {href}
    class={[
      device === "mobile" &&
        "flex flex-1 flex-col items-center justify-center self-stretch",
    ]}
  >
    {#if iconOnly}
      <Icon {name} />
    {:else}
      {name}
    {/if}
  </a>
</li>
