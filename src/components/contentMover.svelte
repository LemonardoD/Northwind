<script lang="ts">
  import { sidebarIsOpen } from './sidebar';
  
  let sideBar: string;
  sidebarIsOpen.subscribe((value) => {
    sideBar = value ? 'contentMover sidebarOpen' : 'contentMover';
  });
    
</script>

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