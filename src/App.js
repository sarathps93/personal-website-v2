import { AppContainer } from './styles/common';
import { LeftPane, ProfileFeed, RightPane } from './organisms';
import Header from './molecules/header';

function App() {
  return (
    <>
      <Header />
      <AppContainer>
        <LeftPane />
        <ProfileFeed />
        <RightPane />
      </AppContainer>
    </>
  );
}

export default App;
