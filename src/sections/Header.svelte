<script lang="ts">
    import ThemeSwitcher from "../components/ThemeSwitcher.svelte";

</script>

<div class="w-full fixed top-0 z-1000 px-borders">
    <div class="py-borders-sm w-full">
        <div class="grid grid-cols-3 mx-auto">
            <div class="col-span-1">
                
            </div>
            <div class="col-span-1 flex items-center justify-center">
                <h1 class="text-[max(1.5vw,1rem)] font-bold text-text-tertiary">Workouter</h1>

            </div>
            <div class="col-span-1 flex items-center justify-end">
                <slot />
            </div>
        </div>
    </div>
</div>

<style>
</style>