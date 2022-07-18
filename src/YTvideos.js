import React from 'react'

export default function YTvideos() {
  return (
    <div>
        <h2> Check out some of my past shows on YouTube ! </h2> 
		
        <div class="responsiveWidth">
            <iframe width="40%" height="350px" src="https://www.youtube.com/embed/dLVMG1nzN54" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
          <br />
        <div class="responsiveWidth">
            <iframe width="40%" height="350px" src="https://www.youtube.com/embed/vFe5fx0UeSw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>	
          <br />
        <div class="responsiveWidth">
            <iframe width="40%" height="350px" src="https://www.youtube.com/embed/hu_TtXxSyU4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
          <br />
    </div>
  )
}
