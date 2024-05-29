import { Container } from "@chakra-ui/react";
import DownloadCardList from "./components/DownloadCardList";
import ColorMoodSwitch from "./components/ColorMoodSwitch";
import Form from "./components/Form";
import useVideo from "./hook/useVideo";
import Loader from "./components/Loader";

const App = () => {
  const { isLoading, setUrl, videoName, formats } = useVideo();

  if (isLoading) return <Loader />;
  return (
    <Container my="5" maxW="container.lg">
      <ColorMoodSwitch />
      <Form setUrl={setUrl} />
      <DownloadCardList title={videoName} formats={formats} />
    </Container>
  );
};

export default App;
