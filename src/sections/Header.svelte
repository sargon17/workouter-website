<script lang="ts">
    import ThemeSwitcher from "../components/ThemeSwitcher.svelte";

</script>

<div class="w-full fixed top-0 z-1000 px-[max(1vw,1rem)]">
    <div class="py-[max(1vw,1rem)] w-full">
        <div class="grid grid-cols-3 mx-auto">
            <div class="col-span-1">
                
            </div>
            <div class="col-span-1 flex items-center justify-center">
                <h1 class="text-[max(1.5vw,1rem)] font-bold text-text-accent">Workouter</h1>
            </div>
            <div class="col-span-1 flex items-center justify-end">
                <slot />
            </div>
        </div>
    </div>
</div>

<style>

</style>