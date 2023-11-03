<script lang="ts">
    import dashboardIcon from "../assets/icons/dashboard.png"
    import homeIcon from "../assets/icons/home.png"
    import productsIcon from "../assets/icons/products.png"
    import suppliersIcon from "../assets/icons/suppliers.png"
    import employeesIcon from "../assets/icons/employees.png"
    import ordersIcon from "../assets/icons/orders.png"
    import customersIcon from "../assets/icons/customers.png"
    import searchIcon from "../assets/icons/search.png"
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { sidebarIsOpen } from './sidebar';
    let sideBar: string;
    let root: HTMLDivElement; 
    onMount(() => {
        const currentUrl = root.querySelector(`a[href='${$page.url.pathname}'`);
        currentUrl!.classList.add('active')
        
    });
    
    sidebarIsOpen.subscribe((value) => {
        sideBar = value ? 'sidebar open' : 'sidebar';
    });
</script>

<div class={sideBar} bind:this={root}>
    <div class="naming">
        <p class="nameTag"><span class="bold">Northwind</span> Traders</p>
    </div>
    <p class="ulNaming">GENERAL</p>
    <ul class="navigationlist">
        <li>
            <a href="/">
                <span class="icons"><img src={homeIcon} alt="home"/></span>
                <span class="iconTag">Home</span>
            </a>
        </li>
        <li>
            <a href="/dashboard">
                <span class="icons"><img src={dashboardIcon} alt="dashboard"/></span>
                <span class="iconTag">Dashboard</span>
            </a>
        </li>
    </ul>
    <p class="ulNaming">BACKOFFICE</p>
    <ul class="navigationlist">
        <li>
            <a href="/suppliers">
                <span class="icons"><img src={suppliersIcon} alt="suppliers"/></span>
                <span class="iconTag">Suppliers</span>
            </a>
        </li>
        <li>
            <a href="/products">
                <span class="icons"><img src={productsIcon}  alt="products"/></span>
                <span class="iconTag">Products</span>
            </a>
        </li>
        <li>
            <a href="/orders">
                <span class="icons"><img src={ordersIcon}  alt="orders"/></span>
                <span class="iconTag">Orders</span>
            </a>
        </li>
        <li>
            <a href="/employees">
                <span class="icons"><img src={employeesIcon}  alt="employees"/></span>
                <span class="iconTag">Employees</span>
            </a>
        </li>
        <li>
            <a href="/customers">
                <span class="icons"><img src={customersIcon}  alt="customers"/></span>
                <span class="iconTag">Customers</span>
            </a>
        </li>
        <li>
            <a href="/search">
                <span class="icons"><img src={searchIcon}  alt="search"/></span>
                <span class="iconTag">Search</span>
            </a>
        </li>
    </ul>
</div>


<style>
    .bold{
        font-weight: 800;
    }
    .nameTag{
        margin: 0;
        padding: 17px 0px 12px 12px;
        color: #FFFFFF;
    }
    .naming{
        font-size: 16px;        
        top: 0;
        height: 56px;
        background-color: #111827;
    }
    .sidebar.open {
        width: 240px;
        left: 0;
        @media (min-width: 1023px) {
            left: 0;
        }
    }
    .sidebar {
        overflow: hidden;
        width: 240px;
        top: 0;
        transition: all 0.15s ease-in;
        left: -240px;
        background-color: #1F2937;
        position: fixed;
        height: 100%;
        overflow: auto;
        font-family: ui-sans-serif, system-ui, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        @media (min-width: 1023px) {
            left:0;
        }
        
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .icons{
        padding-left: 4px;
        padding-right: 12px;
        width: 24px;
        height: 24px;
        display: grid;
        justify-content: center;
    }
    .iconTag{
        padding-top: 1px;
        font-size: 16px;
    }
    .ulNaming{  
        padding-left: 12px;
        line-height: 16px;
        font-size: 12px;      
        color: #9CA3AF;
    }
   
    li a {
        display: flex;
        padding: 8px;
        text-decoration: none;
        color: #D1D5DB;
    }

    li a:hover, li a:is(.active){
        background-color: #374151;
    }
</style>