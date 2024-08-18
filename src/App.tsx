import { AlertDialog, Code, Flex, Kbd, Text, ThemePanel } from "@radix-ui/themes"
import Button from "./componnents/Button"
import RadixWithStitch from "./RadixWithStitch"
import { MyAlert } from "./componnents/Alert"
import { Lock, MenuIcon, Smile } from "lucide-react";
import MyCallout from "./componnents/Callout";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { useState } from "react";

export const App = () => {
    const [isSideBar1Open, setIsSideBar1Open ] = useState(false)
    const [isSideBar2Open, setIsSideBar2Open ] = useState(false)

    function handleSidebar1(){
        setIsSideBar1Open(!isSideBar1Open)
    }

    function handleSidebar2(){
        setIsSideBar2Open(!isSideBar2Open)
    }
    return (
        <Flex style={{ width: '100vw'}}> 

        <Sidebar rootStyles={{ minHeight: '100vh'}} toggled={true} collapsedWidth="72px" collapsed={isSideBar1Open}>
            <Menu>
                <MenuItem> 
                    <MenuIcon> <Lock/></MenuIcon>
                    Tolosa
                </MenuItem>
            </Menu>
        </Sidebar>
        <Sidebar rootStyles={{ minHeight: '100vh'}} toggled={true} collapsedWidth="72px" collapsed={isSideBar2Open}>
            <Menu>
                <MenuItem> 
                    <MenuIcon> <Lock/></MenuIcon>
                    Tolosa
                </MenuItem>
            </Menu>
        </Sidebar>

        <Button onClick={handleSidebar1}> Toggle Sidebar </Button>
        <Button onClick={handleSidebar2}> Toggle Sidebar </Button>
        <Smile />
            <MyAlert />
            <MyCallout />
            <RadixWithStitch />
        </Flex>
    )
}

export default App