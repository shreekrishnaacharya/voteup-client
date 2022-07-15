
// Soft UI Dashboard React example components
import { useForm, useFieldArray } from "react-hook-form";
import { useSnackbar } from 'notistack';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ContactForm from "./_form";
import { useHistory, Link } from "react-router-dom";
import { contactPage, contactTitle } from "links"

// Service
import { addContact } from "../service"

const schema = yup.object({
    image: yup.mixed(),
    name: yup.string().required("Name cannot be blank").max(100),
    fk_loc_id: yup.string().required("Location cannot be blank"),
    meta: yup.array()
        .min(1, "Create at least contact")
        .of(yup.object().shape({
            type: yup.string("Type must be string").required("Type is required"),
            contact: yup.number("Phone must be number").required("Phone is required")
        })),
});

function ContactAdd() {
    const { handleSubmit, control, getValues, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const { enqueueSnackbar } = useSnackbar();
    const history = useHistory();
    async function onSubmitHandler(fdata) {
        console.log(fdata);

        await addContact(fdata).then(({ flag, data }) => {
            if (flag) {
                enqueueSnackbar("Contact add success", {
                    variant: 'success',
                });
                const { _id, name } = data;
                // history.push({
                //     pathname: contactPage.CONTACT_VIEW,
                //     search: `?id=${_id}&name=${name.replace(" ", "-").toLowerCase()}`,
                //     state: {
                //         id: data.id,
                //         name: data.name
                //     }
                // });
            }
        })
    };
    return (
        <div className="ui container padded">
            <div className="ui stacked segment">
                <div className="ui items">
                    <div className="item" >
                        <div className="content">
                            <p className="ui teal header">{contactTitle.CONTACT_ADD}</p>
                            <a className="ui right floated button info" onClick={history.goBack}>
                                <span>Back</span>
                            </a>
                            <div className="description" style={{ marginTop: '30px' }}>
                                <ContactForm
                                    onSubmitHandler={onSubmitHandler}
                                    handleSubmit={handleSubmit}
                                    control={control}
                                    errors={errors}
                                    getValues={getValues}
                                    setValue={setValue}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactAdd;
