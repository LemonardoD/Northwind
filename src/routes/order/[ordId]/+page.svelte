<script lang="ts">
	import ContentMover from '../../../components/contentMover.svelte';
	import NavBar from '../../../components/navBar.svelte';
	import SideBar from '../../../components/sideBar.svelte';
	import InfoCard from "../../../components/informationCard.svelte"
	import { updateMetric } from '../../../components/metric';
	export let data
	
	const {response, ...metric} = data.order
	const {ProductsInOrder, ...mainOrder} = response
    const countedMtr = Object.assign({}, metric, { resCount: 1 });
    updateMetric(countedMtr)
</script>

<ContentMover>
	<InfoCard pageName="Order" displayedObj={mainOrder} tblInfo={ProductsInOrder}/>
</ContentMover>
<NavBar/>
<aside><SideBar/></aside>
    