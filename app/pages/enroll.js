import prisma from '../lib/prisma';
import EnrollQuizForm from '../components/EnrollQuizForm';

export async function getServerSideProps() {
  const quizzes = await prisma.quiz.findMany();
  return { props: { quizzes } };
}

const Enroll = ({ quizzes }) => {
  return <EnrollQuizForm quizzes={quizzes} />;
};

export default Enroll;
