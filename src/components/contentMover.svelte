<script lang="ts">
  import { closeSidebar, sidebarIsOpen, toggleSidebar } from "./sidebar";
  
  let sideBar: string;
  sidebarIsOpen.subscribe((value) => {
    sideBar = value ? "contentMover sidebarOpen" : "contentMover";
  });

  let innerWidth = 0
  $: if(innerWidth > 1023) closeSidebar()
</script>

<svelte:window bind:innerWidth />
<div class={sideBar}>
    <slot></slot>
</div>

<style>
  .contentMover {
    transition: transform 0.2s ease-in-out;
  }
  .sidebarOpen{
    transform: translateX(240px);
  }
  
</style>