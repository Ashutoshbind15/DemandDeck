import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  demandCreator,
  proposalacceptor,
  proposalmaker,
  voteHandler,
} from "../utils/api";

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

  const acceptProposal = useMutation({
    mutationFn: proposalacceptor,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["demands"],
        queryKey: ["demands", id],
      });
    },
  });

  const castVoteMutation = useMutation({
    mutationFn: voteHandler,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["demands"] });
    },
  });

  const makeProposal = useMutation({
    mutationFn: proposalmaker,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["demands"],
        queryKey: ["demands", id],
      });
    },
  });

  return { createDemand, acceptProposal, castVoteMutation, makeProposal };
};
