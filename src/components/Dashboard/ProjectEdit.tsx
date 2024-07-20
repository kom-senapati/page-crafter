import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function ProjectEditForm({
  set,
  data,
  setEditing,
}: {
  set: (formData: any) => void;
  data: any;
  setEditing: (editing: boolean) => void;
}) {
  const [formData, setFormData] = useState(data);
  const handleSave = () => {
    set(formData);
    setEditing(false);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-50">
      <div className="bg-background p-8 rounded-lg shadow-lg w-full max-w-md">
        <form className="space-y-6">
          <div>
            <Label htmlFor="hero-title" className="block mb-3">
              Hero Title
            </Label>
            <Input
              type="text"
              name="hero-title"
              id="hero-title"
              value={formData.hero.title}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  hero: { ...formData.hero, title: e.target.value },
                })
              }
            />
          </div>

          <div>
            <Label htmlFor="hero-description" className="block mb-3">
              Hero Description
            </Label>
            <Input
              type="text"
              name="hero-description"
              id="hero-description"
              value={formData.hero.description}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  hero: { ...formData.hero, description: e.target.value },
                })
              }
            />
          </div>

          <div>
            <Label htmlFor="about-title" className="block mb-3">
              About Title
            </Label>
            <Input
              type="text"
              name="about-title"
              id="about-title"
              value={formData.about.title}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  about: { ...formData.about, title: e.target.value },
                })
              }
            />
          </div>

          <div>
            <Label htmlFor="about-description" className="block mb-3">
              About Description
            </Label>
            <Input
              type="text"
              name="about-description"
              id="about-description"
              value={formData.about.description}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  about: { ...formData.about, description: e.target.value },
                })
              }
            />
          </div>
        </form>

        <Button className="mt-6" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
}
