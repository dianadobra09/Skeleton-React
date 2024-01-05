import React, { FormEvent, useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/logo/logo.svg';
import { Button } from '../../../core/components/Button/Button';
import { Input } from '../../../core/components/Input/Input';
import { Container, Header, InputContainer, LogoContainer, SubmitContainer, styles } from './ActivateAccount.styles';
import { InvitationService } from '../../../core/services/InvitationService';
import { toast } from 'react-toastify';
import { useAuth } from '../../../core/contexts/Authentication.provider';
import { CenteredFlex } from '../../../core/components/Flex/Flex';

export const ActivateAccount = () => {
  const { email, token } = useParams();

  const [showError, setShowError] = React.useState<boolean>(false);
  const [password, setPassword] = React.useState<string>('');
  const [confirmPassword, setConfirmPassword] = React.useState<string>('');

  const invitationService = React.useMemo(() => new InvitationService(), []);
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    if (!token) {
      setShowError(true);
      return;
    }
    setShowError(false);
    invitationService.verifyInvitation(token).catch(() => setShowError(true));
  }, [token]);

  const submit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      if (!token) {
        setShowError(true);
        return;
      }
      if (password !== confirmPassword) {
        toast.error('Passwords do not match');
        return;
      }
      if (!email || !password || !confirmPassword) {
        toast.error('Please fill in all fields');
        return;
      }
      invitationService
        .confirmInvitation(token, password)
        .then(() => {
          login(email, password).then(user => {
            setPassword('');
            setConfirmPassword('');
            navigate('/private');
            toast.success('Account activated successfully');
          });
        })
        .catch(error => {
          error;
        });
    },
    [email, password, confirmPassword, token]
  );

  return (
    <Container __css={styles.container}>
      <LogoContainer __css={styles.logoContainer}>
        <Logo height={'70px'} width={'100%'} />
      </LogoContainer>
      {!showError && (
        <form onSubmit={submit}>
          <Header __css={styles.header}>Set your password</Header>
          <InputContainer marginBottom={3}>
            <Input label={'Email'} value={email} isDisabled inputStyles={styles.input} containerStyles={styles.inputContainer} />
          </InputContainer>
          <InputContainer marginBottom={3}>
            <Input label={'Create your password'} type={'password'} value={password} onChange={setPassword} inputStyles={styles.input} containerStyles={styles.inputContainer} />
          </InputContainer>
          <InputContainer>
            <Input
              label={'Confirm your password'}
              type={'password'}
              value={confirmPassword}
              onChange={setConfirmPassword}
              inputStyles={styles.input}
              containerStyles={styles.inputContainer}
            />
          </InputContainer>

          <SubmitContainer __css={styles.submitContainer}>
            <Button>Submit</Button>
          </SubmitContainer>
        </form>
      )}
      {showError && (
        <CenteredFlex typographyVariant={'hed3'} color={'white'}>
          Sorry, the activation link is either invalid or expired.
        </CenteredFlex>
      )}
    </Container>
  );
};
