import "./mainlayout.css";

import { Header } from "../Header";
import { CardItem } from "../CardItem";
import { Todolist } from "../Todolist";
import { SideBar } from "../SideBar";

export const MainLayout = () => {
    return (
        <div className="main-layout">
            <Header></Header>
            <div className="maincontent">
                <SideBar></SideBar>
                <CardItem></CardItem>
                <Todolist></Todolist>
            </div>
        </div>
        
    )
}