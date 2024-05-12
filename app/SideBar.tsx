import { IoHome } from "react-icons/io5";

const SideBar = () =>{
    return(
        <div className="fixed top-0 left-0 w-screen h-16 m-0 flex flex-row bg-gray-900 text-white shadow-lg">
        <SideBarIcon icon={<IoHome size ="28"/>}/>
        <SideBarIcon icon={<IoHome size ="28"/>}/>
        <SideBarIcon icon={<IoHome size ="28"/>}/>
        <SideBarIcon icon={<IoHome size ="28"/>}/>
        </div>
    )
}

const SideBarIcon = ({icon}: any) =>(
    <div className = "sidebar-icon">
        {icon}
        </div>
)
export default SideBar;