import "./App.css";
import CustomModalWrapper from "./custom-modal-manager/components/CustomModalWrapper";
import ModalTester from "./custom-modal-manager/components/ModalTest";
import ListItems from "./infinite-scroll/components/ListItems";
import SmartSearchInputWrapper from "./smart-search-input/components/SmartSearchInputWrapper";
import Countdown from "./stopwatch/countdown";
import DragAndDropList from "./stopwatch/Draggable";
import Stopwatch from "./stopwatch/Stopwatch";
import TreeTodoWithStrictCheckboxes from "./stopwatch/todo";

function App() {
  return (
    <>
      {/* <SmartSearchInputWrapper /> */}
      {/* <ListItems /> */}
      {/* <ModalTester /> */}
      <Stopwatch />
      <Countdown />
      <TreeTodoWithStrictCheckboxes />
      <DragAndDropList />
    </>
  );
}

export default App;
