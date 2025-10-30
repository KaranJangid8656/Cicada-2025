import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"
import React from "react"

export function ContactOrganizersDialog({ open, onOpenChange }: { open: boolean, onOpenChange: (o: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle>Contact Organizers</DialogTitle>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground mb-2">
              Feel free to reach out to any of our organizers for assistance:
            </p>
            <div className="space-y-3">
              <a href="tel:+918431770172" className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Karan Suthar</p>
                  <p className="text-sm text-muted-foreground">+91 8431770172</p>
                </div>
              </a>
              <a href="tel:+918431822512" className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Priyanka</p>
                  <p className="text-sm text-muted-foreground">+91 8431822512</p>
                </div>
              </a>
              <a href="tel:+919986837400" className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Swarnim</p>
                  <p className="text-sm text-muted-foreground">+91 9986837400</p>
                </div>
              </a>
            </div>
          </div>
          <div className="pt-2">
            <p className="text-sm text-muted-foreground mb-2">Or send us an email:</p>
            <a href="mailto:karansuthar9565@gmail.com" className="block w-full">
              <Button variant="outline" className="w-full">
                <Mail className="h-4 w-4 mr-2" />
                Email Organizers
              </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
