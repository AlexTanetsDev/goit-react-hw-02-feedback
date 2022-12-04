import PropTypes, { func } from 'prop-types';
import { arrayOf } from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    
    return (
        <>
            <ul>
                {options.map((option) => {
                    return (
                           <li key={option}>
                            <button type='button' id={option} onClick={onLeaveFeedback}>{ option}</button>
                </li>
                   )
               })}
            
            </ul>
    </>
)

}

FeedbackOptions.propTypes = {
    options: arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: func,
}