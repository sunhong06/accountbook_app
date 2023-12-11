import Button from '@/components/common/Button';

const SignUpButton = () => {
  const signUpHandler = () => {};

  return (
    <Button disabled={false} onClick={signUpHandler}>
      회원가입
    </Button>
  );
};
export default SignUpButton;
