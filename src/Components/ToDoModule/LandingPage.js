import ChartsParent from '../ChartsModule/ChartsParent';
import './LandingPage.scss';
import ToDoCard from './ToDoCard';

const LandingPage = () => {
    return ( 
        <div className="app-landing-page">
            <div className="header-background-wrapper"></div>
            <div className="charts-wrapper">
                <ChartsParent></ChartsParent>
            </div>
            <div className="todo-card-wrapper">
                <ToDoCard></ToDoCard>
            </div>
        </div>
     );
}
 
export default LandingPage;