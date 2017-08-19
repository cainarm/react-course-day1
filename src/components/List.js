import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../components/ListItem';

class List extends React.Component {
    render(){
        const { data, remove, update } = this.props;

        return (
            <div>
            {
               data.map((item, i) => {
                    return( 
                        <ListItem key={i} data={item} remove={remove} update={update}/>
                    );
               }) 
            }
            </div>
        );
    }
}

List.propTypes = {
    data: PropTypes.array.isRequired,
    remove: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired
};

export default List;