import React, { useEffect } from 'react';
import TechItem from './TechItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techActions';


const TechListModal = ({ getTechs, tech: { techs, loading } }) => {

    // No longer needed because we are not using them in component level state but app level state
    // and passing them in as props
    // const [techs, setTechs] = useState([]);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, []);

    // No longer needed because we are calling techs from actions
    //const getTechs = async () => {
    //     setLoading(true);
    //     const res = await fetch('/techs');
    //     const data = await res.json();

    //     setTechs(data);
    //     setLoading(false);
    // }

    return (
        <div id='tech-list-modal' className='modal'>
            <div className='modal-content'>
                <h4>Technician list</h4>
                <ul className='collection'>
                    {!loading && 
                        techs !== null && techs.map(tech => (
                        <TechItem tech={tech} key={tech.id} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

TechListModal.propTypes = {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    tech: state.tech
})

export default connect(mapStateToProps, { getTechs })(TechListModal);