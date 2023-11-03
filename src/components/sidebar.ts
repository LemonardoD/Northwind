import { writable } from "svelte/store";

// Create a writable store to manage the sidebar state
export const sidebarIsOpen = writable(false);

// Function to toggle the sidebar state
export function toggleSidebar() {
	sidebarIsOpen.update(el => !el);
}
