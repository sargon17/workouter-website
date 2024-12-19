<script lang="ts">
import { tv } from 'tailwind-variants';

const button = tv({
  base: "rounded-[1em] font-semibold transition-colors cursor-pointer hover:scale-99 active:scale-98 hover:shadow-lg active:shadow-none transition-all duration-100 hover:duration-300 active:duration-50 shadow-lg",
  variants: {
    intent: {
      primary: "bg-button-primary-surface hover:bg-button-primary-surface-hover text-button-primary-label",
      inverted: "bg-button-primary-inverted-surface text-button-primary-inverted-label",
      appstore: "bg-white text-black"
    },
    size: {
      sm: "btn-sm",
      md: "btn-md", 
      lg: "btn-lg"
    }
  },
  defaultVariants: {
    intent: "primary",
    size: "md"
  }
});
</script>


<button class={button({ intent: $$props.intent, size: $$props.size })} {...$$props}
on:click>
    <slot />
</button>

<style>
  .btn-sm {
    font-size: max(0.75rem, 0.8vw);
    padding: 0.5em 1em;
  }

  .btn-md {
    font-size: max(1rem, 1.6vw);
    padding: 0.75em 1.5em;
  }

  .btn-lg {
    font-size: max(0.9rem, 1.2vw);
    padding: 0.75em 1.5em;
  }
</style>