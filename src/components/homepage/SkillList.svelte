<script lang="ts">
  let {
    skill,
  }: {
    skill: string;
  } = $props();
</script>

<div class="skill-list text-3xl font-normal uppercase md:text-5xl">
  {skill}
</div>
