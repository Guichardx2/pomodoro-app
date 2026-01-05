import DefaultTemplate from "../../templates/DefaultTemplate";
import Container from "../../components/container";
import CountDown from "../../components/count-down";
import TaskForm from "../../components/task-form";

function Home() {
  return (
    <>
      <DefaultTemplate>
        <Container>
          <CountDown />
        </Container>

        <Container>
          <TaskForm />
        </Container>
      </DefaultTemplate>
    </>
  );
}

export default Home;
