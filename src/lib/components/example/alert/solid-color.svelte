<script lang="ts">
  import * as Alert from '$lib/components/ui/alert';

  const colors = ['gray', 'blue', 'teal', 'red', 'yellow', 'white'];

  const items = colors.map(colors => ({
      colors: colors as Alert.Color, 
      title: 'Heads up!',
      description: `This is a ${colors} alert. You can add components to your app using the cli.`
  }));
</script>

{#each items as { colors, title, description }}
  <div>
      <Alert.Root variant='solid' color={colors}>
          <Alert.Title>{title}</Alert.Title>
          <Alert.Description>{description}</Alert.Description>
      </Alert.Root>
  </div>
{/each}

  