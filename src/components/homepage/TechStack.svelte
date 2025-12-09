<script lang="ts">
  import TechStackItem from "./TechStackItem.svelte";

  let {
    stack,
  }: {
    stack?: {
      name: string;
      icon: string;
    }[];
  } = $props();
</script>

<div class="flex">
  {#each stack as s (s)}
    <TechStackItem name={s.name} icon={s.icon} />
  {/each}
</div>
