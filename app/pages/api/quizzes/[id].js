import prisma from '../../lib/prisma';
import QuizAttemptForm from '../../components/QuizAttemptForm';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const quiz = await prisma.quiz.findUnique({
    where: { id: parseInt(id) },
    include: { questions: true },
  });
  return { props: { quiz } };
}

const QuizPage = ({ quiz }) => {
  return <QuizAttemptForm quiz={quiz} />;
};

export default QuizPage;
