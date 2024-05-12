import Layout from "./components/Layout";
import plasticsoep from "./assets/plasticsoep.jpg";
import ChapterCard from "./components/ChapterCard";
function App() {
  return (
    <>
      <Layout>
        <h2 className="text-center text-2xl font-bold my-10">Hoofdstukken</h2>
        <div className="space-y-10">
          <ChapterCard
            title="Plastic soep"
            subTitle="Lorem ipsum dolar sit amet"
            image={plasticsoep}
          />
          <ChapterCard
            title="Plastic soep"
            subTitle="Lorem ipsum dolar sit amet"
            image={plasticsoep}
          />
          <ChapterCard
            title="Plastic soep"
            subTitle="Lorem ipsum dolar sit amet"
            image={plasticsoep}
          />
        </div>
      </Layout>
    </>
  );
}

export default App;
