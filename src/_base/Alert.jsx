import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Snackbar from '@mui/material/Snackbar';
import { Alert as Altt } from '@mui/material';

import { alertService, AlertType } from '../_services';

const propTypes = {
    id: PropTypes.string,
};

const defaultProps = {
    id: 'default-alert',
    fade: true
};
function Alert({ id, fade }) {
    // console.log("I am alert");
    const history = useHistory();
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        // subscribe to new alert notifications
        const subscription = alertService.onAlert(id)
            .subscribe(alert => {
                // clear alerts when an empty alert is received
                if (!alert.message) {
                    setAlerts(alerts => {
                        // filter out alerts without 'keepAfterRouteChange' flag
                        const filteredAlerts = alerts.filter(x => x.keepAfterRouteChange);

                        // remove 'keepAfterRouteChange' flag on the rest
                        filteredAlerts.forEach(x => delete x.keepAfterRouteChange);
                        return filteredAlerts;
                    });
                } else {
                    // add alert to array
                    setAlerts(alerts => ([...alerts, alert]));

                    // auto close alert if required
                    if (alert.autoClose) {
                        setTimeout(() => removeAlert(alert), 3000);
                    }
                }
            });

        // clear alerts on location change
        const historyUnlisten = history.listen(() => {
            alertService.clear(id);
        });

        // clean up function that runs when the component unmounts
        return () => {
            // unsubscribe & unlisten to avoid memory leaks
            subscription.unsubscribe();
            historyUnlisten();
        };
    }, []);

    function removeAlert(alert) {
        if (fade) {
            // fade out alert
            const alertWithFade = { ...alert, fade: true };
            setAlerts(alerts => alerts.map(x => x === alert ? alertWithFade : x));

            // remove alert after faded out
            setTimeout(() => {
                setAlerts(alerts => alerts.filter(x => x !== alertWithFade));
            }, 250);
        } else {
            // remove alert
            setAlerts(alerts => alerts.filter(x => x !== alert));
        }
    }

    function cssClasses(alert) {
        if (!alert) return;

        const classes = ['alert', 'alert-dismissable'];

        const alertTypeClass = {
            [AlertType.Success]: 'alert alert-success',
            [AlertType.Error]: 'alert alert-danger',
            [AlertType.Info]: 'alert alert-info',
            [AlertType.Warning]: 'alert alert-warning'
        }

        classes.push(alertTypeClass[alert.type]);

        if (alert.fade) {
            classes.push('fade');
        }

        return classes.join(' ');
    }

    const alertType = {
        [AlertType.Success]: 'success',
        [AlertType.Error]: 'danger',
        [AlertType.Info]: 'info',
        [AlertType.Warning]: 'warning'
    }

    if (!alerts.length) return null;

    return (
        <div className="container">
            <div className="m-3">
                {alerts.map((alert, index) =>
                    // <AlertE key={index} onClose={removeAlert(alert)} severity="success" sx={{ width: '100%' }}>
                    //     {alert.message}
                    // </AlertE>
                    <Altt key={index} sx={{ fontSize: 14, margin: "10px 5px" }} variant="filled" severity={alertType[alert.type]}>{alert.message}</Altt>
                    // <div key={index} className={cssClasses(alert)}>
                    //     <a className="close" onClick={() => removeAlert(alert)}>&times;</a>
                    //     <span dangerouslySetInnerHTML={{ __html: alert.message }}></span>
                    // </div>
                )}
            </div>
        </div>
    );
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
export default Alert;