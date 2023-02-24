import { Helmet } from "react-helmet"

export default () => {
    return (
        <div>
            <Helmet><title>{`Terms of Use | Referendum 2.0`}</title></Helmet>
            <h2 style={{ textAlign: 'center' }}><span style={{ color: 'windowtext' }}>Rule</span></h2>
            <p>&nbsp;</p>
            <p style={{ textAlign: 'justify' }}><span style={{ color: 'black' }}>Posted idea, issue and agenda displays 24 hours for review; amendment and dissentment.</span></p>
            <p style={{ textAlign: 'justify' }}><span style={{ color: 'black' }}>Posted idea, issue, agenda, amendment and dissentment, assuming that, as it is public property, it displays another 24 hours for voting.</span></p>
            <p style={{ textAlign: 'justify' }}><span style={{ color: 'black' }}>Contributions can be seen in the user profile.</span></p>
            <p style={{ textAlign: 'justify' }}><span style={{ color: 'black' }}>The rule of majority more than 50% vote for posted idea, issue, agenda, amendment and dissentment qualifies&nbsp;for mandate.</span></p>
            <p style={{ textAlign: 'justify' }}><span style={{ color: 'black' }}>&nbsp;A mandate can be called for a referendum after 100 days of the result.</span></p>
            <p style={{ textAlign: 'justify' }}><span style={{ color: 'black' }}><i>*This is a part of the Terms of Service.</i></span></p>
            <p>&nbsp;</p>
        </div>)
}
