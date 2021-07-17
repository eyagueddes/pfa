import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData2 = [
  {
    title: 'Sign-in',
    path: '/login',
    icon: <FaIcons.FaSignInAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Register',
    path: '/register',
    icon: <FaIcons.FaRegAddressBook />,
    cName: 'nav-text'
  },
  {
    title: 'About Us',
    path: '/',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  /*{
    title: 'Support',
    path: '/',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
*/
  
];