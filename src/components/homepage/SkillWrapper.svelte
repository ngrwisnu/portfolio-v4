<script lang="ts">
  import SkillList from "./SkillList.svelte";

  let {
    skills,
  }: {
    skills: string[];
  } = $props();
</script>

<div class="flex flex-wrap content-center items-center gap-8 self-stretch py-4">
  {#each skills as s (s)}
    <SkillList skill={s} />
  {/each}
</div>
