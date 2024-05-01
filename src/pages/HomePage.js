import "../style.css";

import LoadImage from "../functionality/LoadImage";

import First from "./images/home/first.jpg";
import Second from "./images/home/second.jpg";
import Third from "./images/home/third.jpg";

const HomePageContent = `
      <div class="images">
        <figure class="image">
          <div class="blur-img blur-img-1">
            <img src="${LoadImage(First).src}" alt="" class="img" />
          </div>
          <figcaption class="caption caption-1">Beauty</figcaption>
        </figure>
        <figure class="image">
          <div class="main-img">
            <img src="${LoadImage(Second).src}" alt="" class="img" />
          </div>
          <figcaption class="caption main-caption">Natural</figcaption>
        </figure>
        <figure class="image">
          <div class="blur-img blur-img-2">
            <img src="${LoadImage(Third).src}" alt="" class="img" />
          </div>
          <figcaption class="caption caption-2">Tasty</figcaption>
        </figure>
      </div>
`;

function HomePageHTML() {
    return HomePageContent;
}

export { HomePageHTML };