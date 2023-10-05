"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/form"
import { Input } from "@/components/input"
import { toast } from "@/components/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export default function Home() {
  const formSchema = z.object({
    username: z.string(),
    password: z.string()
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: ""
    },
  })


  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Form value:",
      variant: 'default',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <main className="bg-gray-100 inline-flex justify-center w-full">
      <section className='h-screen w-full max-w-[480px] bg-white p-5'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Passowrd</FormLabel>
                  <FormControl>
                    <Input placeholder="password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button type="submit" className="w-full bg-gray-200 p-3 rounded-md">Submit</button>
          </form>
        </Form>
      </section>
    </main>
  )
}
