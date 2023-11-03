<script lang="ts">
	import SideBar from '../components/sideBar.svelte';
    import NavBar from '../components/navBar.svelte';
    import dbEmblem from "../assets/icons/dbimage.avif"
	import ContentMover from '../components/contentMover.svelte';

</script>

<NavBar/>
<aside><SideBar/></aside>
<ContentMover>
    <div class="homePage">
        <div class="content">
            <p class="textXL">Welcome to Northwind Traders</p>
            <p class="textGrey">Running on Cloudflare's D1</p>
            <img src={dbEmblem} alt="Data base"/>
            <p class="textM">This is a demo of the Northwind dataset, running on <a href="https://workers.cloudflare.com/">Cloudflare Workers</a>, and D1 - Cloudflare's newest SQL database, running on SQLite.</p>
            <p class="textM">Read our <a href="https://blog.cloudflare.com/d1-turning-it-up-to-11/">most recent D1 announcement</a> to learn more about D1.</p>
            <p class="textM">This dataset was sourced from <a href="https://github.com/jpwhite3/northwind-SQLite3">northwind-SQLite3.</a></p>
            <p class="textM">You can use the UI to explore Supplies, Orders, Customers, Employees and Products, or you can use search if you know what you're looking for.</p>
        </div>
    </div>
</ContentMover>




<style>
    
    .homePage{
        display: block;
        padding: 22px;
        font-family: ui-sans-serif, system-ui, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    .content{
        margin: 0;
        padding: 18px;
        text-align: left;
    }
    .textGrey{
        margin:0;
        padding-top: 8px;
        color: #9ca3af;
        font-size: 18px;
        line-height: 28px;
    }
    .textXL{
        margin:0;
        font-size: 24px;
        line-height: 32px;
    }
    .textM{
        padding-top: 16px;
        margin:0;
        font-size: 16px;
        line-height: 24px;
    }
    img{
        width: 384px;
        max-width: 100%;
        height: auto;
        float: right;
        object-fit: scale-down;
    }
    a{
        text-decoration: inherit;
        color: #2563eb;
    }
</style>