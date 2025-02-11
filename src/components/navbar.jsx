import React from 'react'
import { Github } from 'lucide-react'
import { Button } from "@/components/ui/button"

const Navbar = () => {
    return (
        <nav className="bg-background border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="/" className="flex-shrink-0">
                            <span className="text-2xl font-bold text-primary">Cryptet</span>
                        </a>
                    </div>
                    <div className="flex items-center">
                        <Button
                            variant="ghost"
                            size="icon"
                            aria-label="GitHub"
                            className="text-foreground hover:text-primary"
                            asChild
                        >
                            <a href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer">
                                <Github className="h-6 w-6" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar