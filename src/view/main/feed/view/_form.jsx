import { useState, useEffect } from "react";
import { Controller, useFieldArray } from "react-hook-form";

import PropTypes from "prop-types";
import { getLocationList } from "../service";

const ContactForm = ({ control, handleSubmit, onSubmitHandler, isNewContact, errors, getValues, setValue }) => {
    // const [selectedImage, setSelectedImage] = useState("");
    const [locations, setLoc] = useState([]);
    let cnt = 0, errorList = [];
    for (const key in errors) {
        errorList[cnt] = (
            <span key={key} >{errors[key].message}</span>
        );
        cnt++;
    }
    // const imageChange = (e, field) => {
    //     if (e.target.files && e.target.files.length > 0) {
    //         setSelectedImage(e.target.files[0]);
    //     }
    // };

    // const removeSelectedImage = () => {
    //     setSelectedImage();
    // };

    const { fields, append, remove } = useFieldArray({
        control,
        name: "meta"
    });
    const loadLocation = async () => {
        const lic = await getLocationList()
            .then((res) => {
                if (res.flag) {
                    setLoc(res.data);
                    setValue(`fk_loc_id`, res.data[0].id);
                }
                return [];
            });
    }
    useEffect(() => {
        loadLocation();
    }, []);
    useEffect(() => {
        if (isNewContact) {
            append({ type: "Mobile", contact: '' });
        }
    }, []);

    return (
        <div className="ui ">
            <form className="ui form large" onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="ui stacked segment">
                    <div className="ui grid">
                        <div className="five wide column field">
                            <label>Image</label>
                            <Controller
                                name="image"
                                control={control}
                                render={({ field, fieldState }) => (
                                    <>
                                        <input
                                            style={{ padding: '0.26em 1em' }}
                                            type="file"
                                            onChange={(e) => {
                                                // imageChange(e);
                                                field.onChange(e.target.files);
                                            }}
                                            accept="image/*"
                                        />
                                        <span>{fieldState.error?.message}</span>
                                    </>
                                )}
                            />
                        </div>
                        <div className="five wide column field">
                            <label>Name</label>
                            <Controller
                                name="name"
                                control={control}
                                defaultValue=""
                                render={({ field, fieldState }) => {
                                    return (
                                        <>
                                            <div className="ui input">
                                                <input {...field} placeholder="Enter name" />
                                            </div>
                                            <span>{fieldState.error?.message}</span>
                                        </>
                                    )
                                }}
                            />
                        </div>
                        <div className="five wide column field">
                            <label>Location</label>
                            <Controller
                                name="fk_loc_id"
                                control={control}
                                render={({ field, fieldState }) => {
                                    return (
                                        <>
                                            <select
                                                className="ui search dropdown"
                                                {...field}
                                                onChange={(_e, v) => {
                                                    if (v) {
                                                        setValue(`fk_loc_id`, v.id);
                                                    } else {
                                                        setValue(`fk_loc_id`, null);
                                                    }
                                                }}>
                                                {locations.map(e => {
                                                    return <option value={e.id}>{e.name}</option>
                                                })}
                                            </select>
                                            <span>{fieldState.error?.message}</span>
                                        </>
                                    )
                                }}
                            />
                        </div>
                    </div>
                    {
                        fields.map((cont, index) => (
                            <div key={'keymunti' + index} className="ui grid">
                                <div className="five wide column field">
                                    <label>Type</label>
                                    <Controller
                                        name={`meta.${index}.type`}
                                        control={control}
                                        render={({ field, fieldState }) => {
                                            return (
                                                <>
                                                    <select
                                                        className="ui fluid dropdown"
                                                        {...field}

                                                    >
                                                        <option value={"Mobile"}>Mobile</option>
                                                        <option value={"Home"}>Home</option>
                                                        <option value={"Work"}>Work</option>
                                                    </select>
                                                    <span>{fieldState.error?.message}</span>
                                                </>
                                            )
                                        }}
                                    />
                                </div>
                                <div className="five wide column field">
                                    <label>Phone</label>
                                    <Controller
                                        name={`meta.${index}.contact`}
                                        control={control}
                                        defaultValue=''
                                        render={({ field, fieldState }) => {
                                            return (
                                                <>
                                                    <input {...field} placeholder='Enter contact number' />
                                                    <span>{fieldState.error?.message}</span>
                                                </>
                                            )
                                        }}
                                    />
                                </div>
                                <div className="five wide column field">
                                    <label>&nbsp;</label>
                                    <button className="ui negative button" onClick={() => remove(index)}>
                                        <i className="trash icon"></i>
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button type='button' className="ui green button" style={{ width: "100%" }} onClick={() => append({ type: "Mobile", number: '' })}>
                    <i className="ui address book icon"></i> Add Contact
                </button>
                <button className={isNewContact ? "ui primary button" : "ui secondary button"} style={{ float: "right", marginTop: '20px' }} type="submit">
                    {isNewContact ? "Save" : "Update"}
                </button>
            </form >
        </div >
    );
}

ContactForm.defaultProps = {
    isNewContact: true,
};

ContactForm.propTypes = {
    isNewContact: PropTypes.bool,
    control: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    onSubmitHandler: PropTypes.func.isRequired,
};

export default ContactForm;