import React from 'react';
import {
    Button,
    Icon, 
    Typography
} from '@material-ui/core';
import {FuseAnimate} from '@fuse';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const AnimationsHeader = () => {

    return (
        <div className="flex flex-1 w-full items-center justify-between">

            <div className="flex items-center">

                <FuseAnimate animation="transition.expandIn" delay={300}>
                    <Icon className="text-32 mr-0 sm:mr-12">shopping_basket</Icon>
                </FuseAnimate>
                
                <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                    <Typography className="hidden sm:flex" variant="h6">Animations</Typography>
                </FuseAnimate>

            </div>
            <FuseAnimate animation="transition.slideRightIn" delay={300}>

                <Button component={Link} to="/mapanimation" color="secondary" variant="contained">
                    <span className="hidden sm:flex">Voir les animations en map</span>
                </Button>

            </FuseAnimate>
            
            <FuseAnimate animation="transition.slideRightIn" delay={300}>

                <Button component={Link} to="/form/animation" className="whitespace-no-wrap" variant="contained">
                    <span className="hidden sm:flex">Ajouter Animation</span>
                </Button>

            </FuseAnimate>
            

        </div>
    );
};

const mapStateToProps = ({fuse}) =>
{
    return {
        mainTheme : fuse.settings.mainTheme
    }
}

export default connect(mapStateToProps)(AnimationsHeader);
