import React from "react";

const Quote = (props) => {
  return (
    <div>
      <div class="index-intro intro">
        <div class="container">
          <h4>{props.headline}</h4>
          <p>{props.quote}</p>
          <ul class="social">
            <li><a href="https://www.linkedin.com/in/jennrgingras/" target="_blank"><i class="icon-linkedin"></i></a></li>
            <li><a href="https://www.instagram.com/jennrgin/" target="_blank"><i class="icon-instagram-1"></i></a></li>
            <li><a href="https://github.com/JenniferGingras" target="_blank"><i class="icon-github-circled"></i></a></li>
            <li><a href="https://www.pinterest.com/jennrgin/" target="_blank"><i class="icon-pinterest"></i></a></li>
            <li><a href="https://www.behance.net/JenniferGingras" target="_blank"><i class="icon-behance"></i></a></li>
          </ul>
        </div>
      </div>
    </div>


  )
}

export default Quote;