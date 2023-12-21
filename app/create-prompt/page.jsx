"use client"
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Form from '@components/Form'
import React from 'react'

const CreatePrompt = () => {
const[submitting, setSubmitting]= useState(false)
const [post, setPost] = useState({
    promt: "",
    tag: "",
})

const CreatePrompt = async (e)=>{

}

  return (
   <Form type="create"
   post={post}
   setPost={setPost}
   submitting={submitting}
   handleSubmit={CreatePrompt}
   />
  )
}

export default CreatePrompt
