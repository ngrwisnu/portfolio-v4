<script lang="ts">
  const { title, description, imgUrl, linkTo, bgColor } = $props();
</script>

<li
  class="card-wrapper group relative max-h-72 w-auto min-w-[200px] shrink basis-full overflow-hidden rounded border border-[#F2F2F2] px-2 sm:basis-1/2 lg:mb-4 lg:max-w-[384px] lg:basis-1/3"
  style:background-color={bgColor}
>
  <a href={linkTo!} target="_blank">
    <img
      src={`/assets/images/${imgUrl}`}
      width={384}
      height={288}
      alt=""
      class="mx-auto"
    />
    <span
      class="absolute inset-0 z-10 hidden bg-black opacity-80 group-hover:block"
      aria-hidden="true"
    ></span>
    <div
      class="body-content absolute inset-0 z-20 hidden flex-col justify-center px-6 text-white group-hover:flex"
    >
      <h3 class="text-[28px] font-medium">{title}</h3>
      <p class="text-sm font-normal">{description}</p>
    </div>
  </a>
</li>
