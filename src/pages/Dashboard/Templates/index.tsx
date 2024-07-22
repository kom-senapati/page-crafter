import { useEffect, useState } from "react";
import TemplateCard from "@/components/Dashboard/TemplateCard";
import { Button } from "@/components/ui/button";
import { templates, type Template } from "@/constants/templates";
import { Link } from "wouter";

export default function Page() {
  const [selectedTemplateId, setSelectedTemplateId] = useState<number>(-1);

  const handleTemplateClick = (index: number) => {
    if (selectedTemplateId === index) {
      setSelectedTemplateId(-1);
    } else {
      setSelectedTemplateId(index);
    }
  };

  return (
    <div className="p-12 space-y-4 relative min-h-screen w-full">
      <h1 className="text-2xl md:text-3xl">Choose a template</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {templates.map((template: Template, index) => (
          <TemplateCard
            key={index}
            title={template.title}
            description={template.description}
            selected={index === selectedTemplateId}
            onClick={() => handleTemplateClick(index)}
          />
        ))}
      </div>
      <Button
        className="absolute bottom-12 right-12"
        variant={selectedTemplateId === -1 ? "ghost" : "default"}
        asChild
      >
        <Link
          href={
            selectedTemplateId === -1
              ? "#"
              : `/dashboard/templates/${selectedTemplateId}`
          }
        >
          Proceed
        </Link>
      </Button>
    </div>
  );
}

