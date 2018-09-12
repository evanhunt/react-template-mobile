import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import { privateRoutes } from 'routers';

import ErrorBoundary from '@components/ErrorBoundary';
import RouteWithSubRoutes from '@components/RouteWithSubRoutes';

const PrimaryLayout = () => (
    <Fragment>
        <ErrorBoundary>
            <Switch>
                {privateRoutes.map((route, index) => (
                    <RouteWithSubRoutes key={index.toString()} {...route} />
                ))}
            </Switch>
        </ErrorBoundary>
    </Fragment>
);
export default PrimaryLayout;
