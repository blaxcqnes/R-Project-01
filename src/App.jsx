import Header from './components/Header.jsx';
import Entry from './components/Entry.jsx';
import EntryData from './data/EntryData.jsx';

function App() {
  let entryElements = EntryData.map((entries) => {
    return (
      <Entry
        key={entries.id}
        image={entries.image}
        locSvg={entries.locSvg}
        countryName={entries.countryName}
        gmap={entries.gmap}
        title={entries.title}
        dates={entries.dates}
        description={entries.description}
      />
    );
  });

  return (
    <>
      <Header />
      {entryElements}
    </>
  );
}

export default App;
