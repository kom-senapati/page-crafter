import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeRenderer({ jsxString }: { jsxString: string }) {
  const code: string = `
  export default function App() {
    return (
      {${jsxString}}
    )
  }
  `;

  return (
    <Dialog>
      <DialogTrigger>
        <Button size="sm">Get Code</Button>
      </DialogTrigger>
      <DialogContent className="min-w-[900px]">
        <DialogHeader>
          <DialogTitle>Code</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-end">
          <div>
            <CopyToClipboard text={code}>
              <Button size="sm">Copy to Clipboard</Button>
            </CopyToClipboard>
          </div>
          <SyntaxHighlighter language="jsx" style={dracula} className="w-full">
            {code}
          </SyntaxHighlighter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
