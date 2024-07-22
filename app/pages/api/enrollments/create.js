import { getSession } from "next-auth/client";
import prisma from '../../../lib/prisma';

export default async (req, res) => {
  const session = await getSession({ req });

  if (!session || session.user.role !== "student") {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { quizId } = req.body;

  const enrollment = await prisma.enrollment.create({
    data: {
      quizId,
      userId: session.user.id,
    },
  });

  res.status(200).json(enrollment);
};
