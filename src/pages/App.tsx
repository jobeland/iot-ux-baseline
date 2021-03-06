import * as React from 'react';
import { TranslationFunction } from 'i18next';
import { Route, Switch, NavLink } from 'react-router-dom';
import classnames from 'classnames/bind';
import { Shell, NavigationProperties, MastheadProperties } from '@microsoft/azure-iot-ux-fluent-controls/lib/components/Shell';
import { I18n } from '../i18n';

import './App.fonts.scss';
const cx = classnames.bind(require('./App.module.scss'));

interface Properties {
}

interface State {
  isNavExpanded: boolean;
  isUserMenuExpanded: boolean;
  theme: string;
}

export class App extends React.Component<Properties, State>  {
  constructor(props: Properties) {
      super(props);
      this.state = {
        isNavExpanded: true,
        isUserMenuExpanded: false,
        theme: 'dark'
      };
  }

  render() {
    return (
      <I18n>{(loc, { i18n }) =>
        <Shell 
          theme={this.state.theme} 
          isRtl={i18n.dir() === 'rtl'} 
          navigation={this.getNav(loc)}
          masthead={this.getMasthead(loc)}
          onClick={this.handleViewCollapse}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
          </Switch>
        </Shell>
      }</I18n>
    );
  }

  getNav(loc: TranslationFunction): NavigationProperties {
    const items = [
      {
        key: 'home',
        to: '/',
        exact: true,
        icon: 'icon icon-home',
        label: loc('navigation.home'),
        title: loc('navigation.home')
      },
      {
        key: 'about',
        to: '/about',
        icon: 'icon icon-multitask',
        label: loc('navigation.about'),
        title: loc('navigation.about')
      }
    ];

    return {
      isExpanded: this.state.isNavExpanded,
      onClick: this.handleGlobalNavToggle,
      attr: {
        navButton: {
          title: this.state.isNavExpanded ? 'Collapse side navigation' : 'Expand side navigation',
        },
      }, 
      children: items.map(x => (
        <NavLink to={x.to} exact={x.exact} key={x.key} title={x.title} className='global-nav-item' activeClassName='global-nav-item-active'>
            <span className={cx('global-nav-item-icon', x.icon)} />
            <span className={cx('inline-text-overflow', 'global-nav-item-text')}>{x.label}</span>
        </NavLink>
      ))
    }
  };

  getMasthead(loc: TranslationFunction): MastheadProperties {
    return {
      branding: loc('masthead'),
      user: {
        displayName: 'John Smith',
        email: 'jsmith@example.com',
        menuExpanded: this.state.isUserMenuExpanded,
        onMenuClick: this.handleUserMenuToggle,
        menuItems: [
          {
            key: 'toggle-theme',
            label: 'Toggle theme',
            onClick: this.handleThemeToggle
          }
        ]
      },
      attr: {
        userMenuAriaLabel: 'User Menu',
        mobileMenuAriaLabel: 'Application Menu'
      }
    }
  }

  handleGlobalNavToggle = (e: React.MouseEvent<any>) => {
      e.stopPropagation();
      this.setState({
          isNavExpanded: !this.state.isNavExpanded
      });
  }

  handleViewCollapse = (e: React.MouseEvent<any>) => {
      e.stopPropagation();
      this.setState({
        isUserMenuExpanded: false
      });
  }

  handleThemeToggle = (e: React.MouseEvent<any>) => {
    e.stopPropagation();
    this.setState({
      theme: this.state.theme === 'light' ? 'dark' : 'light'
    });
  }

  handleUserMenuToggle = (e: React.MouseEvent<any>) => {
    e.stopPropagation();
    this.setState({
      isUserMenuExpanded: !this.state.isUserMenuExpanded
    });
  }
}

export default App;

const Home = () => (
  <I18n>{loc =>
    <h1 className={cx('header')}>{loc('navigation.home')}</h1>
  }</I18n>
);

const About = () => (
  <I18n>{loc =>
    <h1 className={cx('header')}>{loc('navigation.about')}</h1>
  }</I18n>
);
