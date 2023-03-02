import Link from "next/link";
 import Image from "next/image";

 export function Header() {
    return (<header>
        < Image src = "/logo.svg" alt="" width={100} height={48} />
        <nav>
            <ul>
                <li><link href="#">About Us</link></li>
                <li><link href="#">Woman</link></li>
                <li><link href="#">Men</link></li>
                <li><link href="#">Beauty</link></li>
                <li><link href="#">Accesories</link></li>
                <li><link href="#">Blog</link></li>
                <li><link href="#">Contact</link></li>
            </ul>
        </nav>

        <div className="commerce-menu">
            <ul>
                <li>
                    <link href="#"><image src= "#" alt="" width="24" height="24" /></link>
                </li>
                <li>
                    <link href="#"><image src= "#" alt="" width="24" height="24" /></link>
                </li>
                <li>
                    <link href="#"><image src= "#" alt="" width="24" height="24" /></link>
                </li>
                <li>
                    <link href="#"><image src= "#" alt="" width="24" height="24" /></link>
                </li>
            </ul>
        </div>
        </header>);
 }