"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const projects = [
    "2 BHK",
    "3 BHK",
    "4 BHK"
  ];

export function FormModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name'),
      mobile: formData.get('mobile'),
      project: formData.get('project')
    };

    // Format message for WhatsApp
    const message = `
*New Inquiry from Website Popup*

*Name:* ${data.name}
*Mobile:* ${data.mobile}
*Project:* ${data.project}

*Sent from:* Malpani's Website`;

    // Your phone number
    const targetPhone = "9766802703";
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px] ">
        <DialogTitle className="text-2xl font-bold text-center">Interested?</DialogTitle>
        <div className="grid gap-4 py-4">
          <div className="px-6 ">
            <p className="text-center text-gray-600 mb-6">Fill in your details and we'll get back to you!</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Enter your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number</Label>
                <Input id="mobile" name="mobile" type="tel" placeholder="Enter your mobile number" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="project">COnfiguration</Label>
                <Select name="project">
                  <SelectTrigger className="bg-white text-black border-dotted">
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    {projects.map((project) => (
                      <SelectItem key={project} value={project}>
                        {project}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full">Submit</Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}