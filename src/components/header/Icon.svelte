<script lang="ts">
  import {
    ArrowDownToLine,
    Briefcase,
    Dot,
    House,
    Phone,
  } from "@lucide/svelte";

  const { name } = $props();
</script>

{#if name === "Home"}
  <House />
{:else if name === "Works"}
  <Briefcase />
{:else if name === "Contact"}
  <Phone />
{:else if name === "Resume"}
  <ArrowDownToLine />
{:else}
  <Dot size={2} />
{/if}
