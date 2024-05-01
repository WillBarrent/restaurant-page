import "../style.css";

import LoadImage from "../functionality/LoadImage";

import Menu from './images/menu/menu.jpg';

const MenuPageContent = `
    <h2 class="menu-header">Menu</h2>
      <div class="menu">
        <div class="menu-item">
            <div class="menu-title">Caprese Salad</div>
            <div class="menu-info">Al dente spaghetti pasta tossed with crispy pancetta, creamy egg sauce, Parmesan cheese, and cracked black pepper, creating a rich and satisfying classic Roman dish.</div>
        </div>
        <div class="menu-item">
            <div class="menu-title">Spaghetti Carbonara</div>
            <div class="menu-info">Fresh mozzarella cheese, ripe tomatoes, and fragrant basil leaves drizzled with extra virgin olive oil and balsamic glaze, served on a bed of mixed greens.</div>
        </div>
        <div class="menu-item">
            <div class="menu-title">Margherita Pizza</div>
            <div class="menu-info">A traditional Neapolitan-style pizza topped with San Marzano tomato sauce, creamy mozzarella cheese, fresh basil leaves, and a drizzle of extra virgin olive oil, baked to perfection in a wood-fired oven.</div>
        </div>
        <div class="menu-item">
            <div class="menu-title">Chicken Parmigiana</div>
            <div class="menu-info">Tender breaded chicken breast smothered in marinara sauce, topped with melted mozzarella and Parmesan cheese, served with a side of spaghetti marinara.</div>
        </div>
        <div class="menu-item">
            <div class="menu-title">Risotto ai Funghi</div>
            <div class="menu-info">Creamy Arborio rice simmered with mixed wild mushrooms, shallots, garlic, white wine, and Parmesan cheese, finished with a touch of truffle oil and fresh parsley.</div>
        </div>
        <div class="menu-item">
            <div class="menu-title">Tiramisu</div>
            <div class="menu-info">Layers of espresso-soaked ladyfingers, creamy mascarpone cheese, and a hint of cocoa powder, creating a heavenly Italian dessert that's both indulgent and irresistible.</div>
        </div>
        <div class="menu-image"><img src="${LoadImage(Menu).src}" alt="" class="menu-img"></div>
      </div>
`;

function MenuPageHTML() {
    return [MenuPageContent, 'menuaaaa']
}

export {MenuPageHTML};