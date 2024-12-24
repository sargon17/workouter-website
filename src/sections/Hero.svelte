
<script lang="ts">
    import Button from '../components/ui/Button.svelte';

</script>

<div>
    <div class="flex flex-col items-center justify-center">
        <div class="md:mt-[max(20vw,10rem)] mt-[45svh] supports-scroll-animation md:mb-[max(26vw,20rem)] mb-[10vw]">
            <div class="flex flex-col items-center justify-center">
                <h2 class="text-[6vw] leading-tight text-text-primary font-semibold max-w-[80vw] text-center exit-view-animation">Logging your workouts has never been this easy</h2>
            </div>
            <div class="flex flex-col items-center justify-center mt-[2vw] exit-view-animation">
                <Button intent="primary" size="lg" href="https://apps.apple.com/it/app/workouter-fitness-logger/id6736994979">Download for Free</Button>
            </div>
        </div>
        <div class="flex items-center justify-center relative w-full h-full mb-10 supports-scroll-animation md:min-h-[max(50vh, 500px)]">
            <h3 class="full-width-heading font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 move-on-scroll-down">Workouter</h3>
            <div class="relative z-2 w-[60vw] md:w-[25vw]">
                <img src="/Mockup.png" alt="Workouter Mockup" class="w-full h-full object-cover shadow-image move-on-scroll-up" />
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

    @supports (animation-timeline: view()) {
        .supports-scroll-animation {
            margin-bottom: 0;
        }
    }

</style>