<script lang="ts">
import { tv } from 'tailwind-variants';

const button = tv({
  base: "rounded-3xl font-semibold transition-colors",
  variants: {
    intent: {
      primary: "bg-button-primary-surface hover:bg-button-primary-surface-hover text-button-primary-label",
      inverted: "bg-button-primary-inverted-surface text-button-primary-inverted-label"
    },
    size: {
      sm: "text-base py-2 px-4",
      md: "text-lg py-3 px-6", 
      lg: "text-xl py-5 px-10"
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