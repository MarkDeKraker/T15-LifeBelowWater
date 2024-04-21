import Layout from "./components/Layout";
import splash from "./assets/istockphoto-1193095410-612x612.jpg";

export default function SplashPage() {

  return (
      <Layout>
      <div id={"Desktop1"}
           className="grid grid-cols-12 h-screen relative bg-gradient-to-b from-teal-300 to-sky-800 shadow-2xl">
          <div
              id={"Title"}
              className="col-start-2 col-end-11 top-[20px] absolute text-center text-white text-6xl font-semibold font-['Roboto'] italic">
              TITEL OVER PROBLEEM OCEAAN
          </div>
          <img id={"SplashImage"}
               className="col-start-2 col-end-11 w-screen h-72 top-[170px] absolute rounded-xl"
               src={splash} alt="Lesson splash image"/>
          <div className="col-start-3">
              <button id={"OverviewButton"} className="w-50 h-15 px-11 py-5 bottom-[20px] absolute bg-white rounded-3xl justify-center items-center inline-flex
              text-center text-black text-lg font-semibold font-['Roboto']">
                  TERUG NAAR ALLE LESSEN
              </button>
          </div>
          <div className="col-start-8">
              <button id={"StartButton"} className="w-50 h-15 px-11 py-5 bottom-[20px] absolute bg-white rounded-3xl justify-center items-center inline-flex
              text-center text-black text-lg font-semibold font-['Roboto']">
                  START LES
              </button>
          </div>

          {/*<div*/}
          {/*    className="OverviewButton w-72 h-20 px-11 py-5 left-[405px] top-[930px] absolute bg-white rounded-3xl justify-center items-center inline-flex">*/}
          {/*    <div*/}
          {/*        className="TerugNaarAlleLessen w-52 h-8 text-center text-black text-xl font-semibold font-['Roboto']">*/}
          {/*    </div>*/}
          {/*</div>*/}
          {/*<div className="Sidebar w-48 h-96 left-0 top-0 absolute bg-sky-500"/>*/}
      </div>
      </Layout>
  );
}
