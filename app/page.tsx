'use cilent'
import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="AddTask" />
      <Button type="submit">Enter Task here</Button>
    </div>
  )
}

export function ButtonDemo() {
  return <Button className="text-black">Pervious</Button>
}
export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof useForm>>({
    resolver: zodResolver(useForm),
    defaultValues: {
      username: "",
    },
  })
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof useForm>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

export default function Home() {
  return (
    <main className=" bg-yellow-200 flex min-h-screen flex-col items-center justify-between p-24">
      <div > class="grid grid-cols-3 gap-4
      
        <div className="flex flex-colum bg-blue-500 px-4 py4" >  
            <p className="text-black text-bold"> total task</p>
            <p className="text-black text-bold "> 04</p>
          </div>
          <div className="flex flex-column bg-green-400 px-4 py4">
          <p className="text-black text-bold"> Completed</p>
            <p className="text-black text-bold "> 02</p>
          </div>
          <div className="flex flex-column bg-orange-400 px-4 py4">
          <p className="text-black text-bold"> Pending</p>
          <p className="text-black text-bold "> 02</p>
          </div>

        </div>
        <Card>
  <CardHeader>
    <CardTitle>This is a sample task 1</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>  
    </main>
  );
}
