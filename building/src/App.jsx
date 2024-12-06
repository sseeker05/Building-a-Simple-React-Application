import Header from './header';
import Content from './content';
import Footer from './footer';

function App() {
  return (
    <>
      <Header />
      <Content color="red" text="This is my first React Application, wish me luck!" />
      <Content color="yellow" text="Wish me luck..." />
      <Content color="green" text="I think I've got it!" />
      <Footer />
    </>
  );
}

export default App;