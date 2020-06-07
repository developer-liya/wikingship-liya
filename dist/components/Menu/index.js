import Menu from "./menu";
import SubMenu from "./subMenu";
import MenuItem from "./menuItem";
// 类型断言
var TransMenu = Menu;
// 添加属性
TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;
export default TransMenu;
