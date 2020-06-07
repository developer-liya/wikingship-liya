import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import Button from "./components/Button/button";
import MenuItem from "./components/Menu/menuItem";
import Menu from "./components/Menu/menu";
import Icon from "./components/Icon/icon";
import SubMenu from "./components/Menu/subMenu";
import Transition from "./components/Transition/transition";
library.add(fas);

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="coffee" size="10x" theme="danger" />
        <Menu
          defaultIndex="0"
          onSelect={(index) => {
            alert(index);
          }}
          defaultOpenSubMenus={["2"]}
        >
          <MenuItem>cool link</MenuItem>
          <MenuItem disabled>cool link2</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown 1</MenuItem>
            <MenuItem>dropdown 2</MenuItem>
          </SubMenu>
          <MenuItem> cool link3</MenuItem>
        </Menu>
        <Button
          size="lg"
          onClick={() => {
            setShow(!show);
          }}
        >
          toggle
        </Button>
        <Transition in={show} timeout={300} animation="zoom-in-left">
          <div>
            <p>learn react</p>
            <p>learn react</p>
            <p>learn react</p>
            <p>learn react</p>
            <p>learn react</p>
            <p>learn react</p>
            <p>learn react</p>
            <p>learn react</p>
            <p>learn react</p>
            <p>learn react</p>
          </div>
        </Transition>
      </header>
    </div>
  );
}

export default App;
