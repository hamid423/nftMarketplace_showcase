
import { Download, Features, SectionWrapper } from "./components";
import assets from './assets'
import styles from "./styles/Global";
const App = () => {
  return (
    <>
      
      <SectionWrapper
        title="NFT Marketplace UI using React Native"
        description="You can test the app on Expo store"

        showBtn
        mockupImg={assets.mockup01}
        banner="banner"
      />
      <SectionWrapper
        title="smart UI marketplace"
        description="modern NFT Marketplace iOS and Android"
        mockupImg={assets.mockup02}
        reverse
      />
      <Features/>
      <Download/>
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with ❤️ by {" "} 
          <span className="bold">Hamid Jemaaoui</span>
        </p>

      </div>
    </>
  );
}

export default App;
