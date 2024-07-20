import StringToReactComponent from "string-to-react-component";

export default function ProjectRender({ jsxString }: { jsxString: string }) {
  const code: string = `(props)=>${jsxString}`;

  return (
    <div className="bg-background w-full h-full rounded-md overflow-y-scroll no-scrollbar">
      <StringToReactComponent>{code}</StringToReactComponent>
    </div>
  );
}
