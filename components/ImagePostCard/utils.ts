import { getProfileTotalScore } from "@/src/customQueries";
import { updateUser } from "@/src/graphql/mutations";
import { API } from "aws-amplify";

export const incrementProfileLikeCount = async (user_id?: string) => {
  if (!user_id) return;
  try {
    // Get Fresh Like Count (Since DynamoDB doesn't support increment like SQL, We can used Redis Counter for Scaling it Better and reducing DB load)
    const newDataUserLikesCount: any = await API.graphql({
      query: getProfileTotalScore,
      variables: { id: user_id },
    });

    // Updated total Like Count
    const newLikeCount = newDataUserLikesCount?.data?.getUser?.likesCount + 1;
    const newReachCount = newDataUserLikesCount?.data?.getUser?.reachCount + 1;

    await API.graphql({
      query: updateUser,
      variables: {
        input: {
          id: user_id,
          likesCount: newLikeCount,
          reachCount: newReachCount,
        },
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const incrementProfileReachCount = async (user_id?: string) => {
  if (!user_id) return;
  try {
    // Get Fresh Like Count (Since DynamoDB doesn't support increment like SQL, We can used Redis Counter for Scaling it Better and reducing DB load)
    const newDataUserLikesCount: any = await API.graphql({
      query: getProfileTotalScore,
      variables: { id: user_id },
    });

    // Updated total Like Count
    const newReachCount = newDataUserLikesCount?.data?.getUser?.reachCount + 1;

    await API.graphql({
      query: updateUser,
      variables: {
        input: {
          id: user_id,
          reachCount: newReachCount,
        },
      },
    });
  } catch (error) {
    console.error(error);
  }
};
