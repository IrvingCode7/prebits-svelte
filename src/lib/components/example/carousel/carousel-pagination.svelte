<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Carousel from "$lib/components/ui/carousel/index.js";

    let titles = ['First slide', 'Second slide', 'Third slide'];
  </script>
   

  <Carousel.Root class="relative rounded-lg">
    <Carousel.Content class= 'min-h-16'>
        {#each titles as title, i (i)}
        <Carousel.Item class="hs-carousel-slide">
            <div class="p-1">
                <Card.Root class='bg-gray-200'>
                  <Card.Content
                    class="flex aspect-square items-center justify-center p-6" >
                    <span class="text-4xl font-semibold">{title}</span>
                  </Card.Content>
                </Card.Root>
              </div>
        </Carousel.Item>
      {/each}
    </Carousel.Content>
    <Carousel.Previous class='absolute top-1/2 transform -translate-y-1/2 right-0 inline-flex justify-center items-center w-[46px] text-gray-800 hover:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 hs-carousel:disabled:opacity-50 disabled:pointer-events-none'/>
    <Carousel.Next class='absolute top-1/2 transform -translate-y-1/2 right-0 inline-flex justify-center items-center w-[46px] text-gray-800 hover:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 hs-carousel:disabled:opacity-50 disabled:pointer-events-none'/>
  
  </Carousel.Root >
  