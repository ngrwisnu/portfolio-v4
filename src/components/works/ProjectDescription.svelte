<script lang="ts">
  interface ProjectDescriptionProps {
    description: string;
    designedBy: string;
    role: string;
    techs: string[];
    details?: any;
  }

  const {
    description,
    designedBy,
    role,
    techs,
    details,
  }: ProjectDescriptionProps = $props();
</script>

<div class="flex w-full flex-wrap gap-8 md:gap-0">
  <div class="order-2 basis-full md:order-1 md:basis-2/3">
    <div class="detail__description mb-8">
      <h5>
        <strong>Description</strong>
      </h5>
      <p class="mt-1 md:w-2/3 dark:text-stone-300">{description}</p>
    </div>
    <div class="detail__more-info flex">
      <div class="more-info__designed-by basis-1/2 md:basis-1/3">
        <h5>
          <strong>Designed By</strong>
        </h5>
        <p class="mt-1 dark:text-stone-300">{designedBy}</p>
      </div>
      <div class="more-info__role basis-1/2 md:basis-1/3">
        <h5>
          <strong>Role</strong>
        </h5>
        <p class="mt-1 dark:text-stone-300">{role}</p>
      </div>
    </div>
    {#if details}
      <div class="mt-8 w-full lg:w-3/5">{@render details()}</div>
    {/if}
  </div>
  <div class="order-1 basis-full md:order-2 md:basis-1/3">
    <h5>
      <strong>Build with</strong>
    </h5>
    <div class="mt-1 flex w-full flex-wrap gap-2">
      {#each techs as t (t)}
        <div class="badge border border-slate-400 p-1">
          {t}
        </div>
      {/each}
    </div>
  </div>
</div>
