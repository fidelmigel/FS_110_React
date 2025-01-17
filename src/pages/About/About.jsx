import { NavLink, Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sequi quasi eaque dolore ex adipisci totam beatae similique, veniam obcaecati
        dolorem officiis consequatur maiores, maxime natus impedit cum exercitationem corrupti?
      </p>
      <li>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consequatur corrupti earum temporibus, explicabo labore cupiditate deserunt!
        Eveniet sit, nihil nesciunt corrupti natus ratione esse soluta voluptates consectetur, labore quod?
      </li>
      <button>Add</button>
      <nav>
        <NavLink to='aim'>Aim</NavLink>
        <NavLink to='company'>Company</NavLink>
        <NavLink to='team'>Team</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};
export default About;
