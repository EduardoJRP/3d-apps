import {Job} from './Functions';

export const Components = () => {
    return(
        <div className="Components">
            <h1> Components, JSX, props Examples</h1>
            <Job salary={90000} position="Senior SDE" company="Amazon"/>
            <Job salary={12000} position="Junior SDE" company="Google"/>
            <Job salary={10000} position="Project Manager" company="Netflix"/>
        </div>
    );
};