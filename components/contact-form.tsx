"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const targetPhoneNumber = "8668729638"; // Replace with your WhatsApp number (international format, without + or 00)
    const message = `Hello, 
    Name: ${data.name}
    Email: ${data.email}
    Phone: ${data.phone}
    Message: ${data.message}`;

    const whatsappURL = `https://wa.me/${targetPhoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Redirect to WhatsApp
    window.location.href = whatsappURL;
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
                className="mt-1 "
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
                className="mt-1 "
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
                className="mt-1 "
              />
              {form.formState.errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.phone.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <Label className="text-black" htmlFor="message">Message</Label>
              <textarea
                id="message"
                placeholder="Enter your message..."
                {...form.register("message")}
                className="mt-1 block w-full px-3 border border-dotted py-2 rounded-md bg-white  shadow-sm "
                rows={4}
              />
              {form.formState.errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.message.message}
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