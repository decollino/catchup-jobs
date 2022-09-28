import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { signout } from './actions/userActions';
import AboutYouCareerScreen from './screens/AboutYouCareerScreen';
import AboutYouLanguageScreen from './screens/AboutYouLanguageScreen';
import AboutYouPi from './screens/AboutYouPiScreen';
import VacancyScreen from './screens/VacancyScreen';
import EducationScreen from './screens/EducationScreen';
import JobExperienceScreen from './screens/JobExperienceScreen';
import RegisterScreen from './screens/RegisterScreen';
import SigninScreen from './screens/SigninScreen';
import SkillScreen from './screens/SkillScreen';
import VacancyDetailScreen from './screens/VacancyDetailScreen';

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              catchup jobs
            </Link>
          </div>
          <div>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/signin" element={<SigninScreen />}></Route>
            <Route path="/register" element={<RegisterScreen />}></Route>
            <Route path="/aboutyoupi" element={<AboutYouPi />}></Route>
            <Route
              path="/aboutyoucareer"
              element={<AboutYouCareerScreen />}
            ></Route>
            <Route
              path="/aboutyoulanguage"
              element={<AboutYouLanguageScreen />}
            ></Route>
            <Route
              path="/jobexperience"
              element={<JobExperienceScreen />}
            ></Route>
            <Route path="/education" element={<EducationScreen />}></Route>
            <Route path="/skills" element={<SkillScreen />}></Route>

            <Route
              path="/vacancy/:id"
              element={<VacancyDetailScreen />}
              exact
            ></Route>

            <Route path="/" element={<VacancyScreen />} exact></Route>
          </Routes>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </Router>
  );
}

export default App;
