import { ArrowUp } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex items-center justify-center">
      <p className="text-sm text-muted-foreground text-center">
        &copy; {new Date().getFullYear()} ISHIMWE Frank. All rights reserved
      </p>
      <a
        href="#hero"
        className="absolute right-4 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={16} />
      </a>
    </footer>
  )
}
