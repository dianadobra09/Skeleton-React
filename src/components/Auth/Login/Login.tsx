import React, { FormEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/logo/logo.svg';
import { Button } from '../../../core/components/Button/Button';
import { Input } from '../../../core/components/Input/Input';
import { Container, Header, InputContainer, LogoContainer, SubmitContainer, Text, styles } from './Login.styles';
import { useAuth } from '../../../core/contexts/Authentication.provider';
import { set } from 'lodash-es';
import { toast } from 'react-toastify';

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [twoFAcode, setTwoFACode] = React.useState<string>();
  const [showTwoFA, setShowTwoFA] = React.useState<boolean>(false);

  const { login } = useAuth();

  const submit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      login(email, password, twoFAcode)
        .then(user => {
          setEmail('');
          setPassword('');
          setTwoFACode(undefined);
          navigate('/private', { replace: true });
        })
        .catch(error => {
          if (error.errorId === 103) {
            setShowTwoFA(true);
          }
          if (error.errorId === 102 || error.errorId === 100) {
            toast.error('Invalid credentials');
          }
          if (error.errorId === 101) {
            toast.error('User is inactive');
          }
        });
    },
    [email, password, twoFAcode]
  );

  return (
    <Container __css={styles.container}>
      <LogoContainer __css={styles.logoContainer}>
        <Logo height={'70px'} width={'100%'} />
      </LogoContainer>
      <form onSubmit={submit}>
        <Header __css={styles.header}>Welcome back</Header>
        {showTwoFA ? (
          <InputContainer>
            <Input
              label={'Please enter the code sent to your email to verify your identity'}
              value={twoFAcode}
              onChange={setTwoFACode}
              inputStyles={styles.input}
              containerStyles={styles.inputContainer}
            />
          </InputContainer>
        ) : (
          <>
            <InputContainer marginBottom={3}>
              <Input label={'Email'} value={email} onChange={setEmail} inputStyles={styles.input} containerStyles={styles.inputContainer} />
            </InputContainer>
            <InputContainer>
              <Input label={'Password'} type={'password'} value={password} onChange={setPassword} inputStyles={styles.input} containerStyles={styles.inputContainer} />
            </InputContainer>
          </>
        )}

        <SubmitContainer __css={styles.submitContainer} marginTop={'24px'} marginBottom={'8px'}>
          <Text onClick={() => navigate('/forgot-password')} __css={styles.text} textDecoration={'underline'} cursor={'pointer'}>
            Forgot password?
          </Text>
          <Button>Sign In</Button>
        </SubmitContainer>
      </form>
    </Container>
  );
};
