import React, { useState } from 'react';
import { ReactComponent as ArrowDown } from '../../../assets/icons/arrow-down.svg';
import { ReactComponent as CheckIcon } from '../../../assets/icons/check.svg';
import { StylingProps } from '../../types/Core';
import { Box } from '../Box/Box';
import { Divider } from '../Divider/Divider';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';
import { CenteredFlex } from '../Flex/Flex';
import { Image } from '../Image/Image';
import { StyledContainer, StyledMenuButton, StyledMenuItem, styles } from './TopBar.styles';

interface TopBarProps {
  isSticky?: boolean;
}

interface BasicApp {
  id: string;
  name: string;
  avatarUrl: string;
}

const TopBarImage: React.FC<{ url?: string } & StylingProps> = ({ url, ...restProps }) => {
  return <>{url && <Image url={url} shape={'circle'} sizeX={'39px'} bg={'#F5F5F5'} {...restProps} />}</>;
};

const DropdownMenuContent = ({ label, onClick }: { label: string; onClick?: () => void }) => (
  <Box typographyVariant={'body9'} width={'100%'} onClick={onClick}>
    {label}
  </Box>
);

const TopBar: React.FC<TopBarProps> = ({ isSticky }) => {
  // TODO: replace with real data and use state management
  const currentUser = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.org',
    avatarUrl: 'https://gravatar.com/avatar/d8c4fe959b139642c9af11271336f984?s=400&d=robohash&r=x'
  };

  const userApps: BasicApp[] = [
    {
      id: '1',
      name: 'dream-team-x89xa',
      avatarUrl: 'https://gravatar.com/avatar/d0e7a11066725c531f53fed6161ac60b?s=400&d=robohash&r=x'
    },
    {
      id: '2',
      name: 'dream-team-3423a',
      avatarUrl: 'https://gravatar.com/avatar/f0edf42046fc0653d36b32ac8bac8564?s=400&d=robohash&r=x'
    }
  ];

  const [selectedApp, setSelectedApp] = useState<BasicApp>(userApps[0]);

  const handleChangeApp = (newId: string) => {
    const newApp = userApps.find(app => app.id === newId);
    if (newApp) {
      setSelectedApp(newApp);
    }
  };

  return (
    <StyledContainer __css={styles.container} position={isSticky ? 'sticky' : 'relative'}>
      {selectedApp && (
        <CenteredFlex>
          <TopBarImage url={selectedApp?.avatarUrl} marginRight={2} />

          <DropdownMenu
            menuButtonContent={
              <StyledMenuButton __css={styles.menuButton}>
                {userApps?.find(app => app.id === selectedApp.id)?.name}
                <Box marginLeft={2} color={'gray7'}>
                  <ArrowDown />
                </Box>
              </StyledMenuButton>
            }
            menuItems={[
              ...userApps.map(app => ({
                content: (
                  <StyledMenuItem __css={styles.menuItem} onClick={() => handleChangeApp(app.id)} color={app.id === selectedApp.id ? 'blue2' : 'inherit'}>
                    {app.name} {app.id === selectedApp.id && <CheckIcon />}
                  </StyledMenuItem>
                )
              })),
              { content: <DropdownMenuContent label={'Create new team'} onClick={() => alert('Create team clicked')} /> }
            ]}
          />
        </CenteredFlex>
      )}

      <Divider placement={'vertical'} width={'24px'} />

      <DropdownMenu
        menuButtonContent={<TopBarImage url={currentUser.avatarUrl} />}
        menuItems={[
          { content: currentUser.email, isDisabled: true },
          {
            content: <DropdownMenuContent label={'Account Settings'} onClick={() => alert('Account settings clicked')} />
          },
          {
            content: <DropdownMenuContent label={'Sign Out'} onClick={() => alert('Sign out clicked')} />
          }
        ]}
      />
    </StyledContainer>
  );
};

export { TopBar };
