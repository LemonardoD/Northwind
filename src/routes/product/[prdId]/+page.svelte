<script lang="ts">
	import ContentMover from '../../../components/contentMover.svelte';
	import NavBar from '../../../components/navBar.svelte';
	import SideBar from '../../../components/sideBar.svelte';
	import InfoCard from "../../../components/informationCard.svelte"
	import { updateMetric } from '../../../components/metric';
	import type { Product } from "../../../DTOs";

	export let data: Product
	let {response, ...metric} = data.product
    const countedMtr = Object.assign({}, metric, { resCount: 1 });
    updateMetric(countedMtr)
</script>


<NavBar/>
<aside><SideBar/></aside>
<ContentMover>
	<InfoCard pageName="Product" displayedObj={response} tblInfo={[]}/>
</ContentMover>
    