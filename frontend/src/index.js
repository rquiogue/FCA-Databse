import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Loader from './components/Loader';
import DataBasicScreen from './screens/DataScreens/DataBasicScreen';
import UtilitiesBasicScreen from './screens/UtilityScreens/UtilitiesBasicScreen';
import SpreadsheetInputScreen from './screens/DataScreens/SpreadsheetInputScreen';
import IndividualInputScreen from './screens/DataScreens/IndividualInputScreen';
import ModifyIndividualScreen from './screens/DataScreens/ModifyIndividualScreen';
import ModifyFamScreen from './screens/DataScreens/ModifyFamScreen';
import StatisticsScreen from './screens/UtilityScreens/StatisticsScreen';
import RandMemberGenScreen from './screens/UtilityScreens/RandMemberGenScreen';
import ElectionEligibilityScreen from './screens/UtilityScreens/ElectionEligibilityScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/data' element={<DataBasicScreen />} />
      <Route path='/data/spreadsheet' element={<SpreadsheetInputScreen />} />
      <Route path='/data/individual' element={<IndividualInputScreen />} />
      <Route path='/data/modify/individual' element={<ModifyIndividualScreen />} />
      <Route path='/data/modify/fam' element={<ModifyFamScreen />} />
      <Route path='/utilities' element={<UtilitiesBasicScreen />} />
      <Route path='/utilities/statistics/:filter' element={<StatisticsScreen />} />
      <Route path='/utilities/random-member-generator' element={<RandMemberGenScreen />} />
      <Route path='/utilities/eligibility' element={<ElectionEligibilityScreen />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
