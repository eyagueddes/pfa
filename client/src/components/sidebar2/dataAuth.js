import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const dataAuth = [
  {
    title: 'Add Post',
    path: '/PostForm',
    icon: <AiIcons.AiFillFileAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Profile',
    path: '/dashboard',
    icon: <AiIcons.AiFillSmile />,
    cName: 'nav-text'
  },
  {
    title: 'Edit Profile',
    path: '/edit-profile',
    icon: <IoIcons.IoIosSettings />,
    cName: 'nav-text'
  },
  {
    title: 'Add Experience',
    path: '/add-experience',
    icon: <AiIcons.AiTwotoneExperiment />,
    cName: 'nav-text'
  },
  {
    title: 'Add Education',
    path: '/add-education',
    icon: <IoIcons.IoMdBriefcase />,
    cName: 'nav-text'
  },
  
];