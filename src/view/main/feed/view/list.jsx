// @mui material components
import { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Table, Pagination } from "layouts/Table";
import { contactPage, contactTitle } from "links";

// Custom styles for the Tables
import { columns, modelList, modelListEmpty, modelListInit } from "../model/list";
import { getContactList } from "../service";
import { useDispatch, useSelector } from "react-redux";
import { setContactList } from "redux/action/contactAction";
// import { setN } from "redux/action/";
// import { pagesTitle } from "links";

function ContactList() {
    const history = useHistory();
    const { contacts, pg } = useSelector(state => state.contactList);
    const dispatch = useDispatch();
    const handleView = (id, name) => {

        history.push({
            pathname: contactPage.CONTACT_VIEW,
            search: `?id=${id}&name=${name.replace(" ", "-").toLowerCase()}`,
            state: {
                id,
                name
            }
        });
    }
    const handleClick = (e, current) => {
        if (pg.current != current) {
            loadData(current);
        }
    }

    async function loadData(page) {
        await getContactList({ page, pagesize: 10 }).then((res) => {
            if (res.flag) {
                if (Object.keys(res.data).length) {
                    dispatch(setContactList({
                        contacts: res.data,
                        pg: {
                            size: parseInt(res.headers["x-pagination-per-page"]),
                            pages: parseInt(res.headers["x-pagination-page-count"]),
                            current: parseInt(res.headers["x-pagination-current-page"]),
                            total: parseInt(res.headers["x-pagination-total-count"]),
                        }
                    }));
                } else {
                    dispatch(setContactList({
                        contacts: [],
                        pg: {
                            size: 0,
                            pages: 0,
                            current: 0,
                            total: 0,
                        }
                    }));
                }
            }

        });
    }
    useEffect(() => {
        loadData(1);
    }, []);

    const TableRender = () => {
        if (contacts === null) {
            return (
                <div>
                    <Table columns={columns} rows={modelListEmpty()} />
                </div>
            );
        } else if (contacts.length == 0) {
            return (
                <div>
                    <Table columns={columns} rows={modelListEmpty()} />
                </div>
            );
        } else {
            return (
                <div>
                    <Table columns={columns} rows={modelList(contacts, handleView)} />
                    <Pagination pagination={pg} onClick={handleClick} padding={1} />
                </div>
            );
        }
    }

    return (
        <div className="ui container padded">
            <div className="ui stacked segment">
                <div className="ui items">
                    <div className="item" >
                        <div className="content">
                            <p className="ui teal header">{contactTitle.CONTACT_LIST}</p>
                            <Link className="ui right floated button primary" to={contactPage.CONTACT_ADD}>
                                <span className="">Add Contact</span>
                            </Link>
                            <div className="description" style={{ marginTop: '30px' }}>
                                <TableRender />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactList;
