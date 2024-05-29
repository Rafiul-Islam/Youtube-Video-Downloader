import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import { Center, Container, Spinner, Text } from "@chakra-ui/react";
import ColorMoodSwitch from "./components/ColorMoodSwitch";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import DownloadCardList from "./components/DownloadCardList";

const App = () => {
  const [url, setUrl] = useState("");
  const [formats, setFormats] = useState([]);
  const [videoName, setVideoName] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const toast = useToast();

  useEffect(() => {
    const getFormats = async () => {
      setLoading(true);
      try {
        const { data } = await axios.post("http://localhost:4000/download", {
          url,
        });
        setUrl("");
        setVideoName(data.title);
        setFormats(data.info);
        setError("");
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error.message);
        setLoading(false);
      }
    };

    url && getFormats();
  }, [url]);

  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: "You entered invalid URL. Please try again.",
        status: "error",
        duration: 10000,
        isClosable: true,
      });
    }
  }, [error]);

  if (isLoading)
    return (
      <Center height="100vh">
        <Spinner size="xl" />
      </Center>
    );

  return (
    <Container my="5" maxW="container.lg">
      <ColorMoodSwitch />
      <Form setUrl={setUrl} />
      <DownloadCardList title={videoName} formats={formats} />
    </Container>
  );
};

export default App;
