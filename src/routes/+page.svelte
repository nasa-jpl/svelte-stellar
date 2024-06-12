<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';
  import { DropdownMenu, Popover } from '$lib/index.js';
	import { Button } from '$lib/index.js';
</script>

<div class="bg-background">
	<Button on:click={() => console.log(1)}>Click me</Button>
	<Button variant="secondary" on:click={() => console.log(1)}>Click me</Button>
	<Button variant="outline" on:click={() => console.log(1)}>Click me</Button>
	<Button size="sm" on:click={() => console.log(1)}>Click me</Button>
	<Button size="lg" on:click={() => console.log(1)}>Click me</Button>
  <Badge>Badge</Badge>
	<Popover.Root>
		<Popover.Trigger><Button on:click={() => console.log(1)}>Popover</Button></Popover.Trigger>
		<Popover.Content>Place content for the popover here.</Popover.Content>
	</Popover.Root>
	<DropdownMenu.Root>
		<DropdownMenu.Trigger>
			<Button on:click={() => console.log(1)}>Dropdown</Button>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content>
			<DropdownMenu.Group>
				<DropdownMenu.Label>My Account</DropdownMenu.Label>
				<DropdownMenu.Separator />
				<DropdownMenu.Item>Profile</DropdownMenu.Item>
				<DropdownMenu.Item>Billing</DropdownMenu.Item>
				<DropdownMenu.Item>Team</DropdownMenu.Item>
				<DropdownMenu.Item>Subscription</DropdownMenu.Item>
			</DropdownMenu.Group>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
	<h1>Welcome to your library project</h1>
	<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</div>
