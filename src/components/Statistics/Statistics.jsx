import PropTypes from 'prop-types'

export const Statistics = ({good, neutral, bad, positivePercentage, total}) => {
    
    return (
        <>
        <ul>
                <li>
                    <p>Good: { good }</p>
                </li>
                <li>
                    <p>Neutral: { neutral }</p>
                </li>
                <li>
                    <p>Bad: { bad }</p>
                </li>
                <li>
                    <p>Total: { total }</p>
                </li>
                {!isNaN(positivePercentage) && (
                    <li>
                    <p>Positive: { positivePercentage }%</p>
                    </li>
                )}
            </ul>
            </>
    )

}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}