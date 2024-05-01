import "../style.css";

import LoadImage from "../functionality/LoadImage";

import About from './images/about/about.jpg';

const AboutPageContent = `
    <div class="about-image">
        <img src="${LoadImage(About).src}" alt="" class="img" />
      </div>
      <div class="about-info">
        <h2 class="about-title">About Us</h2>
        <div class="about-intro">
          <p>
            Welcome to La-Restaurant, where every dish is a celebration of
            flavor and freshness! At La-Restaurant, we believe that dining isn't
            just about the food—it's an experience. Nestled in the heart of
            Rome/Italy, our restaurant combines culinary artistry with a warm
            and inviting ambiance to create unforgettable moments for our
            guests. Our menu is a journey through the vibrant tapestry of global
            cuisine, curated by our talented chefs who are passionate about
            sourcing the finest ingredients. Whether you're craving classic
            comfort food or daring to explore new culinary horizons, we have
            something to tantalize every palate.
          </p>
          <p>
            From sizzling starters to decadent desserts, each dish is crafted
            with care and attention to detail. We pride ourselves on offering a
            diverse selection that caters to all dietary preferences, including
            vegetarian, vegan, and gluten-free options. Every bite is a symphony
            of flavors, designed to delight and inspire. But dining at
            La-Restaurant is more than just a meal—it's an experience to be
            savored. Our attentive staff is dedicated to providing exceptional
            service, ensuring that every visit exceeds your expectations.
            Whether you're celebrating a special occasion or simply enjoying a
            night out with friends, we're here to make your dining experience
            unforgettable. Join us at La-Restaurant and discover why we're more
            than just a place to eat—we're a destination for culinary excellence
            and unforgettable memories. Reservations are recommended, so book
            your table today and prepare to embark on a culinary journey like no
            other. Indulge your senses. Experience La-Restaurant. Bon appétit!
          </p>
        </div>
      </div>
`;

function AboutPageHTML() {
    return [AboutPageContent, 'about']
}

export {AboutPageHTML};