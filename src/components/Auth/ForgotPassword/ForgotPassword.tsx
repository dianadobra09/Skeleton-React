import React, { FormEvent, useCallback, useMemo } from 'react';
import { Input } from '../../../core/components/Input/Input';
import { Button } from '../../../core/components/Button/Button';
import { ButtonContainer, Container, Header, InputContainer, LogoContainer, styles } from './ForgotPassword.styles';
import { ReactComponent as Logo } from '../../../assets/logo/logo.svg';
import { toast } from 'react-toastify';
import { ForgotPasswordService } from '../../../core/services/ForgotPasswordService';

export const ForgotPassword = () => {
  const [email, setEmail] = React.useState<string>('');

  const forgotPassService: ForgotPasswordService = useMemo(() => new ForgotPasswordService(), []);

  const submit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      forgotPassService
        .forgotPassword(email)
        .then(() => {
          toast.success('Please check your email', {});
        })
        .catch(error => {
          error;
        });
    },
    [email]
  );

  return (
    <Container __css={styles.container}>
      <LogoContainer __css={styles.logoContainer}>
        <Logo height={'70px'} width={'100%'} />
      </LogoContainer>
      <form onSubmit={submit}>
        <Header __css={styles.header}>Reset your password</Header>
        <InputContainer>
          <Input label={'Email'} value={email} onChange={setEmail} inputStyles={styles.input} containerStyles={styles.inputContainer} />
        </InputContainer>

        <ButtonContainer __css={styles.buttonContainer}>
          <Button>Send reset link</Button>
        </ButtonContainer>
      </form>
    </Container>
  );
};
