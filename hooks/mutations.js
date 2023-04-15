import { useMutation, useQueryClient } from "@tanstack/react-query";
import { demandCreator } from "../utils/api";

export const usePollMutations = (id) => {
    const queryClient = useQueryClient();
  
    const createDemand = useMutation({
      mutationFn: demandCreator,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["demands"],
        });
      },
    });
  
    return {createDemand };
  };
  
