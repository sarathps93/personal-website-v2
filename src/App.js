import { AppContainer } from './styles/common';
import Profile from './components/profile';
import PageFlip from './components/profileFeed';
import Header from './components/header';
import SidePane from './components/sidePane';

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
