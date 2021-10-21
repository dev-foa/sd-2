import { NextApiRequest, NextApiResponse } from "next";

const check = async (req: NextApiRequest, res: NextApiResponse) => {
  const { test } = req.body;
  if (test === "good") {
    res.status(200).json({ message: "Successful" });
  } else {
    res.status(200).json({ message: "Failed" });
  }
};

export default check;
