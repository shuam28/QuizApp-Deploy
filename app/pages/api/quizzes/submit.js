// pages/api/quizzes/submit.js
import { getSession } from "next-auth/client";
import prisma from '../../../lib/prisma';
import { sendResultEmail } from '../../../lib/email';

export default async (req, res) => {
  const session = await getSession({ req });

  if (!session || session.user.role !== "student") {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { quizId, answers } = req.body;

  const quiz = await prisma.quiz.findUnique({
    where: { id: quizId },
    include: { questions: true },
  });

  let score = 0;
  quiz.questions.forEach((question, index) => {
    if (question.answer === answers[index]) {
      score++;
    }
  });

  const result = await prisma.result.create({
    data: {
      score,
      userId: session.user.id,
      quizId,
    },
  });

  await sendResultEmail(session.user.email, score);

  res.status(200).json(result);
};
