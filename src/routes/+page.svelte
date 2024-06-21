<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import ThemeSwitcherButton from '$lib/components/ui/theme-switcher/theme-switcher-button.svelte';
	import ThemeSwitcherDropdown from '$lib/components/ui/theme-switcher/theme-switcher-dropdown.svelte';
	import { DropdownMenu, Popover } from '$lib/index.js';
	import { Button } from '$lib/index.js';
	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher />

<div class="flex flex-col gap-4 bg-background p-6">
	<div class="text-2xl font-extrabold">Demo</div>
	<div>
		Button
		<div class="flex items-center gap-4">
			<Button on:click={() => console.log(1)}>Click me</Button>
			<Button variant="secondary" on:click={() => console.log(1)}>Click me</Button>
			<Button variant="outline" on:click={() => console.log(1)}>Click me</Button>
			<Button size="sm" on:click={() => console.log(1)}>Click me</Button>
			<Button size="lg" on:click={() => console.log(1)}>Click me</Button>
		</div>
	</div>
	<div>
		Theme Switchers
		<div class="flex gap-4">
			<ThemeSwitcherButton />
			<ThemeSwitcherDropdown />
		</div>
	</div>
	<div>
		Badge
		<div>
			<Badge>Badge</Badge>
		</div>
	</div>
	<div>
		Popover
		<div>
			<Popover.Root>
				<Popover.Trigger><Button on:click={() => console.log(1)}>Popover</Button></Popover.Trigger>
				<Popover.Content>Place content for the popover here.</Popover.Content>
			</Popover.Root>
		</div>
	</div>
	<div>
		Dropdown
		<div>
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
		</div>
	</div>
</div>
