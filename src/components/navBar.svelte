<script lang="ts">
    import { onMount } from "svelte";
    import listIcon from "../assets/icons/list.png";
    import drdownIcon from "../assets/icons/drdown.png";
    import listblueIcon from "../assets/icons/listblue.png";
    import drdownblueIcon from "../assets/icons/drdownblue.png";
    import moreIcon from "../assets/icons/more.png";
    import linkIcon from "../assets/icons/link.png";
    import menuIcon from "../assets/icons/menu.png";
    import { toggleSidebar, sidebarIsOpen } from "./sidebar";
            
    let time = new Date();
    $: hours = time.getHours();
    $: minutes = time.getMinutes();
    $: seconds = time.getSeconds();
                
    onMount(() => {
        const interval = setInterval(() => {
            time = new Date();
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    });
    let isDropdownOpen = false;
                
    const handleDropdownClick = () => {
        isDropdownOpen = !isDropdownOpen;
    };
                
    let buttonClass: string;
                
    sidebarIsOpen.subscribe(value => {
        buttonClass = value ? "btnMenu open" : "btnMenu closed";
    });
</script>
                
<nav>
    <div class="root">
        <div class="navbar">
            <div class="clock">
                {`${hours< 10 ?  "0"+hours:hours}:${minutes< 10 ?  "0"+minutes: minutes}:${seconds< 10 ?  "0"+seconds: seconds}`} 
            </div>
            {#if isDropdownOpen}
                <button class = "dropdownDefault active" on:click={handleDropdownClick}>
                    <img  class="listIcon"src={listblueIcon} alt="SQLite Links"/>
                    <span class='linkText'>SQLite Links</span>
                    <img  class="drdownIcon"src={drdownblueIcon} alt="SQLite Links"/>
                    <div class="navBarDrdownDefault">
                        <a href="https://blog.cloudflare.com/d1-turning-it-up-to-11/">
                            <img src={linkIcon} alt="SQLite Links"/>
                            <span class='DrdownText'>Reintroducing D1</span>
                        </a>
                        <a  href="https://www.sqlite.org/lang.html">
                            <img src={linkIcon} alt="SQLite Links"/>
                            <span class='DrdownText'>SQLite SQL Flavour</span>
                        </a>
                        <a href="https://developers.cloudflare.com/durable-objects/">
                            <img src={linkIcon} alt="SQLite Links"/>
                            <span class='DrdownText'>Durable Objects</span>
                        </a>
                    </div>
                </button>
                <button class="dropdownMobile active" on:click="{handleDropdownClick}">
                    <img class="listIcon" src="{moreIcon}" alt="SQLite Links" />
                </button>
                <div class="navBarDrdownMobile">
                    <a href="https://blog.cloudflare.com/d1-turning-it-up-to-11/">
                        <img class="linkIcon" src="{linkIcon}" alt="SQLite Links"/>
                        <span class="DrdownText">Reintroducing D1</span>
                    </a>
                    <a href="https://www.sqlite.org/lang.html" >
                        <img class="linkIcon" src="{linkIcon}" alt="SQLite Links" />
                        <span class="DrdownText">SQLite SQL Flavour</span>
                    </a>
                    <a href="https://developers.cloudflare.com/durable-objects/" >
                        <img class="linkIcon" src="{linkIcon}" alt="SQLite Links" />
                        <span class="DrdownText">Durable Objects</span>
                    </a>
                </div>
            
            {:else}
            <button class="dropdownMobile" on:click="{handleDropdownClick}" >
                <img class="listIcon"  src="{moreIcon}" alt="SQLite Links" />
            </button>
            <button class="dropdownDefault" on:click={handleDropdownClick}>
                <img class="listIcon" src={listIcon} alt="SQLite Links"/>
                <span class='linkText'>SQLite Links</span>
                <img class="drdownIcon" src={drdownIcon} alt="SQLite Links"/>
            </button>
            {/if}
            <button class="{buttonClass}" on:click="{toggleSidebar}" >
                <img  class="listIcon" src="{menuIcon}" alt="Menu" />
            </button>
        </div>
    </div>
</nav>

<style>
    .closed {
        left: 0;
    }
    .open {
        left: 240px;
    }
    .drdownIcon {
        position: absolute;
        right: 0;
    }
    .root {
        transition: all 0.2s ease-in-out;
        width: auto;
        position: fixed;
        top: 0;
        right: 0;
        display: flex;
        height: 56px;
        width: 100%;
        box-shadow: 1px 1px 0px 0 #f3f4f6;
        border-bottom-width: 1px;
        background-color: #ffffff;
        font-family: ui-sans-serif, system-ui, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
            Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
    .linkText {
        padding-left: 4px;
        padding-right: 4px;
        margin-left: 8px;
        line-height: 38px;
        font-size: 16px;
        font-family: ui-sans-serif, system-ui, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
            Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
    .active {
        color: #3b82f6;
    }
    @media (max-width: 544px) {
        a {
            padding: 2px 4px;
            display: flex;
            align-items: center;
            text-decoration: none;
            -webkit-tap-highlight-color: transparent;
        }

        .clock {
            display: none;
        }

        .linkIcon {
            height: 12px;
            width: 12px;
        }

        .root {
            left: 0px;
        }

        .DrdownText {
            margin-left: 4px;
            font-size: 7px;
            line-height: 12px;
            color: #000000;
        }

        .navBarDrdownMobile {
            box-shadow: 0px 1px 5px 1px #daddde;
            position: absolute;
            right: 0;
            width: 15%;
            background-color: #ffffff;
            top: 56px;
            opacity: 1;
        }

        .dropdownMobile {
            -webkit-tap-highlight-color: transparent;
            position: absolute;
            top: 0;
            right: 0;
            padding: 14.5px 20px;
            border: none;
            background: none;
            cursor: pointer;
        }

        .navBarDrdownDefault {
            display: none;
        }

        .dropdownDefault {
            display: none;
        }

        .btnMenu {
            transition: padding-left 1s ease-in-out;
            -webkit-tap-highlight-color: transparent;
            position: absolute;
            top: 0;
            padding: 14.5px 20px;
            border: none;
            background: none;
            cursor: pointer;
        }
    }
    @media (min-width: 545px) and (max-width: 1023px) {
        .clock {
            display: none;
        }

        .linkIcon {
            height: 16px;
            width: 16px;
        }

        .root {
            left: 0px;
        }
        
        .dropdownMobile {
            -webkit-tap-highlight-color: transparent;
            position: absolute;
            top: 0;
            right: 0;
            padding: 14.5px 20px;
            border: none;
            background: none;
            cursor: pointer;
        }

        a {
            padding: 4px 6px;
            display: flex;
            align-items: center;
            text-decoration: none;
            -webkit-tap-highlight-color: transparent;
        }

        .DrdownText {
            margin-left: 2px;
            font-size: 9.5px;
            line-height: 18px;
            color: #000000;
        }

        .navBarDrdownMobile {
            box-shadow: 0px 1px 5px 1px #daddde;
            position: absolute;
            right: 0;
            width: 15%;
            background-color: #ffffff;
            top: 56px;
            opacity: 1;
        }

        .navBarDrdownDefault {
            display: none;
        }

        .dropdownDefault {
            display: none;
        }

        .btnMenu {
            transition: padding-left 1s ease-in-out;
            -webkit-tap-highlight-color: transparent;
            position: absolute;
            top: 0;
            padding: 14.5px 20px;
            border: none;
            background: none;
            cursor: pointer;
        }
    }
    @media (min-width: 1023px) {
        .dropdownMobile {
            display: none;
        }

        .dropdownDefault {
            top: 1px;
            right: 264px;
            padding: 8px 21px 8px 20px;
            display: flex;
            align-items: center;
            border: none;
            background: none;
            position: absolute;
            cursor: pointer;
        }

        .clock {
            margin-top: 9px;
            display: flex;
            align-items: center;
            margin-left: 36px;
            color: #000037;
            padding: 7.5px 12px 8.5px 12px;
            padding-left: 0px;
        }

        .btnMenu {
            display: none;
        }

        .root {
            left: 240px;
        }

        .navBarDrdownMobile {
            display: none;
        }

        .navBarDrdownDefault {
            box-shadow: 0px 1px 5px 1px #daddde;
            position: absolute;
            background-color: #ffffff;
            width: 190px;
            left: 0;
            top: 56px;
        }

        .DrdownText {
            margin-left: 11px;
            font-size: 14px;
            line-height: 20px;
            color: #000000;
        }

        a {
            left: 240px;
            padding: 8px 12px;
            display: flex;
            align-items: center;
            text-decoration: none;
            -webkit-tap-highlight-color: transparent;
        }
    }
</style>
