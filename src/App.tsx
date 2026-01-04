import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import Container from "./components/container";
import CountDown from "./components/count-down";
import Cycles from "./components/cycles";
import Button from "./components/default-button";
import Input from "./components/default-input";
import TaskFormContainer from "./components/form";
import Logo from "./components/logo";
import Footer from "./components/footer";
import Menu from "./components/menu";

import "./styles/global.css";
import "./styles/theme.css";

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <TaskFormContainer>
          <div className="taskFormContainerRow">
            <Input type="text" id="task" labeltext="Tarefa" placeholder="Digite algo"/>
          </div>

          <div className="taskFormContainerRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="taskFormContainerRow">
            <Cycles />
          </div>  

          <div className="taskFormContainerRow">
            <Button type="submit" icon={<PlayCircleIcon />} color="green" />
            <Button type="submit" icon={<StopCircleIcon />} color="red" />
          </div>
        </TaskFormContainer>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default App;
