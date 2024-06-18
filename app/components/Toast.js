import { useToast } from "@chakra-ui/react";

const useToastNotification = () => {
  const toast = useToast();

  const showToast = (title, status) => {
    toast({
      title,
      status,
      duration: 2000,
      isClosable: true,
    });
  };

  return showToast;
};

export default useToastNotification;
