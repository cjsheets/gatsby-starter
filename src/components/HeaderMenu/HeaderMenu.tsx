import { startsWith } from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Container, Icon, Menu } from 'semantic-ui-react';

import { toggleSidebar } from '../../store';
import { IMenuProps } from '../Menu';

interface IHeaderMenuProps extends IMenuProps {
  dispatch: Dispatch<any>;
  inverted?: boolean;
}

export const HeaderMenu = ({ items, pathname, Link, inverted, dispatch }: IHeaderMenuProps) =>
  <Container>
    <Menu size="large" pointing secondary inverted={inverted}>
      <Menu.Item as="a" className="mobile only" icon="sidebar" onClick={() => dispatch(toggleSidebar())} />
      <Menu.Item className="mobile hidden"><Icon name="spy" size="big" /></Menu.Item>
      {items.map((item: any) => {
        const active = (item.exact) ? pathname === item.path : startsWith(pathname, item.path);

        return <Menu.Item
          as={Link}
          className="mobile hidden"
          name={item.name}
          to={item.path}
          key={item.path}
          active={active}
        />;
      })}
    </Menu>
  </Container>;

export default connect()(HeaderMenu);
