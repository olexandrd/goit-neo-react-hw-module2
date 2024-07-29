import Description from "./components/Description/Description";
import Options from "./components/Options/Options";

const App = () => {
  return (
    <>
      <Description
        name="Sip Happens Café"
        description="Please leave your feedback about our service by selecting one of the options below."
      />

      <Options />
    </>
  );
};

export default App;
