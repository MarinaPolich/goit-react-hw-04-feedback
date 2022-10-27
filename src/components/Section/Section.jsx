import { FeedbackTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      <FeedbackTitle>{title}</FeedbackTitle>
      {children}
    </>
  );
};
