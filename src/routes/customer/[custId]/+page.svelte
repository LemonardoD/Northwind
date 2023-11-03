<script lang="ts">
	import ContentMover from '../../../components/contentMover.svelte';
	import NavBar from '../../../components/navBar.svelte';
	import SideBar from '../../../components/sideBar.svelte';
	import InfoCard from "../../../components/informationCard.svelte"
	export let data
	
</script>


<NavBar/>
<aside><SideBar/></aside>
<ContentMover>
	<InfoCard pageName="Supplier" displayedObj={data.supplier}/>
</ContentMover>
    