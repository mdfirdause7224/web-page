import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div className="flex gap-2 mt-10">
        <div>
          <div className="mb-4">
            <Button variant="default">Default</Button>
          </div>
          <div className="mb-4">
            <Button variant="primary">Primary</Button>
          </div>
          <div className="mb-4">
            <Button variant="success">Success</Button>
          </div>
          <div className="mb-4">
            <Button variant="link">Link</Button>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <Button variant="info">Info</Button>
          </div>
          <div className="mb-4">
            <Button variant="warning">Warning</Button>
          </div>
          <div className="mb-4">
            <Button variant="danger">Danger</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
