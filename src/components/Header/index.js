import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Avatar, Menu, Dropdown } from "antd";
import { DownOutlined, UserOutlined, CodeSandboxOutlined, LogoutOutlined} from '@ant-design/icons';
import "./index.scss";

const items = [
  {
    title: "关于作者",
    icon: UserOutlined,
    ifTargetBlank: true,
    url: "",
  },
  {
    title: "项目仓库",
    icon: CodeSandboxOutlined,
    ifTargetBlank: true,
    url: ""
  },
  {
    title: "退出登录",
    icon: LogoutOutlined,
    ifTargetBlank: false,
    url: ""
  },
]

const menu = (
  <Menu>
    <For each="item" of={items}>
      <Menu.Item key={items.index}>
        <If condition={items.ifTargetBlank}>
          <a  target="_blank" rel="noopener noreferrer" href={items.url}></a>
        </If>
        <If condition={!items.ifTargetBlank}>
          <Link to={"/Login"}></Link>
        </If>
      </Menu.Item>
    </For>
  </Menu>
  );

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <Avatar size="large" src={"../../../public/Vsran.jpeg"}/>
        Vsran
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Hover me <DownOutlined />
          </a>
        </Dropdown>
      </div>
    )
  }
}

export default connect()(Header);

