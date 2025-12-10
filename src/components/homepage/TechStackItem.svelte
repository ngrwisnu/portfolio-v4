<script lang="ts">
  let { name, icon } = $props();
</script>

<div
  class="-mr-1 flex h-6 w-6 items-center justify-center rounded-full border border-[#F1F1F1] bg-white p-1"
>
  <img src={icon} width={24} height={24} alt={name} loading="lazy" />
</div>
