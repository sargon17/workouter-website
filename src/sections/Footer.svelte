<script lang="ts">
    import { onMount } from 'svelte';

    let currentYear = new Date().getFullYear();

    onMount(() => {
        currentYear = new Date().getFullYear();
    });

</script>

<div class="w-full px-borders flex flex-col items-center justify-center">
      <h2 class="text-[18vw] font-bold text-text-primary leading-tight">Workouter</h2>
      <div class="flex flex-col items-center justify-center">
        <p class="text-text-secondary text-[1vw]">©  {currentYear} Workouter</p>
      </div>
</div>

<style>
</style>