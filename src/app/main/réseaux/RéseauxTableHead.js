import React from 'react';
import {
    TableHead,
    TableSortLabel,
    TableCell,
    TableRow,
    Tooltip,
    withStyles
} from '@material-ui/core';

const rows = [
    {
        id            : 'nom_res',
        align         : 'left',
        disablePadding: false,
        label         : 'Nom',
        sort          : true
    },
    {
        id            : 'adresse_res',
        align         : 'left',
        disablePadding: false,
        label         : 'Adresse',
        sort          : true
    },
    {
        id            : 'SIREN',
        align         : 'left',
        disablePadding: false,
        label         : 'SIREN',
        sort          : true
    },
    {
        id            : 'contact_tel',
        align         : 'left',
        disablePadding: false,
        label         : 'Téléphone',
        sort          : true
    },
    {
        id            : 'contact_email',
        align         : 'left',
        disablePadding: false,
        label         : 'Email',
        sort          : true
    },
    {
        id            : 'actions',
        align         : 'left',
        disablePadding: false,
        label         : 'Actions',
        sort          : true
    }
];

const styles = theme => ({
    actionsButtonWrapper: {
        background: theme.palette.background.paper
    }
});

class RéseauxTableHead extends React.Component {
    state = {
        selectedProductsMenu: null
    };
    
    openSelectedProductsMenu = (event) => {
        this.setState({selectedProductsMenu: event.currentTarget});
    };

    closeSelectedProductsMenu = () => {
        this.setState({selectedProductsMenu: null});
    };

    render()
    {
        const {order, orderBy} = this.props;

        return (
            <TableHead>
                <TableRow className="h-64">
                    {rows.map(row => {
                        return (
                            <TableCell
                                key={row.id}
                                align={row.align}
                                padding={row.disablePadding ? 'none' : 'default'}
                                sortDirection={orderBy === row.id ? order : false}
                            >
                                {row.sort && (
                                    <Tooltip
                                        title="Sort"
                                        placement={row.align === "right" ? 'bottom-end' : 'bottom-start'}
                                        enterDelay={300}
                                    >
                                        <TableSortLabel
                                            active={orderBy === row.id}
                                            direction={order}
                                        >
                                            {row.label}
                                        </TableSortLabel>
                                    </Tooltip>
                                )}
                            </TableCell>
                        );
                    }, this)}
                </TableRow>
            </TableHead>
        );
    }
}

export default withStyles(styles, {withTheme: true})(RéseauxTableHead);
