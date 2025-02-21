import Header from './components/Header.jsx';
import Entry from './components/Entry.jsx';
import EntryData from './data/EntryData.jsx';

function App() {
  let entryElements = EntryData.map((entries) => {
    return <Entry key={entries.id} {...entries} />;
  });

  return (
    <>
      <Header />
      {entryElements}
    </>
  );
}

export default App;
