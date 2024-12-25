import { AsyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const getUserData = AsyncHandler(async (req, res) => {
  console.log("******** getUserData Function ********");
  const user = req.user;
  const batch = user.batch;
  const branch = user.branch;

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        user,
      },
      "User data fetched successfully"
    )
  );
});
