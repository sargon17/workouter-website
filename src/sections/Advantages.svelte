<script lang="ts">
</script>

<div class="w-screen px-8 mt-80">

<div class="max-w-screen-2xl mx-auto">
  <div class="flex flex-col md:flex-row gap-10">
    <div class="md:w-1/2 shrink-0 md:aspect-square">
      <h3 class="subtitle text-text-tertiary uppercase">About the app</h3>
      <h2 class="heading md:text-[4vw] font-bold text-text-primary md:w-3/4 mt-4">All you need in your hand</h2>

      <ul class="flex flex-col">
        <li class="flex flex-row gap-10 border-b border-surface-secondary">
            <p class="text-list-number font-normal text-text-accent">01</p>
          <h4 class="text-list-title font-normal text-text-primary">Workout Planing</h4>
        </li>
        <li class="flex flex-row gap-10 border-b border-surface-secondary">
            <p class="text-list-number font-normal text-text-accent">02</p>
          <h4 class="text-list-title font-normal text-text-primary">Log every rep</h4>
        </li>
        <li class="flex flex-row gap-10 border-b border-surface-secondary">
            <p class="text-list-number font-normal text-text-accent">03</p>
          <h4 class="text-list-title font-normal text-text-primary">Analyze (🚧 wip)</h4>
        </li>
      </ul>
    </div>
    <div class="shrink-0 bg-green-500 h-full rounded-[2.2rem] md:w-[40vw] aspect-square overflow-hidden flex items-center justify-center">
        <img src='/Mockup.png' alt="Workouter Mockup" class="h-full object-contain w-5/6 translate-y-1/4" />
        </div>
    </div>
</div>
</div>

<style>
  .heading {
    font-size: max(4vw, 1rem);
    margin-bottom: 1.4em;
  }

    .subtitle {
        font-size: max(1vw, 0.7rem);
    }

    .text-list-number,.text-list-title  {
        font-size: max(1.5vw, 0.9rem);
        margin: 1.4em 0;
    }

</style>