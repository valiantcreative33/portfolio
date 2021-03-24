import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;
    
    // useEffect is taking two arguments here. The first, is a callback function that is assigning the DOM node to the current category's name state. 
    // The second argument directs the hook to re-render the component on changes to the state (the category) - i.e. the Nav component will re-render if currentCategory changes.
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid='link' href="https://valiantcreative33.github.io/portfolio/">
          <span role="img" aria-label="camera">👨‍💻</span>Portfolio
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {
            categories.map((category) => (
              <li className={`mx-1 ${currentCategory.name === category.name && !contactSelected && `navActive`}`} key={category.name}>
                <span onClick={() => { 
                    setCurrentCategory(category)
                    setContactSelected(false);
                    }}
                >
                 {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}
export default Nav;