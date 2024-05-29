import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ setUrl }) => {
  const onSubmit = (data) => {
    setUrl(data.url);
    reset();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Text colorScheme="green" fontSize="3xl" textAlign="center">
        Youtube Video Downloader
      </Text>
      <FormControl mt="30px" mb="3">
        <Input
          autoFocus
          type="text"
          placeholder="Enter Youtube Video URL Here...."
          variant="filled"
          {...register("url", { required: true })}
        />
        {errors.url && (
          <FormHelperText color="red">This field is required!</FormHelperText>
        )}
      </FormControl>
      <Button disabled={!isValid} type="submit" colorScheme="green">
        Submit
      </Button>
    </form>
  );
};

export default Form;
