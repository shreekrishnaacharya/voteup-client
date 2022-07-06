import { useEffect } from "react";
// import { useHistory } from "react-router-dom";

import { useHistory, useLocation } from "react-router-dom";
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from "react-redux";
import { setContactDetail } from "redux/action/contactAction";
import { contactPage } from "links/pages";
// Service
import { deleteAlert } from "_services";
import { getContactDetail, getContactDelete } from "../service";
import { Temp } from '../model/list';
import contactImg from 'assets/images/contact.png';

function ContactView() {
    const { enqueueSnackbar } = useSnackbar();
    const history = useHistory();
    const location = useLocation();
    const contactData = useSelector(state => state.contactDetail);
    const dispatch = useDispatch();
    const params = new URLSearchParams(location.search);
    const id = params.get('id'), name = params.get('name');
    const { Status, Contacts } = Temp;

    async function loadData() {
        await getContactDetail(id)
            .then((res) => {
                if (res.flag) {
                    dispatch(setContactDetail(res.data));
                }
            });
    }

    useEffect(() => {
        if (id !== undefined) {
            loadData();
        }
        return () => dispatch(setContactDetail({}));
    }, [id]);

    const updateContact = () => {
        history.push({
            pathname: contactPage.CONTACT_UPDATE,
            search: `?id=${id}&name=${name.replace(" ", "-").toLowerCase()}`,
            state: {
                id,
                name
            }
        });
    }

    const deleteContact = () => {
        const deleteHandle = async () => {
            return getContactDelete(id);
        }
        deleteAlert({ title: "Are you sure?" }, deleteHandle)
            .then((res) => {
                if (res === null) {
                    return;
                }
                if (res.flag) {
                    enqueueSnackbar("Contact delete success", {
                        variant: 'success',
                    });
                    history.push({
                        pathname: contactPage.CONTACT_LIST,
                    });
                } else {
                    enqueueSnackbar("Contact delete failed", {
                        variant: 'error',
                    });
                }
            });

    }
    const preLoad = <div className="content">
        <button className="ui negative disabled button" style={{ float: "right" }}>
            <i className="trash icon"></i>Delete
        </button>
        <button className="ui secondary disabled button" style={{ float: "right" }}>
            <i className="edit icon"></i>Update
        </button>
        <div className="ui fluid placeholder">
            <div className="image header">
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="paragraph">
                <div className="medium line"></div>
                <div className="short line"></div>
                <div className="medium line"></div>
                <div className="short line"></div>
            </div>
        </div>
    </div>
    return (
        <>
            <div className="ui container padded">
                <div className="ui stacked segment">
                    <div className="ui items">
                        <div className="item" >
                            {Object.keys(contactData).length == 0 ? (
                                preLoad
                            ) : (
                                <>
                                    <div className="ui small image">
                                        <img
                                            src={contactData.image}
                                            onError={(e) => {
                                                e.target.src = contactImg;
                                            }}
                                            style={{ margin: "auto", width: "100%", height: "auto" }}
                                        />
                                    </div>
                                    <div className="content">
                                        <p className="header">{contactData.name}</p>
                                        <button className="ui negative button" style={{ float: "right" }} onClick={deleteContact}>
                                            <i className="trash icon"></i>Delete
                                        </button>
                                        <button className="ui secondary button" style={{ float: "right" }} onClick={updateContact}>
                                            <i className="edit icon"></i>Update
                                        </button>

                                        {/* <div class="meta">
                                            <span class="price">$1200</span>
                                            <span class="stay">1 Month</span>
                                        </div> */}

                                        <div className="meta">
                                            <table cellPadding={'5px'} style={{ textAlign: 'left' }}>
                                                <tbody>
                                                    <tr>
                                                        <th>Location</th>
                                                        <td>{contactData.fkLocation.name}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Create At</th>
                                                        <td>{contactData.create_at}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Status</th>
                                                        <td><Status status={contactData.status} /></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <Contacts contacts={contactData.meta} />
                                        </div>
                                    </div>
                                </>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactView;
