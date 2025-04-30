import React from 'react'
import '../App.css'

export default function Sidebar () {
  return (
    // simple sidebar component with minimal navigation links
    <div className='Sidebar'>         
      <div className='Sidebar__header'>
        <img src='https://www.svgrepo.com/show/425338/notepad.svg' alt='logo' className='Sidebar__logo'/>
        <a href='/'>Notes</a>
      </div>
      <div className='Sidebar__content'>
          <a className='Sidebar__list-item' href='/addnote'>Add Note</a>
          <a className='Sidebar__list-item' href='/viewnotes'>View Notes</a>
      </div>
      <div className='Sidebar__footer'>
        <a href="/"><h4>Sign In/Sign Up</h4></a>
      </div>
    </div>
  )
}
