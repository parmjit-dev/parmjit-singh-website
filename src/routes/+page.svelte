<script>
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let ready = false;
  onMount(() => (ready = true));
</script>

<main>
  {#if ready}
    <div>
      <div class="start-headers">
        <h1 in:fade={{ duration: 1000, delay: 0 }}>Parmjit Gill</h1>
        <h2 in:fade={{ duration: 1000, delay: 2000 }}>Software Engineer</h2>
        <h3 in:fade={{ duration: 1000, delay: 3000 }}>Welcome</h3>
        <div class="links">
          <h2 in:fade={{ duration: 1000, delay: 4000 }}>The links that matter</h2>
          <div class="link-container">
            <!-- svelte-ignore a11y_missing_content -->
            <h2 in:fade={{ duration: 1000, delay: 5000 }}>  <i class="fa-brands fa-github fa-2xl"></i></h2>
            <!-- svelte-ignore a11y_missing_content -->
            <h2 in:fade={{ duration: 1000, delay: 6000 }}> <i class="fa-brands fa-linkedin fa-2xl"></i></h2>
          </div>
        </div>
      </div>
    </div>
    <div class="image-container" in:fade={{ duration: 1000, delay: 1000 }}>
      <img src="birds.png" alt="Bottom right" />
    </div>
  {/if}
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700&display=swap');
  :global(body) {
    background: #d8c4b6;
    color: #213555;
    font-family: 'Playfair Display', serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: italic;
  }

  .image-container {
    position: fixed;
    bottom: 0;
    right: 0;
    height: 60vh; /* Full viewport height */
    width: auto; /* Maintain the aspect ratio */
  }
  .links {
    padding-top: 50px;
  }
  .link-container {
    display: flex;
    flex-direction: row; /* Stack the headers vertically */
    justify-content: center; /* Center headers vertically */
    align-items: flex-start; /* Align content to the left */
  }

  .link-container i {
    padding-top: 50px;
  }

  .start-headers {
    /* position: fixed; Fixed position to stay at the top-left */
    top: 0;
    left: 0;
    width: 100%; /* Full width of the screen */
    height: 50vh; /* 30% of the viewport height */
    margin-top: 20px;
    padding: 30px; /* Padding inside the header */
    box-sizing: border-box; /* Ensure padding doesn't affect the layout */
    display: flex;
    flex-direction: column; /* Stack the headers vertically */
    justify-content: center; /* Center headers vertically */
    align-items: flex-start; /* Align content to the left */
  }
  .start-headers h1 {
    margin: 1vh; /* Remove default margin from h1, h2, h3 */
    font-size: 5vw; /* Font size will scale with viewport width */
    line-height: 1.2; /* Adjust line height for spacing between headers */
  }

  .start-headers h2 {
    margin: 1vh; /* Remove default margin from h1, h2, h3 */
    font-size: 3.5vw; /* Font size will scale with viewport width */
    line-height: 1.2; /* Adjust line height for spacing between headers */
  }

  .start-headers h3 {
    margin: 1vh; /* Remove default margin from h1, h2, h3 */
    font-size: 2.5vw; /* Font size will scale with viewport width */
    line-height: 1.2; /* Adjust line height for spacing between headers */
  }

  img {
    height: 100%; /* Make the image fill the container height */
    width: auto; /* Maintain the aspect ratio */
  }

    /* Responsive Design with Media Queries */
    @media (max-width: 1024px) {
    /* For tablets or medium screens */
    .start-headers {
      height: 50vh; /* Increase start-headers height for medium screens */
    }

    .start-headers h1 {
      font-size: 8vw; /* Make the start-headers text a bit larger on tablets */
    }

    .start-headers h2 {
      font-size: 5vw; /* Medium start-headers text size */
    }

    .start-headers h3 {
      font-size: 3vw; /* Small start-headers text size */
    }

    .image-container {
      position: fixed;
      bottom: 0;
      right: 0;
      height: 50vh; /* Full viewport height */
      width: auto; /* Maintain the aspect ratio */
    }
  }

  /* Responsive Design with Media Queries */
  @media (max-width: 768px) {
    /* For tablets or medium screens */
    .start-headers {
      height: 50vh; /* Increase start-headers height for medium screens */
    }

    .start-headers h1 {
      font-size: 10vw; /* Make the start-headers text a bit larger on tablets */
    }

    .start-headers h2 {
      font-size: 8vw; /* Medium start-headers text size */
    }

    .start-headers h3 {
      font-size: 6vw; /* Small start-headers text size */
    }

    .image-container {
      position: fixed;
      bottom: 0;
      right: 0;
      height: 50vh; /* Full viewport height */
      width: auto; /* Maintain the aspect ratio */
    }
  }

  @media (max-width: 480px) {
    /* For small screens like mobile phones */
    .start-headers {
      height: 50vh; /* Increase start-headers height on mobile */
    }

    .start-headers h1 {
      font-size: 12vw; /* Increase size on mobile */
    }

    .start-headers h2 {
      font-size: 9vw; /* Increase size on mobile */
    }

    .start-headers h3 {
      font-size: 7vw; /* Increase size on mobile */
    }

    .image-container {
      position: fixed;
      bottom: 0;
      right: 0;
      height: 40vh; /* Full viewport height */
      width: auto; /* Maintain the aspect ratio */
    }
  }
</style>
