import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

let styles = {
    margin: 'auto',
    width: '500px'
  };
  
function App() {
  return (
<div style={styles}>
<Carousel>
<div>
<img src="https://raw.githubusercontent.com/publishct/carousel/master/src/images/image1.webp" alt="A team meeting with a group of co-workers who are smiling and have their arms all placed on the table to encourage team spirit" />
<p className="legend">Photos: CC BY 3.0 US Mapbox Uncharted ERG</p>
</div>
<div>
<img src="https://raw.githubusercontent.com/publishct/carousel/master/src/images/image2.webp" alt="Four coworkers stand in a line facing the camera and they all are looking at the camera"/>
<p className="legend">Photos: CC BY 3.0 US Mapbox Uncharted ERG</p>
</div>
<div>
<img src="https://raw.githubusercontent.com/publishct/carousel/master/src/images/image3.webp" alt="A close-up shot of a team fist bump with 3 peoples' hands touching. One person has arm tattoos. Another wears a few rings."/>
<p className="legend">Photos: CC BY 3.0 US Mapbox Uncharted ERG</p>
</div>
<div>
<img src="https://raw.githubusercontent.com/publishct/carousel/master/src/images/image4.webp" alt="A board room meeting with a diverse group of people and seemingly inclusive of many opinions"/>
<p className="legend">Photos: CC BY 3.0 US Mapbox Uncharted ERG</p>
</div>
</Carousel>
</div>
  );
}

export default App;
