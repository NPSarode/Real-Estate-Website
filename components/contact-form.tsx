"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const projects = [
  "2 BHK",
  "3 BHK",
  "4 BHK"
];

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  project: z.string().min(1, "Please select a project")
});

export function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      project: ""
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const message = `
*New Inquiry from Website*

*Name:* ${data.name}
*Email:* ${data.email}
*Phone:* ${data.phone}
*Project:* ${data.project}

*Sent from:* Malpani's Website`;
    
    const targetPhone = "9766802703";
    const whatsappURL = `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600">
              Get in touch with us to know more about Prakruti
            </p>
          </div>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <div className="flex flex-col gap-1">
              <Label className="text-black" htmlFor="name">Name</Label>
              <Input
                id="name"
                {...form.register("name")}
                placeholder="Enter your name..."
                className="mt-1 text-black bg-white border-dotted"
              />
              {form.formState.errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.name.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <Label className="text-black" htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email..."
                {...form.register("email")}
                className="mt-1 text-black bg-white border-dotted"
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <Label className="text-black" htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number..."
                {...form.register("phone")}
                className="mt-1 text-black bg-white border-dotted"
              />
              {form.formState.errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.phone.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <Label className="text-black" htmlFor="project">Select Project</Label>
              <Select onValueChange={(value) => form.setValue("project", value)}>
                <SelectTrigger className="bg-white border-dotted text-black">
                  <SelectValue placeholder="Select a project" />
                </SelectTrigger>
                <SelectContent>
                  {projects.map((project) => (
                    <SelectItem key={project} value={project}>
                      {project}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {form.formState.errors.project && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.project.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full text-white bg-emerald-600 hover:bg-emerald-700">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}