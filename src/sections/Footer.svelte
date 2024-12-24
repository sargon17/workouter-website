<script lang="ts">
    import { onMount } from 'svelte';

    let currentYear = new Date().getFullYear();

    onMount(() => {
        currentYear = new Date().getFullYear();
    });

</script>

<div class="w-full px-borders flex flex-col items-center justify-center">
      <h2 class="text-[18vw] font-bold text-text-primary leading-tight">Workouter</h2>
      <div class="flex items-center justify-center gap-[max(1vw,0.75rem)] pb-[max(1vw,0.75rem)]">
        <p class="text-text-secondary text-[max(1vw,0.75rem)]">©  {currentYear} Workouter</p>
        <p class="text-text-secondary text-[max(1vw,0.75rem)]">
            Made by <a href="https://tymofyeyev.com" target="_blank" rel="noopener noreferrer">Mykhaylo Tymofyeyev</a>
        </p>
      </div>
</div>

<style>
</style>