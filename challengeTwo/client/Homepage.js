import React, { useState } from 'react';
import axios from 'axios';
import { addAllCharacters } from '../redux/actions';
import { connect } from 'react-redux';

const Homepage = props => {
    // Initially want to call the SWAPI API to generate items for drop down menu
    const [componentDidMount, setMounted] = useState(false);

    // React Hook to simulate componentDidMount React life cycle method
    if (!componentDidMount) {
        const getPost = async () => {
            try {
              const response = await axios.get('https://swapi.co/api/people');
        
              const stwarsChtrs = response.data;
              
              if (stwarsChtrs === undefined) {
                throw new Error("no response from GET request");
              };

              setPostState(postData);
              setFave(postData.isFavorited);
            } catch (error) {
              // add default behavior here
            }
          };

    }

    // store characters from API GET request int redux state



    const mapStateToProps = state => {
        return {
            
        }
    }
    
    const mapDispatchToProps = {
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Homepage);