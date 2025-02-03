<script>
  import { onMount, onDestroy } from 'svelte';

  export let containerId = '';

  // Will hold extracted headings info
  let headings = [];
  let activeIds = [];

  // Finds all headings within the targeted container.
  function updateHeadings() {
    const container = document.getElementById(containerId);
    if (!container) return;
    headings = Array.from(container.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(heading => {
      // Ensure each heading has an id — if not, generate one from its text.
      if (!heading.id) {
        heading.id = heading.textContent
          .trim()
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-');
      }
      return {
        id: heading.id,
        text: heading.textContent,
        level: parseInt(heading.tagName.substring(1))
      };
    });
  }

  let observer;
  onMount(() => {
    // Wait for the content to be in the DOM.
    updateHeadings();

    const container = document.getElementById(containerId);
    if (container) {
      // Use IntersectionObserver to detect which heading is in view.
      const options = {
        rootMargin: '0px 0px 0% 0px',
        threshold: 0
      };

      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            activeIds = [...new Set([...activeIds, id])];
          } else {
            activeIds = activeIds.filter(existingId => existingId !== id);
          }
        });
      }, options);

      // Observe each heading found
      headings.forEach(heading => {
        const element = document.getElementById(heading.id);
        if (element) observer.observe(element);
      });
    }
  });

  // When a heading link is clicked, scroll to the heading smoothly.
  function scrollToHeading(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Cleanup the IntersectionObserver on unmount.
  onDestroy(() => {
    if (observer) {
      observer.disconnect();
    }
  });
</script>

<nav class="sticky top-20 text-text-secondary">
  <h3>Table of Contents</h3>
  {#if headings.length === 0}
    <p>No headings found.</p>
  {:else}
    <ul>
      {#each headings as heading}
        <!-- Indent based on the heading level -->
        <li 
          style="margin-left: {(heading.level - 1) * 10}px;" 
          class="text-sm hover:text-text-primary py-2"
          class:text-text-primary={activeIds.includes(heading.id)}
        >
          <a
            href="javascript:void(0)"
            on:click={() => scrollToHeading(heading.id)}
            class="text-inherit text-pretty">
            {heading.text}
          </a>
        </li>
      {/each}
    </ul>
  {/if}
</nav>