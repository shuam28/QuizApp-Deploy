// pages/api/quizzes/create.js
import { getSession } from "next-auth/client";
import prisma from '../../../lib/prisma';

export default async (req, res) => {
  const session = await getSession({ req });

  if (!session || session.user.role !== "teacher") {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { title, scheduleAt, questions } = req.body;

  const quiz = await prisma.quiz.create({
    data: {
      title,
      scheduleAt: new Date(scheduleAt),
      teacher: { connect: { email: session.user.email } },
      questions: {
        create: questions,
      },
    },
  });

  res.status(200).json(quiz);
};
