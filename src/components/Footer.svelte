<script lang="ts">
  import { ArrowUpRight } from "@lucide/svelte";
</script>

<footer class="flex flex-col items-center bg-neutral-900 px-4">
  <div id="contact" class="flex w-full flex-col items-center py-14">
    <ul
      class="max-w-8xl relative w-full divide-y divide-neutral-100 border-y border-y-neutral-100 text-neutral-100"
    >
      <li class="group relative flex w-full flex-col">
        <a
          href={"https://github.com/ngrwisnu"}
          class="relative z-10 flex w-full justify-between bg-transparent px-4 py-[22px] group-hover:text-neutral-900"
        >
          GITHUB
          <ArrowUpRight size={16} />
        </a>
        <span
          class="absolute h-0 w-full bg-white transition-all duration-200 group-hover:h-full"
        ></span>
      </li>
      <li class="group relative flex w-full flex-col">
        <a
          href={"mailto:adiprayogongrwisnu@gmail.com"}
          class="relative z-10 flex w-full justify-between bg-transparent px-4 py-[22px] group-hover:text-neutral-900"
        >
          EMAIL
          <ArrowUpRight size={16} />
        </a>
        <span
          class="absolute h-0 w-full bg-white transition-all duration-200 group-hover:h-full"
        ></span>
      </li>
      <li class="group relative flex w-full flex-col">
        <a
          href={"https://www.linkedin.com/in/ngrwisnu"}
          class="relative z-10 flex w-full justify-between bg-transparent px-4 py-[22px] group-hover:text-neutral-900"
        >
          LINKEDIN
          <ArrowUpRight size={16} />
        </a>
        <span
          class="absolute h-0 w-full bg-white transition-all duration-200 group-hover:h-full"
        ></span>
      </li>
    </ul>
  </div>
  <div class="flex w-full justify-center">
    <div class="max-w-8xl w-full text-xs text-neutral-100">
      &copy; 2024 - 2025. Ngr Wisnu
    </div>
  </div>
</footer>
