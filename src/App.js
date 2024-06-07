import './App.css';
import Plx from 'react-plx';

function App() {
  return (
    <div className="App">
       <Plx
        parallaxData = {[
        {
          start: 0,
          end: 700,
          easing:"ease-in",
          properties: [
            {
              startValue: 1,
              endValue: 1.6,
              property: "scale",
            }
          ]
        }
      ]}
      style={{
        position:'fixed',
        left:0,
        top:0,
        width:'100%',
        zIndex:100
      }}
      >
       <img
        src="bg.png"
        // src="bg1.jpg"

        style={{width:'100%'}}
        alt="foreground"
       />
        
       </Plx>
       <Plx
        parallaxData = {[
        {
          start: 0,
          end: 800,
          
          properties: [
            {
              startValue: 1,
              endValue: 1.18,
              property: "scale",
            }
          ]
        }
      ]}
      style={{
        position:'fixed',
        left:0,
        top:0,
        width:'100%',
        
      }}
      >
        <img
        // src="background.jpg"
        src='bg3.png'
        style={{width:'100%'}}
        alt="background"
       />
       </Plx>
       <Plx
        parallaxData = {[
        {
          start: 0,
          end: 400,
          
          properties: [
            {
              startValue: 1,
              endValue: 0,
              property: "opacity",
            }
          ]
        }
      ]}
      style={{
        position:'fixed',
        left:0,
        top:'26vw',
        width:'100%',
       
      }}
      >
      {/* <img
          style={{
            width: "30vw"
          }}
          src="/text-img.webp"
          alt="Goonies"
        /> */}
       </Plx>
       <div
        style={{
          position: "fixed",
          lefft: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          height: "400vh",
          width: "100%"
        }}
      >
        <div
          style={{
            background: "#000",
            height: "100%"
          }}
        ></div>
        </div>
    </div>
  );
}

export default App;
