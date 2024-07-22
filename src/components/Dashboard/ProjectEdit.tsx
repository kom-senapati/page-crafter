import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import axios from "axios";

export default function ProjectEditForm({
  set,
  setEditing,
}: {
  set: (formData: any) => void;
  setEditing: (editing: boolean) => void;
}) {
  const [prompt, setPrompt] = useState("Prompt for ai website creation");

  const handleSave = async () => {
    const response = await axios.post(
      "https://ai-model-backend.onrender.com/api/v1/ai/website-generator",
      { userPrompt: prompt }
    );

    const data = response.data.parseObj;
    console.log(data);
    set(data);
    setEditing(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-50">
      <div className="bg-background p-8 rounded-lg shadow-lg w-full max-w-md">
        <form className="space-y-6">
          <div>
            <Label htmlFor="prompt" className="block mb-3">
              Prompt
            </Label>
            <Input
              type="text"
              name="prompt"
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
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
