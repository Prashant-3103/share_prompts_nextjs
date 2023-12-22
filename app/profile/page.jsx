"use client"
import { useSession } from 'next-auth/react'
import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Profile from '@components/Profile'
import { userAgent } from 'next/server'
const MyProfile = () => {
    const{data: session} = useSession()
    const[posts, setPosts] = useState([])
useEffect(()=>{
const fetchPosts = async()=>{
    const response = await fetch(`/api/users/${session?.user.id}/posts`)
    const data = await response.json()
    setPosts(data)
}
if(session?.user.id) fetchPosts()
},[])
    const handleDelete = ()=>{

    }
    const handleEdit=()=>{

    }

  return (
    <div>
      <Profile name="my" desc="welcome to my profile page" data={posts} handleEdit={handleEdit} handleDelete={handleDelete}/>
    </div>
  )
}

export default MyProfile
