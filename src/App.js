import { Suspense, lazy } from 'react';
import { AppContainer } from './styles/common';
import Header from './molecules/header';

function App() {
  const LeftPane = lazy(() => import('./organisms/leftPane'));
  const ProfileFeed = lazy(() => import('./organisms/profileFeed'));
  const RightPane = lazy(() => import('./organisms/rightPane'));
  return (
    <>
      <Header />
      <AppContainer>
        <Suspense fallback={<div />}>
          <LeftPane />
          <ProfileFeed />
          <RightPane />
        </Suspense>
      </AppContainer>
    </>
  );
}

export default App;
