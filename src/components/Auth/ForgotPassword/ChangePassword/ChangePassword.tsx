import React, { FormEvent, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../../assets/logo/logo.svg';
import { Button } from '../../../../core/components/Button/Button';
import { Input } from '../../../../core/components/Input/Input';
import { Container, Header, InputContainer, LogoContainer, SubmitContainer, styles } from './ChangePassword.styles';

export const ChangePassword = () => {
  const { email } = useParams();

  const [password, setPassword] = React.useState<string>('');
  const [confirmPassword, setConfirmPassword] = React.useState<string>('');

  const submit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
    },
    [email, password]
  );

  return (
    <Container __css={styles.container}>
      <LogoContainer __css={styles.logoContainer}>
        <Logo height={'70px'} width={'100%'} />
      </LogoContainer>
      <form onSubmit={submit}>
        <Header __css={styles.header}>Change your password</Header>
        <InputContainer marginBottom={3}>
          <Input label={'Email'} value={email} isDisabled inputStyles={styles.input} containerStyles={styles.inputContainer} />
        </InputContainer>
        <InputContainer marginBottom={3}>
          <Input label={'New password'} value={password} onChange={setPassword} inputStyles={styles.input} containerStyles={styles.inputContainer} />
        </InputContainer>
        <InputContainer>
          <Input label={'Confirm the new password'} value={confirmPassword} onChange={setConfirmPassword} inputStyles={styles.input} containerStyles={styles.inputContainer} />
        </InputContainer>

        <SubmitContainer __css={styles.submitContainer} marginTop={'24px'} marginBottom={'8px'}>
          <Button>Submit</Button>
        </SubmitContainer>
      </form>
    </Container>
  );
};
