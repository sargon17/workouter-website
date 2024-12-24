<script lang="ts">
  export let title: string;
  export let description: string;
  export let image: string;
  export let align: 'left' | 'right';
  export let index: number;
</script>

<div class="flex flex-col md:flex-row items-center gap-8 py-12 first:pt-0 last:pb-0 gap-y-12 justify-center">
  {#if align === 'left'}
    <!-- Image Section -->
    <div class="max-w-[max(40vw, 300px)] w-full aspect-square border-b-2 border-surface-secondary">
      <div class="relative aspect-square w-full flex items-center justify-center">
        <img
          src={image}
          alt={title}
          class="w-full h-full object-cover object-top md:max-w-[30vw] "
        />
      </div>
    </div>
    <!-- Content Section -->
    <div class="w-full space-y-4 md:max-w-[40vw] both-view-animation">
    <p class="number font-bold text-text-tertiary">0{index}</p>
      <h3 class="heading font-bold text-text-primary">{title}</h3>
      <p class="description text-text-secondary leading-relaxed">{description}</p>
    </div>
  {:else}
    <!-- Content Section -->
    <div class="w-full space-y-4 order-2 md:order-1 md:max-w-[40vw] both-view-animation">
        <p class="number font-bold text-text-tertiary">0{index}</p>
      <h3 class="heading font-bold text-text-primary">{title}</h3>
      <p class="description text-text-secondary leading-relaxed">{description}</p>
    </div>
    <!-- Image Section -->
    <div class="w-full order-1 md:order-2 max-w-[max(40vw, 300px)]">
      <div class="relative aspect-square w-full flex items-center justify-center">
        <img
          src={image}
          alt={title}
          class="w-full h-full object-cover object-top md:max-w-[30vw]"
        />
      </div>
    </div>
  {/if}
</div>

        

<style>
    .number {
        font-size: max(3.5vw, 1rem);
    }
    .heading {
        font-size: max(3.2vw, 1rem);
    }
    .description {
        font-size: max(1.5vw, 0.9rem);
    }
</style>