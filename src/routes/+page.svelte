<script lang="ts">
	import {
		Badge,
		H1,
		H2,
		H3,
		H4,
		P,
		ThemeSwitcherButton,
		ThemeSwitcherDropdown,
		ModeWatcher,
		DropdownMenu,
		Popover,
		Button
	} from '$lib/index.js';
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
		Typography
		<H1>Heading 1</H1>
		<H2>Heading 2</H2>
		<H3>Heading 3</H3>
		<H4>Heading 4</H4>
		<P class="max-w-prose">
			Space is big. You just won't believe how vastly, hugely, mind-bogglingly big it is. I mean,
			you may think it's a long way down the road to the chemist's, but that's just peanuts to
			space.
		</P>
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
