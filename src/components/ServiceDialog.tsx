
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import MeetingDialog from "./MeetingDialog";

interface ServiceDialogProps {
  children: React.ReactNode;
  service: {
    title: string;
    description: string;
    features: string[];
    logo: string;
  };
}

const ServiceDialog = ({ children, service }: ServiceDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl text-gray-900 flex items-center gap-3 mb-4">
            <span className="text-3xl">{service.logo}</span>
            {service.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <p className="text-gray-600 text-lg leading-relaxed">
            {service.description}
          </p>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
            <div className="flex flex-wrap gap-2">
              {service.features.map((feature, idx) => (
                <Badge key={idx} variant="outline" className="text-sm">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t">
            <p className="text-sm text-gray-600 mb-4">
              Ready to get started with {service.title.toLowerCase()}? Schedule a consultation with our experts.
            </p>
            <MeetingDialog serviceType={service.title}>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Schedule a Meet for {service.title}
              </Button>
            </MeetingDialog>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDialog;

