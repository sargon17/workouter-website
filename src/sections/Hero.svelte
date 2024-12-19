
<script lang="ts">
    import Button from '../components/ui/Button.svelte';

</script>

<div>
    <div class="flex flex-col items-center justify-center">
        <div class="mt-[max(20vw,10rem)] mb-[max(16vw,10rem)]">
            <div class="flex flex-col items-center justify-center">
                <h2 class="text-[6vw] leading-tight text-text-primary font-semibold max-w-[80vw] text-center">Logging your workouts has never been this easy</h2>
            </div>
            <div class="flex flex-col items-center justify-center mt-[2vw]">
                <Button intent="primary" size="lg">Download for Free</Button>
            </div>
        </div>
        <div class="flex items-center justify-center relative w-full h-full">
            <h3 class="full-width-heading font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Workouter</h3>
            <div class="relative z-2 w-[60vw] md:w-[25vw]">
                <img src="/Mockup.png" alt="Workouter Mockup" class="w-full h-full object-cover image-shadow" />
            </div>

        </div>
    </div>
</div>

<style>
    .full-width-heading {
        font-size: 18vw;
        background: linear-gradient(to bottom, var(--color-text-secondary), var(--color-text-tertiary));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        -webkit-text-fill-color: transparent;
    }

    .image-shadow {
        filter: drop-shadow(0 40px 20px rgba(0, 0, 0, 0.45));
    }

</style>