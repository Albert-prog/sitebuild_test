import './src/App.css';
import DehazeIcon from '@material-ui/icons/Dehaze';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { styled } from '@material-ui/core/styles';


const MyIcon = styled(DehazeIcon)({
  height: 48,
  width: 48,
  padding: 15,
});


const MyPlayIcon = styled(PlayCircleOutlineIcon)({
  height: 120,
  width: 120,
  padding: 15,
});


function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>MEDIA APPEREANCES</h1>
      </header>
      <nav>
      <MyIcon className="menuBtn"/>
      </nav>
      <section className="contentBox">
        <div className="boxItem">
          <div className="itemOne">
            <h3>Science</h3> 
            <h3>Magazine</h3>
            <h3>11.12.2018</h3>
            <p>Want to master your professional and social networks to maximize recognizion? Wanto learn hot ot build productive teams that create lasting impact? In this new book, the Formula: the universal laws of Succes, Albert-László Barabási translates almost a decade of scholarly research on the science of success into a lively...</p>
          </div>
          <a href="/">READ MORE</a>
        </div>
        <div className="boxItem">
          <div className="itemTwo">
            <h3>Nature</h3>
            <h3>27.11.2018</h3>
            <p>Originally printed by the National Academies of Science as a poster to accompany the publication of a research paper on hor deseases connect, it was subsequently reproduced by the New York Times and included in the Mapping It Out: Atlas of Contemporary Cartographies exhibition at the Serpentine Gallery in London...</p>
          </div>
          <a href="/">READ MORE</a>
        </div>
        <div className="boxItem">
          <div className="itemThree">
            <MyPlayIcon className="playBtn"/>
            <h3>Lecture at NYU</h3>
          </div>
          <a href="/">WATCH</a>
          </div>
      </section>
    </div>
  );
}

export default App;
