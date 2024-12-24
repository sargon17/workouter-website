<script lang="ts">
  import HowItWorksItem from '../components/HowItWorksItem.svelte';

  const steps = [
    {
      title: "Create Your Routine",
      description: "Start by building a custom routine that fits your fitness goals. Choose your exercises, set your reps and weights, and you’re ready to go.",
      image: "/Routine.png",
      align: "left"
    },
    {
      title: "Plan Your Week",
      description: "Map out your weekly schedule with ease. Organize your workouts by day to stay consistent and on track.",
      image: "/Week-plan.png",
      align: "right"
    },
    {
      title: "Log Every Workout",
      description: "During your session, track each exercise effortlessly. Input sets, reps, and weights as you go, keeping everything clear and organized.",
      image: "/Log.png",
      align: "left"
    },
        {
      title: "Analyze Your Progress",
      description: "Dive into detailed stats and insights. See your improvements over time and adjust your routines to keep pushing forward.",
      image: "/Statistics.png",
      align: "right"
    },
  ];
</script>

<section class="py-20">
  <div class="px-borders">
    <div class="text-center">
      <h2 class="heading font-bold text-text-primary ">
        How It Works
      </h2>
    </div>

    <div class="mt-16">
      {#each steps as step, index}
        <HowItWorksItem 
          title={step.title}
          description={step.description}
          image={step.image}
          align={step.align as 'left' | 'right'}
          index={index + 1}
        />
      {/each}
    </div>
  </div>
</section>

<style>
    .heading {
        font-size: max(4vw, 1rem);
        margin-bottom: 1.4em;
    }
</style>