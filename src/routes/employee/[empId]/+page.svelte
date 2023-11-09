<script lang="ts">
	import ContentMover from '../../../components/contentMover.svelte';
	import NavBar from '../../../components/navBar.svelte';
	import SideBar from '../../../components/sideBar.svelte';
	import InfoCard from "../../../components/informationCard.svelte"
	import { updateMetric } from '../../../components/metric';
	export let data
	
	let {response, ...metric} = data.employee
    const countedMtr = Object.assign({}, metric, { resCount: 1 });
    updateMetric(countedMtr)
</script>


<ContentMover>
	<InfoCard pageName="Employee" displayedObj={response} tblInfo={[]}/>
</ContentMover>
<NavBar/>
<aside><SideBar/></aside>
    