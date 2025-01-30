import { Textarea } from "./components/ui/textarea";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <Textarea label="Comments" placeholder="Write your feedback..." rows={4} />
    </div>
  );
}

export default App;
