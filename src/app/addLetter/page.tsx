"use client"

import { Form, Input, LetterTextArea } from "@/components/forms/Form"
import { useHandleSuccess } from "@/hooks/useHandleSuccess"
import { useState } from "react"

export default function AddLetter() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [letter, setLetter] = useState("")
  const { handleSuccess } = useHandleSuccess()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/letters", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, letter, description }),
      })

      if (!res.ok) return console.log("Error adding letter on addLetter/page")

      if (res.ok) {
        handleSuccess("/", "Added letter successfully")
      }
    } catch (err) {
      console.log("Error adding letter: ", err)
    }
  }

  return (
    <Form onSubmit={handleSubmit} letter={letter}>
      <Input
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <LetterTextArea
        name="letter"
        value={letter}
        onChange={(e) => setLetter(e.target.value)}
      />
      {/* <label htmlFor="image">Add image</label> */}
      <button className="button">Add Letter</button>
    </Form>
  )
}
