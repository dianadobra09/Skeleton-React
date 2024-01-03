import React, { FormEvent, useCallback, useEffect, useMemo } from 'react';
import { Text, Container, Header, styles, ContentContainer, LogoContainer } from './ForgotPasswordConfirmation.styles';
import { useNavigate, useParams } from 'react-router-dom';
import { Divider } from '../../../../core/components/Divider/Divider';
import { ReactComponent as Logo } from '../../../../assets/logo/logo.svg';
import { ForgotPasswordService } from '../../../../core/services/ForgotPasswordService';
import { set } from 'lodash-es';
import { toast } from 'react-toastify';

export const ForgotPasswordConfirmation = () => {
  const { token } = useParams();

  const forgotPassService = useMemo(() => new ForgotPasswordService(), []);

  const [error, setError] = React.useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      return;
    }
    forgotPassService
      .confirmForgotPassword(token)
      .then(() => {
        toast.success('Password was changed successfully');
        navigate('/login');
      })
      .catch(error => {
        setError(true);
      });
  }, [token]);

  return (
    <Container __css={styles.container}>
      <LogoContainer __css={styles.logoContainer}>
        <Logo height={'70px'} width={'100%'} />
      </LogoContainer>
      <ContentContainer __css={styles.contentContainer}>
        <Header __css={styles.header}>Oops.. something went wrong</Header>
        <Text __css={styles.text}>The activation link is not valid. Please try again.</Text>
      </ContentContainer>
    </Container>
  );
};
