<script lang="ts">
	import ContentMover from '../../../components/contentMover.svelte';
	import NavBar from '../../../components/navBar.svelte';
	import SideBar from '../../../components/sideBar.svelte';
	import InfoCard from "../../../components/informationCard.svelte"
	import { updateMetric } from '../../../components/metric';

	export let data
	
	let {response, ...metric} = data.customer
    const countedMtr = Object.assign({}, metric, { resCount: 1 });
    updateMetric(countedMtr)
</script>


<NavBar/>
<aside><SideBar/></aside>
<ContentMover>
	<InfoCard pageName="Customer" displayedObj={response} tblInfo={[]}/>
</ContentMover>
    