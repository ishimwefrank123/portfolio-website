import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitch, Twitter } from "lucide-react"

import { cn } from "../lib/utils"
import { useToast } from "../hooks/use-toast"
import { useState } from "react";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const {toast} = useToast();
  const [isSubmitting,setIsSubmitting] = useState(false)

  emailjs.init("U0uTCdQ-XBreZ0rcq");

  const handleSubmit = async(e) => {
    e.preventDefault()

    setIsSubmitting(true);

    // setTimeout(()=>{
    //   toast({
    //     title: "Message sent!",
    //     description: "Thank you for your message. I'll get back to you soon."
    //   });
    //   setIsSubmitting(false);
    // }, 1500);
    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        'service_euobd3w', 
        'template_8ftnfej', 
        e.target,
        'U0uTCdQ-XBreZ0rcq'
      );
      
      console.log('Email successfully sent!', result.text);
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon."
      });
      
      // Reset the form
      e.target.reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      
      toast({
        title: "Error",
        description: "Sorry, there was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
  <section
    id = "contact"
    className="py-24 px-4 relative bg-secondary/30"
  >
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
      Get In <span className="text-primary">Touch</span>
      </h2>

      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Have a project in mind or want to collaborate? Feel free to reach out.
        I'm always open to discussing new opportunities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

          <div className="space-y-6 justify-center">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary">
                <Mail className="h-6 w-6"/> {""}
              </div>
              <div>
                <h4>Email</h4>
                <a 
                href="mailto:ishimwefrank147@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                >
                  ishimwefrank147@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary">
                <Phone className="h-6 w-6"/> {""}
              </div>
              <div>
                <h4>Phone</h4>
                <a 
                href="tel:+250790481009"
                className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +250790481009
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary">
                <MapPin className="h-6 w-6"/> {""}
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <a 
                className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Nyarugenge, Kigali, Rwanda
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h4 className="font-medium mb-4">Connect With Me</h4>
            <div className="flex space-x-4 justify-center">
              <a href="https://www.linkedin.com/in/frank-ishimwe-2634ba284/" target="_blank">
                <Linkedin/>
              </a>
              <a href="https://x.com/ishimwefrank147" target="_blank">
                <Twitter/>
              </a>
              <a href="#" target="_blank">
                <Instagram/>
              </a>
              <a href="#" target="_blank">
                <Facebook/>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg shadow-xs" >
          <h3 className="text-2xl font-semibold mb-6"> Send a Message </h3>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
              <input type="text" id="name" name="name" required 
              className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary " 
              placeholder="ISHIMWE Frank..."
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
              <input type="email" id="email" name="email" required 
              className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary " 
              placeholder="frank@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
              <textarea id="message" name="message" required 
              className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlined-hidden focus:ring-2 focus:ring-primary resize-none" 
              placeholder="Hello, I'd like to talk about..."
              />
            </div>
            <button 
            type="submit" 
            disabled={isSubmitting}
            className={cn(
              "cosmic-button w-full flex items-center justify-center gap-2",
            )}>
              {isSubmitting ? "Sending...":"Send Message"}
              <Send size={16}/>
            </button>
          </form>
        </div>
      </div>
    </div>
    
    
  </section>)
}