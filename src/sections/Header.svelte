<script lang="ts">
    import ThemeSwitcher from "../components/ThemeSwitcher.svelte";

</script>

<div class="sticky top-0 z-1000 py-4">
    <div class="grid grid-cols-3 max-w-screen-2xl mx-auto">
        <div class="col-span-1">
            
        </div>
        <div class="col-span-1 flex items-center justify-center">
            <h1 class="text-2xl font-bold text-text-accent">Workouter</h1>
        </div>
        <div class="col-span-1 flex items-center justify-end">
            <slot />
        </div>
    </div>
</div>

<style>

</style>