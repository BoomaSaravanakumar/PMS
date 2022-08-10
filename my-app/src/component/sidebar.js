import React,{useState,useCallback} from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
function Sidebar(){
const [ sideCollapsed, setSideCollapsed ] = useState(false);
 const toggleSideCollapsed = useCallback(() => {
   console.log('toggle')
   setSideCollapsed(collapsed => !collapsed)
 }, [ setSideCollapsed ])
    return(
        <div className="">
            <button onClick={toggleSideCollapsed}>menu</button>
<ProSidebar  collapsed={sideCollapsed}>
  <Menu iconShape="square">
    <MenuItem >Dashboard</MenuItem>
    <SubMenu title="Components" >
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
  </Menu>
</ProSidebar>
</div>)
    }

export default Sidebar;