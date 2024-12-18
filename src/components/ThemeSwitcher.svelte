<script lang="ts">
    import Button from './ui/Button.svelte';
    import { onMount } from 'svelte';

let currentTheme = 'light';

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('theme', currentTheme);
  }
}

onMount(() => {
  if (typeof window !== 'undefined') {
    const savedTheme = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', currentTheme);
  }
});
</script>

    <Button intent="primary" size="sm" on:click={() => toggleTheme()} aria-label="Toggle theme">
        {currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </Button>

