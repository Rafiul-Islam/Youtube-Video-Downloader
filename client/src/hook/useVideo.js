import { useToast } from "@chakra-ui/react";
import http from "../services/http";
import { useEffect, useState } from "react";

const useVideo = () => {
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
        const { data } = await http.post("/download", {
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

  return { isLoading, setUrl, videoName, formats };
};

export default useVideo;
