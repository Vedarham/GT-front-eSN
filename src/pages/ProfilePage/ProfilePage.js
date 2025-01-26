import React, { useState,useEffect } from 'react'
import "./ProfilePage.style.css"
// import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import EditProfile from './components/EditProfile/EditProfile.js'
import LinkedAccounts from './components/LinkedAccounts/LinkedAcc.js'
import BattleLog from './components/BattleLogs/BattleLogs.js'
import TournamentCard from './components/TournamentCards/TournamentCards.js'
import WalletHistory from './components/WalletHistory/WalletHistory.js'

const ProfilePage = () => {
  const navigate = useNavigate()
  const [toggle,settoggle] =useState(1)
  function updToggle(id){
    settoggle(id)
  }

  function routeHost(){
    navigate('/host')
  }

  // axios.get('http://localhost:8080/api/test-cookies', { withCredentials: true })
  // .then(response => console.log(response.data))
  // .catch(error => console.error(error));


  async function getUser() {
    // try {
    //   const response = await axios.get('http://localhost:8080/api/auth/profile', {
    //     withCredentials: true
    //   });
    //   console.log(response.data); 
    // } catch (error) {
    //   console.error(error); 
    // }

    // try {
    //   const response = await fetch('http://localhost:8080/api/auth/profile', {mode:'cors'});
    //   const data = await response.json();
    //   console.log({ data })
    // }
    // catch (e) {
    //   console.log(e)
    // }
  
  }
  
 useEffect(()=>{
  getUser()
 },[])
 
  return (
    <>
      <div className="profile-page">
        <div className="profile-header">
          <div className="profile-avatar">
          {/* {console.log(datas)} */}
            <img
              src="https://static.vecteezy.com/system/resources/previews/017/068/883/non_2x/dark-ninja-mascot-logo-for-team-esport-gaming-vector.jpg"
              alt="Profile"
              className="profile-img"
            />
            {/* <div className="profile-completion">
              <div className="completion-bar"></div>
            </div> */}
          </div>
          <div className="profile-details">
            <h2>eSportsNation@gmail.com</h2>
            <button className="share-btn">Share</button>
            <div className="action-buttons">
              <button className="add-friend-btn">Add Friend</button>
              <button className="follow-btn">Follow</button>                 
              {/* If Current user Follow and friend req but disappears */}
            </div>
          </div>
          <div className="profile-settings">
            <button className='follow-btn' onClick={()=>routeHost()}>Host a Tournament📢</button>
          </div>
        </div>
        <div className="profile-stats">
          <div className="stat">
            <p>RANK</p>
            <span>N/A</span>
          </div>
          <div className="stat">
            <p>TOURNAMENTS</p>
            <span>2</span>
          </div>
          <div className="stat">
            <p>MEMBER SINCE</p>
            <span>29/12/24</span>
          </div>
          <div className="stat">
            <p>TROPHIES</p>
            <span>9000</span>
          </div>
        </div>
        <div className="profile-tabs">
          <button className = "tab" onClick={()=>updToggle(1)}>TOURNAMENTS</button>
          <button className = "tab" onClick={()=>updToggle(2)}>RECENT BATTLES</button>
          <button className = "tab" onClick={()=>updToggle(3)}>WALLET HISTORY</button>
          {/* these subcription contains both hosts[series of event passes] and ours */}
          {/* <button className = "tab" onClick={()=>updToggle(4)}>SUBSCRIPTIONS</button>  */}
          <button className = "tab" onClick={()=>updToggle(5)}>LINKED ACCOUNTS</button>
          <button className = "tab" onClick={()=>updToggle(6)}>EDIT PROFILE</button>
        </div>
        <div className={toggle===1?"profile-content":"content"}>
          <TournamentCard/>
        </div>
        <div className={toggle===2?"profile-content":"content"}>
          <BattleLog/>
        </div>
        <div className={toggle===3?"profile-content":"content"}> 
         <WalletHistory/>
        </div>
        {/* <div className={toggle===4?"profile-content":"content"}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTubOcTC4ZQK6KJQz5DriMBW1w0gXLeiYjHpA&s"
            alt="Placeholder"
            className="profile-placeholder"
          />
        </div> */}
        <div className={toggle===5?"profile-content":"content"}>
         <LinkedAccounts/>
        </div>
        <div className={toggle===6?"profile-content":"content"}>
        {/* All must save to default values as submitted  else data not changed woud be lost */}
        <EditProfile />
        </div>
      </div>
    </>
  )
}
export default ProfilePage