import { GatsbyLinkProps } from 'gatsby-link';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';
import { IStoreState } from '../../store';
import { IMenuItem, IMenuProps } from '../Menu';

interface ISidebarMenuProps extends IMenuProps {
  visible?: boolean;
  dispatch?: Dispatch<any>;
  Link: React.ComponentClass<GatsbyLinkProps>;
}

export const SidebarMenu = ({ items, pathname, Link, visible }: ISidebarMenuProps) => {
  const isActive = (item: IMenuItem) => (item.exact) ? pathname === item.path : pathname.startsWith(item.path);
  const activeItem = items.find((item: IMenuItem) => isActive(item)) || {} as IMenuItem;
  return (
    <Sidebar as={Menu} animation="slide along" width="thin"
      visible={visible} icon="labeled" vertical inverted={activeItem.inverted}>
      {items.map((item) => {
        const active = isActive(item);
        return (
          <Menu.Item as={Link} to={item.path} active={active} key={item.path}>
            <Icon name={item.icon} />
            {item.name}
          </Menu.Item>
        );
      })}
    </Sidebar>
  );
};

const mapStateToProps = (state: IStoreState) => ({
  visible: state.isSidebarVisible
});

export default connect<any, void, ISidebarMenuProps>(mapStateToProps)(SidebarMenu);
