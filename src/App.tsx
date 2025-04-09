import "./App.css";
import { Button } from "./components/ui/button";
import { Panel } from "./components/ui/panel";

function App() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10 p-4">
        <Panel variant="default" title="Default Panel">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.
        </Panel>
        <Panel variant="primary" title="Primary Panel">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.
        </Panel>
        <Panel variant="success" title="Success Panel">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.
        </Panel>
        <Panel 
          variant="info" 
          title="Info Panel"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.
        </Panel>
        <Panel 
          variant="warning" 
          title="Warning Panel"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.
        </Panel>
        <Panel 
          variant="danger" 
          title="Danger Panel with Footer"
          footer="Panel Footer"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.
        </Panel>
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
