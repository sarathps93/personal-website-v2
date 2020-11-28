import { AppContainer } from './styles/common';
import Profile from './organisms/profile';
import PageFlip from './organisms/profileFeed';
import Header from './molecules/header';
import SidePane from './organisms/sidePane';

function App() {
  return (
    <>
      <Header />
      <AppContainer>
        <Profile />
        <PageFlip />
        <SidePane />
      </AppContainer>
    </>
  );
}

export default App;
