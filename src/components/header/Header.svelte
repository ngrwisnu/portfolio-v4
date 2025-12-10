<script lang="ts">
  import { Paperclip, TextAlignJustify, X } from "@lucide/svelte";
  import { desktopMenu, mobileMenu } from "./menu";
  import NavLink from "./NavLink.svelte";

  let isShow = $state(true);
  let lastScrollY = $state(0);
  let isHamburgerActive = $state(false);

  $effect(() => {
    window.addEventListener("scroll", headerController);

    return () => {
      window.removeEventListener("scroll", headerController);
    };
  });

  function headerController() {
    if (typeof window != "undefined") {
      if (window.scrollY > lastScrollY) {
        isShow = false;
      } else if (window.scrollY < lastScrollY) {
        isShow = true;
      }

      lastScrollY = window.scrollY;
    }
  }

  function hamburgerHandler() {
    isHamburgerActive = !isHamburgerActive;
  }
</script>

<div
  class={`absolute flex w-full bg-transparent px-4 md:fixed ${
    !isShow ? "-top-full" : "top-0"
  } z-999 transition-all delay-150 duration-700 ease-in-out`}
>
  <header
    class="static flex w-full items-start justify-center self-stretch py-5 text-neutral-100 md:relative"
  >
    <div
      id="floating menu"
      class="fixed right-4 bottom-14 z-999 flex h-12 w-12 items-center justify-center rounded-full bg-[#404040] md:hidden"
      aria-label="nav menu"
    >
      {#if isHamburgerActive}
        <button onclick={hamburgerHandler}>
          <div
            class={[
              "-rotate-90 transition-all duration-200",
              isHamburgerActive && "rotate-0 opacity-100",
              !isHamburgerActive && "-rotate-90 opacity-0",
            ]}
          >
            <X />
          </div>
        </button>
      {:else}
        <button onclick={hamburgerHandler}>
          <div
            class={[
              "transition-all duration-200",
              isHamburgerActive && "rotate-90 opacity-0",
              !isHamburgerActive && "rotate-0 opacity-100",
            ]}
          >
            <TextAlignJustify />
          </div>
        </button>
      {/if}
      <ul
        class={[
          "absolute top-0 z-50 mr-2 flex items-center gap-2 rounded-full bg-[#404040] text-sm transition-all duration-200",
          isHamburgerActive ? "right-full opacity-100" : "left-full opacity-0",
        ]}
      >
        {#each mobileMenu as menu (menu)}
          <NavLink device="mobile" href={menu.href} name={menu.name} iconOnly />
        {/each}
      </ul>
    </div>
    <div
      class="hidden items-center rounded-md bg-[#404040]/70 px-14 backdrop-blur-lg md:flex"
    >
      <nav class="w-full">
        <ul
          class="flex w-full items-center justify-center gap-4 text-xl font-light md:text-base md:font-normal"
        >
          {#each desktopMenu as menu (menu)}
            <NavLink device="desktop" href={menu.href} name={menu.name} />
          {/each}
        </ul>
      </nav>
    </div>

    <div class="h-header absolute top-5 right-11 hidden rounded-md md:flex">
      <a
        href="/assets/docs/CV_Ngr-Wisnu-Adiprayogo.pdf"
        class="relative p-[3px]"
      >
        <div
          class="absolute inset-0 rounded-lg bg-linear-to-r from-indigo-500 to-purple-500"
        ></div>
        <div
          class="group relative flex h-full w-full items-center justify-center gap-1 rounded-[6px] bg-black px-8 py-2 text-sm font-medium text-white transition duration-200 hover:bg-transparent"
        >
          Resume
          <Paperclip size={16} />
        </div>
      </a>
    </div>
  </header>
</div>
