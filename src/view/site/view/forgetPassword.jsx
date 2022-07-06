import { useForm, Controller } from "react-hook-form";
import { useSnackbar } from 'notistack';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


import { Link, useHistory } from 'react-router-dom';
import { pages } from "links/pages";

import { getUserByEmail } from '../service';

const schema = yup.object({
    email: yup.string().required("Email cannot be blank").email(),
});

const ForgotPassword = () => {

    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const { enqueueSnackbar } = useSnackbar();
    const history = useHistory();


    const onSubmitHandler = async (fdata) => {
        await getUserByEmail(fdata).then(({ flag, data }) => {
            if (flag == true) {
                enqueueSnackbar("Email send success", {
                    variant: 'success',
                });
                history.push({
                    pathname: pages.VERIFY_TOKEN,
                    state: {
                        id: data.id,
                        email: data.email
                    }
                });
            } else {
                enqueueSnackbar(data.message, {
                    variant: 'error',
                });
            }
        });
    }

    return (

        <div className="ui center aligned grid">
            <div style={{ maxWidth: '450px', width: '100%' }}>
                <h2 className="ui teal header" style={{ marginTop: '100px' }}>
                    <i className="ui sign-in icon"></i>
                    <div className="content">
                        Forgot password?
                    </div>
                </h2>
                <form className="ui medium form" onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className="ui stacked segment">
                        <div className="field">
                            <label>Email</label>
                            <Controller
                                name="email"
                                control={control}
                                render={({ field, fieldState }) => {
                                    return (
                                        <>
                                            <div className="ui left icon input">
                                                <i className="user icon"></i>
                                                <input {...field} placeholder="E-mail address" />
                                            </div>
                                            <span className="ui red left">{fieldState.error?.message}</span>
                                        </>
                                    )
                                }}
                            />
                        </div>
                        <div>
                            <button style={{ margin: '10px 0' }} type="submit" className="ui fluid large button primary">
                                Submit
                            </button>
                        </div>
                        <div>
                            <div>
                                Remembered password?&nbsp;
                                <Link
                                    to={pages.LOGIN}
                                >
                                    Login Here
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default ForgotPassword;